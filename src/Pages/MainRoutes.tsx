import {Route, Routes} from "react-router-dom"
import Result from "./Result"
import Vote from "./Vote"
import Home from "./Home"
import Navbar from "../components/Navbar"

const MainRoutes = () => {
  return (
    <div>
      <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />

    </Routes>
    </div>
  )
}

export default MainRoutes