document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('[data-header]');
    const menuButton = document.querySelector('[data-menu-toggle]');
    const menu = document.querySelector('[data-menu]');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const protectedEmailToken = 'c3VwcG9ydEBrYXJtYWFjYWRlbXkuY29tLmF1';

    document.querySelectorAll('[data-protected-email]').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            try {
                const address = window.atob(protectedEmailToken);
                window.location.href = `mailto:${address}`;
            } catch {
                link.textContent = 'Use Contact Support in the app';
                link.removeAttribute('href');
            }
        });
    });

    const updateHeader = () => {
        if (!header) return;
        header.classList.toggle('is-scrolled', window.scrollY > 16);
    };

    const closeMenu = () => {
        if (!menuButton || !menu || !header) return;
        menuButton.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
        header.classList.remove('is-menu-open');
        document.body.style.overflow = '';
    };

    const openMenu = () => {
        if (!menuButton || !menu || !header) return;
        menuButton.setAttribute('aria-expanded', 'true');
        menu.classList.add('is-open');
        header.classList.add('is-menu-open');
        document.body.style.overflow = 'hidden';
    };

    if (header) {
        updateHeader();
        window.addEventListener('scroll', updateHeader, { passive: true });
    }

    if (menuButton && menu) {
        menuButton.addEventListener('click', () => {
            const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
            if (isOpen) closeMenu(); else openMenu();
        });

        menu.addEventListener('click', (event) => {
            if (event.target.closest('a')) closeMenu();
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeMenu();
                menuButton.focus();
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 820) closeMenu();
        }, { passive: true });
    }

    const legacyMenuButton = document.querySelector('.navbar .hamburger');
    const legacyMenu = document.querySelector('.navbar .nav-menu');

    if (legacyMenuButton && legacyMenu) {
        legacyMenuButton.setAttribute('role', 'button');
        legacyMenuButton.setAttribute('tabindex', '0');
        legacyMenuButton.setAttribute('aria-label', 'Open navigation');
        legacyMenuButton.setAttribute('aria-expanded', 'false');

        const toggleLegacyMenu = () => {
            const isOpen = legacyMenuButton.getAttribute('aria-expanded') === 'true';
            legacyMenuButton.setAttribute('aria-expanded', String(!isOpen));
            legacyMenuButton.classList.toggle('is-open', !isOpen);
            legacyMenu.classList.toggle('is-open', !isOpen);
            document.body.style.overflow = isOpen ? '' : 'hidden';
        };

        legacyMenuButton.addEventListener('click', toggleLegacyMenu);
        legacyMenuButton.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            toggleLegacyMenu();
        });

        legacyMenu.addEventListener('click', (event) => {
            if (!event.target.closest('a')) return;
            legacyMenuButton.setAttribute('aria-expanded', 'false');
            legacyMenuButton.classList.remove('is-open');
            legacyMenu.classList.remove('is-open');
            document.body.style.overflow = '';
        });
    }

    const revealElements = document.querySelectorAll('.reveal');

    if (reduceMotion || !('IntersectionObserver' in window)) {
        revealElements.forEach((element) => element.classList.add('is-visible'));
    } else {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        }, {
            rootMargin: '0px 0px -8% 0px',
            threshold: 0.12
        });

        revealElements.forEach((element) => observer.observe(element));
    }

    document.querySelectorAll('.faq-list details').forEach((details) => {
        details.addEventListener('toggle', () => {
            if (!details.open) return;
            document.querySelectorAll('.faq-list details[open]').forEach((other) => {
                if (other !== details) other.open = false;
            });
        });
    });
});
