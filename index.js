
class Room {
    constructor(name) {
      this._name = name;
      this._description = "";
      this._linkedRooms = {};
      this._character = "";
      this._Equipment ="";
   
    }
  
    get name() {
      return this._name;
    }
  
    get description() {
      return this._description;
    }
  
    get character() {
      return this._character
    }
     get Equipment() {
      return this._Equipment
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
    set description(value) {
      if (value.length < 4) {
        alert("description is too short.");
        return;
      }
      this._description = value;
    }
  
    set character(value) {
      this._character = value;
    }
     set Equipment(value) {
      this._Equipment = value;
    }
    describe() {
      return "You are now in " +  this._name + ". " + "If you look around you can see " + this._description;
    }
    linkRoom(direction, roomToLink) {
      this._linkedRooms[direction] = roomToLink;
    }
    getDetails() {
      const entries = Object.entries(this._linkedRooms);
      let details = []
      for (const [direction, room] of entries) {
        let text = " The " + room._name + " is to the " +  direction ;
        details.push(text);
      }
      return details +"</br>"+ "</br>"+"Type"+ "<b>" + "  list " + "</b>" + "to see a list of commands.";
    }
  
  
  
  
  
    move(direction) {
      if (direction in this._linkedRooms) {
        return this._linkedRooms[direction];
      } else {
        alert("You can't go that way",);
        alert(this._name)
        return this;
      }
    }
  }
  
  class Item {
      constructor(name) {
          this._name = name;
          this._store = [];
          this._description = "";
      }
      get name() {
          return this.name;
      }
      get description() {
          return this._description;
      }
      get pair() {
          return this._pair;
      }
      get store(){
        return this._store;
      }
  
      set name(value) {
          if (value < 3) {
              console.error("The item name is too short.");
              return;
          }
          this._name = value;
      }
      set description(value) {
          if (value < 4) {
              console.error("The item description is too short.");
              return;
          }
          this._description = value;
      }
      set pair(value) {
          if (value < 3) {
              console.error("The item pair is too short.")
              return;
          }
          this._pair = value;
      }
    describe() {
      return "The " + this._name + " is " + this._description;
    }
       addItem(item) { 
          this._store.push(item);
      }
  
      checkItem(item) {
          for (let i = 0; i < this._store.length; i++)
              if (list[i] === item) {
                  return true;
              }
          return false;
      }
     
  }
  
  
  class Character {
    constructor(name) {
      this._name = name,
        this._description = ""
      this._conversation = ""
       this._gift = "";
     
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
    set description(value) {
      if (value.length < 4) {
        alert("Decription is too short.");
        return;
      }
      this._description = value;
    }
  
    set conversation(value) {
      if (value.length < 4) {
        alert("conversation is too short.");
        return;
      }
      this._conversation = value;
  
    }
     set gift(value) {
          if (value < 4) {
              console.error("Gift name is too short.");
              return;
          }
          this._gift = value;
      }
   
    
    get name() {
      return this._name;
    }
  
    get description() {
      return this._description;
    }
  
    get conversation() {
      return this._conversation;
    }
     get gift() {
          return this._gift;
      }
    
    describe() {
      return "You have met " + this._name + ", " + this._name + " is " + this._description;
    }
    converse() {
      return this._name + " says " + "'" + this._conversation + "'";
    }
  }
  
  class Enemy extends Character {
    constructor(name) {
      super(name);
      this._weakness = "";
     
    }
   get weakness() {
      return this._weakness;
    }
  
     
    set weakness(value) {
      if (value.length < 2) {
        alert("Decription is too short.");
        return;
      }
      this._weakness = value;
    }
   
     
       hit(item) {
          let result = "";
          console.log("array passed on", item);
          console.log("item length is, ", item.length);
          for (let i = 0; i < item.length; i++) {
              console.log("value of i:  ", i);
              console.log("current array item: ", item[i]);
              if (item[i] === this._weakness) {
                  result = true;
                  break;
              } else {
                  result = false;
              }
          }
          return result;
      }
  
  }
  
  
  const Kitchen = new Room("kitchen");
  Kitchen.description = "a short narrow room with worktops on one side and oven on the other side, there is aburning fire in the oven , you found Fireextinguisher near the oven ";
  const MasterRoom = new Room("Master Room");
  MasterRoom.description = "a large room with double bed , sofa and a large fire place";
  const GamesRoom = new Room("Games Room");
  GamesRoom.description = "a large room with a cupboard at in the middle";
  const Hall = new Room("Hall");
  Hall.description = "a small room with dinner table and water cooler";
  const Field = new Room("Field");
  Field.description = "a space with a group of trees and flowers  with large door in the ground";
  
   
  Kitchen.linkRoom("south", GamesRoom);
  Kitchen.linkRoom("west", Field);
  MasterRoom.linkRoom("north", Kitchen);
  MasterRoom.linkRoom("west", GamesRoom);
  GamesRoom.linkRoom("north", Kitchen);
  GamesRoom.linkRoom("west", Hall);
  Hall.linkRoom("east", GamesRoom);
  Hall.linkRoom("north", Field);
  
  Field.linkRoom("east", Kitchen);
  Field.linkRoom("south", Hall);
  
  
  
  
  const Fireextinguisher = new Item("Fireextinguisher");
  Fireextinguisher.description = "Fire extinguisher to extinguish the oven fire ";
  const Stick = new Item("stick");
  Stick .description = "The Stick to to hit Bozo";
  const Door = new Item("Door");
  Door.description = " the door is open to adeep well ";
  
  
  const Bozo = new Enemy("Bozo");
  Bozo.conversation = "I will be leaving now, I have something to attend to.";
  Bozo.description = " is standing in the middle of the hall , he is an introverted and eccentric ";
  Bozo.pronoun = "he";
  Bozo.weakness = Stick ;
  
  
  
  const Mike = new Enemy("Mike");
  Mike.conversation = "Don't you dear come close hahaha .....";
  Mike.description = "is standing in front of you , he is black and huge with bright red eyes , he carries a stick on the right hand";
  Mike.pronoun = "he";
  Mike.gift = Stick;
  
  
  
  MasterRoom.character  =Mike;
  Hall.character =Bozo;
  
  Field.Equipment =Door;
  Kitchen.Equipment =Fireextinguisher;
  
  
  
  function displayRoomInfo(room) {
    let occupantMsg = "";
    let textContent = "";
    if (room.character === "") {
       if (room.Equipment === "") {  
      occupantMsg = "";
    }  else {
              contentMessage = room.Equipment.describe(); 
          }
    }
    else {  
          occupantMsg = room.character.describe() + ". " ;
        }
   
    textContent = "<p>" + room.describe() + "</p>" + "<p>" +
    occupantMsg + "</p>" + "<p>" + room.getDetails() + "</p>";
  
    document.getElementById("textarea").innerHTML = textContent;
    document.getElementById("buttonarea").innerHTML = '><input type="text" id="usertext" />';
    document.getElementById("usertext").focus();
    
  }
  let inventory = [];
  function commandHandler(command, character, room ) {
  
      switch (command) {
         case "use":
              if (room) {
                  if (room.Equipment === Fireextinguisher)  {
                     document.getElementById("buttonarea").innerHTML ="congratulations you extinguish the fire ";
                      document.getElementById("buttonarea2").innerHTML ="> you won " 
                  } else {
                      alert(" There is no item  to use at the moment.");
                  }
                  break;
              } else {
                  alert("There is no item  to use at the moment.");
                  break;
              }
  
        case "open":
              if (room ){
                if(room.Equipment ===  Door){
                   document.getElementById("buttonarea").innerHTML ="you are inside a deep hole has cold water with mud , insects and awful smell " + "you lost" ;
                    document.getElementById("buttonarea2").innerHTML ="> you lost ,  Game over " 
                 } else {
                      alert(" Nothing to open at the moment.");
                  }
                  break;
              } else {
                  alert("Nothing to open at the moment."); 
              }
                 break;
  
  
         case "speak":
             if (character) {
                 if (room.character === Bozo) {
                 msg = character .converse()  ;
                  alert(msg);
                  break;
              } else if (room.character === Mike){
                msg = character.converse() ;
                  alert(msg);
                  break;}
                 } else{
                  alert("There is nobody in front of you to start a dialogue.");}
                  break;
  
         case "take":
              if (character) {
                  if (inventory.indexOf(character.gift) === -1) {
  
                      inventory.push(character.gift);
                      let itemAdded = inventory[inventory.length - 1]._name;
                      alert(itemAdded + " has been added to your inventory.");
  
                  } else {
                      alert("This item already exists in your inventory.");
                  }
                  break;
            } else {
                      alert("This item already exists in your inventory.");
                  break;
                }
  
         case "hit":
              if (character) {
  
                  if (character.hit(inventory) === true) {
                    
                       document.getElementById("buttonarea").innerHTML ="congratulations you defeated " + character.name;
                      document.getElementById("buttonarea2").innerHTML ="> you won " 
  
                  } else {
                      document.getElementById("buttonarea").innerHTML =character.name + " has defeated you. You have not found the right weapon to kill " + character.name + " yet." ;
                      document.getElementById("buttonarea2").innerHTML ="> you lost ,  Game over " 
                  break;
                }
              } else {
                  alert("There is nobody to attack at the moment.");
                  break;
              }
  
          case "list":
              alert("\r\n" + "List of possible commands" + "\r\n" + "To move:   north, east, south, west  " + "\r\n" + "To use the Fireextinguisher: use " + "\r\n" + "To speak with enemy:   speak"+ "\r\n" + "To hit the enemy:   hit"+ "\r\n" + "To take item:   take" )
              break;
  
    }
  }
  
  
  
  function startGame() {
  
    currentRoom = MasterRoom
    displayRoomInfo(currentRoom);
    document.addEventListener("keydown", function (event) {
      if (event.key == "Enter") {
        command = document.getElementById("usertext").value.toLowerCase();
        const directions = ["north", "south", "east", "west"]
        const commands=["use", "list","take","speak" ,"open" ,"hit"]
        if (directions.includes(command)) {
          currentRoom = currentRoom.move(command);
          displayRoomInfo(currentRoom);
        } else if(commands.includes(command)){
          commandHandler(command, currentRoom.character, currentRoom)
  
        }
  
        else {
        document.getElementById("usertext").value="";
        alert("that is not a valid command please try again");
        }
  
      }
    });
  }
  
     