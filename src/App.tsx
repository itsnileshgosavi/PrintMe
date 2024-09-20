import Footer from "./components/Footer"
import Header from "./components/Header"
import { lazy } from "react"
const Home = lazy(() => import("./pages/Home"))
import { Suspense } from "react"
import Loading from "./components/Loading"

function App() {

  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
