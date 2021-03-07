import Meta from '../components/Meta'

const about = () => {
  return(
    <div>
      <Meta title='About' />
      <h1>Welcome to the About page</h1>
      <p>this page shoud be statically generated and served on a cdn network</p>
      <p>Check out the title tag element and also the custom tab title in your browser</p>
    </div>
  )
}

export default about