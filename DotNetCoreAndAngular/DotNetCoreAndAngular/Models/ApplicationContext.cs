using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace DotNetCoreAndAngular.Models
{
    public class ApplicationContext: DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options): base(options)
        {

        }

        public DbSet<Product> Products { get; set; }

        public DbSet<Currency> Currencies { get; set; }
    }
}
