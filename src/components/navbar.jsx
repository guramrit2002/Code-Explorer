import '../styles/navbar.css'


function Navbar(){
    return (
        <>
        <nav className="navbar">
            <div className="logo">CodeExplorer</div>
            <div className="tabs">
            <li className='tab' id='tab1'>Sign In</li>
            <li className='tab'id='tab2'>Sign Up</li>
            </div>
        </nav>
        </>
    )
}

export default Navbar