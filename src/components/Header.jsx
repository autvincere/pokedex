import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import IconPokebola from './IconPokebola'
// import Grid from '@material-ui/core/Grid'
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import { ReactComponent as iconPokebola } from '../assets/icons/pokebola.svg'

const useStyles = makeStyles((theme) => ({
     root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
          height: "100vh"
     },
     header: {
          width: "100vw",
          backgroundColor: "#F0F0F5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
     },
     icon: {
          fontSize:"15em",
          fill:"#c7c7c7;"
     },
     Typography: {
          marginBottom: "20px",
          color: "#525252"
     }
}));

const Header = () => {
     const classes = useStyles();
     return (
          <header className={classes.header}>
               <IconPokebola className={classes.icon}/>
               <Typography variant="h4" className={classes.Typography}>
                    Que Pokemon Buscas?
           </Typography>
          </header>
     )
}

export default Header