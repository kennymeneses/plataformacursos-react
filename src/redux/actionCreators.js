import { GET_ALL_POSTS, GET_ALL_SPECIALITIES, GET_ALL_COURSES, GET_ALL_TEACHERS,
         GET_POST, GET_SPECIALITY, GET_LESSON, GET_COURSE } from "./actions"

export const getAllPosts = () => dispatch => {
    fetch(`http://localhost:5000/posts`).then(
            response=>{
                return dispatch({
                    type: GET_ALL_POSTS,
                    posts: response
        })
    })
}

export const getAllSpecialities = () => dispatch => {
    fetch(`http://localhost:5000/especialidades`).then(
            response=>{
                return dispatch({
                    type: GET_ALL_SPECIALITIES,
                    specialities: response
        })
    })
}

export const getAllCourses = () => dispatch => {
    fetch(`http://localhost:5000/cursos`).then(
            response=>{
                return dispatch({
                    type: GET_ALL_COURSES,
                    courses: response
        })
    })
}

export const getAllTeachers = () => dispatch => {
    fetch(`http://localhost:5000/profesores`).then(
            response=>{
                return dispatch({
                    type: GET_ALL_TEACHERS,
                    teachers: response
        })
    })
}



export const getPost = (id) => dispatch => {
    fetch(`http://localhost:5000/posts/${id}`).then(
            response=>{
                return dispatch({
                    type: GET_POST,
                    post: response
        })
    })
}

export const getSpeciality = (id) => dispatch => {
    fetch(`http://localhost:5000/especialidades/${id}`).then(
            response=>{
                return dispatch({
                    type: GET_SPECIALITY,
                    speciality: response
        })
    })
}

export const getCourse = (id) => dispatch => {
    fetch(`http://localhost:5000/cursos/${id}`).then(
            response=>{
                return dispatch({
                    type: GET_COURSE,
                    course: response
        })
    })
}

export const getLesson = (id) => dispatch => {
    fetch(`http://localhost:5000/clases/${id}`).then(
            response=>{
                return dispatch({
                    type: GET_LESSON,
                    lesson: response
        })
    })
}
