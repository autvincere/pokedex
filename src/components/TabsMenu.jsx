import React from 'react'
import { withRouter, Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchValue } from '../actions/poke'
import { Tabs, Tab, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
     root: {
          marginBottom: '10px'
     },
}));

const TabsMenu = () => {
     const classes = useStyles();
     let history = useHistory();
     const dispatch = useDispatch();

     const handleClick = () => {
          // console.log('hice click')
          dispatch(searchValue([]))
     }

     return (
          <Paper className={classes.root}>

                <Tabs
                     value={
                         history.location.pathname !== "/"
                           ? history.location.pathname
                           : false
                       }
               >
                    {/* {console.log(history.location.pathname)} */}

                    <Tab
                         onClick={() => handleClick()}
                         value={'/pokemons'}
                         label="Pokemons"
                         component={Link}
                         to={'/pokemons'}
                    />
                    <Tab
                         onClick={() => handleClick()}
                         value={'/favorites'}
                         label="Favorites"
                         component={Link}
                         to={'/favorites'}
                    />
                    <Tab
                         value={'/search'}
                         label="Search"
                         component={Link}
                         to={'/search'}
                    />
               </Tabs>
          </Paper>
     )
}
export default withRouter(TabsMenu)
