import Faq from "./faq";
import '../styles/singleComponents/allfaqs.css'
function AllFaq() {
    return (
        <>
            <div className="all-faq">
                <h1>FAQ</h1>
                <div className='faqs'>
                    <Faq />
                    <Faq />
                    <Faq />
                    <Faq />
                </div>
            </div>
        </>
    )
}

export default AllFaq