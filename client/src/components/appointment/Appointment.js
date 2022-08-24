import { useState, useEffect, Fragment } from "react";
import AddAppointment from "./AddAppointment";
import ListAppointment from "./ListAppointment";
import { supabase } from "../../supabaseClient";
import Logout from "../login/Logout";
import Navbar from "../ui/Navbar";

const Appointment = () => {
  const [task, setTask] = useState([]);

  async function getTasks() {
    const { data } = await supabase.from("appointment").select(); // Select all appointment
    setTask(data);
    console.log("app", data);
  }

  useEffect(() => {
    getTasks();
  }, []);

  const callBack = () => {
    getTasks();
  };

  return (
    <Fragment>
      <Navbar />
      <Logout />
      <AddAppointment onSubmit={callBack} />
      <ListAppointment data={task} onDelete={callBack} />
    </Fragment>
  );
};

export default Appointment;
