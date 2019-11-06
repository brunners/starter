import React from 'react'
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/styles'
import background from './img/background.jpg'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({

    container:{
        backgroundImage: `url(${background})`,
        backgroundColor: 'grey',
        minHeight: '100vh',
        Width: '100vw',
        backgroundSize: 'cover',
        backgroundRepeat:'stretched',
        backgroundPosition: 'center',
        maxWidth: '100%'

    },
    title:{
        color: 'white',
        position: "absolute",
        left: 40,
        top: 140
    },
    intro:{
        color: 'white',
        width: 240,
        position: 'absolute',
        top: 240,
        left: 65,
        right: 200

    },
    intro2:{
        color: 'white',
        width: 240,
        position: 'absolute',
        bottom: 180,
        right: 200

    },
    title2:{
        color: 'white',
        position: 'absolute',
        bottom: 260,
        right: 60
    }



})

function Landing() {
    const classes = useStyles()
    return (
        <Fade left>
            <div className={classes.container}>
                <div>
                    <Typography variant='h2' className={classes.title}>Lorem Ipsum</Typography>
                    <Typography variant='caption'className={classes.intro}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                     no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                     sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Typography>
                     <Typography variant='h3' className={classes.title2}>Lorem ipsum dolor sit amet</Typography>
                     <Typography variant='caption' className={classes.intro2}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Typography>
                </div>
            </div>
        </Fade>
        
    )
}

export default Landing
