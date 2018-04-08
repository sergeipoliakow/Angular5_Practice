using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetCoreAndAngular.Models
{
    public class Currency
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Caption { get; set; }
        public double Rate { get; set; }
    }
}
