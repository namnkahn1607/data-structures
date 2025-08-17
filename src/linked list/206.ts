/* 206. reverse linked list */
// #: llist
import { ListNode, SinglyLinkedList } from "./linked list";

class src206 {
    reverseList(head: ListNode | null): ListNode | null {
        let cur: ListNode | null = head,
            prv: ListNode | null = null;

        while (cur) {
            const nxtNode: ListNode = cur.next!;
            cur.next = prv;
            prv = cur;
            cur = nxtNode;
        }

        return prv;
    }

    public static main(): void {
        // add linked list
        const head: ListNode | null = SinglyLinkedList.createSLList([0, 1, 2, 3, 4]);

        // reverse the order of linked list
        let ans: ListNode | null = new src206().reverseList(head);
        SinglyLinkedList.printSLList(ans);
    }
}

src206.main();