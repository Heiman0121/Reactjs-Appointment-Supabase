import { supabase } from "../../supabaseClient";

const ListAppointment = ({ data, onDelete }) => {
  console.log("list", data);

  async function deleteTask(id) {
    await supabase.from("appointment").delete().eq("id", id); // the id of row to delete
    onDelete();
  }

  return (
    <div class="overflow-x-auto flex items-center justify-center">
      <table class="table w-half shadow-lg bg-white ">
        <tbody>
          <tr>
            <th class="bg-blue-400 border text-left px-4 py-4">ID</th>
            <th class="bg-blue-400 border text-left px-14 py-4">Date</th>
            <th class="bg-blue-400 border text-left px-16 py-4">Time</th>
            <th class="bg-blue-400 border text-left px-4 py-4">Action</th>
          </tr>

          {data.map((task, index) => (
            <tr key={task.id}>
              <td class="border px-4 py-4">{index + 1}</td>
              <td class="border px-4 py-4">{task.date}</td>
              <td class="border px-4 py-4">{task.time}</td>
              <td class="border px-8 py-4">
                {" "}
                <button
                  class="bg-red-50 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListAppointment;
