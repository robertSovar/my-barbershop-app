import { Suspense } from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

export default function SharedLayout() {
  return (
    <Suspense>
      <Header />
      <Outlet />
    </Suspense>
  );
}
