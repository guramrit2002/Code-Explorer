import HomeIntro from '../components/home/home_intro'
import Navbar from '../components/navbar'
import '../styles/global.css'
import '../styles/home/explore.css'
import '../styles/footer.css'
import '../styles/home/responsive_home.css'
function HomePage() {
    return (
        <>
            <Navbar />
            <HomeIntro />
            <section className='explore'>

                <div className='container-explore'>

                    <h1>Explore</h1>
                    <p>Welcome to the Explore section, where creativity meets code in a community-driven library of components. Dive into an ever-expanding universe of reusable code snippets, frameworks, and UI elements crafted by developers for developers. Whether youre looking to streamline your next project or find inspiration for a challenging problem, the Explore section is your gateway to a wealth of resources and innovative solutions .</p>
                
                </div>
            </section>
            <section className='join'>
                <div className='left'>
                    <h1>Why Join Us ?</h1>
                </div>
                <div className='right'>
                <div className='container-right'>
                <div className='card' id='card1'>
                    <h1>Curated Collections</h1>
                    <p></p>
                </div>
                <div className='card' id='card2'>
                    <h1>Seamless Integration</h1>
                    <p>Easily integrate any component into your projects with just a few clicks. Our platform supports various programming languages and frameworks, ensuring compatibility and efficiency.</p>
                </div>
                <div className='card' id='card3'>
                    <h1>Community Contributions</h1>
                    <p>Join a vibrant community of developers who share your passion for coding. Contribute your own components, get feedback, and collaborate on open-source projects.</p>
                </div>
                <div className='card' id='card4'>
                    <h1>Personalized Recommendations</h1>
                    <p>Get tailored suggestions based on your interests and project needs. Discover components that will elevate your work, powered by our intelligent recommendation engine.</p>
                </div>
                <div className='card' id='card5'>
                    <h1>Resource Sharing</h1>
                    <p>Have a component youre proud of? Share it with the world. Gain recognition, feedback, and see how your work inspires and aids others in their development journey.</p>
                </div>
                <div className='card' id='card6'>
                    <h1>Curated Collections</h1>
                    <p>Browse through carefully curated collections of code components, from basic building blocks to complex systems, designed to fuel your projects and spark creativity.</p>
                </div>
                </div>
                </div>
            </section>
            <footer>
                <p>@codeexplorer</p>
            </footer>
        </>
    )
}

export default HomePage