/* 19. remove node from end of list */
// #: llist
import { ListNode, SinglyLinkedList } from "./linked list";

class src19 {
    removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
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
        const head: ListNode | null = SinglyLinkedList.createSLList([1, 2, 4, 8, 16]);
        const n: number = 2;

        // delete the n-th node from end of list
        let ans: ListNode | null = new src19().removeNthFromEnd(head, n);
        SinglyLinkedList.printSLList(ans);
    }
}

src19.main();