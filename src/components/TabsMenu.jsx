import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPage,cleanSelectedPokemon } from '../actions/poke'
import { withRouter, Link } from 'react-router-dom'
import { Tabs, Tab, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
     root: {
        marginBottom: '10px'
     },  
}));

const TabsMenu = () => {
     const classes = useStyles();
     const dispatch = useDispatch();
     const pageLocation = useSelector(state => state.pokemones.setPage);
     // console.log(pageLocation);
     const handleLocation = (event, newAlignment) => {
          dispatch(setPage(newAlignment))
          dispatch(cleanSelectedPokemon())
     };

     // const checkLocation = () => {
     //      const currentLocation = window.location.pathname.split("/")[1];
     //      console.log(currentLocation);
     //      currentLocation === '' ? dispatch(setPage('/')) : dispatch(setPage('/favorites'))
     // }

     useEffect(() => {
          const checkLocation = () => {
               const currentLocation = window.location.pathname.split("/")[1];
               // console.log(currentLocation);
               currentLocation === '' ? dispatch(setPage('/')) : dispatch(setPage('/favorites'))
          }
          checkLocation()
     }, [dispatch])
     
     return (
          <Paper className={classes.root}>
               <Tabs
                    value={pageLocation}
                    onChange={handleLocation}
               >

                    <Tab
                         value={'/'}
                         label="Pokemons"
                         component={Link}
                         to={'/'}
                    />
                    <Tab
                         value={'/favorites'}
                         label="Favorites"
                         component={Link}
                         to={'/favorites'}
                    />
               </Tabs>
          </Paper>
     )
}
export default withRouter(TabsMenu)
