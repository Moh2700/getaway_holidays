var eventtype= "";
 var eventid = "";  
 
let data_array = [];
 
let my_object = {};
  
let isAdmin = 'false';

let detailRespTour, detailsTour ;
let detailRespLec, detailsLec ;

const track = document.getElementById("carouselTrack");
let currentIndex = 0;
 
 
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
   getLecturesandTours() ;
   
  // alert (detailsTour.tours);

} else {
  // `DOMContentLoaded` has already fired
  getLecturesandTours() ;

 // alert (detailsTour.tours);
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


        for (const lec of detailsLec.lectures) {

            const card = document.createElement('div');
            card.className = 'event-card';

            card.innerHTML = `
             
              <img src="${lec.src}" alt="${lec.title}">
              
                <div id="${lec.id}" class="event-card-content">
                    <h4>Title:${lec.title}</h4>
                    <h2>Description: ${lec.description}</h2>
                    <p><strong>Seats:</strong> ${lec.seats}</p>
                    <p><strong>Date:</strong> ${lec.date}</p>
                    <p><strong>Speaker:</strong> ${lec.speaker}</p>
                    <p><strong>Venue:</strong>${lec.venue}</p>
                    <p><strong>City:</strong>${lec.city}</p>
                    <p><strong>Country:</strong>${lec.country}</p> 
                                   
                </div>

                <button id = "btn${lec.id}" class="book-btn" onclick="openBookingLecture('${lec.id}')">
                  Book
                </button>

            `;
            grid.appendChild(card);
           
           BookLectureEvent ();

        }

        /*

         <button id = "btn${lec.id}" class="book-btn" onclick="openBookingLecture('${lec.id}')">
                  Book
                </button>
        */
  
    //RegisterEvent (eventid);
    
    BookLectureEvent (`${lec.id}`);

    } catch (error) {
        console.error("Could not load events:", error);
       // const isRTL = document.body.classList.contains('rtl') ;
        const msg = "Sorry, we couldn't load the events. Please try again later.";
        grid.innerHTML = `<p style="color: #ff6b6b;">${msg}</p>`;
    }

    
   
}

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
   // btn.className = 'search-fields';
     
    btn.innerText = 'Search';
    btn.id = 'cmdSearch';
   
    if (btn) {

      
        btn.addEventListener("click", runsearchTours);

        function runsearchTours () {

          const country = document.getElementById('countryInput').value;
          const city = document.getElementById('cityInput').value;
          const startdate = document.getElementById('startdate').value;
          const enddate = document.getElementById('enddate').value;
       
          searchtours(country, city, startdate, enddate);
        
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
   
    
              <!--div><label for="city">City</label></div-->
             
                <input 
                  type="text" class="searchInput"
                  id="city"
                  
                  placeholder="Enter City please"
                />
            

              <!--div><label for="speaker">Speaker</label></div-->
            
                <input 
                  type="text" class="searchInput"
                  id="speaker"
                 
                  placeholder="Enter Speaker please"
                />
              
              <!--div><label for="country">Country</label></div-->
              
                <input 
                  type="text" class=""
                  id="country"
                 
                  placeholder="Enter country please"
                />
             

                `;
                

    const card = document.createElement('div');
    card.className = 'search-fields';
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
        
        searchlectures (country, city, speaker);
       
      }

    } else {
      alert("Element not found!");
    }
    card.appendChild(btn);
    searchgrid.appendChild(card);
  

}

function loadTourEvent() {

     document.getElementById("hdrevent").innerHTML = "Searching for Tours event";
   

    ToursSearchCriteria () ;

    const grid = document.getElementById('tours-grid');
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


        for (const tour of detailsTour.tours) {

            const card = document.createElement('div');
            card.className = 'event-card';
            card.innerHTML = `
             
            <img src="${tour.src}" alt="${tour.title}">

            
            <div id="${tour.id}" class="event-card-content">
                <h4>Title:${tour.title}</h4>
                <h2>Description: ${tour.description}</h2>
                <p><strong>Seats:</strong> ${tour.seats}</p>
                <p><strong>Date:</strong> ${tour.date}</p>
                <p><strong>Price:</strong> ${tour.price}</p>
                <p><strong>Duration:</strong>${tour.duration}</p>
                <p><strong>City:</strong>${tour.city}</p>
                <p><strong>Country:</strong>${tour.country}</p>
                    
            </div>

            <button id = "btn${tour.id}" class="book-btn" onclick="openBookingTour('${tour.id}')">
              Book
            </button>
           
            `;

            grid.appendChild(card);


        }

    
    BookTourEvent ();

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

function BookTourEvent ()
{
    
    const grid = document.getElementById('bookingModal');
    
    var regevent =` 
    
    <form id="BookingForm">
      <div class="modal-content"  >

       <h2>Tour Booking</h2>
        
      <label style="visibility:hidden">
        Tour ID
        <input type="text" id="eventId" value='${eventid}' disabled/>
      </label>

      <label>
        Tour Title
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

      <div id="divbutton">
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

       <h2>Lecture Booking</h2>
        
      
      <label>
        Lecture Title
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


      <div id="divbutton" >
         <p class="book-btn" id="cmdBooking"  onclick="confirmLectureBooking()"  >Confirm</p>
         <p class="book-btn" id ="cmdCancel" onclick="closeBooking()">Cancel</p>
      </div>
    
      <label style="visibility:hidden">
        Lecture ID
        <input type="text" id="eventId" value='${eventid}'  disabled/>
      </label>

      </div>
      
      </form>` ;

  
   grid.innerHTML = regevent;
  
}

function closeBooking() {

      const divSection = document.getElementById('Bookings');
      divSection.style.display ='none';
     
      

      const frm =  document.getElementById('BookingForm');
      frm.reset();
      const grid = document.getElementById('bookingModal');
      grid.style.display ='none';


}

function openBookingForm (eventid, data)   {
   
    const objevent =  data.find(u => u.id === eventid);

    document.getElementById("eventTitle").value = objevent.title;
    document.getElementById("eventId").value = eventid;

    
    document.getElementById("eventId").setAttribute('value', eventid);
    document.getElementById("eventTitle").setAttribute('value', objevent.title);


    useroption('Bookings');

    /*
    const divSection = document.getElementById('Bookings');
    divSection.style.display ='block';

    const grid = document.getElementById('bookingModal');
    grid.style.display ='block';
    */

}

function openBookingLecture(eventid) {

  openBookingForm (eventid, detailsLec.lectures );

     
}

function openBookingTour(eventid) {
    
 openBookingForm (eventid, detailsTour.tours );
      
}


function RenderBookings(eventid)  {

  const tourbooking = document.getElementById(eventid);
  const myNodelist = tourbooking.querySelectorAll("p");

  const tourgrid = document.getElementById('tours-grid');
  
  var str= "";

  let num ='';

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
return num;
}

function renderLecBookingList   ()
{

  const LectureList = document.getElementById("LecReservationList");
  LectureList.style.display = 'block';
  LectureList.innerHTML = "";
  
  
  lecbooked.listLectures().forEach((b) => {
     
  
    const li = document.createElement("li");
       
      li.id = b.email; 
      

      highlightItem (li);


      let result = detailsLec.lectures.filter(function(lecture){
           return lecture.id.trim() === b.lectureid.trim();
      });

      let search = json2array(result);

         li.addEventListener("click", () => {

          const sect = document.getElementById("choicedisplay");
          sect.style.display = 'block';

          const grid = document.getElementById("displayinfo");
          grid.style.display = 'block';
          
          
          const card = document.createElement('div') ;
          card.className = 'event-card';
          card.innerHTML  = "";
          card.id = b.email;

          alert (" Lecture id " + b.lectureid + " email " + b.email);

          for(const item of search) {
            
            var strUser  = `
            
            <h3>✅ Lecture Details </h3>
             <div id="${item.id}" class="event-card-content">
                <h4><strong>Title:</strong>${item.title}</h4>
                <h2><strong>City:</strong> ${item.city}</h2>
                <p><strong>Country:</strong>${item.country}</p>
              
                <div id="divbutton" >
                    <p class="book-btn" id="cmdDelete"  onclick="removeUser('${b.email}');">Delete</p>
                </div> 
            </div><br/>` ;

            card.innerHTML = strUser;
            grid.innerHTML = "";
            grid.appendChild(card) ;
          } //======== end of for loop

        });//===== end of function

 
        li.innerHTML = `<strong>${b.name}</strong>`;
        LectureList.appendChild(li);

  });//======== end of foreach
  
 

  return LectureList;
}

function highlightItem (item) {

  
   
    item.onmouseover = function over (){
      item.style.color = "white";
      item.style.backgroundColor = "green";
      item.style.cursor = 'pointer';
    };
    
    item.onmouseout = function out (){
      item.style.color = "black";
      item.style.backgroundColor = "#EEEADF";
    };

   return item 
}


function renderTourBookingList   ()
{

  const TourList = document.getElementById("ToursReservationList");
  TourList.style.display ='block';
  TourList.innerHTML = "";

  
  tourbooked.listTours().forEach((b) => {
     
    const li = document.createElement("li");
   
    li.id = b.email;

    highlightItem (li);



        let result = detailsTour.tours.filter(function(tour){
           return tour.id.trim() === b.tourid.trim();
        });

        let search = json2array(result);

         li.addEventListener("click", () => {
          
          const sect = document.getElementById("choicedisplay");
          sect.style.display = 'block';

          const grid = document.getElementById("displayinfo");
          grid.style.display = 'block';
        
          const card = document.createElement('div') ;
          card.className = 'event-card';
          card.innerHTML  = "";
          card.id = b.email;

          for(const item of search) {
           
        
           var strUser  = `
            <h3>✅ Tours Details </h3>
            <div id="${item.id}" class="event-card-content">
                <h4><strong>Title:</strong>${item.title}</h4>
                <h2><strong>City:</strong> ${item.city}</h2>
                <p><strong>Country:</strong>${item.country}</p>
              
                <div id="divbutton" >
                    <p class="book-btn" id="cmdDelete"  onclick="removeUser('${b.email}');">Delete</p>
                </div> 
            </div><br>` ;

            card.innerHTML = strUser;
            grid.innerHTML = "";
            grid.appendChild(card) ;
          } 
        });
 
    
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
    li.id = b.email;
    
     highlightItem (li);

    
         li.addEventListener("click", () => {
          
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
            </div><br>` ;

            card.innerHTML = strUser;
            grid.innerHTML = "";
            grid.appendChild(card) ;

        });
 
    
     li.innerHTML = `<strong>${b.name}</strong>`;
     RegList.appendChild(li);

  });
  
 

  return RegList;
}


function confirmLectureBooking () {

     const name = document.forms['BookingForm'].username.value.trim();
     const email = document.forms['BookingForm'].useremail.value.trim();
     eventid = document.forms['BookingForm'].eventId.value.trim();
     const dateReg = new Date().toLocaleDateString();

     if (!name) {
          alert("Please enter your name");
          return;
        }

        if (!email) {
          alert("Please enter your email");
          return;
        }

    attendeeReg.name = name;
    attendeeReg.email = email;
    attendeeReg.event_id = eventid;
    attendeeReg.dateRegistered = new Date().toLocaleDateString();  
   
    if (!isValidLetter(attendeeReg.name)) {
      alert ("Please enter a valid name (letters and spaces only)");
      return;
    } 
    
    if (!isValidEmail(attendeeReg.email)) {
      alert ("Please enter a valid email address");
      return;
    }

    if(!attendeeReg.isRegistered(attendeeReg.email)) {
        alert("You are not registered in the system  ");
        return;
    }else {
    

    const obj = lecbooked.listLectures();
    const lastkey = Object.keys(obj)[Object.keys(obj).length - 1];
    lecbooked.book({id: lastkey+1, lectureid: eventid, name: name, email: email , dateBooked: dateReg});
 
       
    let num = RenderBookings (eventid)  ;

      let filteredtours = detailsLec.lectures.filter (function (lecture)
      {
        if (lecture.id ===  eventid) {
            lecture.seats = num ;
          } 
        
      })

    }
      
    const divSection = document.getElementById('Bookings');
    divSection.style.display ='none';

    const frmBooking = document.getElementById("BookingForm");
    frmBooking.reset ();

    const grid = document.getElementById('bookingModal');
    grid.style.display ='none';


}

function confirmTourBooking () {

    const name = document.forms['BookingForm'].username.value.trim();
    const email = document.forms['BookingForm'].useremail.value.trim();
    eventid = document.forms['BookingForm'].eventId.value.trim();
    const dateReg = new Date().toLocaleDateString();
    
     if (!name) {
          alert("Please enter your name");
          return;
        }

        if (!email) {
          alert("Please enter your email");
          return;
        }

   
    attendeeReg.name = name;
    attendeeReg.email = email;
    attendeeReg.event_id = eventid;
    attendeeReg.dateRegistered = new Date().toLocaleDateString();  


    if (!isValidLetter(attendeeReg.name)) {
      alert ("Please enter a valid name (letters and spaces only)");
      return;
    } 
    
    if (!isValidEmail(attendeeReg.email)) {
      alert ("Please enter a valid email address");
      return;
    }

    if(!attendeeReg.isRegistered(attendeeReg.email)) {
        alert("You are not registered in the system  ");
        return;
    }else {
      
      const obj = tourbooked.listTours();
      const lastkey = Object.keys(obj)[Object.keys(obj).length - 1];

      tourbooked.book({id: lastkey+1, tourid: eventid, name: name, email: email , dateBooked: dateReg});

     
     // tourbooked.book({id: lastkey+1, tourid: eventid, name: username, email: useremail , dateBooked: dateReg});
     
      let num =  RenderBookings (eventid)  ;

      //find index of item to be replaced
      const targetIndex = detailsTour.tours.findIndex(tour=>tour.id=== eventid); 

      //replace the object with a new one.
      detailsTour.tours[targetIndex].seats = num;
     
     // this code is working 
     /*
      let filteredtours =  detailsTour.tours.filter (function (tour)
      {
        if (tour.id.trim() ===  eventid.trim()) {
            tour.seats = num 
          } 
      })
      */
      
    }
    
    const divSection = document.getElementById('Bookings');
    divSection.style.display ='none';

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

 
  usersgrid.innerHTML="<h3>✅Registered Users</h3> <h5>Double click on users to view more details</h5>"
  usersgrid.append(lst);

 
}


function showToursBookinglist ()  {

  const divsection = document.getElementById('tours-reservation');
  divsection.style.display = 'block';
  
  const toursgrid = document.getElementById('tours-reservation-grid');
  
  const lst = confirmTourBooking();

  toursgrid.appendChild(lst);

}


function searchlectures (country, city, speaker) {
 
  try {

    const section = document.getElementById('lectures');
    section.style.display = 'block';

    const grid = document.getElementById('lectures-grid');
    grid.innerHTML = '';

    
    let filteredlectures = detailsLec.lectures.filter (function (lecture)
    {
        return  lecture.country.toLowerCase() === country.toLowerCase() 
        || lecture.city.toLowerCase() === city.toLowerCase()
        || lecture.speaker.toLowerCase() === speaker.toLowerCase()
    })

    
    let search = json2array(filteredlectures);

   // alert ("Country: " + country + "City:  " + city  + "  Speaker " + speaker);


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

  
     
  } catch (err) {
     return err;
  }
}


function searchtours (strcountry, strcity,  startdate , enddate) {
 
  try {

    let filteredtours = detailsTour.tours.filter (function (tour)
    {
        return  tour.country.toLowerCase() === strcountry.toLowerCase() 
        || tour.city.toLowerCase() === strcity.toLowerCase()
        || Date.parse (tour.date) >= Date.parse(startdate) && Date.parse(tour.date) <= Date.parse(enddate)
    })

    ToursSearchCriteria () ;
    
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
    //alert ("Inside: " + JSON.stringify(datasearch));
    var keys = Object.keys(datasearch);
    keys.forEach(function(key){
        resultsearch.push(datasearch[key]);
       
    });

    return resultsearch;
}

function cancelRegistration ()  {
  
  getSiteEvent ('SiteRegistration', 'none');

}

function isValidEmail(strvalue)
{
  // Regular expression for validating an Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(strvalue);
}


function isValidLetter(strvalue) 
{  
   return /^[A-Za-z ]+$/.test(strvalue);
}

function confirmRegistration() {

   attendeeReg.name = document.getElementById("regname").value.trim();
   attendeeReg.email = document.getElementById("regemail").value.trim();
   attendeeReg.dateRegistered = new Date().toLocaleDateString();
   
   if (!isValidEmail(attendeeReg.email)) {
      alert ("Please enter a valid email address");
      return;
    }

   if (!attendeeReg.name || !attendeeReg.email) {
      //alert (attendeeReg.errormsg);
      alert ("please fill in all required fields for both name and email");
      return;
    } 

   if (!isValidLetter(attendeeReg.name)) {
      alert ("Please enter a valid name (letters and spaces only)");
      return;
    }

   attendeeReg.register({ name: attendeeReg.name, 
                          email: attendeeReg.email,
                          dateRegistered: attendeeReg.dateRegistered });

   //alert (attendeeReg.listAttendees().length);
    alert ("Registration successful! Welcome " + attendeeReg.name);
    
    document.getElementById("regname").value = '';
    document.getElementById("regemail").value = '';
   
}

function highlightMenuItem (item) {

   if (checkAdmin(item.id, null) == 'true') {
      item.style.cursor = 'pointer';
      item.classList.add('active');
    } else {
      item.classList.remove('active');
      item.style.cursor = 'not-allowed';
      item.style.color = 'black';
    }
  

}

function checkAdmin (submnu, section) {
  
  
  if (isAdmin == 'false')
  {
    document.getElementById(submnu).disabled= true;
    document.getElementById(submnu).style.cursor = 'not-allowed';
    
  }else  {
    
    document.getElementById(submnu).disabled= false;
    document.getElementById(submnu).style.cursor = 'pointer';

  }

  return isAdmin;
}

function useroption (choice) {
  
  var sections = document.getElementsByTagName('section');
  
  var searchgrid, search ;

 
for (const section of sections) {
 
 // alert ("ID: " + section.id + "  Display: " + section.style.display + "  Choice: " + choice);

 //alert ("users-registration clicked" + "  isAdmin: " + isAdmin + "  section: " + section.id + "  display: " + choice);

  section.style.display='none'; 
  
  if (section.id.trim() === choice.trim() ){

    switch(choice) {

        case "SiteRegistration":

          const divSection = document.getElementById("SiteRegistration");
          divSection.style.display = 'block';
          loadSiteRegistration();
          break;

        case "tours":
          searchgrid = document.getElementById("searching-grid");
          searchgrid.style.display = 'block';

          search = document.getElementById('searchcriteria');
          search.style.display = 'block';

          section.style.display='block';
         
          loadTourEvent();
         
        break;

        case "lectures":
          searchgrid = document.getElementById("search-grid");
          searchgrid.style.display = 'block'; 

          search = document.getElementById('searchcriteria');
          search.style.display = 'block';

          section.style.display='block';
          
          loadLectureEvent();

          break;
        
        case "Bookings" :
          
          section.style.display ='block';

          grid = document.getElementById('bookingModal');
          grid.style.display ='block';
          break;
          
        case "logging":
            
          section.style.display='block';
          grid = document.getElementById('loginform');
          grid.style.display ='block';
          
          break; 

        case "users-registration":
       
          if (checkAdmin ("regusersubmnu", section) == 'true') {
            RegisteredUsers();
          }  
          
          break;
        

        case "lecturesreservation":

        if (checkAdmin ("rsrvdlecsubmnu", section) == 'true') {
           UserLectureBookings();
        } 

        break;
        

        case "toursreservation":
        
        if (checkAdmin ("rsrvdtoursubmnu", section) == 'true') {
           //document.getElementById("rsrvdtoursubmnu").disabled= false;
           //document.getElementById("rsrvdtoursubmnu").style.cursor = 'pointer';
            UserTourBookings();
          // alert("Sorry, this feature is not available at the moment. Please check back later.");
        }  

        break;
        
      } //====end of switch================
  
    } //=====end of if===================
   
  } //===== end of for loop============
  
}//========== end of function========


function logAdmin (username, userpass) {
    if (username === 'admin' && userpass === 'admin') {
       document.getElementById('loginform').style.display ='none';
       isAdmin = 'true';
    }else {
       alert ('wrong credentials!!! try again');
    }
}


async function getCarouselImages () {
  
  

  fetch("data/tours_details/tours.json")
  .then((response) => response.json())
  .then((data) => {
  

  for (const item of data.tours)
   {
      // load data into object
      var title =item.title;
      var desc =item.description;
      var imgsrc = item.src;
      
       my_object = {
          "title": title,
          "desc": desc,
          "imgsrc": imgsrc 
      }; 
      
       data_array.push(my_object);

   }


    data_array.forEach((itemtour) => {

        const slide = document.createElement("div");
        slide.className = "slide";
        slide.innerHTML = `
        <img src="${itemtour.imgsrc}" alt="${itemtour.title}">
        <h2>${itemtour.title}</h2>
        <p>${itemtour.desc}</p>
      `;
            
        track.appendChild(slide);
      });

    
  });


  
}

navtoggle ();

getCarouselImages ();



const attendeeReg = new Attendee();

const tourbooked = new userBookingTour();
tourbooked.book({id:1, tourid: "trs0002", name: "Alice Thomson", email: "alice@mail.com" , dateRegistered: new Date().toLocaleDateString()});
tourbooked.book({id:2, tourid: "trs0003", name: "Rob Husky", email: "rob@mail.com" , dateRegistered: new Date().toLocaleDateString()});
tourbooked.book({id:3, tourid: "trs0004", name: "Rob Husky", email: "rob@mail.com" , dateRegistered: new Date().toLocaleDateString()});


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

      
      function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
      }

      function nextSlide() {
        //currentIndex = (currentIndex + 1) % carouselData.length;
        currentIndex = (currentIndex + 1) % data_array.length;
        updateCarousel();
      }

      function prevSlide() {
        currentIndex =
          //(currentIndex - 1 + carouselData.length) % carouselData.length;
           (currentIndex - 1 + data_array.length) % data_array.length;
        updateCarousel();
      }

      // 🔹 Auto Play (optional)
      setInterval(nextSlide, 4000);

    