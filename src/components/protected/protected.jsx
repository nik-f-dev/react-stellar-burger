import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkUserAuth } from "../../services/actions/login";
import styles from "./protected.module.css";

const Protected = ({ onlyUnAuth = false, component }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserAuth());
  }, [dispatch]);

  const isAuthChecked = useSelector((store) => store.login.isAuthChecked);
  const user = useSelector((store) => store.login.user);
  const location = useLocation();

  if (!isAuthChecked) {
    return (
      <div className={styles.loaderWrapper}>
        <span className={styles.loader}></span>
      </div>
    );
  }

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
};

export const OnlyAuth = (props) => <Protected onlyUnAuth={false} {...props} />;
export const OnlyUnAuth = (props) => <Protected onlyUnAuth={true} {...props} />;
