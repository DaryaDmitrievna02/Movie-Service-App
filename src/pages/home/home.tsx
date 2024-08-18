import { useState } from "react";
import FilmSlider from "../../components/movies/moviesSlider";
import { CATEGORIES } from "../../data/getCategory";
import { MovieNotFound } from "../../components/errors/moviesNotFound";
import { Loading } from "../../components/loading/loading";
import { HomeFilm } from "../../components/movies/homeFilm";

function Home() {
  const [status, setStatus] = useState<"loading" | "NotFound" | "Success">(
    "loading"
  );

  console.log(status);
  return (
    <>
      {status == "loading" && <Loading></Loading>}

      <div className="w-full overflow-hidden ">
        <HomeFilm></HomeFilm>
        <FilmSlider
          category={CATEGORIES.NowPlaying}
          category_title="Now Playing"
          setStatus={setStatus}
          status={status}
        ></FilmSlider>
        <FilmSlider
          category={CATEGORIES.TopRated}
          category_title="Top Rated"
          setStatus={setStatus}
          status={status}
        ></FilmSlider>
        <FilmSlider
          category={CATEGORIES.Upcoming}
          category_title="Upcoming"
          setStatus={setStatus}
          status={status}
        ></FilmSlider>
        <FilmSlider
          category={CATEGORIES.Popular}
          category_title="Popular"
          setStatus={setStatus}
          status={status}
        ></FilmSlider>
      </div>

      {status == "NotFound" && <MovieNotFound></MovieNotFound>}
    </>
  );
}

export default Home;
