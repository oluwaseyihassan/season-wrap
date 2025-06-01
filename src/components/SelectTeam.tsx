import { useInfiniteQuery } from "@tanstack/react-query";
import { getTeamsByName } from "../api/queries";
import { useRef, useState } from "react";
import type { Pagination, Team } from "../types/types";
import useDebounce from "../hooks/useDebounce";
import { LeagueTeams } from "../data/topTeams";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type TeamsApiResponse = {
  success: boolean;
  data: {
    data: Team[];
    pagination: Pagination;
  };
};

type TeamsData = {
  pageParams: number[];
  pages: TeamsApiResponse[];
};

const SelectTeam = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const lastItemRef = useRef<HTMLDivElement | null>(null);
  const [openLeague, setOpenLeague] = useState<string | null>(null);

  const {
    data: teamsData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<TeamsApiResponse, Error, TeamsData>({
    queryKey: ["teams", debouncedSearchTerm],
    queryFn: ({ pageParam = 1 }) =>
      getTeamsByName(debouncedSearchTerm, pageParam as number, 10, "", ""),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      console.log("Last Page:", lastPage);
      console.log("All Pages:", allPages);
      return lastPage.data.pagination.has_more
        ? allPages.length + 1
        : undefined;
    },
    enabled: searchTerm.length > 0,
    refetchOnWindowFocus: false,
    retry: false,
  });

  console.log(teamsData);

  return (
    <div className="container mx-auto px-4">
      <h1 className="font-bold text-3xl md:text-2xl lg:text-4xl text-center mt-8 mb-4 leading-tight gradient-text">
        Choose Your Team to Begin the 2024/25 Season Wrap
      </h1>
      <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto mb-8">
        Get a full recap of your favorite team's season from stats and standout
        moments to player performances.
      </p>
      <section>
        <h2 className="font-bold text-xl md:text-2xl text-center">Top Teams</h2>
        <div className="shadow-soft p-4 rounded-lg mt-4 space-y-4 my-8">
          {LeagueTeams.map((league, index) => (
            <div key={index}>
              <div
                className="flex items-center gap-4 mb-4 cursor-pointer hover:scale-[101%] transition-all duration-200 rounded-md p-2"
                onClick={() => {
                  if (openLeague === league.leagueName) {
                    setOpenLeague(null);
                  } else {
                    setOpenLeague(league.leagueName);
                  }
                }}
              >
                <div className="flex-1 flex items-center gap-4">
                  <div className="flex">
                    <img
                      src={league.leagueLogo}
                      alt={`${league.leagueName} Logo`}
                      className="h-8 w-8 md:h-10 md:w-10"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mt-4 mb-2">
                    {league.leagueName}
                  </h3>
                </div>
                <ChevronDown
                  className={`${
                    openLeague === league.leagueName ? "rotate-180" : ""
                  } h-6 w-6 cursor-pointer transition-transform duration-500`}
                />
              </div>
              <AnimatePresence>
                {openLeague === league.leagueName && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    exit={{ height: 0 }}
                    className={` grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden p-2`}
                  >
                    {league.teams.map((team) => (
                      <div
                        key={team.id}
                        className="flex items-center gap-4 p-2 shadow-soft cursor-pointer hover:outline outline-accent/20 hover:scale-[102%] transition-all duration-200 rounded-md"
                      >
                        <div className="md:h-10 md:w-10 w-8 h-8">
                          <img src={`${team.image_path}`} alt="" className="" />
                        </div>
                        <div>{team.name}</div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
      <section>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a team..."
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        <div className="max-h-[500px] overflow-y-auto mt-4">
          {teamsData?.pages.map((page, index) => (
            <div key={index}>
              {page.data.data.map((team) => (
                <div
                  key={team.id}
                  className="flex items-center gap-4 p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
                  ref={
                    index === teamsData.pages.length - 1 &&
                    team.id ===
                      teamsData.pages[index].data.data[
                        teamsData.pages[index].data.data.length - 1
                      ].id
                      ? lastItemRef
                      : null
                  }
                >
                  <div className="flex items-center gap-4 mb-4 w-10">
                    <img
                      src={`${team.image_path}`}
                      alt=""
                      className="w-full h-auto"
                    />
                  </div>
                  <div>{team.name}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="mt-4 px-4 py-2 bg-accent text-white rounded-md"
          >
            {isFetchingNextPage ? "Loading more..." : "Load More"}
          </button>
        )}
      </section>
    </div>
  );
};

export default SelectTeam;
