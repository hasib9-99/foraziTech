// Enhanced Navbar Scroll Animation + Topbar Dropdown (Recreated)
// Added: 2024 - Navbar shrinks/blurs on scroll, dropdown toggle hover/click

document.addEventListener('DOMContentLoaded', () => {
    // Navbar selectors (match existing .home_header)
    const navbar = document.querySelector('.home_header, .navbar, [data-navbar]');
    const topbarDropdown = document.querySelector('.topbar-dropdown, .mega-menu-container-001');
    const dropdownToggle = document.querySelector('.dropdown-toggle, .menu-toggle');
    const body = document.body;

    if (!navbar) {
        console.warn('Navbar not found for scroll animation');
        return;
    }

    // Scroll Animation: Navbar shrink + shadow/blur
    let ticking = false;
    function updateNavbar() {
        const scrollY = window.scrollY;
        if (scrollY > 100) {
            navbar.classList.add('scrolled', 'shrunk');
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            navbar.style.height = '60px'; // Shrink height
            navbar.style.padding = '0 20px'; // Reduce padding
        } else {
            navbar.classList.remove('scrolled', 'shrunk');
            navbar.style.backdropFilter = 'none';
            navbar.style.boxShadow = 'none';
            navbar.style.height = '80px'; // Original height
            navbar.style.padding = '0 40px';
        }

        // Parallax hero elements (enhance existing)
        const parallaxEls = document.querySelectorAll('.parallax-hero, .hero-parallax');
        parallaxEls.forEach(el => {
            const speed = 0.5;
            const yPos = -(scrollY * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });

        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);

    // Topbar Dropdown Toggle
    if (topbarDropdown && dropdownToggle) {
        const isMobile = window.innerWidth <= 1024;

        function toggleDropdown() {
            topbarDropdown.classList.toggle('show');
            body.classList.toggle('dropdown-open'); // Lock body scroll if needed
        }

        dropdownToggle.addEventListener('click', toggleDropdown);

        // Desktop hover
        if (!isMobile) {
            navbar.addEventListener('mouseenter', () => topbarDropdown.classList.add('show'));
            navbar.addEventListener('mouseleave', () => topbarDropdown.classList.remove('show'));
        }

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target)) {
                topbarDropdown.classList.remove('show');
                body.classList.remove('dropdown-open');
            }
        });

        // Mobile resize handler
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024) {
                topbarDropdown.classList.remove('show');
            }
        });
    }
});

// CSS for smooth transitions (add to style if needed)
/*
.navbar {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.topbar-dropdown {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.topbar-dropdown.show {
  opacity: 1;
  transform: translateY(0);
}
*/

