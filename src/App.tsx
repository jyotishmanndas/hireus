import HeroContent from "./components/hero-content"
import Navbar from "./components/navbar"

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[url('/hreoPage.webp')] bg-cover bg-center">
      <Navbar />
      <HeroContent />
    </div>
  )
}

export default App
