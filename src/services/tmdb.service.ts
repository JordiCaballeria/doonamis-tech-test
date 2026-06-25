import { TvShow } from "../models/TvShow";
import { TvShowDetail } from "../models/TvShowDetail";

const API_KEY = "cbea04e4165b81454086e0a336a05352";
const BASE_URL = "https://api.themoviedb.org/3";

const buildURL = (
  path: string,
  params: Record<string, string> = {},
): string => {
  const url = new URL(`${BASE_URL}${path}`);
  url.searchParams.set("api_key", API_KEY);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });
  return url.toString();
};

export const tmdbService = {
  getPopularShows: async (page = 1): Promise<TvShow[]> => {
    const url = buildURL("/tv/popular", { page: String(page) });
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error ${response.status} en carregar les sèries`);
    }

    const data = await response.json();
    return data.results.map((item: Record<string, unknown>) =>
      TvShow.fromApi(item),
    );
  },

  getShowById: async (id: number): Promise<TvShowDetail> => {
    const url = buildURL(`/tv/${id}`);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error ${response.status} en carregar la sèrie`);
    }

    const data = await response.json();
    return TvShowDetail.fromApi(data);
  },

  // Funcionalitat extra per a buscar sèries per nom
  searchShows: async (query: string): Promise<TvShow[]> => {
    const url = buildURL('/search/tv', { query });
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error ${response.status} en buscar sèries`);
    }

    const data = await response.json();
    return data.results.map((item: Record<string, unknown>) =>
      TvShow.fromApi(item),
    );
  },
};
