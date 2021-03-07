import ArticleList from "../components/Articles"
//import {server} from '../config'


export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
      <h1>Hello from next index.js</h1>
      
      <ul>
        <ArticleList articles={articles} />
      </ul>

    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()
  return {
    props: {
      articles
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