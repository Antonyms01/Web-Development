
using Microsoft.EntityFrameworkCore;
using Q2.Repositery;
using Q2.Service;

namespace Q2
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddTransient<IEmp, info>();
            builder.Services.AddDbContext<AppDBContext>(option=>option.UseSqlServer(builder.Configuration.GetConnectionString("EmployeeDBConnection")),ServiceLifetime.Transient);
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddCors((p) => p.AddDefaultPolicy(policy => policy.WithOrigins("*")
            .AllowAnyHeader().AllowAnyMethod()

    ));

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseCors();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
