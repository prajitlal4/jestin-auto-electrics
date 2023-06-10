import Feature from "./components/Feature"
import Hero from "./components/Hero"
import Review from "./components/Reviews"
import Contact from "./components/Contact"

export default function PreRender() {
  return (
    <div>
      <Hero />
      <Feature />
      <Review />
      <Contact />
    </div>
  )
}