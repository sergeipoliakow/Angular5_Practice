using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demo.Models
{
    public enum Country { Russia, Japan, USA, Germany, UK, China}

    public class Brand
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Country Country { get; set; }

        public List<Model> Models { get; set; }
    }
}
