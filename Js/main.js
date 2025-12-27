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

// ------------------- Events Grid -------------------
async function loadLectureEvents() {
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
            const detailResp = await fetch(`data/lecture_details/${event.id}.json`);
            const details = detailResp.ok ? await detailResp.json() : { title: event.title, date: '', speaker: '', description: '' };

            const card = document.createElement('div');
            card.className = 'event-card';
            card.innerHTML = `
                <img src="images/event_images/${event.id}.jpg" alt="${details.title}">
                <div class="event-card-content">
                    <h4>${details.title}</h4>
                    <p><strong>Date:</strong> ${details.date}</p>
                    <p><strong>Speaker:</strong> ${details.speaker}</p>
                    <p>${details.description}</p>
                </div>
            `;
            grid.appendChild(card);
            
            //alert(card.innerHTML);
        }

    } catch (error) {
        console.error("Could not load events:", error);
        const isRTL = document.body.classList.contains('rtl') || document.documentElement.lang === 'ar';
        const msg = isRTL ? 'عذرًا، لا نستطيع تحميل الفعاليات الآن. الرجاء المحاولة لاحقًا.' : "Sorry, we couldn't load the events. Please try again later.";
        grid.innerHTML = `<p style="color: #ff6b6b;">${msg}</p>`;
    }
}

//===========a routine for displaying youtube videos======
async function loadyoutube () {

const grid = document.getElementById('youtube-grid');
    
try {

         const utube = await fetch('data/utube.json');
         const utubeVideos = await utube.json();

         if (!utube.ok) throw new Error(`HTTP error! status: ${utube.status}`);
        
        //const eventIndex = await response.json();

        const isRTL = document.body.classList.contains('rtl') || document.documentElement.lang === 'ar';
        const noVideosMessage = isRTL ? 'لا توجد فعاليات قادمة في الوقت الحالي.' : 'No upcoming videos at this time.';


        if (!utubeVideos.events || utubeVideos.events.length === 0) {
            grid.innerHTML = `<p>${noVideosMessage}</p>`;
            return;
        }

        grid.innerHTML = '';

   
         for (const video of utubeVideos.events)
         {
            const detailResp = await fetch(`data/utube_details/${video.id}.json`);
            const details = detailResp.ok ? await detailResp.json() : 

            { id: video.id, descrp:video.descrp };

             // alert (video.descrp  +  "  ***** " + details.src );
            const card = document.createElement('div');
            
            card.className = 'event-card';
            card.innerHTML = `
                <iframe
                  style="border-radius: 25px; border: red solid red"
                  src="${details.src}"
                  title="${details.title}"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <div class="event-card-content">
                    <h4>${details.title}</h4>
                    
                    <p><strong>Date:</strong> ${details.date}</p>
                 
                    <p>${details.description}</p>
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
//==================Event end youtube  videos===============

  navtoggle ();

  loadLectureEvents();


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

alert(JSON.stringify(sitePersonel));
    
    