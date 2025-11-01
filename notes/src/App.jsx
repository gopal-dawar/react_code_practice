import { X } from "lucide-react";
import { useState } from "react";
const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  function formHandler(e) {
    e.preventDefault(e);

    const copytask = [...task];
    copytask.push({ title, details });

    setTask(copytask);
    setTitle("");
    setDetails("");
  }

  function deleteTask(idx) {
    const copytask = [...task];
    copytask.splice(idx, 1);
    setTask(copytask);
  }

  return (
    <div className="min-h-screen bg-[#1f1f1f] py-10">
      <div className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
        Notes Maker
      </div>

      <div className="flex flex-col lg:flex-row gap-10 px-5 lg:px-20">
        <form
          onSubmit={(e) => {
            formHandler(e);
          }}
          className="flex flex-col gap-6 w-full lg:w-200 "
        >
          <input
            className="rounded border-2 border-white p-3 w-full text-white bg-transparent placeholder:text-white"
            type="text"
            placeholder="Enter Heading"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <textarea
            className="rounded h-40 border-2 border-white p-3 w-full text-white bg-transparent placeholder:text-white"
            placeholder="Enter notes Details"
            required
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          ></textarea>

          <button className="bg-white text-black font-semibold p-3 rounded hover:scale-105 transition">
            Add Note
          </button>
        </form>

        <div className="flex flex-wrap  gap-6 w-full bg-amber-50 justify-center">
          {task.map((tasks, idx) => {
            return (
              <div
                key={idx}
                className="bg-white p-4  rounded shadow-md w-80 sm:w-80"
              >
                <h1 className="flex justify-between items-center text-xl font-bold mb-2 border-b-2 pb-1">
                  <span className="bg-black w-8 h-8 mr-2 text-xl rounded-full text-white flex justify-center items-center">
                    {idx + 1}
                  </span>
                  {tasks.title}
                  <span
                    onClick={() => {
                      deleteTask(idx);
                    }}
                    className="bg-red-600 hover:bg-red-500 active:scale-110 w-8 h-8 mr-2 text-xl rounded-full text-white flex justify-center items-center"
                  >
                    <X />
                  </span>
                </h1>
                <p className="text-gray-800">{tasks.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
