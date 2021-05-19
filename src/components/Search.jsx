import React,{useEffect} from 'react'
import uuid from "react-uuid";
import {
     getPokemonsAction,
} from '../actions/poke'

import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import {
     Grid,
} from '@material-ui/core'
import Pokemon from './Pokemon';
// import Loader from './Loader';
// import Error from './Error';

const useStyles = makeStyles((theme) => ({
     root: {
          // flexGrow: 1,
          // overflow: 'hidden',
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

const Search = () => {
     const classes = useStyles();
     const dispatch = useDispatch();
     const selectedPokemon = useSelector(state => state.pokemones.selectedPokemon)
     // console.log(selectedPokemon);

     // const loading = useSelector(state => state.pokemones.loading)
     // const error = useSelector(state => state.pokemones.error)
     // const searchMode = useSelector(state => state.pokemones.searchMode)

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

                              !selectedPokemon.length ?
                                   <h1>Por favor ingrese un pokemon en el campo de busqueda</h1>
                                   :
                                        selectedPokemon.map(item => (
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
                   {/* {
                              searchMode && <Button
                                   className={classes.Button}
                                   color="default"
                                   variant="contained"
                                   endIcon={<ArrowBackIcon />}
                                   onClick={() => handleReturn()}
                              >
                                   Volver
                                             </Button>
                         } */}
          </Grid>
     )
}

export default Search
