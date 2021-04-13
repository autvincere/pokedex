import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
     root: {
          // flexGrow: 1,

     },
     progressBar: {
          marginTop:'20px'
     }

}));

const Loader = () => {
     const classes = useStyles();
     return (
          <div className={classes.progressBar}>
               <CircularProgress size={100} />
          </div>
     )
}
export default Loader
 