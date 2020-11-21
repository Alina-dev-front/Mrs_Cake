using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Mrs_Cake.Services;
using Microsoft.Extensions.Logging;
using Mrs_Cake.MrsCakeData;
using System;
using System.Reflection;
using System.IO;

namespace Mrs_Cake
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<MrsCakeDatabaseSettings>(
                Configuration.GetSection(nameof(MrsCakeDatabaseSettings)));

            services.AddSingleton<IMrsCakeDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<MrsCakeDatabaseSettings>>().Value);

            services.AddSingleton<ProductService>();
            services.AddSingleton<UserService>();
            services.AddSingleton<OrderService>();
            services.AddSingleton<BakeryService>();
            services.AddSingleton<LoginService>();
            services.AddSingleton<LogoutService>();
            services.AddControllers();
            services.AddSwaggerGen();
            services.AddCors(o => o.AddPolicy("ReactPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));
        }
        
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // Enable middleware to serve generated Swagger as a JSON endpoint.
            
            app.UseSwagger(c =>
            {
                c.SerializeAsV2 = true;
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");


            });
            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors("ReactPolicy");

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
