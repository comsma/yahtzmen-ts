"use client"
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./rootReducer";

function saveToLocalStorage(state: ReduxState) {

  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistentState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistentState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

export const reduxStore = configureStore({
  reducer: reducer,
preloadedState: loadFromLocalStorage()});

reduxStore.subscribe(() => {
  saveToLocalStorage(reduxStore.getState())
  console.log(reduxStore.getState())
} );

// Infer the `RootState` and `AppDispatch` types from the store itself
export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatch = typeof reduxStore.dispatch;
export type ReduxStore = typeof reduxStore;
