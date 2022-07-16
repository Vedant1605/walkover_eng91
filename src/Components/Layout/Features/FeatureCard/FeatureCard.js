import classes from './FeatureCard.module.css'
const FeatureCard = (props) => {
    return (
        <div className={`${classes.card} ${classes[props.class]}`}>
            <h3>{props.title}</h3>
            <ul>
                {
                    props.list.map(ele =><li>-{ele}</li>)
                }
            </ul>
        </div>
    )
}
export default FeatureCard