import { motion } from "framer-motion";
import { Activity, Clock, Crosshair, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Team Performance Recaps",
      description:
        "Final standings, form guides, biggest wins and key stats all in one place.",
      icon: <Crosshair />,
    },
    {
      title: "Player Spotlights",
      description:
        "Top scorers, assist leaders, breakout stars. Dive into player-by-player performance metrics.",
      icon: <Users />,
    },
    {
      title: "Match Timeline Highlights",
      description:
        "Visual timelines of each team’s iconic matches see how every game unfolded.",
      icon: <Clock />,
    },
    {
      title: "Season Trends & Insights",
      description:
        "Track tactical shifts, injury impacts, and unexpected breakthroughs across the season.",
      icon: <Activity />,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-16 mx-auto px-4 container"
    >
      <h5 className="bg-accent/20 text-[#0f775a] font-semibold px-4 rounded-full w-fit mx-auto text-center py-1 mb-8">
        Features Tailored for the Season Wrap
      </h5>
      <h2 className="font-bold md:text-3xl text-2xl text-dark my-3 text-center mb-8">
        Your Club’s Season. Fully Unpacked.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-soft rounded-lg p-6 mb-6 hover:shadow-medium hover:-translate-y-1 hover:outline outline-accent/20 transition-all duration-300 delay-300"
          >
            <div className="p-2 bg-accent/20 w-fit text-accent rounded-lg">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Features;
