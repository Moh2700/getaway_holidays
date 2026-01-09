// var eventtype= "";
 var eventid = "";  
 
 
 // Mobile nav toggle
  function navtoggle () {
   
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');

    if (navToggle && mainNav) {
        navToggle.setAttribute('aria-expanded', 'false');

        navToggle.addEventListener('click', () => {
            const open = mainNav.classList.toggle('open');
            document.body.classList.toggle('nav-open', open);
            navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });

        // Close nav when a link is clicked (mobile)
        mainNav.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                mainNav.classList.remove('open');
                document.body.classList.remove('nav-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when clicking outside or pressing Escape
        document.addEventListener('click', (e) => {
            if (!mainNav.classList.contains('open')) return;

            const withinNav = mainNav.contains(e.target);
            const isToggle = navToggle.contains(e.target);

            if (!withinNav && !isToggle) {

                mainNav.classList.remove('open');
                document.body.classList.remove('nav-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mainNav.classList.contains('open')) {
                
                mainNav.classList.remove('open');
                document.body.classList.remove('nav-open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.focus();
            }
        });

        // Ensure mobile nav closes on desktop resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && mainNav.classList.contains('open')) {
                
                mainNav.classList.remove('open');
                document.body.classList.remove('nav-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });  
    }
  }

// ------------------- Events Grid for Lectures-------------------
/*
async function loadLectureEvents() {

    const divsection = document.getElementById('tours');
    divsection.style.display = 'none';

    const section = document.getElementById('events');
    section.style.display = 'block';

    const grid = document.getElementById('events-grid');
    try {
        const response = await fetch('data/lectureevent.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const eventIndex = await response.json();

        const isRTL = document.body.classList.contains('rtl') || document.documentElement.lang === 'ar';
        const noEventsMessage = isRTL ? 'لا توجد فعاليات قادمة في الوقت الحالي.' : 'No upcoming events at this time.';


        if (!eventIndex.lectures || eventIndex.lectures.length === 0) {
            grid.innerHTML = `<p>${noEventsMessage}</p>`;
            return;
        }

        grid.innerHTML = '';

       
        for (const event of eventIndex.lectures) {
           
            const detailResp = await fetch(`data/lecture_details/lecture${event.id}.json`);
            const details = detailResp.ok ? await detailResp.json() : { id: event.id, date: event.date, description: event.description };
            
            
            const card = document.createElement('div');
            card.className = 'event-card';
            card.innerHTML = `
               
                <div class="event-card-content">
                    <h4>Title:${details.title}</h4>
                    <h2>Description: ${event.description}</h2>
                    <p><strong>Date:</strong> ${event.date}</p>
                    <p><strong>Speaker:</strong> ${details.speaker}</p>
                    <p><strong>Venue:</strong>${details.venue}</p>
                </div>
            `;
            grid.appendChild(card);
            
            
        }

    } catch (error) {
        console.error("Could not load events:", error);
        const isRTL = document.body.classList.contains('rtl') || document.documentElement.lang === 'ar';
        const msg = isRTL ? 'عذرًا، لا نستطيع تحميل الفعاليات الآن. الرجاء المحاولة لاحقًا.' : "Sorry, we couldn't load the events. Please try again later.";
        grid.innerHTML = `<p style="color: #ff6b6b;">${msg}</p>`;
    }
}
 */   

async function loadLectureEvent() {

  eventtype= "lectures";
   
     const lecturesection = document.getElementById('tours');
     lecturesection.style.display = 'none';

    const section = document.getElementById('lectures');
    section.style.display = 'block';

    const grid = document.getElementById('lectures-grid');
   
   
    try {
       
        grid.innerHTML = '';

        const detailResp = await fetch(`data/lecture_details/lectures.json`);
         if (!detailResp.ok) throw new Error(`HTTP error! status: ${detailResp.status}`);
        const details = await detailResp.json() ;

        //const isRTL = document.body.classList.contains('rtl') || document.documentElement.lang === 'ar';
      //  const noEventsMessage = isRTL ? 'لا توجد فعاليات قادمة في الوقت الحالي.' : 'No upcoming events at this time.';

       // const isRTL = document.body.classList.contains('rtl') ;
        const noEventsMessage =  'No upcoming events at this time.';


        if (!details.lectures || details.lectures.length === 0) {
            grid.innerHTML = `<p>${noEventsMessage}</p>`;
            return;
        }


        for (const event of details.lectures) {

            const card = document.createElement('div');
            card.className = 'event-card';

            card.innerHTML = `
             
              <div id="${event.id}" class="event-card-content">
                    <h4>Title:${event.title}</h4>
                    <h2>Description: ${event.description}</h2>
                    <p><strong>Date:</strong> ${event.date}</p>
                    <p><strong>Speaker:</strong> ${event.speaker}</p>
                    <p><strong>Venue:</strong>${event.venue}</p>
                    <p><strong>City:</strong>${event.city}</p>
                    <p><strong>Country:</strong>${event.country}</p>                   
                </div>

            `;
            grid.appendChild(card);

        }

        

   // RegisterEvent (eventid);

    } catch (error) {
        console.error("Could not load events:", error);
       // const isRTL = document.body.classList.contains('rtl') ;
        const msg = "Sorry, we couldn't load the events. Please try again later.";
        grid.innerHTML = `<p style="color: #ff6b6b;">${msg}</p>`;
    }


    

}
//==================== End events Grid for tours event================================


async function loadTourEvent() {

  eventtype= "tours";
   
     const lecturesection = document.getElementById('lectures');
     lecturesection.style.display = 'none';

    const section = document.getElementById('tours');
    section.style.display = 'block';

    const grid = document.getElementById('tours-grid');
   
   
    try {
       
        grid.innerHTML = '';

        const detailResp = await fetch(`data/tours_details/tours.json`);
         if (!detailResp.ok) throw new Error(`HTTP error! status: ${detailResp.status}`);
        const details = await detailResp.json() ;

        //const isRTL = document.body.classList.contains('rtl') || document.documentElement.lang === 'ar';
        const noEventsMessage =  'No upcoming events at this time.';


        if (!details.tours || details.tours.length === 0) {
            grid.innerHTML = `<p>${noEventsMessage}</p>`;
            return;
        }


        for (const event of details.tours) {

            const card = document.createElement('div');
            card.className = 'event-card';
            card.innerHTML = `
             
            <img src="${event.src}" alt="${event.title}">

            
            <div id="${event.id}" class="event-card-content">
                <h4>Title:${event.title}</h4>
                <h2>Description: ${event.description}</h2>
                <p><strong>Seats:</strong> ${event.seats}</p>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Price:</strong> ${event.price}</p>
                <p><strong>Duration:</strong>${event.duration}</p>
                <p><strong>City:</strong>${event.city}</p>
                <p><strong>Country:</strong>${event.country}</p>
                    
            </div>

            <button id = "btn${event.id}" class="book-btn" onclick="openBooking('${event.id}')">
                   Book / Register
            </button>
          
            `;
            grid.appendChild(card);

        }

        

    RegisterEvent (eventid);

    } catch (error) {
        console.error("Could not load events:", error);
        const isRTL = document.body.classList.contains('rtl') || document.documentElement.lang === 'ar';
        const msg = isRTL ? 'عذرًا، لا نستطيع تحميل الفعاليات الآن. الرجاء المحاولة لاحقًا.' : "Sorry, we couldn't load the events. Please try again later.";
        grid.innerHTML = `<p style="color: #ff6b6b;">${msg}</p>`;
    }



}
//==================== End events Grid for tours event================================


function RegisterEvent (eventid)
{
    const grid = document.getElementById('bookingModal');
    //grid.style.display ='block';
     
    // var regevent =` <div class="modal-content" class="modal" >
    var regevent =` 
    
    <form id="BookingForm">
      <div class="modal-content"  >

       <h2>Event Registration</h2>
        
      <label>
        Event ID
        <input type="text" id="eventId" value='${eventid}'  disabled/>
      </label>

      <label>
        Event Title
        <input type="text" id="eventTitle"  disabled/>
      </label>


      <label>
        Full Name
        <input type="text" id="username" required />
      </label>

      <label>
        Email
        <input type="email" id="useremail" required />
      </label>

      <div id="divbutton" " >
         <p class="book-btn" id="cmdBooking"  onclick="confirmBooking('${eventid}')"  >Confirm</p>
         <p class="book-btn" id ="cmdCancel" onclick="closeBooking()">Cancel</p>
      </div>
    
      </div>
      
      </form>` ;

  
   grid.innerHTML = regevent;
  
}

function closeBooking() {

      mdlBooking.style.display = "none";
      form.reset();

}
 
function populateBookingform (evenid, tour) {

    document.getElementById("eventTitle").value = tour.title;
    document.getElementById("eventId").value = tour.id;

    document.getElementById("eventId").setAttribute('value', tour.id);
    document.getElementById("eventTitle").setAttribute('value', tour.title);

}


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

function openBooking(eventid) {
      
    searchJSONSafe(eventid); 
    mdlBooking.style.display = 'block';
   
}

function RenderTourBookings(eventid)  {

  const tourbooking = document.getElementById(eventid);
  const myNodelist = tourbooking.querySelectorAll("p");

  const tourgrid = document.getElementById('tours-grid');
  
  var str= "";

  for (let i = 0; i < myNodelist.length; i++) {

   if (i== 0) {
    let num = myNodelist[i].innerText.replace(/[^0-9]/g, '');
    num = parseInt(num);
    //myNodelist[i].innerText = myNodelist[i].innerText;
    //var alpha = myNodelist[i].innerText;
    //answer = alpha.replace(/[^a-zA-Z]/g, '');
    num--;

    if (num == 0)  {
      
      document.getElementById("btn"+eventid).innerText = "Sold out";
      document.getElementById("btn"+eventid ).disabled= true;
      document.getElementById("btn"+eventid).style.cursor = 'not-allowed'; 

      str = myNodelist[i].innerText = "Seats : " + num ;

    } else {

      str = myNodelist[i].innerText = "Seats : " + num ;

    }
   
   }
}
return str;
}

function saveUserBooking()
{
  
   const booked = [];
    booked.push({id:document.getElementById("eventId").value.trim(), 
    title:document.getElementById("eventTitle").value.trim(), 
    username:document.getElementById("username").value.trim(), 
    useremail:document.getElementById("useremail").value.trim(), 
    date: new Date() });

  return booked;  
}

function renderBookingList   (bookingList, booked)
{
  booked.forEach((b) => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${b.username}</strong> booked <strong>${b.title}</strong>  on <strong>  (${b.date}) </strong>`;
  bookingList.appendChild(li);
  });
  
 
  return bookingList;
}

function confirmBooking (eventid) {
      
    const divsection = document.getElementById('tours-reservation');
    divsection.style.display = 'block';

    const toursgrid = document.getElementById('tours-reservation-grid');
    const bookingList = document.getElementById("tourbookinglist");

    
    const frmBooking = document.getElementById('BookingForm');
    const name = document.getElementById("username").value.trim();
    const email = document.getElementById("useremail").value.trim();

    
 
        
        if (!name) {
          alert("Please enter your name");
          return;
        }

        if (!email) {
          alert("Please enter your email");
          return;
        }
         
        var id = document.getElementById("eventId").value.trim();
        
        RenderTourBookings(id);

        var booked = saveUserBooking ();

        renderBookingList(bookingList, booked);


    toursgrid.appendChild(bookingList);
    
    frmBooking.reset();

    mdlBooking.style.display = "none";

}

async function searchJSONSafe(keyword) {
  try {
    const res = await fetch("/data/tours_details/tours.json");
    if (!res.ok) throw new Error("Failed to load JSON");

    const data = await res.json();

    const result = JSON.stringify(data);
    
    const tour = data.tours.find(u => u.id === keyword);

    populateBookingform (eventid, tour);

    return tour;
    
  } catch (err) {
    alert( "------" + err);
    return [];
  }
}


function searchcountry(eventtype, strcountry) {

 
 

switch (eventtype) {
    case "tours" :

        searchtoursbyCountry (strcountry,"/data/tours_details/tours.json" );
        break;

    case "lectures":
        searchlecturesbyCountry (strcountry,"/data/lecture_details/lectures.json" );
        break;
    
   
  }
 

}


async function searchlecturesbyCountry (country,strfilepath) {
 
   
  try {

    const res = await fetch(strfilepath);

    if (!res.ok) throw new Error("Failed to load JSON");

    const data = await res.json();

    const result = JSON.stringify(data);
    
    const lecturesdata = data.lectures.filter(u => u.country.toLowerCase() === country.toLowerCase());

    var tour = Object.keys(lecturesdata);

    
    const section = document.getElementById('lectures');
    section.style.display = 'block';

    const grid = document.getElementById('lectures-grid');
    grid.innerHTML = '';

   
    let search = json2array(lecturesdata);

    
   
    /*
    for (const val of tour) {
         alert ("Key: " + val.id + " Value: " + toursdata[val].title);
    }
    */

    for(const item of search) {
       
         const card = document.createElement('div');
            card.className = 'event-card';
            card.innerHTML = `
             

            <div id="${item.id}" class="event-card-content">
                    <h4>Title:${item.title}</h4>
                    <h2>Description: ${item.description}</h2>
                    <p><strong>Date:</strong> ${item.date}</p>
                    <p><strong>Speaker:</strong> ${item.speaker}</p>
                    <p><strong>Venue:</strong>${item.venue}</p>
                    <p><strong>City:</strong>${item.city}</p>
                    <p><strong>Country:</strong>${item.country}</p>                   
              
            </div>`;

            grid.appendChild(card);
    }

  
     return tour;

     
  } catch (err) {
     return err;
  }
}


async function searchtoursbyCountry (country,strfilepath) {
 
  
  try {

    const res = await fetch(strfilepath);

    if (!res.ok) throw new Error("Failed to load JSON");

    const data = await res.json();

    const result = JSON.stringify(data);
    
    const toursdata = data.tours.filter(u => u.country.toLowerCase() === country.toLowerCase());

    var tour = Object.keys(toursdata);

    
    const section = document.getElementById('tours');
    section.style.display = 'block';

    const grid = document.getElementById('tours-grid');
    grid.innerHTML = '';

    //alert ("Inside searchtoursbyCountry: " + country + " Filepath: " + strfilepath);

   
    let search = json2array(toursdata);
   
    /*
    for (const val of tour) {
         alert ("Key: " + val.id + " Value: " + toursdata[val].title);
    }
    */


    for(const item of search) {
       
         const card = document.createElement('div');
            card.className = 'event-card';
            card.innerHTML = `
             
            <img src="${item.src}" alt="${item.title}">

            
            <div id="${item.id}" class="event-card-content">
                <h4>Title:${item.title}</h4>
                <h2>Description: ${item.description}</h2>
                <p><strong>Seats:</strong> ${item.seats}</p>
                <p><strong>Date:</strong> ${item.date}</p>
                <p><strong>Price:</strong> ${item.price}</p>
                <p><strong>Duration:</strong>${item.duration}</p>
                <p><strong>City:</strong>${item.city}</p>
                <p><strong>Country:</strong>${item.country}</p>
                    
            </div>`;
   
            grid.appendChild(card);
    }

  
    
    return tour;

     
  } catch (err) {
     return err;
  }
}


function json2array(datasearch){
    
  var resultsearch = [];
   // alert ("Inside: " + JSON.stringify(datasearch));
    var keys = Object.keys(datasearch);
    keys.forEach(function(key){
        resultsearch.push(datasearch[key]);
       
    });

    return resultsearch;
}



// "/data/tours_details/tours.json"
async function searchJSON(strid, strfilepath, datasearch) {
  try {
    const res = await fetch(strfilepath);
    if (!res.ok) throw new Error("Failed to load JSON");

    const data = await res.json();

    const result = JSON.stringify(data);
    
    const tour = data.tours.find(u => u.id === strid);

    return tour;
    
  } catch (err) {
     return err;
  }
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

 
/*
async function fetchMoviesBadStatus() {
  const response = await fetch('/oops');

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const movies = await response.json();
  return movies;
}
*/

/*
fetchMoviesBadStatus().catch(error => {
  error.message; // 'An error has occurred: 404'
});
*/

/*
async function finddata(id) {
  const res = await fetch("/data/tours_details/tours1.json");
  const data = await res.json();

  return data.filter(item => item.id === id);
 // return data ;
}
*/


class EvenTour {
  constructor(id, title, description, seats, date, price, duration, city, country, src) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.seats = seats;
    this.date = date;
    this.price = price;
    this.duration = duration;
    this.city = city;
    this.country = country;
    this.src = src;
  }

  bookTour () {
    if (this.seats > 0) {
      this.seats--;
      return true;
    } else {
      return false;
    }

  }
}

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


navtoggle ();

const mdlBooking = document.getElementById("bookingModal");
