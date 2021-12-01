using System;
using System.Collections.Generic;

#nullable disable

namespace EmployeeInformation.Models
{
    public partial class Questionlookup
    {
        public int QuestionId { get; set; }
        public string QuestionType { get; set; }
        public string Institution { get; set; }
        public string QuestionDescription { get; set; }
        public string CurrentDateTime { get; set; }
    }
}
