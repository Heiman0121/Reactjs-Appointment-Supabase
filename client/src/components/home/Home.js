import { useState, useEffect } from "react";
import ShowCurrentAppointment from "../appointment/ShowCurrentAppointment";
import Navbar from "../ui/Navbar";
import { supabase } from "../../supabaseClient";
const Home = () => {
  const [task, setTask] = useState([]);

  async function getTasks() {
    const { data } = await supabase.from("appointment").select(); // Select all appointment
    setTask(data);
    console.log("app", data);
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <Navbar />
      <div class="static top-100">
        <h1 class="text-2xl font-bold hover:italic text-blue-600 mt-[20px] mb-[80px] overflow-x-auto flex items-center justify-center">
          Current Appointment
        </h1>
        <ShowCurrentAppointment data={task} />
      </div>
    </div>
  );
};

export default Home;
