// Model per els detalls d'una serie
export class TvShowDetail {
  constructor(
    public id: number,
    public name: string,
    public overview: string,
    public poster_path: string | null,
    public backdrop_path: string | null,
    public vote_average: number,
    public first_air_date: string,
    public number_of_seasons: number,
    public number_of_episodes: number,
    public genres: { id: number; name: string }[],
    public status: string,
    public tagline: string,
  ) {}

  get posterUrl(): string {
    return this.poster_path
      ? `https://image.tmdb.org/t/p/w500${this.poster_path}`
      : "/no-poster.png";
  }

  get backdropUrl(): string {
    return this.backdrop_path
      ? `https://image.tmdb.org/t/p/original${this.backdrop_path}`
      : "/no-backdrop.png";
  }

  get rating(): string {
    return this.vote_average.toFixed(1);
  }

  get year(): string {
    return this.first_air_date?.split("-")[0] ?? "-";
  }

  static fromApi(data: Record<string, unknown>): TvShowDetail {
    return new TvShowDetail(
      data.id as number,
      data.name as string,
      data.overview as string,
      data.poster_path as string | null,
      data.backdrop_path as string | null,
      data.vote_average as number,
      data.first_air_date as string,
      data.number_of_seasons as number,
      data.number_of_episodes as number,
      data.genres as { id: number; name: string }[],
      data.status as string,
      data.tagline as string,
    );
  }
}
