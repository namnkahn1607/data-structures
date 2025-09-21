/* data structures: Design Dynamic Array */

class DynamicArray {
    constructor(
        private capacity: number,
        private container = new Array<number>(this.capacity),
        private size: number = 0
    ) {
        if (this.capacity <= 0)
            throw new Error("invalid argument exception");
    }

    set(idx: number, val: number): void {
        this.validatePos(idx);
        this.container[idx] = val;
    }

    get(idx: number): number {
        this.validatePos(idx);
        return this.container[idx];
    }

    isEmpty(): boolean {
        return this.getSize() === 0;
    }

    getSize(): number {
        return this.size;
    }

    getCapacity(): number {
        return this.capacity;
    }

    pushBack(val: number): void {
        if (this.getSize() === this.getCapacity())
            this.grow();

        this.container[this.size++] = val;
    }

    popBack(): number {
        if (this.isEmpty())
            throw new Error("undefined exception");

        const ans = this.container[--this.size];

        const size = this.getSize();
        const cap = this.getCapacity();

        if (size > 0 && size <= Math.trunc(cap / 4) && cap > 1)
            this.shrink();

        return ans;
    }

    private validatePos(idx: number): void {
        if (idx <= 0 || idx > this.size)
            throw new Error("out of bound exception");
    }

    private resize(newCap: number): void {
        const newArray = new Array<number>(newCap);

        for (let i = 0; i < this.size; ++i)
            newArray[i] = this.container[i];

        this.container = newArray;
        this.capacity = newCap;
    }

    private shrink(): void {
        this.resize(Math.max(1, Math.trunc(this.getCapacity() / 2)));
    }

    private grow(): void {
        this.resize(2 * this.getCapacity());
    }

    public static main(): void {
        // add arguments & commands
        const initialCap: number = 1;
        const args: (number[] | null)[] = [
            null, null, [1], null, null, [2], null, null, [1], [1, 3], [1]
        ];

        const cmds: string[] = [
            "getSize", "getCapacity", "pushback", "getSize", "getCapacity",
            "pushback", "getSize", "getCapacity", "get", "set", "get",
            "popback", "getSize", "getCapacity"
        ];

        // initialize Dynamic Array & operate
        const arr = new DynamicArray(initialCap);
        const ans: string[] = ["null"];

        for (let i = 0; i < cmds.length; ++i) {
            const arg = args[i];

            if (arg === null)
                throw new Error("logic exception");

            switch (cmds[i]) {
                case "set":
                    if (arg.length < 2)
                        throw new Error("invalid argument exception");

                    arr.set(arg[0], arg[1]);
                    ans.push("null");
                    break;

                case "get":
                    ans.push(String(arr.get(arg[0])));
                    break;

                case "empty":
                    ans.push(String(arr.isEmpty()));
                    break;

                case "getSize":
                    ans.push(String(arr.getSize()));
                    break;

                case "getCapacity":
                    ans.push(String(arr.getCapacity()));
                    break;

                case "pushback":
                    arr.pushBack(arg[0]);
                    ans.push("null");
                    break;

                case "popback":
                    ans.push(String(arr.popBack()));
                    break;
            }
        }

        console.log(ans.join(" "));
    }
}

DynamicArray.main();