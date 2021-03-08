import ArticleList from "../components/Articles"
//import {server} from '../config'
import MovieList from "../components/Movies"

export default function Home({articles, movies}) {
  return (
    <div>
      <h1>Hello from next index.js</h1>
      <ul>
        <MovieList movies={movies}/>
      </ul>
      <ul>
        <ArticleList articles={articles} />
      </ul>

    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()
  const movieRes = await fetch(`https://swapi.dev/api/films? limit=6`)
  const movies = await movieRes.json()
  return {
    props: {
      articles,
      movies
    }
  }
}
// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/`)   
//   const articles = await res.json()
//   return {
//     props: {
//       articles
//     }
//   }
// }