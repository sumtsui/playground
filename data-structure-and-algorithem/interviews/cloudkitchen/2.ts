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

type CATEGORY = {
  id: string;
  type: 'CATEGORY';
  name: string;
  dishes: string[]
}

type DISH = {
  id: string;
  type: 'DISH';
  name: string;
  price: string;
  options: string[]
}

type OPTION = {
  id: string;
  type: 'OPTION';
  name: string;
}

interface MenuStream {
  nextLine(): string | null;
}

class MenuStreamImpl implements MenuStream {
  private stream: string[];
  constructor() {
    this.stream = [ '4', 'DISH', 'Spaghetti', '10.95', '2', '3', '', '1', 'CATEGORY', 'Pasta', '4', '5', '', '2', 'OPTION', 'Meatballs', '1.00', '', '3', 'OPTION', 'Chicken', '2.00', '', '5', 'DISH', 'Lasagna', '12.00', '', '6', 'DISH', 'Caesar Salad', '9.75', '3', '' ];
  }

  nextLine() {
    
    if (this.stream.length === 0) {
      return null;
    }
    
    return this.stream.shift() ?? null;
  }
}

class MenuParser {
  dishes: DISH[]
  options: OPTION[] 
  categories: CATEGORY[]
  private stream: MenuStream
  private tempItem: Record<string, any>
  private lineNum: number

  constructor(streamInstance) {
    this.dishes = [];
    this.categories = [];
    this.options = [];
    this.stream = streamInstance;
    this.lineNum = 0;
    this.tempItem = {};
  }

  parseLine(line) {
    if (line === '') {
      if (this.tempItem.type) {
        if (this.tempItem.type === 'CATEGORY') this.categories.push(this.tempItem as CATEGORY); 
        if (this.tempItem.type === 'DISH') this.dishes.push(this.tempItem as DISH); 
        if (this.tempItem.type === 'OPTION') this.options.push(this.tempItem as OPTION); 
      }
      this.tempItem = {};
      this.lineNum = 0;
      return;
    }
    this.lineNum++;
    if (this.lineNum === 1) {
      this.tempItem['id'] = line;
    }
    else if (this.lineNum === 2) {
      this.tempItem['type'] = line;
    }
    else if (this.lineNum === 3) {
      this.tempItem['name'] = line;
    }
    else if (this.lineNum === 4) {
      if (this.tempItem.type === 'CATEGORY') {
        this.tempItem['dishes'] = [ line ];
      } else {
        this.tempItem['price'] = line; 
      }
    }
    else {
      if (this.tempItem['type'] === 'CATEGORY') {
        this.tempItem.dishes.push(line);
      } else if (this.tempItem['type'] === 'DISH') {
        this.tempItem.options ? this.tempItem.options.push(line) : this.tempItem.options = [ line ]; 
      }
    }
  }

  buildMenu() {
    let line = this.stream.nextLine();

    while (line !== null) {
      this.parseLine(line);
      line = this.stream.nextLine(); 
    }
  }

  getDish(id: string) {
    const dish = this.dishes.find(d => d.id === id); 
    return dish;
  }
}

const menu = new MenuParser(new MenuStreamImpl());

menu.buildMenu();

console.log(menu.dishes);
console.log(menu.categories);
console.log(menu.options);
