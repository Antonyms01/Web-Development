using Microsoft.EntityFrameworkCore;
using Q2.Model;
using System;

namespace Q2.Repositery
{
    public class AppDBContext:DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options)
             : base(options)
        {
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Data Source=(localdb)\\ProjectModels;Initial Catalog=DB2;Integrated Security=True");
            }
        }
        public DbSet<Employee> Employees { get; set; }
    }
}
