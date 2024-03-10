import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import '../styles/allcomponents/containerall.css'
import '../styles/allcomponents/responsive_all.css'
import { FaUser } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";



function AllComponentPage() {
    
    const [Category, setCategory] = useState([]);
    const [Component] = useState([
        {
            image:"https://images.pexels.com/photos/20440051/pexels-photo-20440051/free-photo-of-a-woman-leaning-against-a-railing-with-her-hand-on-her-chin.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: 'Title',
            date: '10-03-2024',
            time:'17:32' 
        },{ 
            image:"https://images.pexels.com/photos/20440051/pexels-photo-20440051/free-photo-of-a-woman-leaning-against-a-railing-with-her-hand-on-her-chin.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: 'Title',
            date: '10-03-2024',
            time:'17:32'
        },{
            image:"https://images.pexels.com/photos/20440051/pexels-photo-20440051/free-photo-of-a-woman-leaning-against-a-railing-with-her-hand-on-her-chin.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: 'Title',
            date: '10-03-2024',
            time:'17:32'
        },{
            image:"https://images.pexels.com/photos/20440051/pexels-photo-20440051/free-photo-of-a-woman-leaning-against-a-railing-with-her-hand-on-her-chin.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: 'Title',
            date: '10-03-2024',
            time:'17:32' 
        },{ 
            image:"https://images.pexels.com/photos/20440051/pexels-photo-20440051/free-photo-of-a-woman-leaning-against-a-railing-with-her-hand-on-her-chin.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: 'Title',
            date: '10-03-2024',
            time:'17:32'
        },{
            image:"https://images.pexels.com/photos/20440051/pexels-photo-20440051/free-photo-of-a-woman-leaning-against-a-railing-with-her-hand-on-her-chin.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: 'Title',
            date: '10-03-2024',
            time:'17:32'
        }
    ])

    const removeCategory = (id) => {
        setCategory(Category.filter(category => category.id !== id));
    };


    const handleSubmit = ()=>{
        event.preventDefault()
        const formData = new FormData(event.target);
        const searchKeyword = formData.get('search');
        const startDate = formData.get('start-date')
        const endDate = formData.get('end-date')
        console.log(searchKeyword);
        console.log(startDate)
        console.log(endDate)
    }

    const handleCategorySubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const categoryName = formData.get('category');
        if (categoryName && !Category.some(cat => cat.name === categoryName)) {
            const newCategory = {
                id: Date.now(), // Simple way to generate a unique ID
                name: categoryName,
                hover: false // Initial hover state is false
            };
            setCategory([...Category, newCategory]);
        }
    };

    const toggleHover = (id) => {
        setCategory(Category.map(category => 
            category.id === id ? { ...category, hover: !category.hover } : category
        ));
    };
    

    return (
        <>
            <Navbar />
            <section className="container-all">
                <div className="left-sidebar">
                <h3>Filters</h3>
                <form method="GET" onSubmit={handleSubmit}>
                <input type="text" name="search" className="search" placeholder="  Ask any keyword"/>
                <p>start date</p>
                <input type="date" name="start-date" className="date"/>
                <p>end date</p>
                <input type="date" name='end-date' className="date"/>
                <button type="submit">sort it </button>
                </form>
                </div>
                <div className="main-container">
                    {Component.map((component, index) => (
                        <div className="card-component" key={index}>
                            <img src={component.image} alt={component.title} />
                            <div className="about-card">
                                <h1>{component.title}</h1>
                                <p className="date-time">{`${component.date}|${component.time}`}</p>
                                <p className="creator"><FaUser/> Guramrit</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='category'>
                <h1>Categories</h1>
                <form method="GET" onSubmit={handleCategorySubmit}>
                <input type="text" name='category' className="search" placeholder="Search Category"/>
                <div className="selected-categories">
                        {Category.map((category) => (
                            <div key={category.id} >
                                <p onMouseEnter={() => toggleHover(category.id)} 
                                    onMouseLeave={() => toggleHover(category.id)}>
                                    {category.name}
                                    {category.hover ? (
                                        <RxCross1 className="cross" onClick={() => removeCategory(category.id)} />
                                    ) : null}
                                </p>
                            </div>
                        ))}
                    </div>
                <button type="submit">Apply</button>
                </form>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default AllComponentPage