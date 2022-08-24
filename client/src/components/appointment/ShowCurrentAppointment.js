const ShowCurrentAppointment = ({ data }) => {
  console.log("show", data);

  return (
    <div class="overflow-x-auto flex items-center justify-center">
      <table class="table w-half shadow-lg bg-white ">
        <tbody>
          <tr>
            <th class="bg-blue-400 border text-left px-4 py-4">Name</th>
            <th class="bg-blue-400 border text-left px-14 py-4">Date</th>
            <th class="bg-blue-400 border text-left px-16 py-4">Time</th>
          </tr>

          {data.map((task, index) => (
            <tr key={task.id}>
              <td class="border px-4 py-4">{task.name}</td>
              <td class="border px-4 py-4">{task.date}</td>
              <td class="border px-4 py-4">{task.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowCurrentAppointment;
