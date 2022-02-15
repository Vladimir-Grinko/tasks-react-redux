import { configureStore, combineReducers } from "@reduxjs/toolkit";
import errorReduser from "./errors";
import { logger } from "./middleware/logger";
import taskReduser from "./task";

const rootReduser = combineReducers({
  errors: errorReduser,
  tasks: taskReduser,
});

function createStore() {
  return configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
  });
}

export default createStore;
