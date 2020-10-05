namespace Mrs_Cake.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ScondCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Bakeries",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        Name = c.String(),
                        Address = c.String(),
                        Email = c.String(),
                        PhoneNumber = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Orders",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        OrderNumber = c.Int(nullable: false),
                        TotalPrice = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Address = c.String(),
                        Comments = c.String(),
                        Paid = c.Boolean(nullable: false),
                        DeliveryMethod = c.Int(nullable: false),
                        User_Id = c.Long(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.User_Id)
                .Index(t => t.User_Id);
            
            CreateTable(
                "dbo.Products",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        Types = c.Int(nullable: false),
                        Name = c.String(),
                        Bakery = c.String(),
                        Decsription = c.String(),
                        Price = c.Decimal(nullable: false, precision: 18, scale: 2),
                        ImageUrl = c.String(),
                        Order_Id = c.Long(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Orders", t => t.Order_Id)
                .Index(t => t.Order_Id);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        FirstName = c.String(),
                        LastName = c.String(),
                        Email = c.String(),
                        MobilePhone = c.String(),
                        Password = c.String(),
                        Address = c.String(),
                        CreditCardNUmber = c.String(),
                        UserRolls = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Orders", "User_Id", "dbo.Users");
            DropForeignKey("dbo.Products", "Order_Id", "dbo.Orders");
            DropIndex("dbo.Products", new[] { "Order_Id" });
            DropIndex("dbo.Orders", new[] { "User_Id" });
            DropTable("dbo.Users");
            DropTable("dbo.Products");
            DropTable("dbo.Orders");
            DropTable("dbo.Bakeries");
        }
    }
}
