import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import rootReducer from "./rootReducer";
import {api} from "./@api/api";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(api.middleware),
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
