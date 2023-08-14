import { useEffect } from "react";
import AppHeader from "../components/app-header/app-header";
import { Outlet } from "react-router-dom";
import { checkUserAuth } from "../services/actions/login";
import { useAppDispatch } from "../utils/hooks";

export default function Layout() {
  const dispatch = useAppDispatch();
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
