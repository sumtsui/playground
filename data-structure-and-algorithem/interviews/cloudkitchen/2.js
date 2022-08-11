/* Problem statement 

You have been tasked with parsing menus from a large restaurant group. Each menu is streamed to clients via a provided interface. You must design object(s) that represents a menu and can be instantiated with data from the provided interface. Your design should contain an appropriate class structure to contain the parsed data, as well as a function or set of functions to perform the parsing.

Consumers will use your object(s) to access a complete representation of the data sent by the menu stream after it has finished loading. Your objects should provide easy access to the full representation of the menu. It should be possible to reconstruct the menu stream from your object.

The menu stream represents a list of menu items. Each item in the stream is a menu item, and each item will be separated by an empty string. The attributes of each item are as follows:

  Line 0: The ID of the item
  Line 1: The item type, either CATEGORY, DISH or OPTION
  Line 2: The name of the item
  Line 3: The price of the item for DISH and OPTION. Not present for CATEGORY items.
  Any other line: A list of item IDs that are linked to the current item. OPTIONs do not have any linked items.

*/

/* Example stream
4
DISH
Spaghetti
10.95
2
3

1
CATEGORY
Pasta
4
5

2
OPTION
Meatballs
1.00

3
OPTION
Chicken
2.00

5
DISH
Lasagna
12.00

6
DISH
Caesar Salad
9.75
3

*/

// interface MenuStream {
//   nextLine(): string | null;
// }

// class MenuStreamImpl implements MenuStream {
//   private stream: string[];
//   constructor() {
//     this.stream = ['4', 'DISH', 'Spaghetti', '10.95', '2', '3', '', '1', 'CATEGORY', 'Pasta', '4', '5', '', '2', 'OPTION', 'Meatballs', '1.00', '', '3', 'OPTION', 'Chicken', '2.00', '', '5', 'DISH', 'Lasagna', '12.00', '', '6', 'DISH', 'Caesar Salad', '9.75', '3', '']
//   }

//   nextLine() {
    
//     if (this.stream.length === 0) {
//       return null
//     }
    
//     return this.stream.shift()
//   }
// }

// type ITEM_CATEGORY = {
//   id: string;
//   type: "CATEGORY";
//   name: string;
//   dishes: ITEM_DISH[]
// }

// type ITEM_DISH = {
//   id: string;
//   type: "DISH";
//   name: string;
//   price: string;
//   options: ITEM_OPTION[]
// }

// type ITEM_OPTION = {
//   id: string;
//   type: "OPTION";
//   name: string;
// }


class MenuParser {
  constructor() {
    data = [];
    resp = []; 
    new MenuStream();
  }

  parseStream() {
    let str = this.menuStream.nextLine();
    const itemMap = new Map();

    // const unknown = null
    let itemString = '';

    while (str !== null) {

      if (str === '') {
        this.resp.push(itemString);
        itemString = '';
      }

      else {
        itemString += str;
      }
      
      let str = this.menuStream.nextLine();
    }

    // [['1','FoodName'...], []]

    return this.resp.map(itemStrs => {
      return {
        id: itemStrs[0],
        type: itemStrs[1],
        name: itemStrs[2]
      };
    });
  }


}