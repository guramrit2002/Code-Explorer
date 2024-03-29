import '../styles/singleComponents/doc.css'
import Props from './tab1'

function Documents({ component }) {
    console.log(component); // For debugging purposes
    return (
        <>
            <div className="documentation">
                <div className='title'>
                    <h1>{component.title}</h1>
                    <p>by <span>dsds</span></p>
                </div>
                
                <div className="document-section">
                    <div className='about'>
                        <div className='head'>
                            <h1>Getting Started</h1>
                        </div>
                        <p className='about-text'>{component.about}</p>
                    </div>
                    <div className='prop'>
                        <div className='head'>
                            <h1>Props</h1>
                        </div>
                        {/* Render props component with component.props */}
                        <Props prop={component.props} />
                    </div>
                    <div className='note'>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Documents;