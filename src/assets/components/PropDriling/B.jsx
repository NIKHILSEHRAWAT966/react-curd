// const B = (prop) => {
//     const {theme}=prop 
import { useEffect } from 'react';
import C from './C'
import PropTypes from "prop-types";
 
const B = ({theme={}}) => {

    useEffect(() => {
        theme.bgColor="red"; // props are immutable
        console.log("try to change prop");            
    }, [])
    
    return (
        <div>
            {console.log(props)};
            
            <h1>B Component : {JSON.stringify(theme)} </h1>
            <C theme={theme}/>
        </div>
    )
}
B.PropTypes ={ 
    theme: PropTypes.object.isRequired,
};

export default B