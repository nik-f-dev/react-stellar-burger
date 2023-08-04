import { Route, Routes } from "react-router-dom";
import { OnlyAuth, OnlyUnAuth } from "../protected/protected";
import {
  HomePage,
  NotFound,
  Layout,
  ProfileLayout,
  OrderTape,
  RegisterPage,
  LoginPage,
  ResetPassword,
  ForgotPassword,
  ProfileOrders,
  Profile,
} from "../../pages/index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUserAuth } from "../../services/actions/login";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserAuth());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={<OnlyUnAuth component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<OnlyUnAuth component={<LoginPage />} />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/order-tape" element={<OrderTape />} />
        <Route
          path="/profile"
          element={<OnlyAuth component={<ProfileLayout />} />}
        >
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/orders" element={<ProfileOrders />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
