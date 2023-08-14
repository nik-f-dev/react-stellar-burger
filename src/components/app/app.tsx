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
import Modal from "../modal/modal";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { checkUserAuth } from "../../services/actions/login";
import { getIngredients } from "../../services/actions/burger-ingredients";
import OrderDetails from "../order-details/order-details";

function App() {
  const dispatch = useAppDispatch();

  const isSuccess = useAppSelector(
    (store) => (store as any).forgot.isForgotSuccess
  ) as boolean;
  useEffect(() => {
    dispatch(checkUserAuth());
    dispatch(getIngredients());
  }, []);
  const location = useLocation();
  const background = location.state && location.state.background;

  const mainContent = (
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/register"
        element={<OnlyUnAuth>{<RegisterPage />}</OnlyUnAuth>}
      />
      <Route path="/login" element={<OnlyUnAuth>{<LoginPage />}</OnlyUnAuth>} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      {isSuccess ? (
        <Route path="/reset-password" element={<ResetPassword />} />
      ) : (
        <Route path="/reset-password" element={<Navigate to="/" />} />
      )}
      <Route path="/order-tape" element={<OrderTape />} />
      <Route path="/profile" element={<OnlyAuth>{<ProfileLayout />}</OnlyAuth>}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/orders" element={<ProfileOrders />} />
      </Route>
      <Route path="/ingredients/:id" element={<IngredientDetails />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  );

  const modalRoutes = (
    <>
      <Route
        path="/ingredients/:id"
        element={
          <Modal closePath="/">
            <IngredientDetails />
          </Modal>
        }
      />
      <Route
        path="/order-modal"
        element={
          <Modal closePath="/">
            <OrderDetails />
          </Modal>
        }
      />
    </>
  );

  return (
    <>
      <Routes location={background || location}>{mainContent}</Routes>
      {background && <Routes>{modalRoutes}</Routes>}
    </>
  );
}

export default App;
