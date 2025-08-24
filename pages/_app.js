// _app.js is the root component for our Next.JS application
// it is the component that wraps all other components
// it is the component that is used to initialize the application
// it is the component that is used to wrap the application
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
