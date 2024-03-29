// import COdeEditor from "../components/codeeditor";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import '../styles/codeeditor/codeeditor.css'
import '../styles/singleComponents/singleComponent.css'
import { useState } from "react";
import Documents from "../components/documents";
import Design from "../components/design";
import SourceCode from "../components/sourcecode";
import { IoDocumentOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";

function SingleComponent() {
    const [activeTab, setActiveTab] = useState('tab1');
    
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const storedComponent = localStorage.getItem('selectedComponent');
    console.log(storedComponent)
    const parsedComponent = JSON.parse(storedComponent);
    console.log(parsedComponent)
    return (
        <>
            <Navbar />
            <section className="single-component">
                <div className="sidebar">
                        <div className="inner">
                        
                    <Link to='' className={activeTab === 'tab1' ? 'active' : ''} 
                        onClick={() => handleTabClick('tab1')}> <IoDocumentOutline/></Link>
                    <Link to='' className={activeTab === 'tab3' ? 'active' : ''}
                        onClick={() => handleTabClick('tab3')} ><FaCode/></Link>
                    <Link to='' className={activeTab === 'tab4' ? 'active' : ''}
                        onClick={() => handleTabClick('tab4')}> <MdOutlineDesignServices/></Link>
                        </div>
                </div>
                <div className="main">
                {console.log(parsedComponent)}
                {activeTab === 'tab1' && <Documents component={parsedComponent} />}
                {activeTab === 'tab3' && <SourceCode/>}
                {activeTab === 'tab4' && <Design component={parsedComponent}/>}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default SingleComponent