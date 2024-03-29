import { useState,useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import '../styles/allcomponents/containerall.css'
import '../styles/allcomponents/responsive_all.css'
import { FaUser } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Link} from 'react-router-dom';

function AllComponentPage() {

    const [Category, setCategory] = useState([]);
    const [Component] = useState([
        {
            id:1,
            image:"https://images.pexels.com/photos/20440051/pexels-photo-20440051/free-photo-of-a-woman-leaning-against-a-railing-with-her-hand-on-her-chin.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: '1',
            date: '10-03-2024',
            time:'17:32',
            about:'um et minus ratione et delectus minima hic consectetur soluta et facere aliquam. Hic obcaecati quibusdam et dolor nihil qui dicta consequatur et nobis impedit et voluptatem recusandae! Non consequuntur neque ut galisum similique non totam perspiciatis eum odit voluptatem. Et enim harum ab dolorem veniam non eligendi impedit.Et galisum facilis est sapiente consequatur ex obcaecati assumenda ea dolore inventore aut ipsam dolorem a sint amet! Aut nihil blanditiis hic nemo nemo eos nobis itaque vel mollitia libero sed corrupti odio ut consectetur placeat est molestiae minus. Eum voluptatibus quaerat ab cumque quia est libero iusto et molestiae consequatur est quae accusantium aut similique autem et perferendis impedit! Eum nobis minima vel ipsa delectus et omnis vero ad delectus doloremque qui ipsum earum.',
            props : [{
                name:"prop",
                type:"String",
                description:"um et minus ratione et delectus minima hic consectetur soluta et f"
            },{
                name:"prop2",
                type:"String",
                description:"um et minus ratione et delectus minima hic consectetur soluta et f"
            },{
                name:"prop3",
                type:"String",
                description:"um et minus ratione et delectus minima hic consectetur soluta et f"
            }]
        },{ 
            id:2,
            image:"https://images.pexels.com/photos/20440051/pexels-photo-20440051/free-photo-of-a-woman-leaning-against-a-railing-with-her-hand-on-her-chin.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: '2',
            date: '10-03-2024',
            time:'17:32',
            about:'um et minus ratione et delectus minima hic consectetur soluta et facere aliquam. Hic obcaecati quibusdam et dolor nihil qui dicta consequatur et nobis impedit et voluptatem recusandae! Non consequuntur neque ut galisum similique non totam perspiciatis eum odit voluptatem. Et enim harum ab dolorem veniam non eligendi impedit.Et galisum facilis est sapiente consequatur ex obcaecati assumenda ea dolore inventore aut ipsam dolorem a sint amet! Aut nihil blanditiis hic nemo nemo eos nobis itaque vel mollitia libero sed corrupti odio ut consectetur placeat est molestiae minus. Eum voluptatibus quaerat ab cumque quia est libero iusto et molestiae consequatur est quae accusantium aut similique autem et perferendis impedit! Eum nobis minima vel ipsa delectus et omnis vero ad delectus doloremque qui ipsum earum.',
            props : [{
                name:"prop1",
                type:"String",
                description:"um et minus ratione et delectus minima hic consectetur soluta et f"
            },{
                name:"prop2",
                type:"String",
                description:"um et minus ratione et delectus minima hic consectetur soluta et f"
            },{
                name:"prop3",
                type:"String",
                description:"um et minus ratione et delectus minima hic consectetur soluta et f"
            }]
        },{
            id:3,
            image:"https://images.pexels.com/photos/20440051/pexels-photo-20440051/free-photo-of-a-woman-leaning-against-a-railing-with-her-hand-on-her-chin.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: '3',
            date: '10-03-2024',
            time:'17:32',
            about:'um et minus ratione et delectus minima hic consectetur soluta et facere aliquam. Hic obcaecati quibusdam et dolor nihil qui dicta consequatur et nobis impedit et voluptatem recusandae! Non consequuntur neque ut galisum similique non totam perspiciatis eum odit voluptatem. Et enim harum ab dolorem veniam non eligendi impedit.Et galisum facilis est sapiente consequatur ex obcaecati assumenda ea dolore inventore aut ipsam dolorem a sint amet! Aut nihil blanditiis hic nemo nemo eos nobis itaque vel mollitia libero sed corrupti odio ut consectetur placeat est molestiae minus. Eum voluptatibus quaerat ab cumque quia est libero iusto et molestiae consequatur est quae accusantium aut similique autem et perferendis impedit! Eum nobis minima vel ipsa delectus et omnis vero ad delectus doloremque qui ipsum earum.',
            props : [{
                name:"prop1",
                type:"String",
                description:"um et minus ratione et delectus minima hic consectetur soluta et f"
            },{
                name:"prop2",
                type:"String",
                description:"um et minus ratione et delectus minima hic consectetur soluta et f"
            },{
                name:"prop3",
                type:"String",
                description:"um et minus ratione et delectus minima hic consectetur soluta et f"
            }]
        },{
            id:4,
            image:"https://images.pexels.com/photos/20440051/pexels-photo-20440051/free-photo-of-a-woman-leaning-against-a-railing-with-her-hand-on-her-chin.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: '4',
            date: '10-03-2024',
            time:'17:32' ,
            about:'um et minus ratione et delectus minima hic consectetur soluta et facere aliquam. Hic obcaecati quibusdam et dolor nihil qui dicta consequatur et nobis impedit et voluptatem recusandae! Non consequuntur neque ut galisum similique non totam perspiciatis eum odit voluptatem. Et enim harum ab dolorem veniam non eligendi impedit.Et galisum facilis est sapiente consequatur ex obcaecati assumenda ea dolore inventore aut ipsam dolorem a sint amet! Aut nihil blanditiis hic nemo nemo eos nobis itaque vel mollitia libero sed corrupti odio ut consectetur placeat est molestiae minus. Eum voluptatibus quaerat ab cumque quia est libero iusto et molestiae consequatur est quae accusantium aut similique autem et perferendis impedit! Eum nobis minima vel ipsa delectus et omnis vero ad delectus doloremque qui ipsum earum.',
            props : [{
                name:"prop1",
                type:"String",
                description:"um et minus ratione et delectus minima hic consectetur soluta et f"
            },{
                name:"prop2",
                type:"String",
                description:"um et minus ratione et delectus minima hic consectetur soluta et f"
            },{
                name:"prop3",
                type:"String",
                description:"um et minus ratione et delectus minima hic consectetur soluta et f"
            }]
        },{ 
            id:5,
            image:"https://images.pexels.com/photos/20440051/pexels-photo-20440051/free-photo-of-a-woman-leaning-against-a-railing-with-her-hand-on-her-chin.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: '5',
            date: '10-03-2024',
            time:'17:32',
            about:'um et minus ratione et delectus minima hic consectetur soluta et facere aliquam. Hic obcaecati quibusdam et dolor nihil qui dicta consequatur et nobis impedit et voluptatem recusandae! Non consequuntur neque ut galisum similique non totam perspiciatis eum odit voluptatem. Et enim harum ab dolorem veniam non eligendi impedit.Et galisum facilis est sapiente consequatur ex obcaecati assumenda ea dolore inventore aut ipsam dolorem a sint amet! Aut nihil blanditiis hic nemo nemo eos nobis itaque vel mollitia libero sed corrupti odio ut consectetur placeat est molestiae minus. Eum voluptatibus quaerat ab cumque quia est libero iusto et molestiae consequatur est quae accusantium aut similique autem et perferendis impedit! Eum nobis minima vel ipsa delectus et omnis vero ad delectus doloremque qui ipsum earum.',
            props : [{
                name:"abc",
                type:"String",
                description:"um et minus ratione et delectus minima hic consectetur soluta et f"
            },{
                name:"prop2",
                type:"String",
                description:"um et minus ratione et delectus minima hic consectetur soluta et f"
            },{
                name:"prop3",
                type:"String",
                description:"um et minus ratione et delectus minima hic consectetur soluta et f"
            }]
        },{
            id:6,
            image:"https://images.pexels.com/photos/20440051/pexels-photo-20440051/free-photo-of-a-woman-leaning-against-a-railing-with-her-hand-on-her-chin.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: '6',
            date: '10-03-2024',
            time:'17:32',
            about:'um et minus ratione et delectus minima hic consectetur soluta et facere aliquam. Hic obcaecati quibusdam et dolor nihil qui dicta consequatur et nobis impedit et voluptatem recusandae! Non consequuntur neque ut galisum similique non totam perspiciatis eum odit voluptatem. Et enim harum ab dolorem veniam non eligendi impedit.Et galisum facilis est sapiente consequatur ex obcaecati assumenda ea dolore inventore aut ipsam dolorem a sint amet! Aut nihil blanditiis hic nemo nemo eos nobis itaque vel mollitia libero sed corrupti odio ut consectetur placeat est molestiae minus. Eum voluptatibus quaerat ab cumque quia est libero iusto et molestiae consequatur est quae accusantium aut similique autem et perferendis impedit! Eum nobis minima vel ipsa delectus et omnis vero ad delectus doloremque qui ipsum earum.',
            props : [{
                name:"dbv",
                type:"String",
                description:"um et minus ratione et delectus minima hic consectetur soluta et f"
            },{
                name:"prop2",
                type:"String",
                description:"um et minus ratione et delectus minima hic consectetur soluta et f"
            },{
                name:"prop3",
                type:"String",
                description:"um et minus ratione et delectus minima hic consectetur soluta et f"
            }]
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
                id: Date.now(), 
                name: categoryName,
                hover: false 
            };
            setCategory([...Category, newCategory]);
        }
    };

    const toggleHover = (id) => {
        setCategory(Category.map(category => 
            category.id === id ? { ...category, hover: !category.hover } : category
        ));
    };
    const handleComponentClick = (component) => {
        // Serialize the component object to a string
        const componentString = JSON.stringify(component);
        // Save the serialized string in local storage
        localStorage.setItem('selectedComponent', componentString);
    };

    useEffect(() => {
        localStorage.removeItem('selectedComponent');
    }, []);

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
                        <div className="card-component" key={index} >
                            <img src={component.image} alt={component.title} />
                            <div className="about-card">
                                <h1><Link to='/component' onClick={() => {
                                    handleComponentClick(component);
                                }}
                            >
                                {component.title}
                            </Link></h1>
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