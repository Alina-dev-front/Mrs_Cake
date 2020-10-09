namespace Mrs_Cake.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedDates1 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Bakeries", "IsDirty");
            DropColumn("dbo.Orders", "IsDirty");
            DropColumn("dbo.Products", "IsDirty");
            DropColumn("dbo.Users", "IsDirty");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Users", "IsDirty", c => c.Boolean(nullable: false));
            AddColumn("dbo.Products", "IsDirty", c => c.Boolean(nullable: false));
            AddColumn("dbo.Orders", "IsDirty", c => c.Boolean(nullable: false));
            AddColumn("dbo.Bakeries", "IsDirty", c => c.Boolean(nullable: false));
        }
    }
}
