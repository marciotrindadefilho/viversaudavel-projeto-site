import Header from "@/components/header"
import Hero from "@/components/hero"
import Mission from "@/components/aboutus"
import Values from "@/components/values"
import Ebooks from "@/components/ebooks"
import Blog from "@/components/blog"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Values />
      <Ebooks />
      <Blog />
      <Testimonials />
      <Footer />
    </div>
  )
}
