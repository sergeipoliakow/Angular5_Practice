using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demo.Models
{
    public enum EngineType { Petrol, Diesel, Electric, Hybrid }

    public class Engine
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Power { get; set; }
        public EngineType Type { get; set; }
        public int Cost { get; set; }

        public int BrandId { get; set; }
        public Brand Brand { get; set; }

        public List<EngineOfModel> EngineOfModels { get; set; }
    }
}
