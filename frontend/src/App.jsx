import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [students, setStudents] = useState([]);

  useEffect(() => {

    axios
      .get("/api/students")
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error(error);
      });

  }, []);

  return (
    <div style={{
      maxWidth: "900px",
      margin: "50px auto",
      fontFamily: "Arial"
    }}>

      <h1>Student Management System</h1>

      <p>
        React + Node.js + Docker + Kubernetes
      </p>

      <hr />

      <h2>Students</h2>

      {students.map(student => (
        <div
          key={student.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            margin: "10px 0"
          }}
        >

          <h3>{student.name}</h3>

          <p>
            Course: {student.course}
          </p>

        </div>
      ))}

    </div>
  );
}

export default App;









