// Model per a cada sèrie de la llista de les populars
export class TvShow {
  constructor(
    public id: number,
    public name: string,
    public overview: string,
    public poster_path: string | null,
    public backdrop_path: string | null,
    public vote_average: number,
    public first_air_date: string,
    public genre_ids: number[],
  ) {}

  //Construim la URL del póster a partir del path que ens retorna la API
  get posterUrl(): string {
    return this.poster_path
      ? `https://image.tmdb.org/t/p/w500${this.poster_path}`
      : `${import.meta.env.BASE_URL}no-poster.svg`;
  }

  //Arrodonim la nota a un decimal per a una millor estètica
  get rating(): string {
    return this.vote_average.toFixed(1);
  }

  get year(): string {
    return this.first_air_date?.split("-")[0] ?? "-";
  }

  // Mètode per construir una instància a partir de la resposta que ens torna la API
  static fromApi(data: Record<string, unknown>): TvShow {
    return new TvShow(
      data.id as number,
      data.name as string,
      data.overview as string,
      data.poster_path as string | null,
      data.backdrop_path as string | null,
      data.vote_average as number,
      data.first_air_date as string,
      data.genre_ids as number[],
    );
  }
}
