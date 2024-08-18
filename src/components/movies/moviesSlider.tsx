import { useEffect, useState, useRef } from "react";
import { getCategory } from "../../data/getCategory";
import { Res } from "../../data/options";
import { MovieCard } from "../movieCard/movieCard";

function FilmSlider({
  category,
  category_title,
  setStatus,
  status,
}: {
  category: string;
  category_title: string;
  status: "loading" | "NotFound" | "Success";
  setStatus: React.Dispatch<
    React.SetStateAction<"loading" | "NotFound" | "Success">
  >;
}) {
  const [response, setResponse] = useState<Res | null>();

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {

    const abortController = new AbortController();

    const fetchMovies = async () => {
      try {
        const data = await getCategory(category);
        setResponse(data);
        setStatus("Success");
      } catch (error) {
        setStatus("NotFound");
        setResponse(null);
      }
    };

    fetchMovies();

    ()=>{
      abortController.abort();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, status]);

  const MovieList = () => {
    return (
      <>
        <div ref={sliderRef} className="flex gap-2 mb-5 mt-5  transition-all ">
          {response?.results.map((movie) => {
            if (movie.poster_path)
              return <MovieCard movie={movie} key={movie.id}></MovieCard>;
          })}
        </div>
      </>
    );
  };

  const Slider = () => {
    return (
      <div className="relative">
        <button
          className="z-10 w-[45px] border-none  absolute left-0 top-1/2 -translate-y-1/2 text-lg text-yellow-50 bg-zinc-600/45 h-full flex items-center justify-center "
          onClick={handleReturntBtn}
        >
          ⮜
        </button>
        {MovieList()}
        <button
          className="z-10 w-[45px] border-none absolute right-0 top-1/2 -translate-y-1/2 text-lg text-yellow-50 bg-zinc-600/45 h-full flex items-center justify-center"
          onClick={handleNextBtn}
        >
          ⮞
        </button>
      </div>
    );
  };

  const handleNextBtn = () => {
    const maxWidth = Math.floor(innerWidth / 208);

    if (position - maxWidth * 208 > -((response?.results?.length ?? 0) * 208))
      setPosition((prev) => {
        const newPos = prev - maxWidth * 208;
        if (sliderRef.current) {
          sliderRef.current.style.transform = `translateX(${newPos}px)`;
        }
        return newPos;
      });
  };

  const handleReturntBtn = () => {
    const maxWidth = Math.floor(innerWidth / 208);

    if (position + maxWidth * 208 <= 27)
      setPosition((prev) => {
        const newPos = prev + maxWidth * 208;

        if (sliderRef.current) {
          sliderRef.current.style.transform = `translateX(${newPos}px)`;
        }
        return newPos;
      });
  };

  return (
    <>
      {response && (
        <>
          <div className="pt-2 pl-0 pr-0">
            <h2 className="text-white font-bold text-xl mb-5 px-5">
              {category_title}
            </h2>
            {Slider()}
          </div>
        </>
      )}
    </>
  );
}

export default FilmSlider;
