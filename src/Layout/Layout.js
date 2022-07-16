import About from "../Components/Layout/About/About"
import Navbar from "../Components/Layout/Navbar/Navbar"
import classes from "./Layout.module.css"
const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <About />
            <div className={classes.tagline}>
                <h1>
                Get 10x More Views and real human engagement on Twitter Post
                </h1>
            </div>
        </div>
    )
}
export default Layout