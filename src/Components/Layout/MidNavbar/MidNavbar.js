import classes from './MidNavbar.module.css';
const MidNavbar = (props) => {
    return (
        <div className={classes.mid_nav}>
            <a href='/'>FAQ</a>
            <a href='/'>Blogs</a>
            <a href='/'>Use Case</a>
            <a href='/'>Resources</a>
            <a href='/'>Affiliate</a>
        </div>
    )
}
export default MidNavbar 