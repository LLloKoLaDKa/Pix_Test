import { Tree } from "antd";
import React, { useEffect } from "react";
import { TreeItem } from "../domain/trees/treeItem";
import { TreeView } from "../domain/trees/treeView";
import TreeProvider from "../providers/TreeProvider";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setItems, setProperties } from "../store/slices/treeSlice";

export default function TreeSelect() {
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.tree.items)

    useEffect(() => {
        fetchItems();
    }, []);

    async function fetchItems() {
        const data = await TreeProvider.getTreeItems();
        dispatch(setItems(data));
    }

    const tableColumns = [
        {
            title: "Item Id",
            dataIndex: "treeItemId",
            key: "treeItemId"
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Value",
            dataIndex: "value",
            key: "value"
        },
    ]

    async function fetchProperties(index: number) {
        const data = await TreeProvider.getTreeItemProperties(items[index].id);
        dispatch(setProperties(data));
    }


    function getArray(data: TreeItem[], parentId: string | null = null): TreeView[] {
        return data.reduce((array: TreeView[], elem, index) => {
            if (parentId == elem.parentId) {
                const object = new TreeView(elem.id, index.toString(), [])
                const children = getArray(data, elem.id);

                if (children.length) {
                    object.children = children
                }

                array.push(object)
            }

            return array;
        }, [])
    }

    return <>
        <Tree
            showLine
            rootStyle={{ flex: '1' }}
            style={{ border: '1px solid lightgray', borderRadius: 5 }}
            height={700}
            treeData={getArray(items)}
            onSelect={async (a) => await fetchProperties(a[0] as number)}
        />
    </>
}