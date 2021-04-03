import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
     Card,
     Typography,
     CardContent,
     // CardActions,
     CardMedia,
     CardActionArea,
     // Button,
     Grid
} from '@material-ui/core'
import { firstLetterCapital } from '../utils'

const useStyles = makeStyles({
     container: {
          marginTop: '20px',
     },
     root: {
          maxWidth: 275,

     },
     Number: {
          fontWeight:800,
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
});


const Pokemon = ({ name, image, id }) => {
     // console.log(url);
     const classes = useStyles();


     // const imagesPokemones = useSelector(state => state.favoriteCharacters)
     // const pokemon = useSelector( store => store.info )
     //  console.log(imagesPokemones);

     // const { front_default } = pokemon.other["official-artwork"]
     // console.log(front_default);
     return (
          <Grid item className={classes.container}>
               <Card className={classes.root}>
                    <CardActionArea>

                         <CardMedia
                              component="img"
                              alt="Contemplative Reptile"
                              height="258"
                              image={image}
                              title="Contemplative Reptile"
                         />
                         <CardContent>
                         <Typography variant="body2" color="textSecondary" component="p" className={classes.Number}>
                              #0{id}
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2">
                                    {firstLetterCapital(name)}
                              </Typography>
                             
                         </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                         <Button size="small" color="primary">
                              Share
        </Button>
                         <Button size="small" color="primary">
                              Learn More
        </Button>
                    </CardActions> */}
               </Card>
          </Grid>
     )
}

export default Pokemon
