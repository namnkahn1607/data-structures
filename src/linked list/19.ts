/* 19. remove node from end of list */
// #: llist + recursion
import { createSLList, ListNode, printSLList } from "./linked list";

class src19 {
    static removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
        let end: ListNode | null = head;

        for (let i = 0; i < n; ++i)
            end = end!.next;

        let prv: ListNode | null = null,
            cur: ListNode | null = head;

        while (end) {
            prv = cur;
            cur = cur!.next;
            end = end.next;
        }

        if (!prv)
            head = head!.next;
        else
            prv.next = cur!.next;

        return head;
    }

    public static main(): void {
        // add linked list
        const head: ListNode | null = createSLList([1, 2, 4, 8, 16]);
        const n: number = 2;

        // delete the n-th node from end of list
        let ans: ListNode | null = src19.removeNthFromEnd(head, n);
        printSLList(ans);
    }
}

src19.main();