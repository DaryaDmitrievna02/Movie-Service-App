export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmU2MGJiZDUwMzY0YjVlNzM1NThmMWYzZGU3NmY1YSIsIm5iZiI6MTcyMzExMTMwNi42NTM1NjYsInN1YiI6IjY2YjQ5NjNmODg5N2EzMGQzZjY0ODY4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BzLVnr2-aYdWnnn1GT3xEFQpml4kbdVAa5IorP_j_Jk",
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