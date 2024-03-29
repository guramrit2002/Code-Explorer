import '../styles/singleComponents/props.css';

function Props({ prop}) {
    return (
        <div className='props'>
            <ol>
                {prop.map((prop, index) => (
                    <li key={index}>
                        <p>{prop.name}</p>
                        <div className='prop-description'>
                            <p className='type'><strong>Type</strong>: <span>{prop.type}</span></p>
                            <p className='description-text'>{prop.description}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Props;
