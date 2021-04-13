import React, { useState } from 'react'
import uuid from "react-uuid";
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import {
     Card,
     Typography,
     CardContent,
     // CardActions,
     CardMedia,
     CardActionArea,
     Chip,
     // Button,
     Grid
} from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { firstLetterCapital, equivalency } from '../utils'
import PokemonDetail from './PokemonDetail';

const useStyles = makeStyles((theme) => ({
     modal: {
          // top:'4% !important',
          overflow:'scroll',
          height: '100%',
          maxWidth: '710px',
          margin: '0 auto'
     },
     paper: {
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
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
     root: {
          maxWidth: 275,

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


const Pokemon = ({ name, image, id, types, data }) => {

     // console.log(types);
     // const colors = data.types.map(type => type.type.name)
     //     console.log(colors); 
     const colors = types.map(typ => typ.type)

     //  console.log( colors);

     const classes = useStyles();
     // const [modal, setModal] = useState(false)
     const [open, setOpen] = useState(false);

     const handleCloseModal = () => {
          setOpen(false);
     }
     const handleOpenModal = () => {
          setOpen(true);
     }

     return (
          <Grid item className={classes.container}>
               <Card className={classes.root}>
                    <CardActionArea onClick={handleOpenModal}>
                         <div style={{ backgroundColor: '#f2f2f2', borderRadius:'100%', width: '93%', margin: '0 auto',}}>
                         <CardMedia
                              component="img"
                              alt={name}
                              height="250"
                              image={image}
                              title="Contemplative Reptile"
                              />
                         </div>
                         <CardContent>
                              <Typography variant="body2" color="textSecondary" component="p" className={classes.Number}>
                                   #0{id}
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2">
                                   {firstLetterCapital(name)}
                              </Typography>

                             {
                                   colors &&
                                        colors.map((item) => {
                                             const { name } = item
                                             const color = equivalency.filter(item => item.type === name).map(item => item.color)
                                        //     console.log(name,color);
                                             return (<Chip
                                                  key={uuid()}
                                                  size="small"
                                                  label={firstLetterCapital(name)}
                                                  className={classes.Chip}
                                                  style={{backgroundColor:`${color ? color : 'black'}`}}
                                             />)
                                        })

                              }

                         </CardContent>

                         <CardContent>
                              <Grid
                                   container
                                   spacing={1}
                                   direction="row"
                                   justify="flex-end"
                                   alignItems="center"
                                   alignContent="center"
                                   wrap="nowrap"

                              >
                                   <Typography variant="body2" color="textSecondary" component="p" className={classes.Number}>
                                        ver más <ArrowForwardIosIcon fontSize="small" className={classes.AlignIconCard} />
                                   </Typography>
                              </Grid>


                         </CardContent>

                    </CardActionArea>
               </Card>
               <Modal
                    // style={{ overflow: 'scroll' }}
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleCloseModal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                         timeout: 500,
                    }}
               >
                    <Fade in={open}>
                         <div className={classes.paper}>
                              <PokemonDetail data={data} />
                         </div>
                    </Fade>
               </Modal>
          </Grid>
     )
}

export default Pokemon
