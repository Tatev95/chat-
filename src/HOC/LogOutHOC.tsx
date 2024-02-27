import React, { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { loginProvider } from "../providers/account-provider";

interface LogOutHOCProps {
  children: ReactNode;
}

export const LogOutHOC: FC<LogOutHOCProps> = ({ children }) => {
  const token = loginProvider.getUsername();

  if (token) {
    return <Navigate to="/chat" />;
  }

  return <div>{children}</div>;
};
