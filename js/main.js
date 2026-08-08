/* =========================================================
   PERSONAL PORTFOLIO
   Muhammad Amjid
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const body =
        document.body;

    const loader =
        document.getElementById("pageLoader");

    const header =
        document.getElementById("siteHeader");

    const progress =
        document.getElementById("scrollProgress");

    const themeToggle =
        document.getElementById("themeToggle");

    const mobileMenuToggle =
        document.getElementById("mobileMenuToggle");

    const mobileNav =
        document.getElementById("mobileNav");

    const backToTop =
        document.getElementById("backToTop");

    const currentYear =
        document.getElementById("currentYear");


    /* =====================================================
       PAGE LOADER
    ===================================================== */

    const finishLoading = () => {

        setTimeout(() => {

            loader.classList.add("loaded");

        }, 650);

    };

    if (document.readyState === "complete") {

        finishLoading();

    } else {

        window.addEventListener(
            "load",
            finishLoading,
            {
                once: true
            }
        );
    }


    /* =====================================================
       THEME
    ===================================================== */

    const savedTheme =
        localStorage.getItem("portfolio-theme");

    const prefersDark =
        window.matchMedia &&
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;


    if (
        savedTheme === "dark" ||
        (!savedTheme && prefersDark)
    ) {

        body.setAttribute(
            "data-theme",
            "dark"
        );

    }


    const updateThemeIcon = () => {

        const isDark =
            body.getAttribute("data-theme") === "dark";

        const icon =
            themeToggle.querySelector(".theme-icon");

        icon.textContent =
            isDark ? "☾" : "☼";

        themeToggle.setAttribute(
            "aria-label",
            isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
        );
    };


    updateThemeIcon();


    themeToggle.addEventListener(
        "click",
        () => {

            const isDark =
                body.getAttribute("data-theme") === "dark";

            if (isDark) {

                body.removeAttribute(
                    "data-theme"
                );

                localStorage.setItem(
                    "portfolio-theme",
                    "light"
                );

            } else {

                body.setAttribute(
                    "data-theme",
                    "dark"
                );

                localStorage.setItem(
                    "portfolio-theme",
                    "dark"
                );

            }

            updateThemeIcon();

        }
    );


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const closeMobileMenu = () => {

        mobileNav.classList.remove("active");

        mobileMenuToggle.classList.remove("open");

        mobileMenuToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    };


    mobileMenuToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                mobileNav.classList.toggle("active");

            mobileMenuToggle.classList.toggle(
                "open",
                isOpen
            );

            mobileMenuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );


    document
        .querySelectorAll(".mobile-nav-link")
        .forEach(link => {

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        });


    window.addEventListener(
        "resize",
        () => {

            if (window.innerWidth > 1024) {
                closeMobileMenu();
            }

        }
    );


    /* =====================================================
       HEADER SCROLL STATE
    ===================================================== */

    const updateHeader = () => {

        if (window.scrollY > 30) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    };


    /* =====================================================
       SCROLL PROGRESS
    ===================================================== */

    const updateScrollProgress = () => {

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            documentHeight > 0
                ? (scrollTop / documentHeight) * 100
                : 0;

        progress.style.width =
            `${percentage}%`;

    };


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const updateBackToTop = () => {

        if (window.scrollY > 700) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    };


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    const updateActiveNav = () => {

        let current =
            "home";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            if (
                window.scrollY >= sectionTop
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );

            const href =
                link.getAttribute("href");

            if (
                href === `#${current}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    };


    /* =====================================================
       REVEAL ANIMATIONS
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    revealElements.forEach(element => {

        const delay =
            element.dataset.delay || 0;

        element.style.setProperty(
            "--delay",
            `${delay}ms`
        );

    });


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -60px 0px"
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(
            element
        );

    });


    /* =====================================================
       COUNTERS
    ===================================================== */

    const counters =
        document.querySelectorAll(
            "[data-counter]"
        );


    const animateCounter =
        element => {

            const target =
                Number(
                    element.dataset.counter
                );

            const suffix =
                element.dataset.suffix || "";

            const duration =
                1400;

            const startTime =
                performance.now();


            const update = currentTime => {

                const elapsed =
                    currentTime - startTime;

                const progress =
                    Math.min(
                        elapsed / duration,
                        1
                    );

                const eased =
                    1 -
                    Math.pow(
                        1 - progress,
                        3
                    );

                const current =
                    Math.round(
                        target * eased
                    );

                element.textContent =
                    `${current}${suffix}`;


                if (progress < 1) {

                    requestAnimationFrame(
                        update
                    );

                }

            };


            requestAnimationFrame(
                update
            );

        };


    const counterObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        animateCounter(
                            entry.target
                        );

                        counterObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.6
            }
        );


    counters.forEach(counter => {

        counterObserver.observe(
            counter
        );

    });


    /* =====================================================
       SMOOTH ANCHOR LINKS
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    const headerHeight =
                        header.offsetHeight;


                    const targetPosition =
                        target.getBoundingClientRect()
                            .top +
                        window.scrollY -
                        headerHeight -
                        20;


                    window.scrollTo({

                        top:
                            targetPosition,

                        behavior:
                            "smooth"

                    });

                }
            );

        });


    /* =====================================================
       SCROLL EVENTS
    ===================================================== */

    let ticking = false;


    const onScroll = () => {

        if (!ticking) {

            window.requestAnimationFrame(
                () => {

                    updateHeader();

                    updateScrollProgress();

                    updateBackToTop();

                    updateActiveNav();

                    ticking = false;

                }
            );

            ticking = true;
        }

    };


    window.addEventListener(
        "scroll",
        onScroll,
        {
            passive: true
        }
    );


    /* =====================================================
       YEAR
    ===================================================== */

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    updateHeader();
    updateScrollProgress();
    updateBackToTop();
    updateActiveNav();

});