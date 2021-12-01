using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using HprWebApps.Models;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace HprWebApps.Controllers
{
    public class QuestionLookupController : ApiController
    {

        public HttpResponseMessage Get()
        {
            string query = @"select questionId,questionType,Institution,questionDescription,
                           convert(varchar(10),currentDateTime,120) as currentDateTime from dbo.questionLookup";
            DataTable table = new DataTable();
            using (var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["HPRCMSAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, conn))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
                    return Request.CreateResponse(HttpStatusCode.OK, table);

        }
        public string Post(QuestionLookup qlup)
        {
            try
            {
                string query = "insert into dbo.questionLookup values ('" + qlup.questionType + @"','" + qlup.Institution + @"','" + qlup.questionDescription + @"','" + qlup.currentDateTime + @"')";
                DataTable table = new DataTable();
                using (var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["HPRCMSAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, conn))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return ("Add successfully");
            }
            catch (Exception)
            {
                return ("Failed to Add");
            }
        }


        public string Put(QuestionLookup qlup)
        {
            try
            {
                string query = @"update  dbo.questionLookup set questionType= '" + qlup.questionType + @"' , Institution='" + qlup.Institution + @"',questionDescription='" + qlup.questionDescription + @"',currentDateTime='" + qlup.currentDateTime + @"' where questionId=" + qlup.questionId + @"";
                DataTable table = new DataTable();
                using (var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["HPRCMSAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, conn))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return ("update successfully");
            }
            catch (Exception)
            {
                return ("Failed to update");
            }
        }


        public string Delete(int id)
        {
            try
            {
                string query = @"Delete  from dbo.questionLookup  where questionId=" + id + @"";
                DataTable table = new DataTable();
                using (var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["HPRCMSAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, conn))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return ("Delete successfully");
            }
            catch (Exception)
            {
                return ("Failed to Delete");
            }
        }

        [Route("api/QuestionLookup/GetAllInstitutionNames")]
        [HttpGet]
        public HttpResponseMessage GetAllInstitutionNames()
        {
            string query = @" select InstitutionName from dbo.institution";
            DataTable table = new DataTable();
            using (var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["HPRCMSAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, conn))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
        [Route("api/QuestionLookup/GetAllQuestionTypeNames")]
        [HttpGet]
        public HttpResponseMessage GetAllQuestionTypeNames()
        {
            string query = @" select questionTypeName from dbo.question";
            DataTable table = new DataTable();
            using (var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["HPRCMSAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, conn))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }


    }
}
