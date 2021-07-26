const LinkedList = require('./linked-list')

describe(`#insertAtHead`, ()=>{
    test('it adds the element to the beginning of the list', ()=> {
        const newList = new LinkedList()
        newList.prepend(10)
        const oldHead = newList.head
        newList.prepend(20)

        expect(newList.head.value).toBe(20)
        expect(newList.head.next).toBe(oldHead)
        expect(newList.length).toBe(2)
    })
})

describe(`#getByIndex`, ()=>{
    describe(`with index less than 0`,() => {
        test(`it returns null`, ()=>{
            const newList = LinkedList.fromValues(10,20)

            expect(newList.getByIndex(-1)).toBeNull()
        })
    })
    describe(`with index greater than list length`,() => {
        test(`it returns null`, ()=>{
            const newList = new LinkedList()
            newList.insert(10)

            expect(newList.traverseToIndex(5)).toBeNull()
        })
    })
    describe(`with index 0`,() => {
        test(`it returns head`, ()=>{
            const newList = new LinkedList()
            newList.prepend(10)

            expect(newList.traverseToIndex(0).value).toBe(10)
        })
    })

    describe(`with index in the middle`,() => {
        test(`it returns the list node`, ()=>{
            const newList = new LinkedList()
            newList.prepend(10)
            newList.insert(20)
            newList.insert(30)

            expect(newList.traverseToIndex(1).value).toBe(30)
        })
    })
})