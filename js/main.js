var eventtype= "";
 var eventid = "";  
 
 


/*
class TourEvent {
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

class LectureEvent {
  constructor(id, title, description, date, speaker, venue, city, country) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.speaker = speaker;
    this.venue = venue;
    this.city = city;
    this.country = country;
  }
}
*/



class Attendee {
  #msg; 
 // #attendees;

  constructor(event_id, name, email, dateRegistered) {
    this.event_id = event_id;
    this.name = name;
    this.email = email;
    this.dateRegistered = dateRegistered;
    this.attendees = new Map(); // key: email, value: attendee info
    this.#msg = "";
    
  }
    
    get getattendees() {
       return this.attendees;
        //return this.#attendees;
    }

    get errormsg() {
        return this.#msg;
    }

    set errormsg(err) {
        this.#msg = err;
    }
  

    register(attendee) {
    // Logic to register for event

    if (!attendee?.name || !attendee?.email) {
      
      
       this.#msg= "Attendee must have a name and email.";
       return;
      //throw new Error("Attendee must have a name and email.");
    }
     /*
    if (this.attendees.size >= this.capacity) {
      throw new Error("Event is full.");
    }
      */

    if (this.attendees.has(attendee.email)) {
      this.#msg = "Attendee already registered.";
       return;
     
    }

    /*
    if (this.attendees.size >= this.capacity) {
      throw new Error("Event is full.");
    }
    */

     this.attendees.set(attendee.email, {
      event_id: attendee.event_id,
      name: attendee.name,
      email: attendee.email,
      dateRegistered: attendee.dateRegistered
    });

    return `Succcessful registration of Attendee: ${attendee.name} with email: ${attendee.email} registered on the ${new Date()}`;
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

  /*
  regSummary() {
    return {
      event_id: this.event_id,
      name: this.name,
      email: this.email,
      dateRegistered: this.dateRegistered,
     // totalAttendees: this.attendees.size
    };
  }
  */
}

class userBookingTour {
  
  #msg;

  constructor(tourid, name, email, dateBooked) {
    this.id;
    this.tourid = tourid;
    this.name = name;
    this.email = email;
    this.dateBooked = dateBooked;
    this.tours = new Map(); // key: email, value: attendee info
    
  }
    
    get getTours() {
       return this.tours;
        
    }

    get errormsg() {
        return this.#msg;
    }

    set errormsg(err) {
        this.#msg = err;
    }
    

    book(tour) {
    // Logic to register for event

    if (!tour?.name || !tour?.email) {
      
      
       this.#msg= "Attendee must have a name and email.";
       throw new Error("Attendee must have a name and email.");
       return;
      
    }
     /*
    if (this.attendees.size >= this.capacity) {
      throw new Error("Event is full.");
    }
      */

    if (this.tours.has(tour.tourid)) {
      this.#msg = "Tour already booked.";
       return;
     
    }

    /*
    if (this.attendees.size >= this.capacity) {
      throw new Error("Event is full.");
    }
    */

     /* this.tours.set(tour.tourid, {
      tourid: tour.tourid,
      name: tour.name,
      email: tour.email,
      dateBooked: tour.dateBooked
    }); */


    this.tours.set(tour.id, {
      tourid: tour.tourid,
      name: tour.name,
      email: tour.email,
      dateBooked: tour.dateBooked
    });

     return `Succcessful registration of tour: ${tour.name} with email: ${tour.email} registered on the ${new Date()}`;
  }

    removeBooking(tourid) {
    if (!this.tours.has(tourid)) {
      throw new Error("Tour not found.");
    }

    this.tours.delete(tourid);
    return "Booking removed successfully.";
  }

  isBooked(tourid) {
    return this.tours.has(tourid);
  }

  listTours() {
   return Array.from(this.tours.values());
   
  }
  
  
}


class userBookingLecture {
  
  #msg;

  constructor(lectureid, name, email, dateBooked) {
    this.id;
    this.lectureid = lectureid;
    this.name = name;
    this.email = email;
    this.dateBooked = dateBooked;
    this.lectures = new Map(); // key: email, value: attendee info
    
  }
    
    get getlectures() {
       return this.lectures;
        
    }

    get errormsg() {
        return this.#msg;
    }

    set errormsg(err) {
        this.#msg = err;
    }
    

    book(lecture) {
    // Logic to register for event

    if (!lecture?.name || !lecture?.email) {
      
      
       this.#msg= "Attendee must have a name and email.";
       throw new Error("Attendee must have a name and email.");
       return;
      
    }
     /*
    if (this.attendees.size >= this.capacity) {
      throw new Error("Event is full.");
    }
      */

    if (this.lectures.has(lecture.lectureid)) {
      this.#msg = "Lecture already booked.";
       return;
     
    }

    /*
    if (this.attendees.size >= this.capacity) {
      throw new Error("Event is full.");
    }
    */

    /*
    this.attendees.set(attendee.email, {
      event_id: attendee.event_id,
      name: attendee.name,
      email: attendee.email,
      dateRegistered: attendee.dateRegistered
    });
   */
  
     this.lectures.set(lecture.id, {
      lectureid: lecture.lectureid,
      name: lecture.name,
      email: lecture.email,
      dateBooked: lecture.dateBooked
    });

     return `Succcessful registration of Attendee: ${lecture.name} with email: ${lecture.email} registered on the ${new Date()}`;
  }

    removeBooking(lectureid) {
    if (!this.lectures.has(lectureid)) {
      throw new Error("Lecture not found.");
    }

    this.lectures.delete(lectureid);
    return "Booking removed successfully.";
  }

  isBooked(lectureid) {
    return this.lectures.has(lectureid);
  }

  listLectures() {
   return Array.from(this.lectures.values());
   
  }
  
  
}


let detailRespTour, detailsTour ;
let detailRespLec, detailsLec ;

async function getLecturesandTours() {

         detailRespTour = await fetch(`data/tours_details/tours.json`);
         if (!detailRespTour.ok) throw new Error(`HTTP error! status: ${detailRespTour.status}`);
         detailsTour = await detailRespTour.json() ;

         detailRespLec = await fetch(`data/lecture_details/lectures.json`);
         if (!detailRespLec.ok) throw new Error(`HTTP error! status: ${detailRespLec.status}`);
         detailsLec = await detailRespLec.json() ;


      



       /*
        const noEventsMessage =  'No upcoming events at this time.';


        if (!details.tours || details.tours.length === 0) {
            grid.innerHTML = `<p>${noEventsMessage}</p>`;
            return;
        }
        */
}

if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", getLecturesandTours);
} else {
  // `DOMContentLoaded` has already fired
  getLecturesandTours() ;
}
 
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


function loadLectureEvent() {

    
    document.getElementById("hdrevent").innerHTML = "Searching for lecture event";
    
    const lec = document.getElementById("lectures");
    lec.style.display = 'block'; 

    const grid = document.getElementById('lectures-grid');
    
    LecturesSearchCriteria ();

    try {
       
        grid.innerHTML = '';

      /* const detailResp = await fetch(`data/lecture_details/lectures.json`);
         if (!detailResp.ok) throw new Error(`HTTP error! status: ${detailResp.status}`);
        const details = await detailResp.json() ; */

       
        const noEventsMessage =  'No upcoming events at this time.';


        if (!detailsLec.lectures || detailsLec.lectures.length === 0) {
            grid.innerHTML = `<p>${noEventsMessage}</p>`;
            return;
        }


        for (const event of detailsLec.lectures) {

            const card = document.createElement('div');
            card.className = 'event-card';

            card.innerHTML = `
             
                <div id="${event.id}" class="event-card-content">
                    <h4>Title:${event.title}</h4>
                    <h2>Description: ${event.description}</h2>
                    <p><strong>Seats:</strong> ${event.seats}</p>
                    <p><strong>Date:</strong> ${event.date}</p>
                    <p><strong>Speaker:</strong> ${event.speaker}</p>
                    <p><strong>Venue:</strong>${event.venue}</p>
                    <p><strong>City:</strong>${event.city}</p>
                    <p><strong>Country:</strong>${event.country}</p> 
                                   
                </div>

                <button id = "btn${event.id}" class="book-btn" onclick="openBookingLecture('${event.id}')">
                  Book
                </button>

            `;
            grid.appendChild(card);

        }

  
    //RegisterEvent (eventid);
    BookLectureEvent (eventid);

    } catch (error) {
        console.error("Could not load events:", error);
       // const isRTL = document.body.classList.contains('rtl') ;
        const msg = "Sorry, we couldn't load the events. Please try again later.";
        grid.innerHTML = `<p style="color: #ff6b6b;">${msg}</p>`;
    }

    
   
}
//==================== End events Grid for tours event================================


function ToursSearchCriteria ()  {

    const searchgrid = document.getElementById("searching-grid");
    searchgrid.style.display = 'block'; 
    searchgrid.innerHTML ="";

    var search =`
                <input
                  id="countryInput"
                  type="text"
                  class="searchInput"
                  placeholder="Country"
                />
                <input
                  type="text"
                  class="searchInput"
                  placeholder="City"
                  id="cityInput"
                />
                <input id="startdate" type="date" />
                <input id="enddate" type="date" />`;

    const card = document.createElement('div');
    card.className = 'search-fields';
    card.innerHTML = search;
    
    var btn = document.createElement('button');
    btn.className = 'book-btn';
    
     
    btn.innerText = 'Search';
    btn.id = 'cmdSearch';
   
    if (btn) {

      btn.addEventListener("click", runsearchTours);
    
       
      function runsearchTours () {
         var country = document.getElementById('countryInput').value;
         var city = document.getElementById('cityInput').value;
         var startdate = document.getElementById('startdate').value;
         var enddate = document.getElementById('enddate').value;
         var filepath= "/data/tours_details/tours.json";
       
        searchtours(country, city, startdate, enddate, filepath );
      }

    } else {
      alert("Element not found!");
    }
    card.appendChild(btn);
    searchgrid.appendChild(card);
   
}

function LecturesSearchCriteria ()  {
  
    const searchgrid = document.getElementById("searching-grid");
    searchgrid.style.display = 'block'; 
    searchgrid.innerHTML ="";

    var search =`
   
    <div id="sitereg">
              <div><label for="city">City</label></div>
              <div>
                <input
                  type="text"
                  id="city"
                  
                  placeholder="Enter City please"
                />
              </div>

              <div><label for="speaker">Speaker</label></div>
              <div>
                <input
                  type="text"
                  id="speaker"
                 
                  placeholder="Enter Speaker please"
                />
              </div>
              <div><label for="country">Country</label></div>
              <div>
                <input
                  type="text"
                  id="country"
                 
                  placeholder="Enter country please"
                />
              </div>
             
            </div>

                `;
                

    const card = document.createElement('div');
    //card.className = 'search-fields';
    card.innerHTML = search;
    
    var btn = document.createElement('button');
    btn.className = 'book-btn';
    
     
    btn.innerText = 'Search';
    btn.id = 'cmdSearch';
   
    if (btn) {

      btn.addEventListener("click", runsearchLecture);
    
       
      function runsearchLecture () {

        
         var country = document.getElementById('country').value;
         var city = document.getElementById('city').value;
         var speaker = document.getElementById('speaker').value;
         var filepath = "/data/lecture_details/lectures.json"
       
        searchlectures (country, city, speaker, filepath);
       
      }

    } else {
      alert("Element not found!");
    }
    card.appendChild(btn);
    searchgrid.appendChild(card);
  

}

function loadTourEvent() {

     document.getElementById("hdrevent").innerHTML = "Searching for Tours event";
     //const search = document.getElementById("searchcriteria");
     //search.style.display = 'block';

    // const reg = document.getElementById("SiteRegistration");
    // reg.style.display = 'none'; 

    // const lec = document.getElementById("lectures");
    // lec.style.display = 'none'; 

    const grid = document.getElementById('tours-grid');

    ToursSearchCriteria () ;
    
   // eventtype = "tours";
   
    const tour = document.getElementById("tours");
    tour.style.display = 'block'; 

   
    try {
       
        grid.innerHTML = '';
       
        /*
        const detailResp = await fetch(`data/tours_details/tours.json`);
         if (!detailResp.ok) throw new Error(`HTTP error! status: ${detailResp.status}`);
        const details = await detailResp.json() ;
        */
        
        const noEventsMessage =  'No upcoming events at this time.';


        if (!detailsTour.tours || detailsTour.tours.length === 0) {
            grid.innerHTML = `<p>${noEventsMessage}</p>`;
            return;
        }


        for (const event of detailsTour.tours) {

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

            <button id = "btn${event.id}" class="book-btn" onclick="openBookingTour('${event.id}')">
              Book
            </button>
           
          
            `;

            grid.appendChild(card);


        }

        
    //RegisterEvent (eventid);
    BookTourEvent (eventid);

    } catch (error) {
        console.error("Could not load events:", error);
        const isRTL = document.body.classList.contains('rtl') ;
        //const isRTL = document.body.classList.contains('rtl') || document.documentElement.lang === 'ar';
        //const msg = isRTL ? 'عذرًا، لا نستطيع تحميل الفعاليات الآن. الرجاء المحاولة لاحقًا.' : "Sorry, we couldn't load the events. Please try again later.";

        grid.innerHTML = `<p style="color: #ff6b6b;">${isRTL}</p>`;
    }



}


function getSiteEvent  (strEventType, displaystate) {
  
  const grid = document.getElementById(strEventType);
  grid.style.display = displaystate;
  return grid;
} 

function loadSiteRegistration () {
  
  //getSiteEvent ('searchcriteria', 'none');
 // getSiteEvent ('lectures', 'none');
  //getSiteEvent ('tours', 'none');
 // getSiteEvent ('SiteRegistration', 'block');
  
 // getSiteEvent ('tours-reservation', 'none');  
 
   const grid = document.getElementById("siteregistration-grid");

   grid.style.display = 'block';
          
     // const card = document.createElement('div') ;
     // card.className = 'event-card';
     // card.innerHTML  = "";

      var strNewReg  = `
          
        <h2>Registration</h2>

          <div id="sitereg">

            <div>
              <input
                type="text"
                id="regname"
                name="regname"
                placeholder="Your fullname"
              />

              <input
                type="text"
                id="regemail"
                name="regemail"
                placeholder="Your Email."
              />

              <div id ="divbutton">
              <p
                class="book-btn"
                id="cmdBooking"
                onclick="confirmRegistration()"
                style="width: 80px"
              >
                Confirm
              </p>

               <p
                class="book-btn"
                id="cmdCancel"
                onclick="cancelRegistration()"
                style="width: 80px"
                >
                Cancel
              </p>
            </div>

            </div>
              ` 
            ;

     // card.innerHTML = strNewReg;
     // grid.innerHTML = "";
     // grid.appendChild(card) 
     grid.innerHTML = strNewReg;
 
}

function BookTourEvent (eventid)
{
    
    const grid = document.getElementById('bookingModal');
    
    var regevent =` 
    
    <form id="BookingForm">
      <div class="modal-content"  >

       <h2>Event Booking</h2>
        
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
         <p class="book-btn" id="cmdBooking"  onclick="confirmTourBooking('${eventid}')"  >Confirm</p>
         <p class="book-btn" id ="cmdCancel" onclick="closeBooking()">Cancel</p>
      </div>
    
      </div>
      
      </form>` ;

  
   grid.innerHTML = regevent;
  
}

function BookLectureEvent (eventid)
{
    
    const grid = document.getElementById('bookingModal');
    
    var regevent =` 
    
    <form id="BookingForm">
      <div class="modal-content"  >

       <h2>Event Booking</h2>
        
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
         <p class="book-btn" id="cmdBooking"  onclick="confirmLectureBooking('${eventid}')"  >Confirm</p>
         <p class="book-btn" id ="cmdCancel" onclick="closeBooking()">Cancel</p>
      </div>
    
      </div>
      
      </form>` ;

  
   grid.innerHTML = regevent;
  
}

function closeBooking() {

     // mdlBooking.style.display = "none";
      const grid = document.getElementById('bookingModal');
      grid.style.display ='none';
      form.reset();

}

function openBookingLecture(eventid) {
      
    const lecture =  detailsLec.lectures.find(u => u.id === eventid);

    document.getElementById("eventTitle").value = lecture.title;
    document.getElementById("eventId").value = lecture.id;

    
    document.getElementById("eventId").setAttribute('value', lecture.id);
    document.getElementById("eventTitle").setAttribute('value', lecture.title);

     const grid = document.getElementById('bookingModal');
     grid.style.display ='block';
   
}

function openBookingTour(eventid) {
      
    const tour =  detailsTour.tours.find(u => u.id === eventid);

    document.getElementById("eventTitle").value = tour.title;
    document.getElementById("eventId").value = tour.id;

    document.getElementById("eventId").setAttribute('value', tour.id);
    document.getElementById("eventTitle").setAttribute('value', tour.title);

    const grid = document.getElementById('bookingModal');
    grid.style.display ='block';
    
      
}

/*
function renderBookings (eventid, grid)  {
  
  //const myNodelist = grid.querySelectorAll("p");

  const objgrid = document.getElementById(eventid);
  const myNodelist = objgrid.querySelectorAll("p");

  //const tourgrid = document.getElementById('tours-grid');

  //alert (objgrid.innerHTML);
/*
  var str= "";
  var num;

  for (let i = 0; i < myNodelist.length; i++) {

   if (i== 0) {
    num = myNodelist[i].innerText.replace(/[^0-9]/g, '');
    num = parseInt(num);
   
     alert (  myNodelist.length + "*******" + str);

    if (num == 0)  {
      
      document.getElementById("btn"+eventid).innerText = "Sold out";
      document.getElementById("btn"+eventid ).disabled= true;
      document.getElementById("btn"+eventid).style.cursor = 'not-allowed'; 

      str = myNodelist[i].innerText = "Seats : " + num ;

    } else {
       num--;
       str = myNodelist[i].innerText = "Seats : " + num ;

    }
   
   }
}
return str;
 
}
*/



function RenderTourBookings(eventid, num)  {

  const tourbooking = document.getElementById(eventid);
  const myNodelist = tourbooking.querySelectorAll("p");

  const tourgrid = document.getElementById('tours-grid');
  
  var str= "";

  for (let i = 0; i < myNodelist.length; i++) {

   if (i== 0) {
    num = myNodelist[i].innerText.replace(/[^0-9]/g, '');
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



function renderLecBookingList   ()
{

  const LectureList = document.getElementById("LecReservationList");
  LectureList.innerHTML = "";
  
   const TourList = document.getElementById("TourReservationList");
   TourList.style.display ='none';


  lecbooked.listLectures().forEach((b) => {
     
    const li = document.createElement("li");
       
        li.onmouseover = function over (){
          li.style.color = "white";
           li.style.backgroundColor = "green";
          
          li.style.cursor = 'pointer';
        };
        li.onmouseout = function out (){
          li.style.color = "black";
          li.style.backgroundColor = "#EEEADF";
        };

        li.id = b.email;

        let result = detailsLec.lectures.filter(function(lecture){
           return lecture.id.trim() === b.lectureid.trim();
        });

        let search = json2array(result);



        li.ondblclick = function showUserDetails (){

          const sect = document.getElementById("choicedisplay");
          sect.style.display = 'block';

          const grid = document.getElementById("displayinfo");
          grid.style.display = 'block';
          
          const card = document.createElement('div') ;
          card.className = 'event-card';
          card.innerHTML  = "";
          card.id = b.email;

        for(const item of search) {
            //alert (item.title);
            var strUser  = `
            
            <h3>✅ Lecture Details </h3>
             <div id="${item.id}" class="event-card-content">
                <h4><strong>Title:</strong>${item.title}</h4>
                <h2><strong>City:</strong> ${item.city}</h2>
                <p><strong>Country:</strong>${item.country}</p>
              
                <div id="divbutton" >
                    <p class="book-btn" id="cmdDelete"  onclick="removeUser('${b.email}');">Delete</p>
                </div> 
            </div>` ;

            card.innerHTML = strUser;
            grid.innerHTML = "";
            grid.appendChild(card) ;
        }

        };

         li.innerHTML = `<strong>${b.name}</strong>`;
         LectureList.appendChild(li);

  });
  
 

  return LectureList;
}

function renderTourBookingList   ()
{

  const TourList = document.getElementById("TourReservationList");
  TourList.innerHTML = "";

  const LectureList = document.getElementById("LecReservationList");
  LectureList.style.display ='none';

  
  tourbooked.listTours().forEach((b) => {
     
    const li = document.createElement("li");
    li.style.color = 'black';
      
        li.onmouseover = function over (){
          li.style.color = "white";
          li.style.backgroundColor = "green";
          li.style.cursor = 'pointer';
        };
        li.onmouseout = function out (){
          li.style.color = "black";
          li.style.backgroundColor = "#EEEADF";
        };

        li.id = b.email;

        let result = detailsTour.tours.filter(function(tour){
           return tour.id.trim() === b.tourid.trim();
        });

        let search = json2array(result);

        li.ondblclick = function showUserDetails (){
          
          const sect = document.getElementById("choicedisplay");
          sect.style.display = 'block';

          const grid = document.getElementById("displayinfo");
          grid.style.display = 'block';
        
          const card = document.createElement('div') ;
          card.className = 'event-card';
          card.innerHTML  = "";
          card.id = b.email;

          for(const item of search) {
            //alert (item.title);
        
           var strUser  = `
            <h3>✅ Tours Details </h3>
            <div id="${item.id}" class="event-card-content">
                <h4><strong>Title:</strong>${item.title}</h4>
                <h2><strong>City:</strong> ${item.city}</h2>
                <p><strong>Country:</strong>${item.country}</p>
              
                <div id="divbutton" >
                    <p class="book-btn" id="cmdDelete"  onclick="removeUser('${b.email}');">Delete</p>
                </div> 
            </div>` ;

            card.innerHTML = strUser;
            grid.innerHTML = "";
            grid.appendChild(card) ;
          } 
        };
 
    
     li.innerHTML = `<strong>${b.name}</strong>`;
     TourList.appendChild(li);

  });
  
  
  return TourList;
}


function renderRegisteredUsersList   ()
{

  const RegList = document.getElementById("RegisteredUsersList");

  RegList.innerHTML = "";

  attendeeReg.listAttendees().forEach((b) => {
     
     const li = document.createElement("li");
    li.style.color = 'black';
      
    //===================
        li.onmouseover = function over (){
          li.style.color = "white";
          li.style.backgroundColor = "green";
          li.style.cursor = 'pointer';
        };
        li.onmouseout = function out (){
          li.style.color = "black";
          li.style.backgroundColor = "#EEEADF";
        };

        li.id = b.email;
        

        li.ondblclick = function showUserDetails (){
          
          const sect = document.getElementById("choicedisplay");
          sect.style.display = 'block';

          const grid = document.getElementById("displayinfo");
          grid.style.display = 'block';
        
          const card = document.createElement('div') ;
          card.className = 'event-card';
          card.innerHTML  = "";
          card.id = b.email;



          var strUser  = `
            <h3>✅ Registered User Details </h3>
            <div id="${b.email}" class="event-card-content">
                <h4><strong>Name:</strong>${b.name}</h4>
                <h2><strong>Email:</strong> ${b.email}</h2>
                <p><strong>Registration Date:</strong> ${b.dateRegistered}</p>
              
                <div id="divbutton" >
                    <p class="book-btn" id="cmdDelete"  onclick="removeUser('${b.email}');">Delete</p>
                </div> 
            </div>` ;

            card.innerHTML = strUser;
            grid.innerHTML = "";
            grid.appendChild(card) ;

        };
 
    
     li.innerHTML = `<strong>${b.name}</strong>`;
     RegList.appendChild(li);

  });
  
 
 // getSiteEvent ('SiteRegistration', 'none');

  return RegList;
}


function BookingTour (tourid)  {
   
 
  let num ='';

  RenderTourBookings (tourid, num)  ;

let filteredtours = detailsTour.tours.filter (function (tour)
  {
     if (tour.id === tourid) {
        tour.seats = num ;
      } 
     
  })


}


function confirmLectureBooking (eventid) {

   /*  for (const oAttendee of attendeeReg.listAttendees()) {
     alert ("id: " + oAttendee.event_id + " date: " + oAttendee.dateRegistered);
  
   } */

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

   
     eventid = document.getElementById("eventId").value.trim();
     
    

      attendeeReg.name = document.getElementById("username").value.trim().toLowerCase();   
      attendeeReg.email = document.getElementById("useremail").value.trim();
      attendeeReg.event_id = eventid;
      attendeeReg.dateRegistered = new Date().toLocaleDateString();
   
     
   
    if(!attendeeReg.isRegistered(attendeeReg.email)) {
        alert("You are not registered in the system  ");
        return;
    }else {
       
      // Save the user tour booking 

      /*
      const booked = [];

      
      booked.push({lectureid:document.getElementById("eventId").value.trim(), 
      username:document.getElementById("username").value.trim(), 
      useremail:document.getElementById("useremail").value.trim(), 
      dateRegistered: new Date().toLocaleDateString() });
     */

     
     let username = document.getElementById("username").value.trim();
     let useremail = document.getElementById("useremail").value.trim();
     let dateReg = new Date().toLocaleDateString();

    const obj = lecbooked.listLectures();
    const lastkey = Object.keys(obj)[Object.keys(obj).length - 1];
     
    lecbooked.book({id: lastkey+1, lectureid: eventid, name: username, email: useremail , dateBooked: dateReg});
    
    BookingTour (eventid) ;

    }
    
   // const lecgrid = document.getElementById('lectures-grid');
   // renderBookings(eventid, lecgrid);
   
    const frmBooking = document.getElementById("BookingForm");
    frmBooking.reset ();

    const grid = document.getElementById('bookingModal');
    grid.style.display ='none';


}

function confirmTourBooking (eventid) {

  /*
     for (const oAttendee of attendeeReg.listAttendees()) {
     alert ("id: XXXXXX " + oAttendee.event_id + " date: " + oAttendee.dateRegistered);
  
   } 
  */
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

   
     eventid = document.getElementById("eventId").value.trim();
     
     BookingTour (eventid) ;


      attendeeReg.name = document.getElementById("username").value.trim().toLowerCase();   
      attendeeReg.email = document.getElementById("useremail").value.trim();
      attendeeReg.event_id = eventid;
      attendeeReg.dateRegistered = new Date().toLocaleDateString();
   

    if(!attendeeReg.isRegistered(attendeeReg.email)) {
        alert("You are not registered in the system  ");
        return;
    }else {
       
      // Save the user tour booking 

      /*
      const booked = [];

      booked.push({event_id:document.getElementById("eventId").value.trim(), 
      username:document.getElementById("username").value.trim(), 
      useremail:document.getElementById("useremail").value.trim(), 
      date: new Date().toLocaleDateString() });
     
      attendeeReg.register(booked);
      */

      //let eventid = document.getElementById("eventId").value.trim();
      let username = document.getElementById("username").value.trim();
      let useremail = document.getElementById("useremail").value.trim();
      let dateReg = new Date().toLocaleDateString();

      const obj = tourbooked.listTours();
      const lastkey = Object.keys(obj)[Object.keys(obj).length - 1];
     
      tourbooked.book({id: lastkey+1, tourid: eventid, name: username, email: useremail , dateBooked: dateReg});
     
    }
    
    //let num ='';
    //RenderTourBookings(eventid, num);
    
    //const tourgrid = document.getElementById('tours-grid');
    //renderBookings(eventid, tourgrid);

    /*
    for (const oAttendee of attendeeReg.listAttendees()) {
     alert (oAttendee.email);
    }
    */
    
    const frmBooking = document.getElementById("BookingForm");
    frmBooking.reset ();

    const grid = document.getElementById('bookingModal');
    grid.style.display ='none';
   
   
}


function removeUser (useremail)
{
            
  let text = "Confirm if you want to remove the selected user";
  if (confirm(text) == true) {
    
    attendeeReg.unregister(useremail);
    showToursBookinglist ();
    getSiteEvent("registeredusers-grid", "none");
    
  } 
      
    
}


function UserLectureBookings ()
{
  
  const divsection = document.getElementById('lecturesreservation');
  divsection.style.display = 'block';
  
  
  const reservegrid = document.getElementById('lecturesreservation-grid');
  reservegrid.style.display = 'block';


  const lst = renderLecBookingList();
  lst.style.display = 'block';

  reservegrid.innerHTML="<h3>✅User Lecture Bookings</h3> <h5>Double click on users to view more details</h5>"
  reservegrid.append(lst);

}

function UserTourBookings ()
{

  const divsection = document.getElementById('toursreservation');
  divsection.style.display = 'block';
  
 
  const toursgrid = document.getElementById('toursreservation-grid');
  toursgrid.style.display = 'block';
 
  const lst = renderTourBookingList();
  lst.style.display = 'block';
  
  
  toursgrid.innerHTML="<h3>✅User Tours Bookings</h3> <h5>Double click on users to view more details</h5>"
  toursgrid.append(lst);
 
}



function RegisteredUsers ()   {
  
  const divsection = document.getElementById('users-registration');
  divsection.style.display = 'block';
  
  const usersgrid = document.getElementById('users-registration-grid');
 
  const lst = renderRegisteredUsersList() ;
  lst.style.display = 'block';

  usersgrid.append(lst);

 
}


function showToursBookinglist ()  {

  const divsection = document.getElementById('tours-reservation');
  divsection.style.display = 'block';
  
  const toursgrid = document.getElementById('tours-reservation-grid');
  
  const lst = confirmTourBooking();

  toursgrid.appendChild(lst);

}


async function searchlectures (country, city, speaker, strfilepath) {
 
  
  try {

    const section = document.getElementById('lectures');
    section.style.display = 'block';

    const grid = document.getElementById('lectures-grid');
    grid.innerHTML = '';

    const res = await fetch(strfilepath);

    if (!res.ok) throw new Error("Failed to load JSON");

    const data = await res.json();

    
    let filteredlectures = data.lectures.filter (function (lecture)
    {
        return  lecture.country.toLowerCase() === country.toLowerCase() 
        || lecture.city.toLowerCase() === city.toLowerCase()
        || lecture.speaker.toLowerCase() === speaker.toLowerCase()
    })

    
    let search = json2array(filteredlectures);


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

  
    // return tour;

     
  } catch (err) {
     return err;
  }
}

async function searchtours (strcountry, strcity,  startdate , enddate, strfilepath) {
 
  try {

    const res = await fetch(strfilepath);

    if (!res.ok) throw new Error("Failed to load JSON");

    const data = await res.json();

    
    
    let filteredtours = data.tours.filter (function (tour)
    {
        return  tour.country.toLowerCase() === strcountry.toLowerCase() 
        || tour.city.toLowerCase() === strcity.toLowerCase()
        || Date.parse (tour.date) >= Date.parse(startdate) && Date.parse(tour.date) <= Date.parse(enddate)
    })

    ToursSearchCriteria () ;
    
    //alert (filteredtours);

    /*
    var filter = {
      country: '' + strcountry.toLowerCase(),
        city: '' +  strcity.toLowerCase()
    };

    var filteredData = filterByMultipleColumns(data.tours, filter);
    */

    //alert (JSON.stringify(out));

    //alert (JSON.stringify(filters));


    const section = document.getElementById('tours');
    section.style.display = 'block';

    const grid = document.getElementById('tours-grid');
    grid.innerHTML = '';


    let search = json2array(filteredtours);


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

    
    return grid;

     
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

function cancelRegistration ()  {
  
  getSiteEvent ('SiteRegistration', 'none');

}

function confirmRegistration() {

   attendeeReg.name = document.getElementById("regname").value.trim();
   attendeeReg.email = document.getElementById("regemail").value.trim();
   attendeeReg.dateRegistered = new Date().toLocaleDateString();
   
   attendeeReg.register({ name: attendeeReg.name, 
                          email: attendeeReg.email,
                          dateRegistered: attendeeReg.dateRegistered });

   //alert (attendeeReg.listAttendees().length);

    if (!attendeeReg.name || !attendeeReg.email) {
      alert (attendeeReg.errormsg);
      return;
    }

    document.getElementById("regname").value = '';
    document.getElementById("regemail").value = '';
   
}

navtoggle ();



function useroption (choice) {
   
  const sections = document.querySelectorAll('section');
  var searchgrid, search ;
 
for (const section of sections) {
  section.style.display='none'; 
  if (section.id.trim() === choice.trim() ){

    switch(choice) {
      case "tours":
        searchgrid = document.getElementById("searching-grid");
        searchgrid.style.display = 'block';  
        search = document.getElementById('searchcriteria');
        search.style.display = 'block';
        break;

      case "lectures":
        searchgrid = document.getElementById("search-grid");
        searchgrid.style.display = 'block';  
        search = document.getElementById('searchcriteria');
        search.style.display = 'block';
       
      break;
  
    }
    section.style.display='block';
    const grid = document.getElementById('bookingModal');
    grid.style.display ='none';
    //alert(choice)
  }
}
  
}



const attendeeReg = new Attendee();

const tourbooked = new userBookingTour();
tourbooked.book({id:1, tourid: "trs0002", name: "Alice Thomson", email: "alice@mail.com" , dateRegistered: new Date().toLocaleDateString()});
tourbooked.book({id:2, tourid: "trs0003", name: "Rob Husky", email: "rob@mail.com" , dateRegistered: new Date().toLocaleDateString()});
tourbooked.book({id:3, tourid: "trs0003", name: "Rob Husky", email: "rob@mail.com" , dateRegistered: new Date().toLocaleDateString()});


//alert ("Tours " + tourbooked.listTours().length);

const lecbooked = new userBookingLecture();
lecbooked.book({id:1, lectureid: "lec0002", name: "Margaret Thomson", email: "margaret@mail.com" , dateRegistered: new Date().toLocaleDateString()});
lecbooked.book({id:2, lectureid: "lec0003", name: "Jimmy Thomson", email: "Jimmy@mail.com" , dateRegistered: new Date().toLocaleDateString()});


//const lastelem  = lecbooked.listLectures()[Object.keys(lecbooked.listLectures())[Object.keys(lecbooked.listLectures()).length - 1]];

//let i = lecbooked.listLectures().length;
//const lastkey = Object.keys(lecbooked.listLectures())[Object.keys(lecbooked.listLectures()).length - 1];

//alert ("$$$$$$$ " + lastkey);

/*
let last;
lecbooked.listLectures().forEach(item => {
 last = item;
 alert (last.name);
});
*/


attendeeReg.register({ event_id: "", name: "Alice Thomson", email: "alice@mail.com" , dateRegistered: new Date().toLocaleDateString()});
attendeeReg.register({ event_id: "", name: "Bob Husky", email: "bob@mail.com", dateRegistered: new Date().toLocaleDateString() });

attendeeReg.register({ event_id: "", name: "Jimmy Thomson", email: "Jimmy@mail.com" , dateRegistered: new Date().toLocaleDateString()});
attendeeReg.register({ event_id: "", name: "Rob Husky", email: "Rob@mail.com", dateRegistered: new Date().toLocaleDateString() });
//attendeeReg.register({ event_id: "", name: "Rob Husky2", email: "Rob@mail.com", dateRegistered: new Date().toLocaleDateString() });


//alert("Attendees: " + attendeeReg.listAttendees().length);
