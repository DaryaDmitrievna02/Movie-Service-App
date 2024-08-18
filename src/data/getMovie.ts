import {Film, FilmDetails, options } from "./options"


export const getMovie = async(id: string): Promise<Film & FilmDetails> =>{
const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US` , options)
const data = res.json();
return data;
}

export const HTTPSMovie = `https://image.tmdb.org/t/p/original/`