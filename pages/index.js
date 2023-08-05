import Feature from "./components/Feature"
import Hero from "./components/Hero"
import Review from "./components/Reviews"
import Contact from "./components/Contact"
import Gallery from "./components/Gallery"

export default function PreRender() {
  return (
    <div>
      <Hero />
      <Feature />
      <Gallery />
      <Review />
      <Contact />
    </div>
  )
}