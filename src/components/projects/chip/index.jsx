import {clsx} from "clsx";
import React from "react";
import styles from "./style.module.scss"

const Chip = (props) => {
    const {
        label,
        isActive,
        onClick,
        className
    } = props
    const classes = clsx(
        styles['chip-wrap'],
        {
            [styles['active']]: isActive,
            [className]: className

        });
    return (
        <div className={classes}>
          <span className={styles["label"]}>{label}</span>
        </div>
      );
    };
    
    export default Chip;
    