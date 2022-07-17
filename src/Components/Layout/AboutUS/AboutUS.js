import classes from './AboutUs.module.css'
import Akshat from './Akshat.png'
import Ravi from './Ravi.png'
import twitter from './twitter.png'
const AboutUs = (props) => (
    <div className={classes.about_us}>
        <h1>About Us </h1>
        <div className={classes.text}><p>I am developers who were facing problems while growing on Twitter, therefore, I’ve designed my own solutions to grow on Twitter.
        </p></div>
        <div className={classes.text}><p>If you find anything where you can help us, please <a href='/'>connect us.</a></p></div>
        <div className={classes.guys}>
            <div className={classes.profile}>
                <img className={classes.pic} src={Akshat} alt='' />
                <div className={classes.card_text}>
                    <div><h4>Akshat Chavda</h4> <a href='/'><img src={twitter} alt='' width="25px" /></a> </div>
                    <h5>Full Stack Developer</h5>
                </div>
            </div>
            <div className={classes.profile}>
                <img className={classes.pic} src={Ravi} alt='' />
                <div className={classes.card_text}>
                    <div><h4>Ravi Paliwal</h4> <a href='/'><img src={twitter} alt='' width="25px" /></a> </div>
                    <h5>Start up Advisor</h5>
                </div>
            </div>
        </div>
        <div className={classes.text}><p>Interested in building experiments?<a href='/'> Let’s connect us.</a></p></div>
    </div>
)
export default AboutUs;