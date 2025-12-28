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
async function loadTourEvents() {

    const section = document.getElementById('tours');
    section.style.display = 'block';

    const grid = document.getElementById('tours-grid');
    try {
        const response = await fetch('data/toursevent.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const eventIndex = await response.json();

       // alert(eventIndex.lecture);

        const isRTL = document.body.classList.contains('rtl') || document.documentElement.lang === 'ar';
        const noEventsMessage = isRTL ? 'لا توجد فعاليات قادمة في الوقت الحالي.' : 'No upcoming events at this time.';


        if (!eventIndex.tours || eventIndex.tours.length === 0) {
            grid.innerHTML = `<p>${noEventsMessage}</p>`;
            return;
        }

        grid.innerHTML = '';

        for (const event of eventIndex.tours) {
            // alert ("" +`data/lecture_details/lecture${event.id}.json`);
            
            const detailResp = await fetch(`data/tours_details/tours${event.id}.json`);
            const details = detailResp.ok ? await detailResp.json() : { id: event.id, date: event.date, description: event.description };
            
            
            const card = document.createElement('div');
            card.className = 'event-card';
            card.innerHTML = `
              
                <img src="${details.src}" alt="${details.title}">
                <div class="event-card-content">
                    <h4>Title:${details.title}</h4>
                    <h2>Description: ${event.description}</h2>
                    <p><strong>Date:</strong> ${event.date}</p>
                    <p><strong>Price:</strong> ${details.price}</p>
                    <p><strong>Duration:</strong>${details.duration}</p>
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



  navtoggle ();

  

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
    
    