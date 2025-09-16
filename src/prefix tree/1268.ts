/* 1268. search suggestion system */
// #: prefix tree + heap
import { TrieNode, Trie } from "./trie";

class PrefixTree extends Trie {
    firstKWithPrefix(prefix: string, k: number): string[] {
        let cur: TrieNode = this.root;

        for (const c of prefix) {
            if (!cur.children.has(c))
                return [];

            cur = cur.children.get(c)!;
        }

        const ans: string[] = [];

        const dfs = function(node: TrieNode, word: string): void {
            if (ans.length === k) return;

            if (node.terminal) {
                ans.push(prefix + word);

                if (ans.length === k) return;
            }

            for (const [char, child] of node.children.entries()) {
                dfs(child, word + char);

                if (ans.length === k) break;
            }
        };

        dfs(cur, "");

        return ans;
    }
}

class src1268 {
    suggestedProducts(products: string[], searchWord: string): string[][] {
        const system = new PrefixTree();
        products.sort();

        for (const word of products)
            system.insert(word);

        const ans: string[][] = [];
        let searchKey = "";

        for (const c of searchWord) {
            searchKey += c;
            ans.push(system.firstKWithPrefix(searchKey, 3));
        }

        return ans;
    }

    public static main(): void {
        // add strings
        const products: string[] = [
            "mobile", "mouse", "moneypot", "monitor", "mousepad"
        ];

        const searchWord: string = "mouse";

        // suggested list of matching products
        let ans: string[][] = new src1268().suggestedProducts([...products], searchWord);

        console.log(ans.map(val => {
            return val.join(" ");
        }).join("\n"));
    }
}

src1268.main();