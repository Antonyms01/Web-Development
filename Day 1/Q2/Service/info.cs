using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Q2.Model;
using Q2.Repositery;

namespace Q2.Service
{
    public class info : IEmp
    {
        private readonly AppDBContext context;
        public info(AppDBContext context)
        {
            this.context = context;
        }
        public async Task<ActionResult<Employee>> AddEmp(Employee emp)
        {
            context.Employees.Add(emp);
            await context.SaveChangesAsync();
            return emp; 
        }

        public async Task<ActionResult<Employee>> DeleteEmp(int id)
        {
            Employee emp = context.Employees.Find(id);
            if (emp != null) 
            { 
                context.Employees.Remove(emp);
                await context.SaveChangesAsync();
            }
            return emp;
        }

        public async Task<ActionResult<IEnumerable<Employee>>> GetAllEmp()
        {
            if(context.Employees == null)
            {
                return null;
            }
            return await context.Employees.ToListAsync();
        }

        public async Task<ActionResult<Employee>> GetEmp(int id)
        {
            if(context.Employees == null)
            {
                return null;
            }
            var empolyees=await context.Employees.FindAsync(id);
            if(empolyees == null)
            {
                return null;
            }
            return empolyees;
        }

        public async Task<ActionResult<Employee>> UpdateEmp(int id, Employee empchanges)
        {
            if (id != empchanges.Id)
            {
                return null;
            }

            context.Entry(empchanges).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }
            return null;

        }

        private bool EmployeeExists(int id)
        {
            return (context.Employees?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
