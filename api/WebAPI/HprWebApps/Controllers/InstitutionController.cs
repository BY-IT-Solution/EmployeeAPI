using HprWebApps.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HprWebApps.Controllers
{
    public class InstitutionController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"select InstitutionId,InstitutionName,InstitutionDescription from dbo.institution";
            DataTable table = new DataTable();
            using (var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["HPRCMSAppDB"].ConnectionString)) 
            using (var cmd = new SqlCommand(query, conn))
                using(var da= new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);

        }
        public string Post(Institution inst)
        {
            try
            {
            string query = "insert into dbo.institution values ('" + inst.InstitutionName + @"','" + inst.InstitutionDescription + @"')";
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


        public string Put(Institution inst)
        {
            try
            {
                string query = @"update  dbo.institution set InstitutionName= '" + inst.InstitutionName + @"' , InstitutionDescription='" + inst.InstitutionDescription + @"' where InstitutionId="+inst.InstitutionId+ @"";
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
                string query = @"Delete  from dbo.institution  where institutionId=" + id + @"";
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
