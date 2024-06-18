using Microsoft.AspNetCore.Mvc;
using Q2.Model;

namespace Q2.Service
{
    public interface IEmp
    {
        Task<ActionResult<Employee>>GetEmp(int id);
        Task<ActionResult<IEnumerable<Employee>>> GetAllEmp();
        Task<ActionResult<Employee>> AddEmp(Employee emp);
        Task<ActionResult<Employee>> DeleteEmp(int id);
        Task<ActionResult<Employee>> UpdateEmp(int id,Employee empchanges);


    }
}
