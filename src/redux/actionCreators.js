import { GET_ALL_POSTS, GET_ALL_SPECIALITIES, GET_ALL_COURSES, GET_ALL_TEACHERS,
         GET_POST, GET_SPECIALITY, GET_LESSON, GET_COURSE } from "./actions"

const params = { 
                method:'GET',
                cache:'default'};

export const getAllPosts = () => dispatch => {
    fetch(`http://localhost:5000/posts`,params).then(response=>{return response.json()}).then(
            response=>{
                return dispatch({
                    type: GET_ALL_POSTS,
                    posts: response
        })
    })
}

export const getAllSpecialities = () => dispatch => {
    fetch(`http://localhost:5000/especialidades`,params).then(response=>{return response.json()}).then(
            response=>{
                return dispatch({
                    type: GET_ALL_SPECIALITIES,
                    specialities: response
        })
    })
}

export const getAllCourses = () => dispatch => {
    fetch(`http://localhost:5000/cursos`,params).then(response=>{return response.json()}).then(
            response=>{
                return dispatch({
                    type: GET_ALL_COURSES,
                    courses: response
        })
    })
}

export const getAllTeachers = () => dispatch => {
    fetch(`http://localhost:5000/profesores`,params).then(response=>{return response.json()}).then(
            response=>{
                return dispatch({
                    type: GET_ALL_TEACHERS,
                    teachers: response
        })
    })
}



export const getPost = (id) => dispatch => {
    fetch(`http://localhost:5000/posts/${id}`,params).then(response=>{return response.json()}).then(
            response=>{
                return dispatch({
                    type: GET_POST,
                    post: response
        })
    })
}

export const getSpeciality = id => dispatch => {
    fetch(`http://localhost:5000/especialidades/${id}`,params).then(response=>{return response.json()}).then(
            response=>{
                return dispatch({
                    type: GET_SPECIALITY,
                    speciality: response
        })
    })
}

export const getCourse = id => dispatch => {
    fetch(`http://localhost:5000/cursos/${id}`,params).then(response=>{return response.json()}).then(
            response=>{
                return dispatch({
                    type: GET_COURSE,
                    course: response
        })
    })
}

export const getLesson = id => dispatch => {
    fetch(`http://localhost:5000/clases/${id}`,params).then(response=>{return response.json()}).then(
            response=>{
                return dispatch({
                    type: GET_LESSON,
                    lesson: response
        })
    })
}
