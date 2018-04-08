using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demo.Models
{
    enum CarType { Sedan, Crossover, Wagon }
    public class Model
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float BaseCost { get; set; }

        public int BrandId { get; set; }
        public Brand Brand { get; set; }

        public List<Car> Cars { get; set; }

        public List<EngineOfModel> EngineOfModels { get; set; }
    }
}
