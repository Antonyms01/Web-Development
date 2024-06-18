using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Q2.Model;
using Q2.Service;

namespace Q2.Controllers
{
    public class Controller:ControllerBase
    {
        private readonly IEmp _repository;

        public Controller(IEmp repository)
        {
            _repository = repository;

        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>?>> GetEmployees()
        {
            if (await _repository.GetAllEmp() == null)
            {
                return NotFound();
            }

            return await _repository.GetAllEmp();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetById_ActionResultOfT(int id)
        {
            var employee = await _repository.GetEmp(id);
            return employee == null ? NotFound() : employee;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployee(int id, Employee employee)
        {
            if (id != employee.Id)
            {
                return BadRequest();
            }
            try
            {
                await _repository.UpdateEmp(id, employee);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (_repository.GetEmp(id) == null)
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        // POST: api/Employees
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        /*[HttpPost]
        public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
        {
            await _repository.Add(employee);
            return CreatedAtAction("PostEmployee", new { id = employee.Id }, employee);
        }*/
        // DELETE: api/Employees/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            await _repository.DeleteEmp(id);
            return NoContent();
        }


    }
}
