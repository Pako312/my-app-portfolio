import React from "react";
import { useParams } from "react-router-dom";

export const DetailSkill=()=>{
    const {slug} = useParams()
    return(
        <div>
            Detail Skills Info - {slug}
        </div>
    )
}
