import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkUserAuth } from "../../services/actions/login";
import Loader from "../loader/loader";
import { TProtected } from "../../utils/types";

const Protected = ({ onlyUnAuth = false, children }: TProtected) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserAuth());
  }, [dispatch]);

  const isAuthChecked = useSelector(
    (store) => (store as any).login.isAuthChecked
  ) as boolean;
  const user = useSelector((store) => (store as any).login.user);
  const location = useLocation();

  if (!isAuthChecked) {
    return <Loader />;
  }

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export const OnlyAuth = ({ children }: { children: JSX.Element }) => (
  <Protected onlyUnAuth={false}>{children}</Protected>
);
export const OnlyUnAuth = ({ children }: { children: JSX.Element }) => (
  <Protected onlyUnAuth={true}>{children}</Protected>
);
