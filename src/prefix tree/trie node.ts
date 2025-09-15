export class TrieNode {
    constructor(
        public children = new Map<string, TrieNode>,
        public terminal: boolean = false
    ) {}
}