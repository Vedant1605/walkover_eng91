import classes from './Features.module.css'
const FEATURES = [
    {
        title: 'Create Eng Circle',
        list: ['Create a circle', 'Share the Circle', 'Add friends to your circle', 'Tweets and you will get automatic likes from your circle'],
        class: 'top_left'
    },
    {
        title: 'Schedule Threads',
        list: ['Get Inspiration,industry wise', 'Share N number of Threads', 'Share threads in draft', 'Publish them whenever you want.'],
        class: 'top_right'
    },
    {
        title: 'Schedule Threads',
        list: ['Get Inspiration,industry wise', 'Share N number of Threads', 'Share threads in draft', 'Publish them whenever you want.'],
        class: 'bottom_left'
    },
    {
        title: 'Schedule Threads',
        list: ['Get Inspiration,industry wise', 'Share N number of Threads', 'Share threads in draft', 'Publish them whenever you want.'],
        class: 'bottom_right'
    }
]

const Features = (props) => {
    return (

        <div style={{ "textAlign": "center" }}>
            <h1 style={{ "fontSize": "3em" }}>Features</h1>
            <div className={classes.features}>
                <div className={classes.sub_feature_div}>
                    <div className={classes.card} >
                        <h3>{FEATURES[0].title}</h3>
                        <ul>
                            {
                                FEATURES[0].list.map(e => <li key={e.size}>-{e}</li>)
                            }
                        </ul>
                    </div>
                    <div className={classes.card} >
                        <h3>{FEATURES[1].title}</h3>
                        <ul>
                            {
                                FEATURES[1].list.map(e => <li key={e.size}>-{e}</li>)
                            }
                        </ul>
                    </div>
                </div>
                <div className={classes.sub_feature_div}>
                    <div className={classes.card} >
                        <h3>{FEATURES[2].title}</h3>
                        <ul>
                            {
                                FEATURES[2].list.map(e => <li key={e.size}>-{e}</li>)
                            }
                        </ul>
                    </div>
                    <div className={classes.card} >
                        <h3>{FEATURES[3].title}</h3>
                        <ul>
                            {
                                FEATURES[3].list.map(e => <li key={e.size}>-{e}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <button className={classes.login_btn}>Sign Up Now</button>
            <h4 style={{"fontWeight":"500"}}>Try eng91, It’s a free tool</h4>
        </div>

    )
}
export default Features