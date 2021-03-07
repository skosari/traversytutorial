import Link from 'next/link'
import articleStyles from "../styles/Article.module.css"

const ArticleItem = ({article}) => {
  return(
    <>
      <Link href="/article/[id]" as={`/article/${article.id}`}>
        <a>
          <h3 className={articleStyles.h3}>{article.title} &rarr;</h3>
          <p  className={articleStyles.p}>{article.body}</p>
        </a>
      </Link>
    </>
  )
}

export default ArticleItem