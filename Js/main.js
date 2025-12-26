 // Mobile nav toggle
  function navtoggle () {
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');

  }
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
