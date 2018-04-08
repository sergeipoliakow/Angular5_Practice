using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demo.Models
{
    public class OptionsOfCar
    {
        public int Id { get; set; }

        public int CarId { get; set; }
        public Car Car { get; set; }

        public int OptionId { get; set; }
        public Option Option { get; set; }
    }
}
