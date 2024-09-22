import { AppDispatch, Rootestore } from "@/redux";
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";

export const useReduxDispatch = () => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<Rootestore> = useSelector;
