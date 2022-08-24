import { Auth } from "@supabase/ui";
import Navbar from "../ui/Navbar";

const Profile = () => {
  const { user } = Auth.useUser();
  console.log("Profile", user);

  // Redirect to login page if not loading and no user found
  return (
    <>
      <Navbar />
      <div className="label">Email</div>
      <div className="profile-info">{user.email}</div>

      <div className="label">User Id</div>
      <div className="profile-info">{user.id}</div>
    </>
  );
};

export default Profile;
