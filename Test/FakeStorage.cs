using Test.Domain.Tree;

namespace Test
{
    public static class FakeStorage
    {
        public static Dictionary<Guid, TreeItemProperty[]> Properties = new();
        public static List<TreeItem> Items = new();

        public static void SetItemsAndProperties()
        {
            FakeStorage.Properties.Clear();
            FakeStorage.Items.Clear();

            for (int i = 0; i < 3000; i++)
            {
                Items.Add(new(Guid.NewGuid(), (i != 0 && i % 5 == 0) ? FakeStorage.Items[i - 1].Id : null));
            }

            Random rnd = new Random();

            foreach (TreeItem item in FakeStorage.Items)
            {
                Int32 propertyCount = rnd.Next(0, 20);
                List<TreeItemProperty> result = new();
                for (int i = 0; i < propertyCount; i++)
                {
                    result.Add(new(item.Id, $"Свойство №{i + 1} от элемента {item.Id}", $"{i + 1}/{propertyCount}"));
                }

                FakeStorage.Properties.Add(item.Id, result.ToArray());
            }
        }
    }
}
