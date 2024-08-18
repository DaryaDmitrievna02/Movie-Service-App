import { HTTPSCategory } from '../../data/getCategory';
import {Film} from '../../data/options'
import { useNavigate } from 'react-router-dom';



interface MovieCardProps {
    movie: Film;
}

export const  MovieCard =  ({ movie} : MovieCardProps) => {
const navigate = useNavigate();

    function redirect(){
      navigate(`/movie/${movie.id}`)
    }

    return (<>
    
    <div className='cursor-pointer transition-all' onClick={redirect} id='movieCard' >
        <div className='w-[200px] h-[300px] rounded-md overflow-hidden '>
            <img className='max-w-full' src={HTTPSCategory+movie.poster_path} alt="" />
        </div>
    </div>
    
    </>)
}

