import Footer from "../Components/Footer/Footer"
import About from "../Components/Layout/About/About"
import AboutUs from "../Components/Layout/AboutUS/AboutUS"
import Features from "../Components/Layout/Features/Features"
import MidNavbar from "../Components/Layout/MidNavbar/MidNavbar"
import Navbar from "../Components/Layout/Navbar/Navbar"
import Rockstar from "../Components/Layout/Rockstar_Fold/Rockstar"
import Tagline from "../Components/Layout/UI/Tagline"
// import classes from "./Layout.module.css"
const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <About />
            <Tagline>Get 10x More Views and real human engagement on Twitter Post</Tagline>
            <Features />
            <Tagline>ENG91 Helps You To Go From 0 To A RockStar</Tagline>
            <Rockstar />
            <MidNavbar />
            <AboutUs />
            <Footer />
        </div>
    )
}
export default Layout