
import React from "react";
import { useParams } from "react-router-dom";
import style from "./style.module.scss";

const DetailExperience = () => {
  const { slug } = useParams();
  return <div>Detail Experience info - {slug}</div>;
};

export default DetailExperience;
