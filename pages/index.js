import Feature from "./components/Feature"
import Hero from "./components/Hero"
import Review from "./components/Reviews"
import Contact from "./components/Contact"
import Gallery from "./components/Gallery"
import Head from "next/head"

export default function PreRender() {
  return (
    <div>
      <Head>
        <title>Jestin Auto Electrics Perth</title>
        <meta name="description" content="Perths trusted Auto Electrical Company - for all your installations and repairs." />
        <meta property="og:title" content="Jestin Auto Electrics Perth" />
        <meta
          property="og:description"
          content="Perths trusted Auto Electrical Company - for all your installation and repairs."
        />
      </Head>
      <Hero />
      <Feature />
      <Gallery />
      <Review />
      <Contact />
    </div>
  )
}