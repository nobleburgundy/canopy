import axios from "axios";
const RANDOM_API_URL = "https://random-data-api.com/api/users/random_user";

export default {
  getEmployees: function (size) {
    return axios.get(`${RANDOM_API_URL}/?size=25`).then((res) => {
      const employees = res.data;
      console.log("getEmployees", employees);
      return employees.map((employee) => {
        return {
          id: employee.id,
          first_name: employee.first_name,
          last_name: employee.last_name,
          email: employee.email,
          title: employee.employment.title,
          city: employee.address.city,
          state: employee.address.state,
          country: employee.address.country,
          username: employee.username,
          phone_number: employee.phone_number,
        };
      });
    });
  },
};
