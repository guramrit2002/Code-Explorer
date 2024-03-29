import '../styles/singleComponents/faq.css';
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io"; // Import IoIosArrowDropup for the open state
import { useState } from 'react';

function Faq() {
    const [drop, setDrop] = useState([
        {
            question: 'njdjndf',
            answer: 'sdjnlsvndnkv',
            open: false
        },
        // Add more FAQs here as needed
    ]);

    // Toggle open state for FAQ
    const toggleFaq = index => {
        const newDrop = drop.map((item, idx) => {
            if (idx === index) {
                // Toggle open for the clicked item
                return { ...item, open: !item.open };
            }
            return item; // Keep others unchanged
        });
        setDrop(newDrop);
    };

    return (
        <section className="faq">
        
            {drop.map((item, index) => (
                <div className="single-faq" key={index} onClick={() => toggleFaq(index)}>
                    <div className="question">
                        <strong>{item.question} {item.open ? <IoIosArrowDropup className='drop' /> : <IoIosArrowDropdown className='drop' />}</strong>
                    </div>
                    {item.open && (
                        <div className="answer">
                            <p>{item.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
}

export default Faq;
