import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../../services/EmployeeService";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevState) => ({ ...prevState, [name]: value }));
  };
  const saveEmployee = async (e) => {
    e.preventDefault();
    if (location?.pathname?.indexOf("editEmployee") >= 0) {
      await axiosInstance
        .put(`/employees/${params.id}`, employee)
        .then((res) => {
          console.log(res);
        });
    } else {
      await axiosInstance.post("/employees", employee);
    }

    navigate("/");
  };
  useEffect(() => {
    if (location?.pathname?.indexOf("editEmployee") >= 0) {
      axiosInstance.get(`/employees/${params.id}`).then((res) => {
        setEmployee({ ...res.data });
      });
    }
  }, []);
  const handleClear = () => {
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
  };
  return (
    <div className="flex max-w-2xl show border-b-2 mx-auto">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl">
          <h1>
            {location?.pathname?.indexOf("editEmployee") ? "Edit " : "Add New"}
            Employee
          </h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2 py-2"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2 py-2"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={employee.emailId}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2 py-2"
          />
        </div>
        <div className="items-center flex-column justify-center h-14 w-full my-4 pt-4">
          <div>
            <button
              onClick={saveEmployee}
              className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
            >
              Save
            </button>
          </div>
          <div>
            <button
              className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
              onClick={() => handleClear()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddEmployee;
