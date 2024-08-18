import { options, Res } from "./options"


export const getSearch = async(search: string): Promise<Res> =>{
const res = await fetch( `https://api.themoviedb.org/3/search/movie?query=${search}` , options)
const data = res.json();
return data;
}