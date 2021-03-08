import movieStyles from '../styles/Movie.module.css'

const MovieList = ({movies}) => {
  return (
    <>
      {movies.map(x => {
        <li>x.title</li>
      })}
    </>
  )
}

export default MovieList