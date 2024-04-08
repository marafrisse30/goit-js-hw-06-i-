`use strict`

class Storage {
    #items;

    constructor(items){

    this.#items = items
    
    
    }
    
    get getItems() {

        return this.#items
    }

    set addItem(newItem){
        this.#items.push(newItem)
    }
    set removeItem(itemToRemove){

    const filteredItem = this.#items.filter((item) => item !== itemToRemove)
    }
}








const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
