import { GET_SKILL_ERROR, 
    GET_SKILL_REQUEST, 
    GET_SKILL_SUCCES,
    GET_SKILL_BY_SLUG_ERROR,
    GET_SKILL_BY_SLUG_REQUEST,
    GET_SKILL_BY_SLUG_SUCCES
 } from "./types"

const initialState = {
    isFetching: false,
    list: [],
    data: null,
    error: null

}

const skillReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SKILL_SUCCES:
            return {
                ...state,
                list: action.payload,
                isFetching: false,
            }
        case GET_SKILL_REQUEST:
            return {

                ...state,
                isFetching: true,
            }
        case GET_SKILL_ERROR:
            return {
                ...state,
                isFetching: false,
                error:action.payload
            }
        case GET_SKILL_BY_SLUG_REQUEST:
            return {
                ...state,
                isFetching:true
            }
        case GET_SKILL_BY_SLUG_ERROR:
            return {
                ...state,
                isFetching: false,
                error:action.payload
            }
        case GET_SKILL_BY_SLUG_SUCCES:
            return {
                ...state,
                isFetching:false,
                data:action.payload
            }
            default:
                return state

    }
}

export default skillReducer;





