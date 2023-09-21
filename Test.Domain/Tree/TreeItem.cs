namespace Test.Domain.Tree
{
    public class TreeItem
    {
        public Guid Id { get; set; }
        public Guid? ParentId { get; set; }

        public TreeItem(Guid id, Guid? parentId)
        {
            Id = id;
            ParentId = parentId;
        }
    }
}
