 var eventtype= "";
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
async function loadLectureEvents() {

    const section = document.getElementById('events');
    section.style.display = 'block';

    const grid = document.getElementById('events-grid');
    try {
        const response = await fetch('data/lectureevent.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const eventIndex = await response.json();

       // alert(eventIndex.lecture);

        const isRTL = document.body.classList.contains('rtl') || document.documentElement.lang === 'ar';
        const noEventsMessage = isRTL ? 'لا توجد فعاليات قادمة في الوقت الحالي.' : 'No upcoming events at this time.';


        if (!eventIndex.lectures || eventIndex.lectures.length === 0) {
            grid.innerHTML = `<p>${noEventsMessage}</p>`;
            return;
        }

        grid.innerHTML = '';

       
        for (const event of eventIndex.lectures) {
            // alert ("" +`data/lecture_details/lecture${event.id}.json`);
            
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
//==================== End events Grid for Lectures================================

 // ------------------- Events Grid for Lectures-------------------

 /*
 async function loadTourEvents() {

    const section = document.getElementById('tours');
    section.style.display = 'block';

    const grid = document.getElementById('tours-grid');
    try {
        const response = await fetch('data/toursevent.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const eventIndex = await response.json();

        const isRTL = document.body.classList.contains('rtl') || document.documentElement.lang === 'ar';
        const noEventsMessage = isRTL ? 'لا توجد فعاليات قادمة في الوقت الحالي.' : 'No upcoming events at this time.';


        if (!eventIndex.tours || eventIndex.tours.length === 0) {
            grid.innerHTML = `<p>${noEventsMessage}</p>`;
            return;
        }

        grid.innerHTML = '';

        for (const event of eventIndex.tours) {

            const detailResp = await fetch(`data/tours_details/tours${event.id}.json`);
            const details = detailResp.ok ? await detailResp.json() : { id: event.id, date: event.date, description: event.description };
          
            const card = document.createElement('div');
            card.className = 'event-card';
            card.innerHTML = `
             
            <img src="${details.src}" alt="${details.title}">
            <div id="${details.id}" class="event-card-content">
                <h4>Title:${details.title}</h4>
                <h2>Description: ${event.description}</h2>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Price:</strong> ${details.price}</p>
                <p><strong>Duration:</strong>${details.duration}</p>
                    
            </div>

            <button class="book-btn" onclick="openBooking('${details.id}')">
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
 */   
//==================== End events Grid for Lectures================================


async function loadTourEvent() {

    const section = document.getElementById('tours');
    section.style.display = 'block';

    const grid = document.getElementById('tours-grid');
   
   
    try {
       
        grid.innerHTML = '';

        const detailResp = await fetch(`data/tours_details/tours.json`);
         if (!detailResp.ok) throw new Error(`HTTP error! status: ${detailResp.status}`);
        const details = await detailResp.json() ;

        const isRTL = document.body.classList.contains('rtl') || document.documentElement.lang === 'ar';
        const noEventsMessage = isRTL ? 'لا توجد فعاليات قادمة في الوقت الحالي.' : 'No upcoming events at this time.';


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
                <p><strong>Total Members:</strong> ${event.maxbooking}</p>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Price:</strong> ${event.price}</p>
                <p><strong>Duration:</strong>${event.duration}</p>
                    
            </div>

            <button class="book-btn" onclick="openBooking('${event.id}')">
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

    //alert ( eventid + " VVVVVVVV " + searchJSONSafe(eventid).title);



    var regevent =` <div  class="modal-content" class="modal" >
    <h2>Event Registration</h2>
         
    <form id="RegistrationForm">

     <label>
        Event ID
        <input type="text" id="eventId"   disabled/>
      </label>

      <label>
        Event Title
        <input type="text" id="eventTitle"  disabled/>
      </label>


      <label>
        Full Name
        <input type="text" id="fullname" required />
      </label>

      <label>
        Email
        <input type="email" id="email" required />
      </label>

       <div id="divbutton">
         <p class="book-btn" onclick="confirmBooking()">Confirm</p>
         <p class="book-btn" onclick="closeBooking()">Cancel</p>
        </div>
    </form>
  </div>` ;

   grid.innerHTML = regevent;
  
}

function closeBooking() {

      mdlBooking.style.display = "none";
      form.reset();

}
 
function populateBookingform (evenid, tour) {

    document.getElementById("eventTitle").value = tour.title;
     document.getElementById("eventId").value = tour.id;

}

function openBooking(eventid) {
      
    searchJSONSafe(eventid); 
   
    mdlBooking.style.display = 'flex';
}

function confirmBooking () {
       alert (eventid) ;

       mdlBooking.style.display = "none";
       form.reset();
}

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

//console.log(sitePersonel);

//alert(JSON.stringify(sitePersonel));
} 
 
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


async function searchJSONSafe(keyword) {
  try {
    const res = await fetch("/data/tours_details/tours.json");
    if (!res.ok) throw new Error("Failed to load JSON");

    const data = await res.json();

    const result = JSON.stringify(data);
    
    const tour = data.tours.find(u => u.id === keyword);


 //   document.getElementById("eventTitle").value = tour.title;
     populateBookingform (eventid, tour);


    return tour;
    
  } catch (err) {
    alert( "------" + err);
    return [];
  }
}


navtoggle ();

const mdlBooking = document.getElementById("bookingModal");



class EventSelected {
  constructor(eventid , eventName, eventDate) {
    this.eventid = eventid;
    this.eventName = eventName;
    this.eventDate = new Date(eventDate);
  }
}


async function getData() {
  try {
    const res =  fetch("./data/tours_details/tours.json");
    const data = await res.json();
    alert (data.tours.length);
  } catch (err) {
     alert("+++++++" + err);
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