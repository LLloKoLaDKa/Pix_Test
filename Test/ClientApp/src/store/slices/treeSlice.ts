import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TreeItem } from "../../domain/trees/treeItem";
import { TreeItemProperty } from "../../domain/trees/treeItemProperty";

interface TreeState {
    items: TreeItem[],
    properties: TreeItemProperty[]
}

const initialState: TreeState = {
    items: [],
    properties: []
}

export const treeSlice = createSlice({
    name: 'tree',
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<TreeItem[]>) => {
            state.items = action.payload;
        },
        setProperties: (state, action: PayloadAction<TreeItemProperty[]>) => {
            state.properties = action.payload;
        },
    }
})

export const { setItems, setProperties } = treeSlice.actions
export const selectItems = (state: RootState) => state.tree.items
export const selectProperties = (state: RootState) => state.tree.properties
export default treeSlice.reducer