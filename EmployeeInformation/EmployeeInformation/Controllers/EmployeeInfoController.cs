using EmployeeInformation.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeInformation.Controllers
{
    [Route("api/EmployeeInfo")]
    [ApiController]
    public class EmployeeInfoController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<EmployeeInfo> ListOfEmployees()
        {
            var employeeInformation = new List<EmployeeInfo>();
            using (var context = new HPRCMSDBContext())
            {
                employeeInformation = context.EmployeeInfos.ToList();
            }
            return employeeInformation;
        }
    }
}
