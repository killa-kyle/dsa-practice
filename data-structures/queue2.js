function createQueue() {
    const queue = []
    return {
        enqueue(item){
            queue.unshift(item)
        },
        dequeue(){
            queue.pop()            
        },
        peek(){
            if (queue.length === 0) {
              return undefined
            }
            return queue[queue.length -1]
        },
        get length(){
            return queue.length
        },
        isEmpty(){
            return queue.length === 0
        }

    }
}

const q = createQueue()
console.log(q.isEmpty())
q.enqueue('tom')
q.enqueue('dick')
q.enqueue('harry')
console.log(q.peek())
// q.dequeue()
// q.dequeue()
// console.log(q.isEmpty())


exports.createQueue = createQueue