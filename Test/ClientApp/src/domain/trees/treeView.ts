export class TreeView {
    constructor(
        public readonly title: string,
        public readonly key: string,
        public children: TreeView[]) { }
}