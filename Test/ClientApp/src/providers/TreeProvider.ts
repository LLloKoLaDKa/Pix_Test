import { TreeItem } from "../domain/trees/treeItem";
import { TreeItemProperty } from "../domain/trees/treeItemProperty";

export default class TreeProvider {
    static async getTreeItems(): Promise<TreeItem[]> {
        const data = await fetch("/tree/GetItems");

        const response = await data.json()
        return (response as any[]).map(d => new TreeItem(d.id, d.parentId));
    }
    static async getTreeItemProperties(id: string): Promise<TreeItemProperty[]> {
        const data = await fetch(`/tree/GetItemProperties?treeItemId=${id}`);

        const response = await data.json();
        return (response as any[]).map(d => new TreeItemProperty(d.treeItemId, d.name, d.value));
    }
}