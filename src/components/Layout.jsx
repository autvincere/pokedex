import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
     root: {

          minHeight: '100vh',
     },
}));

const Layout = ({ children }) => {
     const classes = useStyles();
     return (

          <Grid
               container
               className={classes.root}
               direction="column"
               justify="flex-start"
               alignItems="center"
               alignContent="center"
               wrap="nowrap"
          >
               <Header />
               {children}
               <Footer />

          </Grid>
     )
}

export default Layout
