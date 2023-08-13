import { Link } from "react-router-dom";
import styles from "./not-found.module.css";

function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Oops! 404 Error</h1>
        <p>The page you requested does not exist</p>
        <p>
          check the address or try{" "}
          <Link to="/" className={styles.link}>
            homepage
          </Link>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
