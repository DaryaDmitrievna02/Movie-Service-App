import { useEffect, useState } from "react";
import { Res } from "../../data/options";
import { getSearch } from "../../data/getSearch";
import { MovieCard } from "../../components/movieCard/movieCard";

export const Search = () => {
  const [data, setData] = useState<Res | null>();
  const [search, setSearch] = useState<string>("");
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching");
        const data = await getSearch(search);
        setData(data);
      } catch (err) {
        setData(null);
      }
    };

    if (search) fetchData();
  }, [search]);

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="flex gap-2 flex-col  mt-5 p-5 w-[60%] max-md:w-[80%] max-sm:w-[95%]">
          <div>
            <h2 className="text-white text-2xl px-2">Search</h2>
          </div>
          <div className="flex gap-4">
            <input
              className="border-2 border-solid w-full text-black"
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => setSearch(input)}>SEACRH</button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 justify-center bg-[#111111] relative ">
        {data && (
          <>
            {data?.results.map((movie) => {
              if (movie.poster_path) return <MovieCard movie={movie} />;
            })}
          </>
        )}

        {!data && !search && <p className="text-white ">NotFound</p>}
      </div>
    </>
  );
};
