import React from 'react'

import { Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import IconPokebola from './IconPokebola'
import SearchPokemons from './SearchPokemons';
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
               <SearchPokemons />    
          </header>
     )
}

export default Header
