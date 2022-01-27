import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid'
import FeedbackData from '../FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(FeedbackData)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // delete feedbacks
    const deleteFeedback= (id) => {
        if(window.confirm('Are you sure you want to delete ?')){
          setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // set item to be updated
    const editFeedback = (item) =>{
        setFeedbackEdit({item,edit: true})
    }

    // update feedback item
    const updateFeedback = (id, updItem) => {
        // console.log(id, updItem);
        setFeedback(
            feedback.map((item) => (item.id === id ? {...item,...updItem} : item))
        )
        setFeedbackEdit({
        item: {},
        edit: false
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext