export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "#KEY",
  },
};

export type Res = {
    results: Film[];
};



export type Film = {
    id: string;
    original_title?: string;
    poster_path?: string;
    backdrop_path?:string;
    title: string;
    overview?:string;
    key?: string;
}


export type FilmDetails = {
homepage?: string;
vote_average?:number;
release_date?:string;
backdrop_path?:string;
poster_path?:string;
overview?:string;
genres: Genres[];

}

type Genres = {
  id?: number;
  name?: string;
}
