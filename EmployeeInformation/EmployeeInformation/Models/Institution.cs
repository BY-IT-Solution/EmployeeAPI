using System;
using System.Collections.Generic;

#nullable disable

namespace EmployeeInformation.Models
{
    public partial class Institution
    {
        public int InstitutionId { get; set; }
        public string InstitutionName { get; set; }
        public string InstitutionDescription { get; set; }
    }
}
