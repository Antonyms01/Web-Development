using Microsoft.AspNetCore.Mvc;
using Q1.Model;

namespace Q1.Services
{
    public interface IEmp
    {
        List<Employee> GetAllMembers();
        Employee GetMember(int id);

        Employee Add (Employee employee);

        Employee Update (int id,Employee employeechanges);

        Employee Deletebyid(int id);

        List<Employee> GetAllEmployeesbyname(string name);
        List<Employee> GetAllEmployeesbyaddress(string address);

    }
}
