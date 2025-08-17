/* 1472. design browser history */
// #: doubly llist

class pageNode {
    constructor(public val: string, public prev: pageNode | null = null, public next: pageNode | null = null) {}
}

class BrowserHistory {
    private cur: pageNode;

    constructor(homepage: string) {
        this.cur = new pageNode(homepage);
    }

    public visit(url: string): void {
        const newPage = new pageNode(url, null, this.cur);
        this.cur.prev = newPage;
        this.cur = newPage;
    }

    public back(steps: number): string {
        for (let i = 0; i < steps; ++i) {
            if (!this.cur.next) break;

            this.cur = this.cur.next;
        }

        return this.cur.val;
    }

    public forward(steps: number): string {
        for (let i = 0; i < steps; ++i) {
            if (!this.cur.prev) break;

            this.cur = this.cur.prev;
        }

        return this.cur.val;
    }

    public static main(): void {
        // add arguments and commands
        const args: (string | number)[] = [
            "leetcode.com", "google.com", "facebook.com", "youtube.com",
            1, 1, 1, "linkedin.com", 2, 2, 7
        ];

        const cmds: string[] = [
            "BrowserHistory", "visit", "visit", "visit", "back", "back",
            "forward", "visit", "forward", "back", "back"
        ];

        if (args.length !== cmds.length)
            throw new Error("invalid arguments");

        // apply operations on BrowserHistory
        const m: number = args.length;
        let browser: BrowserHistory = new BrowserHistory(String(args[0]));
        const ans: string[] = ["null"];

        for (let i = 1; i < m; ++i) {
            switch (cmds[i]) {
                case "visit":
                    browser.visit(String(args[i]));
                    ans.push("null");
                    break;

                case "back":
                    ans.push(browser.back(Number(args[i])));
                    break;

                case "forward":
                    ans.push(browser.forward(Number(args[i])));
                    break;

                default:
                    throw new Error("invalid command");
            }
        }

        console.log(ans.join(" "));
    }
}

BrowserHistory.main();

// more sols at: https://neetcode.io/solutions/design-browser-history