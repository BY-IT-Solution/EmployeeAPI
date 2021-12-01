using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace EmployeeInformation.Models
{
    public partial class HPRCMSDBContext : DbContext
    {
        public HPRCMSDBContext()
        {
        }

        public HPRCMSDBContext(DbContextOptions<HPRCMSDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<EmployeeInfo> EmployeeInfos { get; set; }
        public virtual DbSet<Institution> Institutions { get; set; }
        public virtual DbSet<Question> Questions { get; set; }
        public virtual DbSet<Questionlookup> Questionlookups { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
  optionsBuilder.UseSqlServer("Data source=.; Initial Catalog=HPRCMSDB; Integrated Security=true;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<EmployeeInfo>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("EmployeeInfo");

                entity.Property(e => e.DepartmentName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EmployeeId).ValueGeneratedOnAdd();

                entity.Property(e => e.EmployeeName)
                    .HasMaxLength(50)
                    .IsFixedLength(true);

                entity.Property(e => e.Salary).HasColumnType("decimal(18, 0)");
            });

            modelBuilder.Entity<Institution>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("institution");

                entity.Property(e => e.InstitutionDescription)
                    .HasMaxLength(2000)
                    .IsUnicode(false);

                entity.Property(e => e.InstitutionId).ValueGeneratedOnAdd();

                entity.Property(e => e.InstitutionName)
                    .HasMaxLength(500)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Question>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("question");

                entity.Property(e => e.Description)
                    .HasMaxLength(2000)
                    .IsUnicode(false);

                entity.Property(e => e.QuestionTypeId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("questionTypeId");

                entity.Property(e => e.QuestionTypeName)
                    .HasMaxLength(500)
                    .IsUnicode(false)
                    .HasColumnName("questionTypeName");
            });

            modelBuilder.Entity<Questionlookup>(entity =>
            {
                entity.HasKey(e => e.QuestionId)
                    .HasName("PK__question__6238D4B2DD9DCEAC");

                entity.ToTable("questionlookup");

                entity.Property(e => e.QuestionId).HasColumnName("questionId");

                entity.Property(e => e.CurrentDateTime)
                    .HasMaxLength(500)
                    .IsUnicode(false)
                    .HasColumnName("currentDateTime");

                entity.Property(e => e.Institution)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.QuestionDescription)
                    .HasMaxLength(500)
                    .IsUnicode(false)
                    .HasColumnName("questionDescription")
                    .UseCollation("Latin1_General_100_CI_AS_SC_UTF8");

                entity.Property(e => e.QuestionType)
                    .HasMaxLength(500)
                    .IsUnicode(false)
                    .HasColumnName("questionType");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
