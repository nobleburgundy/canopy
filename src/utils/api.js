import axios from "axios";
const EMPLOYEE_LIST = "./employees.json";

const api = {
  getEmployees: function (size) {
    return axios.get(`${EMPLOYEE_LIST}`).then((res) => {
      const employees = res.data;
      return employees.map((employee) => {
        return {
          id: employee.id,
          first_name: employee.first_name,
          last_name: employee.last_name,
          full_name: `${employee.first_name} ${employee.last_name}`,
          email: employee.email,
          title: employee.employment.title,
          city: employee.address.city,
          state: employee.address.state,
          country: employee.address.country,
          username: employee.username,
          phone_number: employee.phone_number,
          subscription: {
            plan: employee.subscription.plan,
            status: employee.subscription.status,
            term: employee.subscription.term,
          },
        };
      });
    });
  },
};

export default api;
