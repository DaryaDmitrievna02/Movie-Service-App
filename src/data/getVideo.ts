import { options, Res } from "./options";

export const getVideo = async(id: string | undefined): Promise<Res> =>{
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos` , options)
    const data = res.json();
    return data;
    }


    export const HTTPSVideo = `https://www.youtube.com/embed/`