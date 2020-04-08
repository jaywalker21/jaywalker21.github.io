 import React from 'react';
import { ReactComponent as LoaderIcon } from '../../assets/logos/loader_animated.svg';

 const Loader = (props) => {
     return(
         <div className="loader">
             <LoaderIcon />
             {props.children}
         </div>
     )
 }

 export default Loader;