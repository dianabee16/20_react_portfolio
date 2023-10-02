import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Footer from "./components/Footer"
import Root from "./components/Root"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Resume from "./components/Resume"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/resume" element={<Resume/>}/>



      </Route>

    )
  )

  return (
    <>
    <RouterProvider router={router}/>
    <Footer/>


    </>
  )
}

export default App
