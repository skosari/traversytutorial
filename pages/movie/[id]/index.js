import { useRouter } from 'next/router'
import { server } from '../../../config/index'
import Link from 'next/link'
import movieStyles from '../../../styles/Movie.module.css'

const movie = ({movie}) => {
  const router = useRouter()
  const { id } = router.query

  return(
    <>
      <span style={movieStyles.span}><h1>#{id}:{movie.title}</h1></span>
      <p>{movie.description}</p>
      <span>{movie.rating}</span>
      <Link href='/'>Go Back</Link>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`https://swapi.dev/api/films/${context.params.id}/`)
  const movie = await res.json()
  return {
    props: {
      movie
    }
  }
}
export const getStaticPaths = async () => {
  const res = await fetch(`https://swapi.dev/api/films`)
  const movies = await res.json()
  const ids = movies.map((movie) => movie.id)
  const paths = ids.map((id) => ({ params: {id: id.toString()}}))
  return {paths, fallback: false}
}


export default movie