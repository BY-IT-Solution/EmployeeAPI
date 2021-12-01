using System;
using System.Collections.Generic;

#nullable disable

namespace EmployeeInformation.Models
{
    public partial class Question
    {
        public int QuestionTypeId { get; set; }
        public string QuestionTypeName { get; set; }
        public string Description { get; set; }
    }
}
