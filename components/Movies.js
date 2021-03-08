import movieStyles from '../styles/Movie.module.css'

const MovieList = ({movies}) => {
  console.log(movies.results)
  return (
    <>
    {movies.results.map(x=><li key={x.episode_id}>{x.title}</li>)}      
    </>
  )
}

export default MovieList