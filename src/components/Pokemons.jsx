import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
     getPokemonsAction,
     previousPokemonAction,
     nextPokemonAction
} from '../actions/poke'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeSharpIcon from '@material-ui/icons/NavigateBeforeSharp';

import { makeStyles } from '@material-ui/core/styles';
import {
     // Card,
     // Typography,
     // CardContent,
     // CardActions,
     // CardMedia,
     // CardActionArea,
     Button,
     Grid,
     Box
} from '@material-ui/core'
import Pokemon from './Pokemon';

const useStyles = makeStyles((theme) => ({
     root: {
          flexGrow: 1,
     },
     marginButtonRight: {
          marginRight:'20px'
     },
     Button: {
          width: '120px',
     }

}));

const Pokemons = () => {

     const classes = useStyles();
     const dispatch = useDispatch();

     const pokemonData = useSelector(state => state.pokemones.allPokemons)
     const next = useSelector(state => state.pokemones.next)
     const previous = useSelector(state => state.pokemones.previous)

     const menorAMayor = pokemonData.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
     // console.log(menorAMayor);

     // console.log(menorAMayor);
     //const pokemones = useSelector(store => store.pokemones.results)
     // const result = imagesPokemones.map(item => item.image)
     // const result = pokemones.filter(item => item.url)
     // console.log( result);

     useEffect(() => {
          const fetchData = () => {
               dispatch(getPokemonsAction())
          }
          fetchData()
     }, [dispatch])


     // if (pokemones) {
     //      const fetchDat = () => {
     //           dispatch(getInfoCard())
     //      }
     //      fetchDat()
     // }


     // useEffect(() => {

     //           if (pokemones) {
     //                const fetchData = () => {
     //                     dispatch(getInfoCard())
     //                }
     //                return fetchData()
     //           }


     // }, [ dispatch,pokemones]);

     // useEffect(() => {
     //      if (pokemones.length !== 0) {
     //           getInfoCard(dispatch);
     //      }
     //    }, [dispatch,pokemones]);

     // useEffect(() => {
     //      if (pokemones) {
     //           const result = pokemones.map( item => item.url )
     //           // console.log(result);
     //           dispatch(fetchPokemonNameUrl(result))
     //                // if (pokemonData.length > 20) {
     //                //      dispatch(fetchPokemonNameUrl(result))
     //                //      }
     //      }
     //    }, [pokemones,dispatch,pokemonData]);

     // useEffect(() => {
     //      console.log(pokemones);
     //      if (pokemones.length !== 0 ) {
     //           const url = pokemones.map( item => item.url )
     //           const fetchData = () => { dispatch(getInfoCard(url)) }
     //           return fetchData
     //      }

     // }, [dispatch,pokemones])

     // useEffect(() => {
     //      if (pokemonData.length === 20) {
     //        fetchPokemonNameUrl(dispatch);
     //      }
     //    }, [dispatch,pokemonData]);


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
               {/* {
                    pokemones && pokemones.map(item => (
                         <DisponibilizadorPokemon
                              // key={item.name.length}
                              name={item.name}
                              url={item.url}
                         />
                    ))
               } */}
               {
                    menorAMayor.length && menorAMayor.map(item => (
                         <Pokemon
                              key={item.name}
                              name={item.name}
                              image={item.image}
                              id={item.id}
                         />

                    ))
               }
               <Box mt={6}>
               <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    alignContent="center"

                    >
                         {
                              previous &&  <Button
                                        className={`${classes.marginButtonRight} ${classes.Button}`}
                                        color="default"
                                        variant="contained"
                                        startIcon={<NavigateBeforeSharpIcon />}
                                        onClick={() => dispatch(previousPokemonAction())}
                                        >
                                        Previous
                                        </Button>
                         }

{
                              next &&   <Button
                                        className={classes.Button}
                                        color="default"
                                        variant="contained"
                                        endIcon={<NavigateNextIcon/>}
                                        onClick={() => dispatch(nextPokemonAction())}
                                        >
                              Next
                         </Button>
                         }
                   
                         
                   

                    </Grid>
                    </Box>


          </Grid>



     )

}

export default Pokemons
