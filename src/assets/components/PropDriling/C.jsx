// const C = (prop) => {
//     const {theme}=prop 
import D from './D'
import PropTypes from "prop-types";
 
const C = ({theme}) => {
    return (
        <div>
            {console.log(theme)};
            
            <h1>C Component : {JSON.stringify(theme)} </h1>
            <D theme={theme}/>
        </div>
    )
}
C.PropTypes ={ 
    theme: PropTypes.object.isRequired,

};

export default C