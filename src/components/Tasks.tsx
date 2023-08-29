import React from "react";

const Tasks = () => {
  // Sample tasks data
  const tasks = [
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" },
    { id: 4, title: "Task 4" },
    { id: 5, title: "Task 5" },
    { id: 6, title: "Task 6" },
    { id: 7, title: "Task 7" },
    { id: 8, title: "Task 8" },

    // Add more tasks as needed
  ];

  return (
    <div className="container">
      <div className="row">
        {tasks.map((task) => (
          <div key={task.id} className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                {/* Add more task details here */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
