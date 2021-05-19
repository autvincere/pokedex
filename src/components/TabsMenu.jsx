import React from 'react'
import { withRouter, Link, useHistory } from 'react-router-dom'
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
