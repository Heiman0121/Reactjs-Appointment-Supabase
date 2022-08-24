import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { Auth } from "@supabase/ui";

const AddAppointment = ({ onSubmit }) => {
  const { user } = Auth.useUser();
  const [task, setTask] = useState({
    name: "",
    date: "",
    time: "",
  });
  console.log("ADD", user);
  const { name, date, time } = task;

  async function addTask() {
    await supabase
      .from("appointment")
      .insert([
        {
          name,
          date,
          time,
        },
      ])
      .single();

    setTask({
      name: "",
      date: "",
      time: "",
    });
    onSubmit();
  }

  return (
    <div class="flex flex-col items-center justify-center py-2">
      <div>Welcome ...User...{user.email}!</div>
      <main class="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 class="text-4xl font-bold mt-20">
          <a class="text-blue-600" href="/">
            Appointment
          </a>
        </h1>
        <div class="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <div class="p-8 mt-6 border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <div class="w-full max-w-sm">
              <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="taskName"
                  >
                    Name
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    value={name.toString()}
                    onChange={(e) => setTask({ ...task, name: e.target.value })}
                  />
                </div>
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="startDate"
                  >
                    Appointment Date
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="date"
                    type="date"
                    value={date.toString()}
                    onChange={(e) => setTask({ ...task, date: e.target.value })}
                  />
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="startDate"
                    >
                      Time
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="time"
                      type="time"
                      value={time.toString()}
                      onChange={(e) =>
                        setTask({ ...task, time: e.target.value })
                      }
                    />
                  </div>
                  <div class="flex items-center justify-end">
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={addTask}
                    >
                      Add Appointment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddAppointment;
