using Microsoft.AspNetCore.Mvc;
using Q1.Model;
using Q1.Services;

namespace Q1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpController:ControllerBase
    {
        private readonly IEmp member;

        public EmpController(IEmp mem)
        {
            member = mem;
        }
        [HttpGet]
        public IEnumerable<Employee>Get()
        {
            return member.GetAllMembers();
        }

        [HttpGet("{id:int}")]
        public Employee Get(int id)
        {
            return member.GetMember(id);
        }

        [HttpDelete("{id}")]
        public Employee Delete(int id)
        {
            return member.Deletebyid(id);
        }

        [HttpPut("{id}")]
        public Employee Put(int id,[FromBody]Employee employee)
        {
            return member.Update(id,employee);
        }

        [HttpPost]
        public Employee post([FromBody]Employee employee)
        {
            return member.Add(employee);
        }

        [HttpGet("{name}")]
        public IEnumerable<Employee> Get(string name)
        {
            return member.GetAllEmployeesbyname(name);
        }

        [HttpGet("Address/{address}")]
        public IEnumerable<Employee> GetAddress(string address)
        {
            return member.GetAllEmployeesbyaddress(address);
        }
    }
}
