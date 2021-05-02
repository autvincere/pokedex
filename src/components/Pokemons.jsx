import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import uuid from "react-uuid";
import {
     getPokemonsAction,
     previousPokemonAction,
     nextPokemonAction
} from '../actions/poke'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeSharpIcon from '@material-ui/icons/NavigateBeforeSharp';

import { makeStyles } from '@material-ui/core/styles';
import {
     Button,
     Grid,
     Box
} from '@material-ui/core'
import Pokemon from './Pokemon';
import Loader from './Loader';
import Error from './Error';


const useStyles = makeStyles((theme) => ({
     root: {
          // flexGrow: 1,
          overflow: 'hidden',
     },
     marginButtonRight: {
          marginRight: '20px'
     },
     Button: {
          width: '120px',
     },
     containerButtons: {
          display: 'block',
          width: '100%',
          marginBottom: '12px',
     }


}));

const Pokemons = () => {

     const classes = useStyles();
     const dispatch = useDispatch();

     const pokemonData = useSelector(state => state.pokemones.allPokemons)
     const next = useSelector(state => state.pokemones.next)
     const previous = useSelector(state => state.pokemones.previous)
     const loading = useSelector(state => state.pokemones.loading)
     const error = useSelector(state => state.pokemones.error)

     const reduceDuplicate = pokemonData.filter((data,index)=>{
          return pokemonData.indexOf(data) === index;
        })
     const menorAMayor = reduceDuplicate.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
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

     return (
          <Grid
               className={classes.root}
               container
               spacing={0}
               direction="row"
               justify="space-evenly"
               alignItems="center"
               alignContent="center"
          //   wrap="nowrap"
          >


               {
                    loading ?
                         <Loader /> :
                         error ?
                              <Error /> :
                              menorAMayor.map(item => (
                                   <Pokemon
                                        key={uuid()}
                                        name={item.name}
                                        image={item.image}
                                        id={item.id}
                                        data={item.data}
                                        types={item.types}
                                   />

                              ))

               }

               <Box mt={6} className={classes.containerButtons}>
                    <Grid
                         container
                         spacing={2}
                         direction="row"
                         justify="center"
                         alignItems="center"
                         alignContent="center"


                    >
                         {
                              error ?
                                   '' :
                                   previous && <Button
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
                              error ?
                                   '':
                                   next && <Button
                                        className={classes.Button}
                                        color="default"
                                        variant="contained"
                                        endIcon={<NavigateNextIcon />}
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
