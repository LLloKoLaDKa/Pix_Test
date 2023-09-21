import React from "react";
import { useAppSelector } from "../store/hooks";
import TreeProvider from "../providers/TreeProvider";
import { setItems } from "../store/slices/treeSlice";
import { Table } from "antd";

export default function TableProperties() {
    const properties = useAppSelector((state) => state.tree.properties);

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

    return <>
        <Table
            style={{
                flex: '1'
            }}

            columns={tableColumns}
            dataSource={properties}
        />
    </>
}

function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
}
