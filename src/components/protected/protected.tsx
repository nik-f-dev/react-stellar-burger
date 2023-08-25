import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../utils/hooks";
import { useEffect } from "react";
import { checkUserAuth } from "../../services/actions/login";
import Loader from "../loader/loader";
import { TProtected } from "../../utils/types/types";

const Protected = ({ onlyUnAuth = false, children }: TProtected) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUserAuth());
  }, [dispatch]);

  const isAuthChecked = useAppSelector((store) => store.login.isAuthChecked);
  const user = useAppSelector((store) => store.login.user);
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
