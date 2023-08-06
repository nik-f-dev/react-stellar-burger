import { Navigate, Route, Routes, useLocation } from "react-router-dom";
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
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUserAuth } from "../../services/actions/login";

function App() {
  const dispatch = useDispatch();

  const isSuccess = useSelector((store) => store.forgot.isForgotSuccess);
  useEffect(() => {
    dispatch(checkUserAuth());
  }, []);
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Routes location={background || location}>
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
          {isSuccess ? (
            <Route path="/reset-password" element={<ResetPassword />} />
          ) : (
            <Route path="/reset-password" element={<Navigate to="/" />} />
          )}
          <Route path="/order-tape" element={<OrderTape />} />
          <Route
            path="/profile"
            element={<OnlyAuth component={<ProfileLayout />} />}
          >
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/orders" element={<ProfileOrders />} />
          </Route>
          <Route path="/ingredients/:id" element={<IngredientDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="/ingredients/:id" element={<IngredientDetails />} />
        </Routes>
      )}
    </>
  );
}

export default App;
