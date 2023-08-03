import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/order-tape" element={<OrderTape />} />
        <Route path="/profile" element={<ProfileLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/orders" element={<ProfileOrders />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
