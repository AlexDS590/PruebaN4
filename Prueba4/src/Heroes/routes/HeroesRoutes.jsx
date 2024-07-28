import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { Footer } from "../../ui/components/Footer"
import { HomePage } from "../pages/HomePage"
import { MarvelHeroesPage } from "../pages/MarvelHeroesPage"
import { DcHeroesPage } from "../pages/DcHeroesPage"
import { Heroecardpage } from "../pages/Heroecardpage"


export const HeroesRoutes = () => {
  return (
    <>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Navigate to="/login"/>}></Route>
          <Route path="home" element={<HomePage/>} ></Route>
          <Route path="marvel" element={<MarvelHeroesPage/>} ></Route>
          <Route path="dc" element={<DcHeroesPage/>}></Route>
          <Route path="heroe/:id" element={<Heroecardpage/>}></Route>
        </Routes>
        <Footer/>
    </>
  )
}
