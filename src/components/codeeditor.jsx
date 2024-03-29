import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { useState } from 'react';
import '../styles/codeeditor/codeeditor.css'
const COdeEditor = () => {
    // const 
    const [code, setCode] = useState(`() => {
        const [counter, setCounter] = React.useState(0); 
      
        return (
          <>
            <p>{\`\${counter} counter\`}</p>
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
            <button onClick={() => setCounter(counter - 1)}>Decrease</button>
          </>
        );
      };`); // Initial code

    const handleCodeChange = (newCode) => {
        setCode(newCode);
    };

    const customTheme = {
        plain: {
        color: "#d6deeb",
        backgroundColor: "rgb(40, 44, 46)"
        },
        styles: []
    }

    return (
        <div className='provider'>
        
        <LiveProvider code={code} theme={customTheme} className='live-provider' >
        <LiveError  className='error'/>
        <div className='container'>
        <LiveEditor onChange={handleCodeChange} readOnly={true} className='live-editor'/>
        
        <LivePreview className='preview' />
        </div>
        </LiveProvider>
        
        </div>
    );
};
export default COdeEditor