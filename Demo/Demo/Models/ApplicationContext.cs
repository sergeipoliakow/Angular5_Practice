using Microsoft.EntityFrameworkCore;

namespace Demo.Models
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        { }

        public DbSet<Brand> Brands { get; set; }
        public DbSet<Car> Cars { get; set; }
        public DbSet<Engine> Engines { get; set; }
        public DbSet<EngineOfModel> EngineOfModels { get; set; }
        public DbSet<Model> Models { get; set; }
        public DbSet<Option> Options { get; set; }
        public DbSet<OptionsOfCar> OptionsOfCars { get; set; }
        public DbSet<Suspension> Suspensions { get; set; }
        public DbSet<Transmission> Transmissions { get; set; }

    }
}
