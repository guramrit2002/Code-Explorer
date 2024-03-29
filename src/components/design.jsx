import '../styles/singleComponents/design.css'
import PropTypes from 'prop-types';

function Design({component}){
    console.log(component.design)
    return (
        <div className="design">
            <div className='container-design'>
                <img src={component.design[0]} />
                <img src={component.design[1]} />
            </div>
        </div>
    )
}
Design.propTypes = {
    component: PropTypes.shape({
        design: PropTypes.arrayOf(PropTypes.string.isRequired),
    }).isRequired,
};

export default Design