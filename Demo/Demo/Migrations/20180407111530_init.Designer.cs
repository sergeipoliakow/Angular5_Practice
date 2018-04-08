﻿// <auto-generated />
using Demo.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace Demo.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    [Migration("20180407111530_init")]
    partial class init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.2-rtm-10011")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Demo.Models.Brand", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Country");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Brands");
                });

            modelBuilder.Entity("Demo.Models.Car", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Color");

                    b.Property<int>("EngineId");

                    b.Property<int>("ModelId");

                    b.Property<int>("SuspensionId");

                    b.Property<int>("TransmissionId");

                    b.HasKey("Id");

                    b.HasIndex("EngineId");

                    b.HasIndex("ModelId");

                    b.HasIndex("SuspensionId");

                    b.HasIndex("TransmissionId");

                    b.ToTable("Cars");
                });

            modelBuilder.Entity("Demo.Models.Engine", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("BrandId");

                    b.Property<int>("Cost");

                    b.Property<string>("Name");

                    b.Property<int>("Power");

                    b.Property<int>("Type");

                    b.HasKey("Id");

                    b.HasIndex("BrandId");

                    b.ToTable("Engines");
                });

            modelBuilder.Entity("Demo.Models.EngineOfModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("EngineId");

                    b.Property<int>("ModelId");

                    b.HasKey("Id");

                    b.HasIndex("EngineId");

                    b.HasIndex("ModelId");

                    b.ToTable("EngineOfModels");
                });

            modelBuilder.Entity("Demo.Models.Model", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<float>("BaseCost");

                    b.Property<int>("BrandId");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("BrandId");

                    b.ToTable("Models");
                });

            modelBuilder.Entity("Demo.Models.Option", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Caption");

                    b.Property<float>("Cost");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Options");
                });

            modelBuilder.Entity("Demo.Models.OptionsOfCar", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CarId");

                    b.Property<int>("OptionId");

                    b.HasKey("Id");

                    b.HasIndex("CarId");

                    b.HasIndex("OptionId");

                    b.ToTable("OptionsOfCars");
                });

            modelBuilder.Entity("Demo.Models.Suspension", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<float>("Cost");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Suspensions");
                });

            modelBuilder.Entity("Demo.Models.Transmission", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<float>("Cost");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Transmissions");
                });

            modelBuilder.Entity("Demo.Models.Car", b =>
                {
                    b.HasOne("Demo.Models.Engine", "Engine")
                        .WithMany()
                        .HasForeignKey("EngineId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Demo.Models.Model", "Model")
                        .WithMany("Cars")
                        .HasForeignKey("ModelId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Demo.Models.Suspension", "Suspension")
                        .WithMany("Cars")
                        .HasForeignKey("SuspensionId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Demo.Models.Transmission", "Transmission")
                        .WithMany("Cars")
                        .HasForeignKey("TransmissionId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Demo.Models.Engine", b =>
                {
                    b.HasOne("Demo.Models.Brand", "Brand")
                        .WithMany()
                        .HasForeignKey("BrandId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Demo.Models.EngineOfModel", b =>
                {
                    b.HasOne("Demo.Models.Engine", "Engine")
                        .WithMany("EngineOfModels")
                        .HasForeignKey("EngineId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Demo.Models.Model", "Model")
                        .WithMany("EngineOfModels")
                        .HasForeignKey("ModelId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Demo.Models.Model", b =>
                {
                    b.HasOne("Demo.Models.Brand", "Brand")
                        .WithMany("Models")
                        .HasForeignKey("BrandId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Demo.Models.OptionsOfCar", b =>
                {
                    b.HasOne("Demo.Models.Car", "Car")
                        .WithMany("GetOptionsOfCars")
                        .HasForeignKey("CarId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Demo.Models.Option", "Option")
                        .WithMany("GetOptionsOfCars")
                        .HasForeignKey("OptionId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
