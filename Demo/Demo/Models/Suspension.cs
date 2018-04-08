using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demo.Models
{
    public class Suspension
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float Cost { get; set; }

        public List<Car> Cars { get; set; }
    }
}
