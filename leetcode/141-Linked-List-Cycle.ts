/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if(!head.next) return false
    let visited = {}
    
    while(head !== null){
        if(!visited[head.val]){
            visited[head.val] = visited[head.val]
            head = head.next
        }
        return true
        
        console.log(visited)
    }
    return false
};
 // two pointers
 // S -> 1 step
 // F -> 2 steps

 // F -> null return false
 // F.next -> null return false
 // when S = F return true

var hasCycleTwoPointers = function(head) {
if(!head) return false
if(!head.next) return false

 let fast = head
 let slow = head

 while(fast !== null && fast.next !== null){
     slow = slow.next
     fast = fast.next.next
     if (slow === fast) return true
 }
 return false




// a) We will have two pointers. first is slow pointer which will move one place from its prevoius position.
// b) Second pointer is fast and it will move two places from its previous position.
// c) At each Iteration. We'll :-
//  c.1 Check if fast pointer has reached the end if yes then return false because if there is a cycle there will be no end.
//  c.2 Check if both fast and slow pointer points to same node. If yes then there is a cycle because without cycle they will never come on same position and continue to have a diff due to difference in speed

var hasCycle = function(head) {
    if(!head) return false;
       
    let slow=head;
    let fast=head.next;
    while(slow!=fast)
    {
     if(!fast || !fast.next)
       return false;
        
     slow=slow.next;
     fast=fast.next.next;
    }
    
    return true;
   };

   var hasCycle2 = function(head) {
    const seen = new Set();
    
    function traverse(node) {
        if(seen.has(node)) return true;
        if(!node) return false;
        seen.add(node);
        return traverse(node.next);
    }
    return traverse(head);
};