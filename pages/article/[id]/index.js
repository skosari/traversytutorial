import { useRouter } from 'next/router'
import Link from 'next/link'
import articleStyles from '../../../styles/Article.module.css'

const article = ({article}) => {
  
  
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <span style={{color: 'red'}}>
        This is in a dynamically rendered page called article with a url link of /article/<i><strong>{id}</strong></i>  --still dont know how to pass state or data to these dynamically rendered pages
      </span>
      <h1>{article.title}</h1>
      <p className={articleStyles.pssg}>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

//getServerSideProps only fetches when this pages renders on the CLIENT side so its not a statically generated web page it is SSR Server Side Rendering. //
// export const getServerSideProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//   const article = await res.json()
//   return {
//     props: {
//       article
//     }
//   }
// }

//To achieve SSG Static Site Generated we use the get StaticProps with getStaticPaths
export const getStaticProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  const article = await res.json()
  return {
    props: {
      article
    }
  }
}
//we need getStaticPaths to generate the paths required for getStaticProps to Statically generate our pages on the server side
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const articles = await res.json()
  const ids = articles.map((article) => article.id)
  const paths = ids.map((id) => ({ params: {id: id.toString()}}))
  return {paths, fallback: false}
  //fallback: false will return a page 404 if we attempt to pull an article id that doesn't exist like id = 9999999 - fallback is also used for incremental static site regeneration where a new page that is created will generate server side as a static site and then cached onto the cdn
  //now if we 'npm run build && next export' in our package.json then we will build all available pages based on how many ids are available
}

export default article