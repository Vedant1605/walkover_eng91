import classes from './RockstarCard.module.css';
const RockstarCard = (props) => (
    <div className={classes.card}>
        <svg width="50" height="50" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M75 39C75 19.125 58.875 3 39 3C19.125 3 3 19.125 3 39C3 58.875 19.125 75 39 75C58.875 75 75 58.875 75 39Z" stroke="black" strokeWidth="5" strokeMiterlimit="10" />
        </svg>

        <h4>{props.text}</h4>
    </div>
)
export default RockstarCard