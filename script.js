// Objects
let character = {
    inventory: [],
    money: 100,
    displayInventory: function() {
        console.log(`Money: ${this.money}`)
        for (item of this.inventory) {
            console.log(`[${item.id}] ${item.name}\n\n`)
        }
    }
}

let items = [
    {
        name: "Magic Sword",
        value: 17,
        id: 1
    },
    {
        name: "Healing Potion",
        value: 5,
        id: 2
    },
    {
        name: "Invisibility Cloak",
        value: 32,
        id: 3
    }
]

// Functions
function displayStoreItems() {
    for (item of items) {
        console.log(`[${item.id}] ${item.name}`)
        console.log(`Cost: ${item.value}\n\n`)
    }
}

function buy(id) {
    character.inventory.push(items[id - 1])
    character.money -= items[id - 1].value
    items.splice(id - 1, 1);
    renumberIds(items)
    renumberIds(character.inventory)
}

function sell(id) {
    items.push(character.inventory[id - 1])
    character.money += character.inventory[id - 1].value
    character.inventory.splice(id - 1, 1)
    renumberIds(items)
    renumberIds(character.inventory)
}

function renumberIds(itemArray) {
    let counter = 1
    for (item of itemArray) {
        item.id = counter
        counter++
    }
}