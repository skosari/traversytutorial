import ArticleItem from "../components/ArticleItem"
import articleStyles from '../styles/Article.module.css'
const ArticleList = ({articles}) => {
  return (
    <>
    {articles.map(x=>(
      <li className={articleStyles.lineItem} key={x.id}>
        <ArticleItem article={x} />
      </li>
      ))
    }
    </>
  )
}

export default ArticleList