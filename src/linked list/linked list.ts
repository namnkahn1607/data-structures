/* data structures: Linked List */

export class ListNode {
    constructor(public val: number = 0, public next: ListNode | null = null) {}
}

export class SinglyLinkedList {
    public static createSLList(arr: number[]): ListNode | null {
        const [head, _] = SinglyLinkedList.createSLListWithTail(arr);

        return head;
    }

    public static createSLListWithTail(arr: number[]): [ListNode | null, ListNode | null] {
        if (arr === null || arr.length === 0)
            return [null, null];

        const head: ListNode = new ListNode(arr[0]);
        let tail: ListNode = head;

        for (let i = 1; i < arr.length; ++i) {
            tail.next = new ListNode(arr[i]);
            tail = tail.next;
        }

        return [head, tail];
    }

    public static printSLList(head: ListNode | null): void {
        if (!head)
            console.log("empty");
        else
            console.log(convertToArray(head).join(" "));
    }

    public static convertToArray(head: ListNode | null): number[] {
        if (!head) return [];

        const arr: number[] = [];
        let cur: ListNode = head;

        while (cur) {
            arr.push(cur.val);
            cur = cur.next!;
        }

        return arr;
    }

    public static distanceFromHead(head: ListNode | null, node: ListNode | null): number {
        if (!head || !node)
            throw new Error("invalid arguments: head & node must be non-null");

        let cur: ListNode = head;
        let i = 0;

        while (cur) {
            if (cur === node)
                break;

            cur = cur.next!;
            ++i;
        }

        if (!cur)
            throw new Error("invalid arguments: node might come before head or they are not on the same list");

        return i;
    }
}

export function createSLList(arr: number[]): ListNode | null {
    const [head, _] = createSLListWithTail(arr);

    return head;
}

export function createSLListWithTail(arr: number[]): [ListNode | null, ListNode | null] {
    if (arr === null || arr.length === 0)
        return [null, null];

    const head: ListNode = new ListNode(arr[0]);
    let tail: ListNode = head;

    for (let i = 1; i < arr.length; ++i) {
        tail.next = new ListNode(arr[i]);
        tail = tail.next;
    }

    return [head, tail];
}

export function printSLList(head: ListNode | null): void {
    if (!head)
        console.log("empty");
    else
        console.log(convertToArray(head).join(" "));
}

export function convertToArray(head: ListNode | null): number[] {
    if (!head) return [];

    const arr: number[] = [];
    let cur: ListNode = head;

    while (cur) {
        arr.push(cur.val);
        cur = cur.next!;
    }

    return arr;
}

export function distanceFromHead(head: ListNode | null, node: ListNode | null): number {
    if (!head || !node)
        throw new Error("invalid arguments: head & node must be non-null");

    let cur: ListNode = head;
    let i = 0;

    while (cur) {
        if (cur === node)
            break;

        cur = cur.next!;
        ++i;
    }

    if (!cur)
        throw new Error("invalid arguments: node might come before head or they are not on the same list");

    return i;
}