import classes from './About.module.css'
import follwer from './Followers.png'
import Profile from './Profile_Visit.png'
import Play from './Play.png'
import Gender from './Gender.png'
import Map from './Map.png'
import Device from './Device.png'
const About = (props) => {
    return (
        <div className={`${classes.about} ${classes.text_shadow}`} >
            <div className={classes.texts}>
                <div><h1><span className={classes.primary_color}>Eng91</span> &nbsp; Automates</h1></div>

                <div className={`${classes.mx_1}`}><h1>Real Human</h1></div>
                <div><h1>Enagagement</h1></div>
                <div className={classes.small_texts}>
                    <h6>-Automate <span className={classes.primary_color}>Twitter</span> enagagements</h6>
                    <h6>-<span className={classes.primary_color}>AI-Based</span>  Content curation</h6>
                    <h6>-<span className={classes.primary_color}>Audience</span>-building</h6>
                    <h6>-Easy<span className={classes.primary_color}> Analytics</span></h6>
                </div>
                <div className={classes.play}>
                    <img src={Play} alt=''/>
                    <div>
                    <h5 className={classes.primary_color}>Try Eng91</h5>
                    <h5>It's free</h5>
                    </div>
                </div>
            </div>
            <div className={classes.images}>
                <div className={classes.folower}>
                    <img alt='' src={follwer} />
                </div>
                <div className={classes.profile}>
                    <img alt='' src={Profile} />
                </div>
                <div className={classes.gender}>
                    <img alt='' src={Gender} />
                </div>
                <div className={classes.device}>
                    <img alt='' src={Device} />
                </div>
                <div className={classes.map}>
                    <img alt='' src={Map} />
                </div>
            </div>
        </div>
    )
}
export default About