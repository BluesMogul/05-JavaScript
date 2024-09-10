import React from "react";
import { useState } from "react";
import { text } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  //Tasks (To Do List) State
  const [task, setTask] = useState([]);

  //Temp State
  const [newTask, setNewTask] = useState("");
  const [updateTask, setUpdateTask] = useState("");

  //Add a Task
  const addTask = () => {
    if (newTask) {
      let num = task.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setTask([...task, newEntry]);
      setNewTask("");
    }
  };

  //Delete a Task
  //Use Filter Method to filter out record id !== (id)
  const deleteTask = (id) => {
    let newTasks = task.filter((task) => task.id !== id);
    setTask(newTasks);
  };

  //Mark Task as Completed
  //Toggles status from true to false or vice versa.
  const taskComplete = (id) => {
    let newTask = task.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status }; //Toggle status to whatever it is not currently.
      }
      return task;
    });
    setTask(newTask);
  };

  //Cancel Update of a Task
  const cancelUpdate = () => {
    setUpdateTask("");
  };

  //Change Task for Update
  const changeTask = (e) => {
    let newEntry = {
      id: updateTask.id,
      title: e.target.value,
      status: updateTask.status ? true : false,
    };
    setUpdateTask(newEntry);
  };

  //Update Task
  const updateData = () => {
    let filterRecords = [...task].filter((task) => task.id !== updateTask.id);
    let updatedObject = [...filterRecords, updateTask];
    setTask(updatedObject);
    setUpdateTask("");
  };

  return (
    <div className="container">
      <div className="appContainer">
        <div className="todoListTitle">
          <text>
            <text style={{ fontSize: "30px", color: "white" }}>THE </text>
            <text
              style={{ fontSize: "30px", fontWeight: "800", color: "#1aff00" }}
            >
              BIG{" "}
            </text>
            <text style={{ fontSize: "30px", fontWeight: "400" }}>
              TO DO LIST
            </text>
          </text>
        </div>
        {/* Update Task */}
        {updateTask && updateTask ? (
          <>
            <div className="row">
              <div className="col">
                <input
                  value={updateTask && updateTask.title}
                  onChange={(e) => changeTask(e)}
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-auto">
                <button
                  onClick={updateData}
                  className="btn btn-lg btn-success margin-right-20"
                >
                  Update
                </button>
                <button
                  onClick={cancelUpdate}
                  className="btn btn-lg btn-warning"
                >
                  Cancel
                </button>
              </div>
            </div>
            <br />
          </>
        ) : (
          <>
            <div className="row">
              <div className="col">
                <input
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  className="form-control form-control-lg"
                  placeholder="Enter New Task"
                />
              </div>
              <div className="col-auto">
                <button onClick={addTask} className="btn btn-lg btn-success">
                  Add Task
                </button>
              </div>
            </div>
            <br />
          </>
        )}

        {/* Display Tasks */}
        <p className="listMessage">
          {task && task.length ? "" : "You Have No Tasks!"}
        </p>
        {task &&
          task
            .sort((a, b) => (a.id > b.id ? 1 : -1)) //Sort tasks by index number
            .map((task, index) => {
              return (
                <React.Fragment key={task.id}>
                  <div className="col taskItem">
                    <div className={task.status ? "done" : ""}>
                      <span className="taskNumber">{index + 1}</span>
                      <span className="taskText">{task.title}</span>
                    </div>
                    <div className="iconsWrap">
                      <span
                        title="Completed / Not Completed"
                        onClick={(e) => taskComplete(task.id)}
                      >
                        <i
                          data-fa-symbol="complete"
                          className="fa-solid fa-circle-check fa-fw"
                        ></i>
                      </span>

                      {task.status ? null : ( //Hide the edit icon if task is marked complete
                        <span
                          title="Edit"
                          onClick={() =>
                            setUpdateTask({
                              id: task.id,
                              title: task.title,
                              status: task.status ? true : false,
                            })
                          }
                        >
                          <i
                            data-fa-symbol="edit"
                            className="fa-solid fa-pen-to-square fa-fw"
                          ></i>
                        </span>
                      )}
                      <span title="Delete" onClick={() => deleteTask(task.id)}>
                        <i
                          data-fa-symbol="delete"
                          className="fa-solid fa-trash fa-fw"
                        ></i>
                      </span>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
      </div>
    </div>
  );
}

export default App;
