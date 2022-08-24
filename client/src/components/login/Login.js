import React from "react";
import { Auth } from "@supabase/ui";
import { supabase } from "../../supabaseClient";
import { Navigate } from "react-router-dom";
import Navbar from "../ui/Navbar";

export default function Login() {
  const { user } = Auth.useUser();

  if (user) {
    console.log("Login", user);
    return <Navigate to="/appointment" />;
  }

  return (
    <>
      <Navbar />
      <div class="flex justify-center">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body  flex items-center ">
            <Auth
              supabaseClient={supabase}
              providers={["google"]}
              redirectTo="http://localhost:3000/appointment"
            />
          </div>
        </div>
      </div>
    </>
  );
}
