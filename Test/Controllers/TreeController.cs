using Microsoft.AspNetCore.Mvc;
using Test.Domain.Tree;

namespace Test.Controllers
{

    [Route("[controller]")]
    public class TreeController : Controller
    {
        [HttpGet]
        [Route("GetItems")]
        public List<TreeItem> GetTreeItems()
        {
            FakeStorage.SetItemsAndProperties();

            return FakeStorage.Items;
        }

        [HttpGet("GetItemProperties")]
        public TreeItemProperty[] GetProperties(Guid treeItemId)
        {
            return FakeStorage.Properties[treeItemId];
        }
    }
}
