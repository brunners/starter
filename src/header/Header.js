import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Typography } from '@material-ui/core';





const useStyles = makeStyles({

icon:{
    margin: 10,
    color: 'white'

},
appbar:{
    backgroundColor: '#404040',
    height: '7vh'
}

})
function Header() {
  const classes = useStyles()

  return (
    
        <AppBar position='absolute' className={classes.appbar}>
          <Grid container
            justify='space-between'
            direction='row'
            alignItems='center'

            >

            
                <Grid item>
                <IconButton href='/kontakt'>
                <AlternateEmailIcon className={classes.icon}/></IconButton>
                </Grid>
                <Typography variant='h5'>Lorem Ipsum</Typography>   
                <Grid item>
                <IconButton href='/'>
                <HomeIcon className={classes.icon}/></IconButton>
                </Grid>  
            </Grid>

        </AppBar>
      

  
  )
}

export default Header