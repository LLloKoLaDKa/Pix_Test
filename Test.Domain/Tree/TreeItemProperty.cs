namespace Test.Domain.Tree
{
    public class TreeItemProperty
    {
        public Guid TreeItemId { get; set; }
        public String Name { get; set; }
        public String Value { get; set; }

        public TreeItemProperty(Guid treeItemId, String name, String value)
        {
            TreeItemId = treeItemId;
            Name = name;
            Value = value;
        }
    }
}
