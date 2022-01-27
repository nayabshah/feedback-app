import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from "./shared/Card"
import FeedbackContext from "../Context/FeedbackContext"
import { useContext } from "react"

function FeedbackItem({item}) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
    // const [rating,setRating]=useState(7)
    // const [text,setText]=useState('This is an example of a Feedback Item')
    // const handleClick =()=>{
    //     setRating((prev)=>{
    //         console.log(prev)
    //         return prev + 1
    //     })
    // }
   
    return (
        // @todo - Add fade Animation
       <Card>
           <div className="num-display">{item.rating}</div>
           <button onClick={() => deleteFeedback(item.id)} className="close">
               <FaTimes color='purple'/>
           </button>
           <button onClick={() => editFeedback(item)} className="edit">
               <FaEdit color='purple'/>
           </button>
           <div className="text-display">{item.text}</div>

           {/* <button onClick={handleClick}>Click</button> */}
       </Card>
    )
}


export default FeedbackItem
