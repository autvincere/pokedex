import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'
import {
     // setPage,
     autocompletePokemonAction,
     loadSearchedPokemonAction,
     searchValue
} from '../actions/poke'
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete'
import {
     IconButton,
     TextField,
     Paper,
     Divider,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
     root: {
          padding: '6px 4px',
          display: 'flex',
          alignItems: 'center',
          width: '95vw',
          maxWidth: '600px',
          marginBottom: '30px',
     },
     input: {
          marginLeft: theme.spacing(1),
          flex: 1,
     },
     iconButton: {
          padding: 10,
     },
     divider: {
          height: 28,
          margin: 4,
     },
}));
const SearchPokemons = () => {

     const value = useSelector(state => state.pokemones.searchValue);

     const history = useHistory();
     let pokeCounter = useSelector(state => state.pokemones.count);
     let pokeAutoComplete = useSelector(state => state.pokemones.allPokemonsResult);
     // console.log(pokeAutoComplete)
     const dispatch = useDispatch();

     const handlePress = (e, value) => {
          if (e.key === 'Enter') { e.preventDefault() }
     }
     const onChange = (_, value) => {
          dispatch(searchValue(value))
     };
     // const clearSelected = () => {
     //      dispatch(searchValue([]))
     // };


     const cleanSearch = () => {
          const result = document.querySelector('#search')
          // console.log('limpieza');
          return result.value = ''
     }

     const getValue = (e) => {
          const title = document.querySelector('#search')
               .value
               .toLowerCase()
               .trim();
          // if (value !== title) {
          //      setValue(title)
          const pokeSearched = pokeAutoComplete.filter(pokemon => pokemon.name === title)
          const pokeUrl = pokeSearched.map(poke => poke.url)
          dispatch(loadSearchedPokemonAction(pokeUrl[0]))
          // document.querySelector('#search').setAttribute('value','');
          cleanSearch()
          history.push("/search");
          // }
     }

     useEffect(() => {
          const fetchData = () => {
               dispatch(autocompletePokemonAction(pokeCounter))
          }
          fetchData()
     }, [dispatch, pokeCounter])

     const classes = useStyles();

     return (
          <div>
               {/* <button onClick={clearSelected}>Clear selected</button> */}
               <Paper component="form" className={classes.root}>

                    <Autocomplete
                         id="search"
                         onKeyPress={handlePress}
                         options={pokeAutoComplete.map(pokemon => pokemon.name)}
                         className={classes.input}
                         value={value}
                         // freeSolo
                         onChange={onChange}
                         // onChange={(e, value) => console.log(value)}
                         renderInput={params => (
                              <TextField
                                   {...params}
                                   // value={value}
                                   label="Busca tu Pokemon"
                                   margin="normal"
                                   variant="outlined"
                                   onKeyUp={() => getValue()}
                              >
                              </TextField>
                         )}
                    />
                    <Divider className={classes.divider} orientation="vertical" />
                    <IconButton
                         color="secondary"
                         className={classes.iconButton}
                         aria-label="directions"
                         onClick={() => getValue()}
                    >
                         <SearchIcon />
                    </IconButton>
               </Paper>
          </div>
     )
}

export default SearchPokemons
