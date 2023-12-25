import React from "react";
import { useParams } from "react-router-dom";


const DetailProject = () => {
  const { id } = useParams();
  return (<div>Detail Project info - {id}</div>);
};

export default DetailProject;
