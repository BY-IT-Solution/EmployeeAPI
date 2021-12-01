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
    public class QuestionTypeController : ApiController
    {

        public HttpResponseMessage Get()
        {
            string query = @"select questionTypeId,questionTypeName,Description from dbo.question";
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
        public string Post(QuestionType quest)
        {
            try
            {
                string query = "insert into dbo.question values ('" + quest.questionTypeName + @"','" + quest.Description + @"')";
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


        public string Put(QuestionType quest)
        {
            try
            {
                string query = @"update  dbo.question set questionTypeName= '" + quest.questionTypeName + @"' , Description='" + quest.Description + @"' where questionTypeId=" + quest.questionTypeId + @"";
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
                string query = @"Delete  from dbo.question  where questionTypeId=" + id + @"";
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

    }
}
