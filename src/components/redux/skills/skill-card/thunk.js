import {
    getSkillError,
    getSkillRequest,
    getSkillSuccess,
    getSkillsError,
    getSkillsRequest,
    getSkillsSuccess,
  
} from "./action";
import {SHORT_SKILL_BY_SLUG, SKILLS_DATA} from "..//..//..//skills/skill-card/mock_data";

const fetchSkills=()=>{
    return async  (dispatch)=> {
        dispatch(getSkillsRequest())
        try {
         //TODO.remove SKILLS_DATA when backend will be ready
        dispatch(getSkillsSuccess(SKILLS_DATA))
        }catch (e){
            dispatch(getSkillsError(e))
        }
    }
}
const fetchSkillBySlug=(slug)=>{
    return async (dispatch)=>{
        dispatch(getSkillRequest())
        try {
            // const req = await fetch('')
            // const data = await req.json()
            //TODO.remover SKILL_DATA when backend will be ready
        dispatch(getSkillSuccess(SHORT_SKILL_BY_SLUG(slug)))
        }catch (err){
            dispatch(getSkillError(err))
        }
    }
}
export default {
    fetchSkills,
    fetchSkillBySlug
}
































// import {
//     getSkillRequest,
//     getSkillSuccess,
//     getSkillsError,
//     getSkillError,
//     getSkillsRequest,
//     getSkillsSuccess
// } from "./action"
// import { SHORT_SKILL_BY_SLUG, SKILLS_DATA } from "../../../skills/skill-card/mock_data"

// const fetchSkills = () => {
//     return async (dispatch) => {
//         dispatch(getSkillRequest())
//         try {
//             // const req =await fetch('')
//             // const data=await req.json()
//             dispatch(getSkillsSuccess(SKILLS_DATA))
//         } catch (e) {
//             dispatch(getSkillsError(e))
//         }
//     }
// }

// const fetchSkillBySlug = (slug) => {
//     return async (dispatch) => {
//         dispatch(getSkillRequest())
//         try {

//             // const req =await fetch('')
//             // const data=await req.json()
//             dispatch(getSkillSuccess(SHORT_SKILL_BY_SLUG(slug)))
//         } catch (e) {
//             dispatch(getSkillsError(e))
//         }

//     }
// }

// export {
//     fetchSkillBySlug,
//     fetchSkills
// }