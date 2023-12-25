import { clsx } from "clsx";
import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const Chip = (props) => {
  const {
    label,
    isActive,
    onClick,
    className,
    asLink,
    icon,
  } = props
  const classes = clsx(
    styles['chip-wrap'],
    {
      [styles['active']]: isActive,
      [className]: className

    });


  const renderLabel = () => {
    return (
      <span className={styles['label']}>
        {icon && <div className={styles['icon-wrap']}>
          <img src={icon} alt={label} />
        </div> }
        {label}
      </span>
    )

  }

  if (asLink) {
    return (
      <Link to={asLink} className={classes}>
        <span>
          {renderLabel()}
        </span>
      </Link>)
  }



  return (
    <div className={classes} onClick={onClick}>
      <span className={styles["label"]}>{label}</span>
    </div>
  );
};

export default Chip;
