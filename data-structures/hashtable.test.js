const HashTable = require('./hashtable')

describe(`Hashtable`, ()=>{
    test('it adds and gets elements to and from the hashtable', ()=> {
        const myHashTable = new HashTable(50);
        myHashTable.set("grapes", 10000);
        myHashTable.set("apples", 500);
        

        expect(myHashTable.get("grapes")).toBe(10000)
        expect(myHashTable.get("apples")).toBe(500)
        expect(myHashTable.get("bananas")).toBe(undefined)
        expect(myHashTable.keys()).toEqual(["grapes","apples"])
    })
})
