import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovie } from "../../data/getMovie";
import { Film, FilmDetails, Res } from "../../data/options";
import { HTTPSMovie } from "../../data/getMovie";
import { Loading } from "../../components/loading/loading";
import { getVideo, HTTPSVideo } from "../../data/getVideo";

export const MoviePage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Film & FilmDetails>();
  const [video, setVideo] = useState<Res>();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      getMovie(id)
        .then((data) => {
          setMovie(data);
        })
        .catch(() => navigate("/PageNotFound"));
    }

    const fetchVideo = async () => {
      try {
        const data = await getVideo(id);
        console.log(data);
        setVideo(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  console.log(HTTPSVideo + video);

  return (
    <>
      {!movie && <Loading></Loading>}

      {movie && (
        <div className="w-full h-full relative flex justify-center ">
          <div
            id="background_backdrop"
            className={` w-full h-full bg-cover bg-center bg-no-repeat absolute`}
            style={{
              backgroundImage: `url("${HTTPSMovie + movie?.backdrop_path}")`,
            }}
          ></div>

          <div className="z-10 bg-neutral-800/80 w-full  p-8 top-[500px] flex gap-x-10 max-sm:flex-wrap">
            <div className=" w-[400px] max-sm:w-[300px]">
              <img
                className="w-full max-sm:h-full"
                src={HTTPSMovie + movie?.poster_path}
              />
            </div>
            <div className="text-white w-full">
              <h2 className="text-white text-3xl">{movie?.original_title}</h2>
              <p className="text-white text-xl">Rate: {movie?.vote_average}</p>
              <p className="mt-3">{movie?.overview}</p>
              <ul className="flex gap-2 mt-3">
                Genres:
                {movie?.genres.map((genre, id, array) => {
                  if (id == array.length - 1) return <li>{genre.name}</li>;
                  return <li>{genre.name}, </li>;
                })}
              </ul>
              <button className="mt-3">Add to list</button>
              <h2 className="text-2xl mt-4">Trailers:</h2>
              <div className="flex flex-wrap gap-3 mt-5">
                {video?.results?.map((video, index) => {
                  if (index < 3)
                    return <iframe className="w-[300px] max-sm:w-full" src={HTTPSVideo + video.key}></iframe>;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
