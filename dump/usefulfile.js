const data = [
  {
    name: 'Bob',
    gender: 'male',
    age: 34,
  },
  {
    name: 'Carol',
    gender: 'female',
    age: 36,
  },
  {
    name: 'Ted',
    gender: 'male',
    age: 38,
  },
  {
    name: 'Alice',
    gender: 'female',
    age: 40,
  },
];

const filterCombiner = (d, filterArray) => {
  for (let fn of filterArray) {
    if (!fn(d)) {
      return false;
    }
  }
  return true;
}

const filterArray1 = [
  d => d.gender === 'female',
];
const arr1 = data.filter(d => filterCombiner(d, filterArray1));
console.log('arr1', arr1);

const filterArray2 = [
  d => d.age > 37,
];
const arr2 = data.filter(d => filterCombiner(d, filterArray2));
console.log('arr2', arr2);

const filterArray3 = [
  d => d.gender === 'female',
  d => d.age > 37,
];
const arr3 = data.filter(d => filterCombiner(d, filterArray3));
console.log('arr3', arr3);



class EventRegistration {
   constructor(eventName, eventDate, capacity = Infinity) {
    this.eventName = eventName;
    this.eventDate = new Date(eventDate);
    this.capacity = capacity;
    this.attendees = new Map(); // key: email, value: attendee info
  }

  register(attendee) {
    if (!attendee?.name || !attendee?.email) {
      throw new Error("Attendee must have a name and email.");
    }

    if (this.attendees.size >= this.capacity) {
      throw new Error("Event is full.");
    }

    if (this.attendees.has(attendee.email)) {
      throw new Error("Attendee already registered.");
    }

    this.attendees.set(attendee.email, {
      name: attendee.name,
      email: attendee.email,
      registeredAt: new Date()
    });

    return "Registration successful.";
  }

  unregister(email) {
    if (!this.attendees.has(email)) {
      throw new Error("Attendee not found.");
    }

    this.attendees.delete(email);
    return "Unregistered successfully.";
  }

  isRegistered(email) {
    return this.attendees.has(email);
  }

  listAttendees() {
    return Array.from(this.attendees.values());
  }

  spotsRemaining() {
    return this.capacity - this.attendees.size;
  }

  eventSummary() {
    return {
      eventName: this.eventName,
      eventDate: this.eventDate,
      capacity: this.capacity,
      registered: this.attendees.size,
      spotsRemaining: this.spotsRemaining()
    };
  }
}


function testpage() {
  alert('testing page');
}



/*
const eventReg = new EventRegistration(
  "JavaScript Workshop",
  "2025-02-15",
  2
);

eventReg.register({ name: "Alice", email: "alice@mail.com" });
eventReg.register({ name: "Bob", email: "bob@mail.com" });

console.log(eventReg.listAttendees());
console.log(eventReg.eventSummary());
*/



class JavascriptDataDownloader {

    constructor(data={}) {
        this.data = data;
    }

    download (type_of = "text/plain", filename= "data.txt") {
        let body = document.body;
        const a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([JSON.stringify(this.data, null, 2)], {
            type: type_of
        }));
        a.setAttribute("download", filename);
        body.appendChild(a);
        a.click();
        body.removeChild(a);
    }
} 


//https://docs.github.com/en/repositories/working-with-files/managing-files/renaming-a-file#renaming-a-file-using-the-command-line


function updateBooking ()
{
 const fs = require("fs");

// STEP 1: Reading JSON file 
const users = require("/data/eventregistration/registration1.json");

alert(users.length);

// Defining new user 
let user =
{
    name: "New User",
    age: 30,
    language: ["PHP", "Go", "JavaScript"]
};

// STEP 2: Adding new data to users object 
users.push(user);

alert(user);

// STEP 3: Writing to a file 
fs.writeFile(
    "registration1.json",
    JSON.stringify(users),
    err => {
        // Checking for errors 
        if (err) throw err;

        // Success 
        console.log("Done writing");
    }); 
}

/*
function useful ()  {
var sitePersonel = {};
var employees = []
sitePersonel.employees = employees;
//console.log(sitePersonel);

var firstName = "John";
var lastName = "Smith";
var employee = {
  "firstName": firstName,
  "lastName": lastName
}
sitePersonel.employees.push(employee);
//console.log(sitePersonel);

var manager = "Jane Doe";
sitePersonel.employees[0].manager = manager;
*/
//console.log(sitePersonel);

//alert(JSON.stringify(sitePersonel));


//fs.writeFileSync("./data/tours_details/data.json", JSON.stringify(data, null, 2));

 /* 
  const booked = [];
  const bookingList = document.getElementById("tourbookinglist");
  booked.forEach((b) => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${b.username}</strong> booked <strong>${b.title}</strong>  on <strong>  (${b.date}) </strong>`;
  bookingList.appendChild(li);
  });
 */

  //const booked = [];
 
   //alert( attendeeReg.listAttendees().length);


   //https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
