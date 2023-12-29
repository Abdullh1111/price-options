import PropTypes from 'prop-types'
import Feature from '../feature/Feature';

const Priceoption = ({priced}) => {
    const {features, name, price} = priced;
    return (
        <div className='bg-blue-500 text-white rounded-md p-4 text-center flex flex-col'>
         <div className='flex-grow'>
         <h2>
                <span className='text-5xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl my-8'>
                {name}
            </h4>
            <ul>
                {features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)}
            </ul>
         </div>
            <button className='bg-green-600 w-full p-4 rounded-2xl hover:bg-green-900'>Buy now</button>
        </div>
    );
};
Priceoption.propTypes ={
    priced : PropTypes.object
}
export default Priceoption;
