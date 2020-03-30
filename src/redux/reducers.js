import { GET_ALL_POSTS } from "./actions"

export const postReducer = (state ={}, action)=>{
    if(action.type === GET_ALL_POSTS){
        return {
            ...state,
            posts: action.posts
        }
    }

    if(action.type === GET_POST){
        return {
            ...state,
            post
        }
    }
    return state
}

export const specialityReducer = (state ={}, action)=>{
    return state
}

export const courseReducer = (state ={}, action)=>{
    return state
}

export const teacherReducer = (state ={}, action)=>{
    return state
}

export const lessonReducer = (state ={}, action)=>{
    return state
}
