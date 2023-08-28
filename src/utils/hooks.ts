import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, DispatchFunc } from "./types/types";

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
