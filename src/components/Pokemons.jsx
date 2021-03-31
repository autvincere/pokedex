import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonsAction } from '../actions/poke'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import DisponibilizadorPokemon from '../components/DisponibilizadorPokemon'
import Pokemon from './Pokemon';


const useStyles = makeStyles((theme) => ({
     root: {
          flexGrow: 1,
     },
}));

const Pokemons = () => {

     const classes = useStyles();
     const pokemones = useSelector( state => state.results)
     const imagesPokemones = useSelector( state => state.favoriteCharacters)

     const dispatch = useDispatch();

     //const pokemones = useSelector(store => store.pokemones.results)
     // const result = imagesPokemones.map(item => item.image)
     // const result = imagesPokemones.filter(item => item.image)
     // console.log( result);

     useEffect(() => {
          const fetchData = () => {
               dispatch(getPokemonsAction())
          }
          fetchData()
     }, [dispatch])


     return (
          <Grid
               className={classes.root}
               container
               spacing={1}
               direction="row"
               justify="space-evenly"
               alignItems="center"
               alignContent="center"
          //   wrap="nowrap"
          >
               {
                    pokemones && pokemones.map(item => (
                         <DisponibilizadorPokemon
                              // key={item.name.length}
                              name={item.name}
                              url={item.url}
                         />
                    ))
               }
               {
                    imagesPokemones && imagesPokemones.map(item => (
                         <Pokemon
                              key={item.name}
                              name={item.name}
                              image={item.image}
                         />
                        
                    ))
               }        
                              
            </Grid>            
                     
               
         
     )       
    
}

export default Pokemons
