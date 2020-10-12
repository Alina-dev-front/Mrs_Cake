using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mrs_Cake.MrsCakeData
{
    public class MrsCakeDatabaseSettings : IMrsCakeDatabaseSettings
    {
        public string CollectionName_Products { get; set; }
        public string CollectionName_Bakeries { get; set; }
        public string CollectionName_Orders { get; set; }
        public string CollectionName_Users { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IMrsCakeDatabaseSettings
    {
        public string CollectionName_Products { get; set; }
        public string CollectionName_Bakeries { get; set; }
        public string CollectionName_Orders { get; set; }
        public string CollectionName_Users { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
