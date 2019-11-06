import React from 'react'
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import map from './img/map.PNG'
import portrait from './img/bilder1.png'
const useStyles = makeStyles({

container:{
    minHeight: '100vh',
    Width: '100vw',
    backgroundColor: 'grey',
    maxWidth: '100%'
},
paper1:{
    padding: 10,
    paddingTop: 30,
    width: 500,
    height: 750,
    position: 'absolute',
    left: 200,
    top: 100

},
paper2:{
    width: 400,
    height: 600,
    position: 'absolute',
    right: 200,
    top: 180,
    padding: 10

},
titel:{
    marginBottom: 20
},
map:{
    padding: 10
},
underinfo:{
    marginTop: 90,
    width: 240
},

portrait:{
    height: '90%',
    width: 'auto',

},
text:{
  marginTop: 10,
  width: 250

}

    
    })

function Contact(props) {
    const classes = useStyles()
    return (
        <Fade right>
            <div className={classes.container}>
            <Paper className={classes.paper1}>
                <Grid container
                alignItems='center'
                justify='center'
                direction='column'>

                    <Typography variant='h3' className={classes.titel}>
                        Wo wir sind
                    </Typography>
                    <Typography variant='caption'>
                        Exempelstrasse 5
                    </Typography>
                    <Typography variant='caption'>
                        8000 Zürich
                    </Typography>
                    <Typography variant='caption'>
                        044 / 400 40 40
                    </Typography>
                    <Typography variant='caption'>
                        info@loremipsum.de
                    </Typography>
                    <img src={map} className={classes.map} alt='map'/>
                    <Typography variant='caption' className={classes.underinfo}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </Typography>

                </Grid>


            </Paper>
            <Paper className={classes.paper2}>
                <Grid container
                    alignItems='center'
                    justify='center'
                    direction='column'>
                <img src={portrait} className={classes.portrait} alt='bild1'/>
                <Typography variant='h6'>Ueli Müller, Geschäftsführer</Typography>
                <Typography variant='subtitle2' className={classes.text}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                     no sea takimata sanctus est Lorem ipsum dolor sit amet.</Typography></Grid>

            </Paper>
                

            </div>
      </Fade>
    )
}


export default  Contact

