import type { ArticlesQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Article from 'src/components/Article'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
        // <article key={article.id}>
        //   <header>
        //     <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        //   </header>
        //   <p>{article.body}</p>
        //   <div>Posted at: {article.createdAt}</div>
        // </article>
      ))}
    </>
  )
}
