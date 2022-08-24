import React from "react";
import { Auth, Button } from "@supabase/ui";
import { supabase } from "../../supabaseClient";
import { Link } from "react-router-dom";

const Logout = () => {
  const { user } = Auth.useUser();
  console.log("Dash", user);
  if (user)
    return (
      <>
        <Link to="/home">
          <Button block onClick={async () => await supabase.auth.signOut()}>
            Sign out
          </Button>
        </Link>
      </>
    );
};

export default Logout;
