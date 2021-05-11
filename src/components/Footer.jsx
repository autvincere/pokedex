import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
     root: {
          marginTop: 'auto',
          width: '100%',
     },
     titleCenter: {
          justifyContent: 'center',
     },
     toolbar: {
          minHeight: '48px',
          marginTop: '30px',
          backgroundColor: theme.palette.primary.main,
          color: '#ffffff'
     },
     link: {
          color: '#ffffff'
     }
}));

const Footer = () => {
     const classes = useStyles();
     return (

          <div className={classes.root}>
                    <Toolbar className={`${classes.titleCenter} ${classes.toolbar}`}>
                         Made with
                         <span role="img" aria-label="heart">
                         &nbsp;🖤&nbsp;
                         </span>
                         by&nbsp;
                         <a
                              href="https://www.linkedin.com/in/eduardo-palma-lopez/"
                              rel="noopener noreferrer"
                              target="_blank"
                              className={classes.link}
                         >
                              <span> &lt;&gt;</span> <span>Eduardo Palma</span>
                         </a>
                    </Toolbar>
          </div>
     )
}


export default Footer
