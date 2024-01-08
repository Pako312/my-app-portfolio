import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const Chip = ({ label, isActive, className, asLink, icon }) => {
  const classes = `${styles["chip-wrap"]} ${isActive ? styles["active"] : ""} ${className ? className : ""}`;

  const renderLabel = () => (
    <span className={styles['label']}>
      {icon && (
        <div className={styles['icon-wrap']}>
          <img src={icon} alt={label} />
        </div>
      )}
      {label}
    </span>
  );

  if (asLink) {
    return (
      <Link to={asLink} className={classes}>
        <span>{renderLabel()}</span>
      </Link>
    );
  }

  return (
    <div className={classes}>
      <span className={styles["label"]}>{label}</span>
    </div>
  );
};

export default Chip;
