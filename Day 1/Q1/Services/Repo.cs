using Q1.Model;

namespace Q1.Services
{
    public class Repo:IEmp
    {
        static List<Employee> listMembers = new List<Employee>
    {
    new Employee{MemberId=1, FirstName="Kirtesh", LastName="Shah", Address="Mumbai" },
    new Employee{MemberId=2, FirstName="Nitya", LastName="Shah", Address="Vadodara" },
    new Employee{MemberId=3, FirstName="Dilip", LastName="Shah", Address="Banglore" },
    new Employee{MemberId=4, FirstName="Atul", LastName="Shah", Address="Indore" },
    new Employee{MemberId=5, FirstName="Swati", LastName="Shah", Address="Mumbai" },
    new Employee{MemberId=6, FirstName="Rashmi", LastName="Shah", Address="Ahamdabad" },
    };
        public Employee GetMember(int id)
        {
            return listMembers.FirstOrDefault(x => x.MemberId == id);
        }
        public Employee Add(Employee employee)
        {
            employee.MemberId = listMembers.Max(x => x.MemberId) +1;
            listMembers.Add(employee);
            return employee;

        }

        public Employee Deletebyid(int id)
        {
           Employee emp=listMembers.FirstOrDefault(e=>e.MemberId == id);
            if(emp != null)
            {
                listMembers.Remove(emp);
            }
            return emp;
        }

        

        public List<Employee> GetAllMembers()
        {
            return listMembers;
        }

      

        public Employee Update(int id, Employee employeechanges)
        {
            Employee emp=listMembers.FirstOrDefault(e=>e.MemberId==employeechanges.MemberId);
            if(emp != null)
            {
                emp.FirstName= employeechanges.FirstName;
                emp.LastName= employeechanges.LastName;
                emp.Address= employeechanges.Address;
            }
            return emp;
        }

        public List<Employee> GetAllEmployeesbyaddress(string address)
        {
            return listMembers.FindAll(x => x.Address==address);
        }

        public List<Employee> GetAllEmployeesbyname(string name)
        {
           return listMembers.FindAll((nm)=>nm.FirstName==name);
        }
    }
}

