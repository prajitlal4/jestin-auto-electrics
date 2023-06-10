import '../styles/globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
