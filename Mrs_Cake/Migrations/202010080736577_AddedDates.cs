namespace Mrs_Cake.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedDates : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Bakeries", "DateModified", c => c.DateTime(nullable: false));
            AddColumn("dbo.Bakeries", "DateCreated", c => c.DateTime(nullable: false));
            AddColumn("dbo.Bakeries", "IsDirty", c => c.Boolean(nullable: false));
            AddColumn("dbo.Orders", "DateModified", c => c.DateTime(nullable: false));
            AddColumn("dbo.Orders", "DateCreated", c => c.DateTime(nullable: false));
            AddColumn("dbo.Orders", "IsDirty", c => c.Boolean(nullable: false));
            AddColumn("dbo.Products", "DateModified", c => c.DateTime(nullable: false));
            AddColumn("dbo.Products", "DateCreated", c => c.DateTime(nullable: false));
            AddColumn("dbo.Products", "IsDirty", c => c.Boolean(nullable: false));
            AddColumn("dbo.Users", "DateModified", c => c.DateTime(nullable: false));
            AddColumn("dbo.Users", "DateCreated", c => c.DateTime(nullable: false));
            AddColumn("dbo.Users", "IsDirty", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Users", "IsDirty");
            DropColumn("dbo.Users", "DateCreated");
            DropColumn("dbo.Users", "DateModified");
            DropColumn("dbo.Products", "IsDirty");
            DropColumn("dbo.Products", "DateCreated");
            DropColumn("dbo.Products", "DateModified");
            DropColumn("dbo.Orders", "IsDirty");
            DropColumn("dbo.Orders", "DateCreated");
            DropColumn("dbo.Orders", "DateModified");
            DropColumn("dbo.Bakeries", "IsDirty");
            DropColumn("dbo.Bakeries", "DateCreated");
            DropColumn("dbo.Bakeries", "DateModified");
        }
    }
}
