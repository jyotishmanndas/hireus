import HeroComponent from "./components/hero-component"
import Navbar from "./components/navbar"

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[url('/hreoPage.webp')] bg-cover bg-center">
      <Navbar />
      <HeroComponent />
    </div>
  )
}

export default App
