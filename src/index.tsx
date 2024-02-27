import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { AuthHOC } from "./HOC/AuthHOC";
import { LogOutHOC } from "./HOC/LogOutHOC";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./components/signin/SignIn";
import { Messages } from "./components/messages/Messages";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LogOutHOC>
              <SignIn />
            </LogOutHOC>
          }
        />
        <Route
          path="/chat"
          element={
            <AuthHOC>
              <Messages />
            </AuthHOC>
          }
        />
      </Routes>
    </BrowserRouter>
  </Provider>
);
