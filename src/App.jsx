import { Outlet } from "react-router-dom";
import { Router } from "./router";

export default function App() {
  return (
    <>
      <Outlet />
      <Router />
    </>
  );
}
