import api from "./api";

export const getTeamsById = async (id: string, includes: string, filters: string) => {
    const response = await api.get(`/teams/${id}?include=${includes}&filter=${filters}`);
    return response.data;
};

export const getTeamsByName = async (name: string, page: number, per_page: number, includes: string, filters: string) => {
    const response = await api.get(`/teams/search/${name}?includes=${includes}&filters=${filters}&page=${page}&per_page=${per_page}`);
    return response.data;
};