import { AiFillCheckCircle } from "react-icons/ai";
import  PropTypes  from 'prop-types';
const Feature = ({feature}) => {
    return (
        <div>
            <li className='flex items-center gap-3'><AiFillCheckCircle className="text-green-500"></AiFillCheckCircle> {feature}</li>
        </div>
    );
};
Feature.propTypes ={
    feature: PropTypes.string.isRequired
}

export default Feature;