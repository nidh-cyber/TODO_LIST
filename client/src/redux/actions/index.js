import axios from 'axios';
import { ADDNEW_TODO } from './type';
import { GETALL_TODO } from './type';
import { TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB } from './type';


const API_URL = 'http://localhost:8000';

export const addNewTodo =  (data) => async (dispatch) => {
    try{

        const res = await axios.post(`${API_URL}/todos`, {data});
        dispatch({type:ADDNEW_TODO , payload:res.data});
    }catch (error) {
        console.log('error while calling addNewTodo', error.message);
    }
    
}


export const getAllTodos = () => async(dispatch) =>{
    try{

        const res = await axios.get(`${API_URL}/todos`);
        dispatch({type:GETALL_TODO , payload:res.data});
    }catch (error) {
        console.log('error while calling getAllTodos API', error.message);
    } 
}

export const toggleTodo = (id) => async(dispatch) => {
    try{

        const res = await axios.get(`${API_URL}/todos/${id}`);
        dispatch({type:TOGGLE_TODO , payload:res.data});
        // return response.status(200).json(todos);
    }catch (error) {
        console.log('error while calling getAllTodos API', error.message);
    }  
}

export const updateTodo = (id, data) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/todos/${id}`, { data });

        dispatch({ type: UPDATE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling updateTodo API ', error.message);
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/todos/${id}`);

        dispatch({ type: DELETE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling deleteTodo API ', error.message);
    }
}

export const toggleTab = (tab) => async (dispatch) => {
    dispatch({ type: TOGGLE_TAB, selected: tab })
}
