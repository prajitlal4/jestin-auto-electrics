import Feature from "./components/Feature"
import Hero from "./components/Hero"
import Review from "./components/Reviews"
import CTA from "./components/CTA"

export default function PreRender() {
  return (
    <div>
      <Hero />
      <Feature />
      <Review />
      <CTA />
    </div>
  )
}