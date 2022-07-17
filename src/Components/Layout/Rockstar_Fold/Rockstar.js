import RockstarCard from './Card/RockstarCard'
import { CARD_DATA_1, CARD_DATA_2 } from './CardData'
import classes from './Rockstar.module.css'

const Rockstar = (props) => {
    return (
        <div style={{ textAlign: "center", marginBottom: "5em" }}>
            <div className={classes.rockstar}>
                <div className={classes.upper_div}>
                    {
                        CARD_DATA_1.map((e, i) => <RockstarCard
                            key={i}
                            icon={e.svg}
                            text={e.text}
                        />)
                    }
                </div>
                <div className={classes.lower_div}>
                    {
                        CARD_DATA_2.map((e, i) => <RockstarCard
                            key={i}
                            icon={e.svg}
                            text={e.text}
                        />)
                    }
                </div>
            </div>
            <button className={classes.login_btn}>Sign Up Now</button>
            <h4 style={{ "fontWeight": "500" }}>Try eng91, It’s a free tool</h4>
        </div>
    )
}
export default Rockstar
