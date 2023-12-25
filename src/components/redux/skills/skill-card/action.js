import {
    GET_SKILL_REQUEST, GET_SKILL_ERROR, GET_SKILL_SUCCES,
    GET_SKILL_BY_SLUG_ERROR, GET_SKILL_BY_SLUG_REQUEST, GET_SKILL_BY_SLUG_SUCCES
} from "./types";

const getSkillRequest = () => ({
    type: GET_SKILL_BY_SLUG_REQUEST,

});

const getSkillSuccess = (data) => ({
    type: GET_SKILL_BY_SLUG_SUCCES,
    payload: data
})
const getSkillError = (err) => ({
    type: GET_SKILL_BY_SLUG_ERROR,
    payload: err
})
const getSkillsSuccess = (data) => ({
    type: GET_SKILL_SUCCES,
    payload: data
})
const getSkillsError = (err) => ({
    type: GET_SKILL_ERROR,
    payload: err
})

const getSkillsRequest = () => ({
    type: GET_SKILL_REQUEST,

})




export {
    getSkillsError,
    getSkillsRequest,
    getSkillsSuccess,

    getSkillError,
    getSkillRequest,
    getSkillSuccess,
}