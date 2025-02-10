// const B = (prop) => {
//     const {theme}=prop 
import PropTypes from "prop-types";
 
const E = ({theme}) => {
    return (
        <div>
            <h1>B Component : {JSON.stringify(theme)} </h1>
        </div>
    )
}
E.PropTypes ={ 
    theme: PropTypes.object.isRequired,
};

export default E