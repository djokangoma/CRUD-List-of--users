import data from "../data/db.json";
import { Link } from "react-router-dom";

export default function Home() {
  console.log("DATA :" + JSON.stringify(data));

  return (
    <div>
      <h1>list of users</h1>
      <button>
        <Link to="/create"> Add+</Link>
      </button>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.users.map((item, i) => (
              <tr key={i}>
                <td>{item.id} </td>
                <td>{item.userName} </td>
                <td>{item.name} </td>
                <td>{item.email} </td>
                <td>{item.phone} </td>
                <td>
                  <button>
                    <Link to="./read/:id">Read</Link>
                  </button>
                  <button>
                    <Link to="/update/:id">Edit</Link>
                  </button>
                  <button className="">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
