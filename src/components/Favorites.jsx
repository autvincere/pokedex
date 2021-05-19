import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
     searchMode,
} from '../actions/poke'
import uuid from "react-uuid";
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import Pokemon from '../components/Pokemon'
import EmptyPokemon from './EmptyPokemon'

const useStyles = makeStyles((theme) => ({
     root: {
          // flexGrow: 1,
          // overflow: 'hidden',
     },
}));

const Favorites = () => {
     const dispatch = useDispatch();
     const classes = useStyles();
     const favoritesPokemons = useSelector(state => state.pokemones.favoritesPokemons)
     // console.log(Object.keys(favoritesPokemons).length);

     useEffect(() => {
          const fetchData = () => {
               dispatch(searchMode(true))
          }
          fetchData()
     }, [dispatch])

     return (
          <>
               {
                    Object.keys(favoritesPokemons).length === 0
                         ? <EmptyPokemon />
                         : <Grid
                              className={classes.root}
                              container
                              spacing={0}
                              direction="row"
                              justify="space-evenly"
                              alignItems="center"
                              alignContent="center"
                         //   wrap="nowrap"
                         >{
                                   favoritesPokemons.map(item => {
                                        // console.log(item);
                                        item.data = item
                                        // console.log(item.data);
                                        const image = item.data.sprites.other["official-artwork"].front_default
                                        // const {types, weight, height, base_experience, abilities, moves, name, id} = item
                                        // const { types, weight, height, base_experience, abilities, moves, name, id } = item
                                   return (
                                         <Pokemon
                                              key={uuid()}
                                              name={item.name}
                                              image={image}
                                              id={item.id}
                                              data={item.data}
                                              types={item.types}
                                         />
      
                                    )
                               })
                         }
                              </Grid>
                         
                         
               }
               
          </>
     )
}

export default Favorites
