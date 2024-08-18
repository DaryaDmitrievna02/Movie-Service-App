import { useEffect, useState } from "react";
import { CATEGORIES, getCategory } from "../../data/getCategory";
import { Film} from "../../data/options";
import { HTTPSMovie } from "../../data/getMovie";
import { Link } from "react-router-dom";

export const HomeFilm = () => {
  const [response, setResponse] = useState<Film | null>();

  useEffect(() => {
    const abortController = new AbortController();
    const fetchMovies = async () => {
      try {
        const data = await getCategory(CATEGORIES.NowPlaying);
        setResponse(data?.results[0]);
      } catch (error) {
        setResponse(null);
      }
    };
    fetchMovies();

    () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <div className="relative h-[600px] mb-4">
        <div
          id="background_backdrop"
          className={` w-full h-full bg-cover bg-center bg-no-repeat`}
          style={{
            backgroundImage: `url("${HTTPSMovie + response?.backdrop_path}")`,
          }}
        ></div>
        <div className="absolute top-1/2 right-1/2 -translate-y-1/2 px-5 max-md:right-0 max-sm:px-2">
          <h2 className="text-white text-3xl ">{response?.title}</h2>
          <p className="text-white py-5">{response?.overview}</p>
          <div className="flex gap-2 ">
            <button className="p-2">Add to list</button>
           <Link to={`/movie/${response?.id}`}> <button className="p-2">Play</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};
