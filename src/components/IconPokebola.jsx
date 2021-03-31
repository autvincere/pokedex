import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon';

const IconPokebola = (props) => {
     // console.log(props);
     
     return (
          <SvgIcon {...props}>
               <path d="M9.17 13H3a1 1 0 0 1-1-1C2 6.477 6.477 2 12 2c4.128 0 7.786 2.524 9.29 6.294a1 1 0 1 1-1.857.741A8.002 8.002 0 0 0 4.062 11H9.17a3.001 3.001 0 0 1 5.658 0h6.173a1 1 0 0 1 1 1c0 5.523-4.477 10-10 10a10.002 10.002 0 0 1-9.29-6.294 1 1 0 0 1 1.857-.741A8.002 8.002 0 0 0 19.939 13h-5.11a3.001 3.001 0 0 1-5.658 0zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </SvgIcon>
     )
}

export default IconPokebola
