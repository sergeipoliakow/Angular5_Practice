using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demo.Models
{
    public class Option
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Caption { get; set; }
        public float Cost { get; set; }

        public List<OptionsOfCar> OptionsOfCars { get; set; }
    }
}
