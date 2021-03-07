import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={description} />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'nextjs meta titles go here',
  keywords: 'nextjs meta keywords go here',
  description: 'nextjs meta description goes in here'
}

export default Meta