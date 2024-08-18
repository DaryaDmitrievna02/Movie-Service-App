import {options} from './options'
import {Res} from './options'



export const getCategory = async  (url:string):Promise<Res>  => {
    const res = await fetch(url,  options)
    const data = res.json();
    return data;
}

interface ICategories{
readonly NowPlaying: string;
readonly Popular: string;
readonly TopRated: string;
readonly Upcoming: string;
}

export const HTTPSCategory = "https://image.tmdb.org/t/p/w400/"

export const CATEGORIES: ICategories ={
    NowPlaying: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
    Popular : 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    TopRated: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    Upcoming: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'

}