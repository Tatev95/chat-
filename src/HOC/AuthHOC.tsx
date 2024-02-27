import React, { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { loginProvider } from "../providers/account-provider";

interface AuthHOCProps {
  children: ReactNode | null;
}

export const AuthHOC: FC<AuthHOCProps> = ({ children }) => {
  const token = loginProvider.getUsername();
  if (!token) {
    return <Navigate to="/" />;
  }

  return <div>{children}</div>;
};
