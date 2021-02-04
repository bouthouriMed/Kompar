import { ADD_FORM, GET_FORM } from './types'
import axios from 'axios'

// Add form
export const addForm = (formData, history) => async (dispatch) => {
    try {
        
        let res = await axios.post('/api/form', formData)
        console.log({msg: res.data})
        dispatch({
            type: ADD_FORM,
            payload: res.data
        })

        history.push(`/offer/${res.data._id}`)
        

    } catch (error) {
        console.log('not ok')
    }
}

// Get offer by ID
export const getOfferById = (id) => async dispatch => {
    try {
        let res = await axios.get(`/api/form/${id}`)

        dispatch({
            type: GET_FORM,
            payload: res.data   
        })
    } catch (error) {
        console.log(error)
    }
}