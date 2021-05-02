import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {
     autocompletePokemonAction,
     loadSearchedPokemonAction,
     getPokemonsAction

} from '../actions/poke'
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete'
import {
     IconButton,
     TextField,
     // InputBase,
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

     let pokeCounter = useSelector(state => state.pokemones.count);
     let pokeAutoComplete = useSelector(state => state.pokemones.allPokemonsResult);
     // console.log(pokeAutoComplete)
     const dispatch = useDispatch();

     const getValue = (e) => {
          // if(e.type === 'keypress' && e.key !== 'Enter') return ;
          const title = document.querySelector('#search')
               .value
               .toLowerCase()
               .trim();
          const pokeSearched = pokeAutoComplete.filter(pokemon => pokemon.name === title)
          const pokeUrl = pokeSearched.map(poke => poke.url)
          // console.log(pokeUrl[0]);
          dispatch(loadSearchedPokemonAction(pokeUrl[0]))
          // console.log(pokeSearched.map(poke => poke.url))

     }

     const setInput = (e) => {
          
          const title = document.querySelector('#search').value
console.log(title.length);
    if (title === ' ') {
     dispatch(getPokemonsAction())
    }
     }
// const validateSearch = (e, search = document.querySelector('#search').value.toLowerCase().trim(),) => {

//      // if (e.type === 'keyup' && e.key !== 'Enter') return;
//      const words = search.match(/\w+/g);
//      search = words && words.join(' ');
//      console.log(search)
//      e.preventDefault()

//      // dispatch(searchPokemonAction(pokeCounter,search))
// }
useEffect(() => {
     const fetchData = () => {
          dispatch(autocompletePokemonAction(pokeCounter))
     }
     fetchData()
}, [dispatch, pokeCounter])

const classes = useStyles();

return (
     <div>

          <Paper component="form" className={classes.root}>
               {/* <InputBase
                         id="search"
                         className={classes.input}
                         placeholder="Search your Pokemon"
                         onKeyUp={ (e) => validateSearch(e) }
                    /> */}

               <Autocomplete
                    id="search"
                    className={classes.input}
                    onKeyPress={(e) => {
                         // console.log(`Pressed keyCode ${e.key}`);
                         if (e.key === 'Enter') { e.preventDefault(); }
                    }}
                    onChange={ () => setInput() }
                    freeSolo
                    options={pokeAutoComplete.map(pokemon => pokemon.name)}
                    // getOptionLabel={option => option.name}
                   
                    // value={value}
                    // onKeyUp={ (e) => validateSearch(e) }
                    renderInput={params => (
                         <TextField
                              {...params}
                              id="searched"
                              label="Busca tu Pokemon..."
                              margin="normal"
                              variant="outlined"
                              onKeyPress={(e) => {
                                   // console.log(`Pressed keyCode ${e.key}`);
                                   if (e.key === 'Enter') { e.preventDefault(); }
                              }}
                              // onChange={ () => setInput() }
                         // onClick={anfn console.log('hice clic')}

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
