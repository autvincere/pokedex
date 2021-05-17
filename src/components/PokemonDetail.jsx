import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
     SetFavoritePokemon,
     UnSetFavoritePokemon
} from '../actions/poke'
import uuid from "react-uuid";
import { firstLetterCapital, equivalency } from '../utils'
import { makeStyles } from '@material-ui/core/styles';
import {
     Typography,
     Chip,
     Box,
     Grid,
     Divider,
     IconButton
} from '@material-ui/core'

import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
     modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

     },
     paper: {
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          position: 'relative',
          // overflow: 'scroll',
     },
     buttonClose: {
          borderRadius: '50px',
          border: '2px solid #b7b7b7',
          position: 'absolute',
          right: '2px',
          top: '2px',
          fontSize: '2.3em',
          padding:'5px',
          backgroundColor:'#ffffff2e'
     },

     Chip: {
          borderRadius: '7px',
          marginRight: '6px',
          color: 'white',
          fontSize: '1.2em',
          padding: '13px 0px',
          // border: '1px solid #ff9271',
          fontWeight: '400',
     },
     container: {
          marginTop: '20px',
     },
     containerImage: {
          maxWidth: '275px',
          margin: '0 auto',
     },
     image: {
          width: '100%',

     },
     divider: {
          margin: '13px 0px',
          height: '2px',
     },
     root: {
          maxWidth: 275,

     },
     listAbilities: {
          display: 'flex',
          flexWrap: 'wrap',

          // listStyle: 'circle',
          // justifyContent: 'space-between',
     },
     abilities: {
          fontSize: '1.2em',
          // padding: '0px 12px',
          margin: '3px 17px 0px 0px',
          '&::before': {
               content: '""',
               display: 'inline-block',
               height: '6px',
               width: '6px',
               borderRadius: '13px',
               margin: '0px 6px 2px 0px',
               border: '2px solid #828282',

          }
     },
     WeightTextTitles: {
          fontWeight: '500',
          fontSize: '1.4em'
     },
     AlignIconCard: {
          verticalAlign: 'bottom',
     },
     Number: {
          fontWeight: 800,

     },
     bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
     },
     title: {
          fontSize: 14,

     },
     pos: {
          marginBottom: 12,
     },
}));

const PokemonDetail = ({ data, handleCloseModal }) => {

     const favoritesPokemons = useSelector(state => state.pokemones.favoritesPokemons)

     const [favorite, setFavorite] = useState(false);
     const classes = useStyles();
     const dispatch = useDispatch();

     const { types, weight, height, base_experience, abilities, moves, name, id } = data
     const image = data.sprites.other["official-artwork"].front_default
     const colors = types.map(typ => typ.type)

     const handleSetFavorite = () => {
          dispatch(SetFavoritePokemon(data))
          setFavorite(true);
     }
     const handleDeleteFavorite = (id) => {
          dispatch(UnSetFavoritePokemon(id))
          setFavorite(false);
     };
     
     const isFavorite = () => {
          const result = favoritesPokemons.filter(favoritePokemon => favoritePokemon.id === id)
          // result.length ?? setFavorite(true)
          if (result.length) {
               setFavorite(true);
           }
     }

     useEffect(() => {
          isFavorite();
     })

     return (
          <div>
               <IconButton className={classes.buttonClose} aria-label="delete" onClick={() => handleCloseModal()}>
                    <CloseIcon fontSize="large"/>
               </IconButton>
               <Grid item className={classes.container}>
                    <div style={{ backgroundColor: '#f2f2f2', width: '100%', borderRadius: '5%' }}>
                         <Box className={classes.containerImage}>
                              {/* <div style={{ backgroundColor: '#f2f2f2', borderRadius: '100%', }}> */}
                              <img src={image} alt={name} className={classes.image} />
                              {/* </div> */}
                         </Box>
                    </div>
                    <Typography align="center" rvariant="body2" color="textSecondary" component="p" className={classes.Number}>
                         #0{id}
                    </Typography>
                    <Typography align="center" gutterBottom variant="h3">
                         {firstLetterCapital(name)}
                         {
                              favorite
                                   ? <StarIcon onClick={() => handleDeleteFavorite(id)} color="secondary"/>
                                   :  <StarIcon onClick={handleSetFavorite} />
                         }
                        
                         
                    </Typography>
                    
                    <Divider className={classes.divider} />

               </Grid>

               <Grid
                    container
                    spacing={1}
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                    alignContent="center"
               //  wrap="nowrap"

               >
                    <Grid item>
                         <Typography align="center" gutterBottom variant="h5" className={classes.WeightTextTitles}> Types </Typography>
                         {
                              colors &&
                              colors.map((item) => {
                                   const { name } = item
                                   const color = equivalency.filter(item => item.type === name).map(item => item.color)
                                   //     console.log(name,color);
                                   return (
                                        <Chip
                                             key={uuid()}
                                             size="small"
                                             label={firstLetterCapital(name)}
                                             className={classes.Chip}
                                             style={{ backgroundColor: `${color ? color : 'black'}` }}
                                        />
                                   )
                              })

                         }

                    </Grid>
                    {
                         height && (<Grid item> <Typography align="center" gutterBottom variant="h5" className={classes.WeightTextTitles}> Height </Typography> <Typography align="center" gutterBottom variant="h5"> {height} </Typography> </Grid>)
                    }
                    {
                         weight && (<Grid item> <Typography align="center" gutterBottom variant="h5" className={classes.WeightTextTitles}> Weight </Typography> <Typography align="center" gutterBottom variant="h5"> {weight} </Typography> </Grid>)
                    }
                    {
                         base_experience && (<Grid item> <Typography align="center" gutterBottom variant="h5" className={classes.WeightTextTitles}> Base Experience </Typography> <Typography align="center" gutterBottom variant="h5"> {base_experience} </Typography> </Grid>)
                    }

               </Grid>

               <Divider className={classes.divider} />
               <Grid item>
                    {
                         abilities && <Typography align="center" gutterBottom variant="h5" className={classes.WeightTextTitles}> Abilities </Typography>
                    }
                    <Grid item>
                         <Grid
                              container
                              className={classes.listAbilities}
                              direction="row"
                              justify="center"
                              alignItems="center"
                              alignContent="center"
                         >
                              {
                                   abilities &&
                                   // console.log(abilities.map(item => item.ability.name))
                                   abilities.map(item => (<Grid item className={classes.abilities} key={uuid()}>{firstLetterCapital(item.ability.name)}</Grid>))
                              }
                         </Grid>
                    </Grid>
               </Grid>

               <Divider className={classes.divider} />

               <Grid item>
                    {
                         moves && <Typography align="center" gutterBottom variant="h5" className={classes.WeightTextTitles}> Moves </Typography>
                    }

                    <Grid
                         container
                         className={classes.listAbilities}
                         direction="row"
                         justify="center"
                         alignItems="center"
                         alignContent="center"
                    >
                         {
                              moves &&
                              // console.log(moves)
                              // console.log(moves.map(item => item.move.name))
                              moves.map(item => (<Grid item className={classes.abilities} key={uuid()}>{firstLetterCapital(item.move.name)}</Grid>))
                         }
                    </Grid>
               </Grid>
          </div>
     )
}


export default PokemonDetail
