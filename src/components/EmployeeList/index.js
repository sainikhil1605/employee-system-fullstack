import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../services/EmployeeService";

const EmployeeList = () => {
  const [employees, setEmployees] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.get("/employees").then((res) => {
      setEmployees(res.data);
      console.log(employees);
    });
  }, []);
  return (
    <div className="container m-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addEmployee")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium uppercase tracking-wider py-3 px-6">
                Email Id
              </th>
              <th className="text-left font-medium uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {employees?.map(({ firstName, lastName, emailId }) => (
              <tr>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{firstName}</div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{lastName}</div>
                </td>{" "}
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{emailId}</div>
                </td>
                <td text-right px-6 py-4 whitespace-nowrap>
                  <a href="#" className="text-indigo-600 px-4">
                    Edit
                  </a>
                  <a className="text-indigo-600 px-4" href="#">
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default EmployeeList;
