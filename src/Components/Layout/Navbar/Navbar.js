import classes from './Navbar.module.css'
import logo from './logo.png'
const Navbar = (props) => {
    return (
        <div className={classes.navbar_}>
            <div className={classes.logo}><img src={logo} alt=""/>
                <h4>Engage91</h4>
            </div>
            <div className={classes.links}>
                <div style={{"paddingTop":"0.5em "}}><a href='/'>Use Cases</a></div>
                <div style={{"paddingTop":"0.5em "}} ><a href='/'>Resources</a></div>
                <div><button className={classes.login_btn}>Sign Up/Login</button></div>
            </div>
        </div>
    )
}
export default Navbar;