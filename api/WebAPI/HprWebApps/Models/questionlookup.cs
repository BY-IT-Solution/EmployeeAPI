
namespace HprWebApps.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class QuestionLookup
    {
        public int questionId { get; set; }
        public string questionType { get; set; }
        public string Institution { get; set; }
        public string questionDescription { get; set; }
        public string currentDateTime { get; set; }
    }
}
