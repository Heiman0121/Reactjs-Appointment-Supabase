import React from "react";
import { Auth } from "@supabase/ui";
import { Navigate } from "react-router-dom";

const Private = (props) => {
  const { user } = Auth.useUser();

  if (!user) {
    console.log("Login", user);
    return <Navigate to="/login" />;
  }
  return props.children;
};

export default Private;
