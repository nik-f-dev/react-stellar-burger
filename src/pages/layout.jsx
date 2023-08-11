import { useEffect } from "react";
import AppHeader from "../components/app-header/app-header";
import { Outlet } from "react-router-dom";
import { checkUserAuth } from "../services/actions/login";
import { useDispatch } from "react-redux";

export default function Layout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserAuth());
  });
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}
