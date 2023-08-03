import AppHeader from "../components/app-header/app-header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}
