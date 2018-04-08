using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demo.Models.ViewModels
{
    public class ModelSelectorViewModel
    {
        public IEnumerable<Brand> Brands { get; set; }
        public IEnumerable<Model> Models { get; set; }

        public ModelSelectorViewModel(IEnumerable<Brand> brands, IEnumerable<Model> models)
        {
            this.Brands = brands;
            foreach (var b in Brands)
            {
                b.Models = null;
            }

            this.Models = models;
            foreach (var m in Models)
            {
                m.Brand = null;
            }
        }
    }
}
