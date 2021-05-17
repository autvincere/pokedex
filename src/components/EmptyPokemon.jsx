import React from 'react'
import dontFavorites from '../assets/img/dont_favorites.png'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
     root: {
          marginBottom: '10px'
     },
     container: {
          textAlign: 'Center'
     },
     image: {
          maxWidth: '400px',
          [theme.breakpoints.down('xs')]: {
               maxWidth: '250px',
          }
     },
     bkg: {
          marginTop: '60px',
          borderRadius: '330%',
          backgroundColor: '#e7e7e7',
          height: '310px',
          [theme.breakpoints.down('xs')]: {
               height: 'auto',
          }
     },
     title: {
          fontSize: '2em',
          fontWeight: '400',
          color:'#252525',
     },


}));

const EmptyPokemon = () => {
     const classes = useStyles();

     return (
          <Grid
               container
               spacing={1}
               direction="column"
               justify="center"
               alignItems="center"
               alignContent="center"
               wrap="wrap"

          >
               <Grid
                    item
                    className={classes.container}
               >
                    <div className={classes.bkg}>

                         <img
                              src={dontFavorites}
                              alt={dontFavorites.split('/')[3].split('.')[0]}
                              className={classes.image}
                         />
                    </div>
                    <h3 className={classes.title}>You haven't <b>favorites</b>.<br />
              Go and select your favorites characters.</h3>
               </Grid>




          </Grid>


     )
}

export default EmptyPokemon
