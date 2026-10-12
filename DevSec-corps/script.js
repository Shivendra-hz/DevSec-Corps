/* =========================================================
   DEVSEC CORPS
   HERO SECTION JAVASCRIPT
========================================================= */


document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           ELEMENTS
        ================================================= */

        const heroVisual =
            document.querySelector(
                ".hero-visual"
            );


        const browserWindow =
            document.querySelector(
                ".browser-window"
            );


        const speedCard =
            document.querySelector(
                ".speed-card"
            );


        const mobilePreview =
            document.querySelector(
                ".mobile-preview"
            );


        const primaryButton =
            document.querySelector(
                ".hero-btn-primary"
            );


        const previewButton =
            document.querySelector(
                ".preview-button"
            );


        const mobileButton =
            document.querySelector(
                ".mobile-button"
            );


        /* =================================================
           MOUSE PARALLAX
        ================================================= */

        if (
            heroVisual &&
            window.innerWidth > 900
        ) {


            heroVisual.addEventListener(
                "mousemove",
                function (event) {


                    const rect =
                        heroVisual.getBoundingClientRect();


                    const mouseX =
                        (
                            event.clientX -
                            rect.left
                        ) /
                        rect.width -
                        0.5;


                    const mouseY =
                        (
                            event.clientY -
                            rect.top
                        ) /
                        rect.height -
                        0.5;


                    /* -------------------------------
                       MAIN WEBSITE
                    -------------------------------- */

                    if (browserWindow) {

                        browserWindow.style.transform =
                            `
                            perspective(1200px)
                            rotateY(${mouseX * -3}deg)
                            rotateX(${mouseY * 2}deg)
                            translateY(-3px)
                            `;

                    }


                    /* -------------------------------
                       SPEED CARD
                    -------------------------------- */

                    if (speedCard) {

                        speedCard.style.transform =
                            `
                            translate(
                                ${mouseX * 8}px,
                                ${mouseY * 8}px
                            )
                            `;

                    }


                    /* -------------------------------
                       MOBILE CARD
                    -------------------------------- */

                    if (mobilePreview) {

                        mobilePreview.style.transform =
                            `
                            translate(
                                ${mouseX * -10}px,
                                ${mouseY * -8}px
                            )
                            `;

                    }

                }
            );


            /* =================================================
               RESET WHEN MOUSE LEAVES
            ================================================= */

            heroVisual.addEventListener(
                "mouseleave",
                function () {


                    if (browserWindow) {

                        browserWindow.style.transform =
                            `
                            perspective(1200px)
                            rotateY(-2deg)
                            `;

                    }


                    if (speedCard) {

                        speedCard.style.transform =
                            "";

                    }


                    if (mobilePreview) {

                        mobilePreview.style.transform =
                            "";

                    }

                }
            );

        }


        /* =================================================
           PRIMARY BUTTON
        ================================================= */

        if (primaryButton) {


            primaryButton.addEventListener(
                "mouseenter",
                function () {

                    const arrow =
                        primaryButton.querySelector(
                            ".button-arrow"
                        );


                    if (arrow) {

                        arrow.style.transform =
                            "translateX(4px)";

                    }

                }
            );


            primaryButton.addEventListener(
                "mouseleave",
                function () {

                    const arrow =
                        primaryButton.querySelector(
                            ".button-arrow"
                        );


                    if (arrow) {

                        arrow.style.transform =
                            "translateX(0)";

                    }

                }
            );

        }


        /* =================================================
           PREVIEW BUTTON
        ================================================= */

        if (previewButton) {

            previewButton.addEventListener(
                "click",
                function () {

                    alert(
                        "Free Day Pass selected."
                    );

                }
            );

        }


        /* =================================================
           MOBILE BOOKING BUTTON
        ================================================= */

        if (mobileButton) {

            mobileButton.addEventListener(
                "click",
                function () {

                    alert(
                        "Instant Booking selected."
                    );

                }
            );

        }


        /* =================================================
           SERVICE BAR - MOBILE HORIZONTAL SCROLL
        ================================================= */

        const serviceBar =
            document.querySelector(
                ".service-bar"
            );


        if (serviceBar) {

            serviceBar.addEventListener(
                "wheel",
                function (event) {


                    if (
                        window.innerWidth <= 600 &&
                        event.deltaY !== 0
                    ) {

                        event.preventDefault();

                        serviceBar.scrollLeft +=
                            event.deltaY;

                    }

                },
                {
                    passive: false
                }
            );

        }


    }
);




/* =========================================================
   SELECTED WORK FILTER
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =================================================
           ELEMENTS
        ================================================= */

        const filterButtons =
            document.querySelectorAll(
                ".filter-button"
            );


        const portfolioCards =
            document.querySelectorAll(
                ".portfolio-card"
            );


        /* =================================================
           FILTER FUNCTION
        ================================================= */

        filterButtons.forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    () => {


                        /* ---------------------------------
                           ACTIVE BUTTON
                        --------------------------------- */

                        filterButtons.forEach(
                            (item) => {

                                item.classList.remove(
                                    "active"
                                );

                            }
                        );


                        button.classList.add(
                            "active"
                        );


                        /* ---------------------------------
                           SELECTED CATEGORY
                        --------------------------------- */

                        const selectedCategory =
                            button.dataset.filter;


                        /* ---------------------------------
                           FILTER CARDS
                        --------------------------------- */

                        portfolioCards.forEach(
                            (card) => {

                                const cardCategory =
                                    card.dataset.category;


                                /* ALL */

                                if (
                                    selectedCategory ===
                                    "all"
                                ) {

                                    card.classList.remove(
                                        "hidden"
                                    );

                                    card.classList.remove(
                                        "show"
                                    );

                                    void card.offsetWidth;

                                    card.classList.add(
                                        "show"
                                    );

                                    return;
                                }


                                /* MATCH */

                                if (
                                    cardCategory ===
                                    selectedCategory
                                ) {

                                    card.classList.remove(
                                        "hidden"
                                    );

                                    card.classList.remove(
                                        "show"
                                    );

                                    void card.offsetWidth;

                                    card.classList.add(
                                        "show"
                                    );

                                }


                                /* DOES NOT MATCH */

                                else {

                                    card.classList.remove(
                                        "show"
                                    );

                                    card.classList.add(
                                        "hidden"
                                    );

                                }

                            }
                        );

                    }
                );

            }
        );


        /* =================================================
           VIEW DEMO LINKS
        ================================================= */

        const demoLinks =
            document.querySelectorAll(
                ".view-demo"
            );


        demoLinks.forEach(
            (link) => {

                link.addEventListener(
                    "click",
                    (event) => {

                        /*
                         Remove this if you add
                         the real website URL.
                        */

                        if (
                            link.getAttribute("href") ===
                            "#"
                        ) {

                            event.preventDefault();

                        }

                    }
                );

            }
        );


    }
);


/* =========================================================
   DEVSEC CORPS
   SERVICES SECTION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const serviceCards =
            document.querySelectorAll(
                ".service-card"
            );


        /* =================================================
           CARD INTERACTION
        ================================================= */

        serviceCards.forEach(
            function (card) {

                card.addEventListener(
                    "mouseenter",
                    function () {

                        serviceCards.forEach(
                            function (otherCard) {

                                if (
                                    otherCard !== card
                                ) {

                                    otherCard.classList.add(
                                        "service-card-dim"
                                    );

                                }

                            }
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    function () {

                        serviceCards.forEach(
                            function (otherCard) {

                                otherCard.classList.remove(
                                    "service-card-dim"
                                );

                            }

                        );

                    }
                );

            }
        );


    }
);




/* =========================================================
   DEVSEC CORPS
   INDUSTRY FOCUS SECTION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const industryCards =
            document.querySelectorAll(
                ".industry-card"
            );


        /* =================================================
           CARD HOVER INTERACTION
        ================================================= */

        industryCards.forEach(
            (card) => {

                card.addEventListener(
                    "mouseenter",
                    () => {

                        industryCards.forEach(
                            (otherCard) => {

                                if (
                                    otherCard !== card
                                ) {

                                    otherCard.classList.add(
                                        "industry-card-dim"
                                    );

                                }

                            }
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    () => {

                        industryCards.forEach(
                            (otherCard) => {

                                otherCard.classList.remove(
                                    "industry-card-dim"
                                );

                            }
                        );

                    }
                );

            }
        );

    }
);

/* =========================================================
   DEVSEC CORPS
   STRATEGIC REALITY SECTION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const cards =
            document.querySelectorAll(
                ".strategic-card"
            );


        /* ================================================
           CARD HOVER EFFECT
        ================================================ */

        cards.forEach(
            (card) => {

                card.addEventListener(
                    "mouseenter",
                    () => {

                        cards.forEach(
                            (otherCard) => {

                                if (
                                    otherCard !== card
                                ) {

                                    otherCard.classList.add(
                                        "strategic-card-dim"
                                    );

                                }

                            }
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    () => {

                        cards.forEach(
                            (otherCard) => {

                                otherCard.classList.remove(
                                    "strategic-card-dim"
                                );

                            }
                        );

                    }
                );

            }
        );

    }
);




/* =========================================================
   DEVSEC CORPS
   AGENCY ADVANTAGE SECTION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const cards =
            document.querySelectorAll(
                ".advantage-card"
            );


        /* =================================================
           CARD HOVER INTERACTION
        ================================================= */

        cards.forEach(
            (card) => {

                card.addEventListener(
                    "mouseenter",
                    () => {

                        cards.forEach(
                            (otherCard) => {

                                if (
                                    otherCard !== card
                                ) {

                                    otherCard.classList.add(
                                        "advantage-card-dim"
                                    );

                                }

                            }
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    () => {

                        cards.forEach(
                            (otherCard) => {

                                otherCard.classList.remove(
                                    "advantage-card-dim"
                                );

                            }
                        );

                    }
                );

            }
        );

    }
);



/* =========================================================
   DEVSEC CORPS
   HOW IT WORKS / PROCESS SECTION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const processCards =
            document.querySelectorAll(
                ".process-card"
            );


        /* =================================================
           CARD HOVER INTERACTION
        ================================================= */

        processCards.forEach(
            (card) => {

                card.addEventListener(
                    "mouseenter",
                    () => {

                        processCards.forEach(
                            (otherCard) => {

                                if (
                                    otherCard !== card
                                ) {

                                    otherCard.classList.add(
                                        "process-card-dim"
                                    );

                                }

                            }
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    () => {

                        processCards.forEach(
                            (otherCard) => {

                                otherCard.classList.remove(
                                    "process-card-dim"
                                );

                            }
                        );

                    }
                );

            }
        );

    }
);




/* =========================================================
   DEVSEC CORPS
   WEBSITE PLANS SECTION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const planCards =
            document.querySelectorAll(
                ".plan-card"
            );


        /* =================================================
           CARD HOVER DIMMING
        ================================================= */

        planCards.forEach(
            (card) => {

                card.addEventListener(
                    "mouseenter",
                    () => {

                        planCards.forEach(
                            (otherCard) => {

                                if (
                                    otherCard !== card
                                ) {

                                    otherCard.classList.add(
                                        "plan-card-dim"
                                    );

                                }

                            }
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    () => {

                        planCards.forEach(
                            (otherCard) => {

                                otherCard.classList.remove(
                                    "plan-card-dim"
                                );

                            }
                        );

                    }
                );

            }
        );


        /* =================================================
           PLAN BUTTONS
        ================================================= */

        const planButtons =
            document.querySelectorAll(
                ".plan-button"
            );


        planButtons.forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    () => {

                        const selectedPlan =
                            button.dataset.plan;


                        /*
                         * Replace this with your
                         * WhatsApp / contact form
                         * functionality later.
                         */

                        console.log(
                            `Selected plan: ${selectedPlan}`
                        );

                    }
                );

            }
        );

    }
);




/* =========================================================
   DEVSEC CORPS
   WEBSITE PLANS + CONTACT FORM
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =================================================
           PRICING CARDS
        ================================================= */

        const planCards =
            document.querySelectorAll(
                ".plan-card"
            );


        /* =================================================
           PRICING BUTTONS
        ================================================= */

        const planButtons =
            document.querySelectorAll(
                ".plan-button"
            );


        /* =================================================
           MODAL ELEMENTS
        ================================================= */

        const modal =
            document.getElementById(
                "pricingModal"
            );


        const modalOverlay =
            document.getElementById(
                "pricingModalOverlay"
            );


        const modalClose =
            document.getElementById(
                "pricingModalClose"
            );


        const selectedPlanName =
            document.getElementById(
                "selectedPlanName"
            );


        const selectedPlanPrice =
            document.getElementById(
                "selectedPlanPrice"
            );


        const estimatedBudget =
            document.getElementById(
                "estimatedBudget"
            );


        const contactForm =
            document.getElementById(
                "pricingContactForm"
            );



        /* =================================================
           PLAN INFORMATION
        ================================================= */

        const planData = {

            Starter: {

                name: "Starter",

                price: "₹3,499"

            },

            Professional: {

                name: "Professional",

                price: "₹6,499"

            },

            Custom: {

                name: "Custom",

                price: "Let's Discuss"

            }

        };



        /* =================================================
           OPEN MODAL
        ================================================= */

        function openPricingModal(
            plan
        ) {

            const data =
                planData[plan];


            if (!data) {

                return;

            }


            /* Update selected plan */

            selectedPlanName.textContent =
                data.name;


            selectedPlanPrice.textContent =
                data.price;



            /* Automatically select budget */

            if (plan === "Starter") {

                estimatedBudget.value =
                    "₹3,499";

            }

            else if (
                plan === "Professional"
            ) {

                estimatedBudget.value =
                    "₹6,499";

            }

            else {

                estimatedBudget.value =
                    "Custom";

            }



            /* Open modal */

            modal.classList.add(
                "active"
            );


            document.body.classList.add(
                "pricing-modal-open"
            );


            /* Focus first field */

            setTimeout(
                () => {

                    const firstInput =
                        document.getElementById(
                            "yourName"
                        );

                    if (firstInput) {

                        firstInput.focus();

                    }

                },
                250
            );

        }



        /* =================================================
           CLOSE MODAL
        ================================================= */

        function closePricingModal() {

            modal.classList.remove(
                "active"
            );


            document.body.classList.remove(
                "pricing-modal-open"
            );

        }



        /* =================================================
           BUTTON CLICK
        ================================================= */

        planButtons.forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    () => {

                        const plan =
                            button.dataset.plan;

                        openPricingModal(
                            plan
                        );

                    }
                );

            }
        );



        /* =================================================
           CLOSE BUTTON
        ================================================= */

        modalClose.addEventListener(
            "click",
            closePricingModal
        );


        /* =================================================
           CLOSE WHEN CLICKING BACKDROP
        ================================================= */

        modalOverlay.addEventListener(
            "click",
            closePricingModal
        );



        /* =================================================
           ESC KEY
        ================================================= */

        document.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Escape" &&
                    modal.classList.contains(
                        "active"
                    )
                ) {

                    closePricingModal();

                }

            }
        );



        /* =================================================
           CARD HOVER DIMMING
        ================================================= */

        planCards.forEach(
            (card) => {

                card.addEventListener(
                    "mouseenter",
                    () => {

                        planCards.forEach(
                            (otherCard) => {

                                if (
                                    otherCard !== card
                                ) {

                                    otherCard.classList.add(
                                        "plan-card-dim"
                                    );

                                }

                            }
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    () => {

                        planCards.forEach(
                            (otherCard) => {

                                otherCard.classList.remove(
                                    "plan-card-dim"
                                );

                            }
                        );

                    }
                );

            }
        );



        /* =================================================
           FORM SUBMISSION
        ================================================= */

        contactForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const formData =
                    new FormData(
                        contactForm
                    );


                const name =
                    formData.get(
                        "yourName"
                    );


                const business =
                    formData.get(
                        "businessName"
                    );


                const phone =
                    formData.get(
                        "phoneWhatsapp"
                    );


                const websiteType =
                    formData.get(
                        "websiteType"
                    );


                const budget =
                    formData.get(
                        "estimatedBudget"
                    );


                const details =
                    formData.get(
                        "projectDetails"
                    );


                console.log(
                    "Project Enquiry:",
                    {

                        name,

                        business,

                        phone,

                        websiteType,

                        budget,

                        details

                    }
                );


                /*
                 * IMPORTANT:
                 *
                 * This currently only collects
                 * the form data in the browser.
                 *
                 * Later we can connect this to:
                 *
                 * 1. PHP + MySQL
                 * 2. WhatsApp
                 * 3. Email
                 * 4. Form backend
                 *
                 */



                alert(
                    "Thank you! Your project enquiry has been received."
                );


                contactForm.reset();


                closePricingModal();

            }
        );

    }
);


/* =========================================================
   DEVSEC CORPS
   ABOUT AGENCY SECTION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        const founderCard =
            document.querySelector(
                ".founder-card"
            );


        const aboutContent =
            document.querySelector(
                ".about-content"
            );


        /* =================================================
           INITIAL STATE
        ================================================= */

        if (founderCard) {

            founderCard.style.opacity = "0";

            founderCard.style.transform =
                "translateY(20px)";

            founderCard.style.transition =
                "opacity .7s ease, transform .7s ease";

        }


        if (aboutContent) {

            aboutContent.style.opacity = "0";

            aboutContent.style.transform =
                "translateY(20px)";

            aboutContent.style.transition =
                "opacity .7s ease, transform .7s ease";

        }


        /* =================================================
           INTERSECTION OBSERVER
        ================================================= */

        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                !entry.isIntersecting
                            ) {

                                return;

                            }


                            entry.target.style.opacity =
                                "1";


                            entry.target.style.transform =
                                "translateY(0)";


                            observerInstance.unobserve(
                                entry.target
                            );

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        /* =================================================
           OBSERVE CONTENT
        ================================================= */

        if (aboutContent) {

            observer.observe(
                aboutContent
            );

        }


        if (founderCard) {

            observer.observe(
                founderCard
            );

        }

    }
);

/* =========================================================
   DEVSEC CORPS — FINAL CTA
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const ctaSection = document.querySelector(".final-cta");

    if (!ctaSection) return;


    /* Initial state */

    ctaSection.style.opacity = "0";
    ctaSection.style.transform = "translateY(20px)";
    ctaSection.style.transition =
        "opacity .7s ease, transform .7s ease";


    /* Reveal when visible */

    const ctaObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.15
        }
    );


    ctaObserver.observe(ctaSection);

});




/* =========================================================
   DEVSEC CORPS
   CONTACT FORM JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const form =
        document.getElementById("projectInquiryForm");

    const submitButton =
        document.getElementById("submitButton");

    const successMessage =
        document.getElementById("formSuccess");


    /* =====================================================
       CHECK FORM
    ===================================================== */

    if (!form) {
        return;
    }


    /* =====================================================
       FORM SUBMISSION
    ===================================================== */

    form.addEventListener("submit", (event) => {

        event.preventDefault();


        /* -----------------------------------------------
           Browser validation
        ------------------------------------------------ */

        if (!form.checkValidity()) {

            form.reportValidity();

            return;
        }


        /* -----------------------------------------------
           Store original button text
        ------------------------------------------------ */

        const originalButtonText =
            submitButton.textContent;


        /* -----------------------------------------------
           Loading state
        ------------------------------------------------ */

        submitButton.disabled = true;

        submitButton.textContent =
            "PREPARING INQUIRY...";


        /* -----------------------------------------------
           Collect form data
        ------------------------------------------------ */

        const formData =
            new FormData(form);


        const inquiryData = {

            name:
                formData.get("name"),

            businessName:
                formData.get("businessName"),

            email:
                formData.get("email"),

            phone:
                formData.get("phone"),

            websiteType:
                formData.get("websiteType"),

            budget:
                formData.get("budget"),

            projectDetails:
                formData.get("projectDetails")

        };


        /* -----------------------------------------------
           Console output for testing
        ------------------------------------------------ */

        console.log(
            "DEVSEC CORPS — PROJECT INQUIRY"
        );

        console.log(inquiryData);


        /* -----------------------------------------------
           Demo processing
        ------------------------------------------------ */

        setTimeout(() => {

            submitButton.disabled = false;

            submitButton.textContent =
                originalButtonText;


            /* Show success message */

            successMessage.classList.add("show");


            /* Clear form */

            form.reset();


            /* -------------------------------------------
               Hide success message after 5 seconds
            -------------------------------------------- */

            setTimeout(() => {

                successMessage.classList.remove(
                    "show"
                );

            }, 5000);


        }, 700);

    });


    /* =====================================================
       INPUT FEEDBACK
    ===================================================== */

    const inputs =
        form.querySelectorAll(
            "input, select, textarea"
        );


    inputs.forEach((input) => {

        input.addEventListener("input", () => {

            if (input.checkValidity()) {

                input.style.borderColor =
                    "transparent";

            }

        });

    });


    /* =====================================================
       PHONE NUMBER CLEANUP
    ===================================================== */

    const phoneInput =
        document.getElementById("phone");


    if (phoneInput) {

        phoneInput.addEventListener(
            "input",
            () => {

                /*
                 * Allows:
                 * numbers
                 * spaces
                 * +
                 * -
                 * parentheses
                 */

                phoneInput.value =
                    phoneInput.value.replace(
                        /[^0-9+\-\s()]/g,
                        ""
                    );

            }
        );

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const contactSection =
        document.querySelector(
            ".contact-section"
        );


    if (
        contactSection &&
        !window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        contactSection.style.opacity = "0";

        contactSection.style.transform =
            "translateY(20px)";

        contactSection.style.transition =
            "opacity .7s ease, transform .7s ease";


        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }


                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";


                        observerInstance.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.1
                }
            );


        observer.observe(contactSection);

    }

});



/* =========================================================
   DEVSEC CORPS — FOOTER JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       AUTOMATIC COPYRIGHT YEAR
    ===================================================== */

    const yearElement =
        document.getElementById("footerYear");


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       SMOOTH SCROLL FOR INTERNAL FOOTER LINKS
    ===================================================== */

    const footerLinks =
        document.querySelectorAll(
            '.site-footer a[href^="#"]'
        );


    footerLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       FOOTER REVEAL
    ===================================================== */

    const footer =
        document.querySelector(".site-footer");


    if (
        footer &&
        !window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        footer.classList.add("footer-ready");


        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }


                        entry.target.classList.add(
                            "footer-visible"
                        );


                        observerInstance.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.08
                }
            );


        observer.observe(footer);

    }

});



document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("siteHeader");
    const menuButton = document.getElementById("menuToggle");
    const mobileNav = document.getElementById("mobileNav");

    if (!header || !menuButton || !mobileNav) return;

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    /* SCROLL EFFECT */

    let ticking = false;

    function updateScrollEffect() {
        header.classList.toggle("scrolled", window.scrollY > 20);
        ticking = false;
    }

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(updateScrollEffect);
            ticking = true;
        }
    }, { passive: true });

    updateScrollEffect();

    /* OPEN AND CLOSE MOBILE MENU */

    function setMenu(open) {
        mobileNav.classList.toggle("open", open);
        menuButton.classList.toggle("active", open);

        menuButton.setAttribute("aria-expanded", String(open));
        menuButton.setAttribute(
            "aria-label",
            open ? "Close navigation" : "Open navigation"
        );

        mobileNav.setAttribute("aria-hidden", String(!open));
    }

    menuButton.addEventListener("click", () => {
        const isOpen = mobileNav.classList.contains("open");
        setMenu(!isOpen);
    });

    /* CLOSE AFTER SELECTING A LINK */

    mobileNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href");

            if (!href || !href.startsWith("#")) return;

            const target = document.getElementById(href.slice(1));

            if (!target) {
                event.preventDefault();
                return;
            }

            event.preventDefault();
            setMenu(false);

            target.scrollIntoView({
                behavior: reduceMotion ? "auto" : "smooth",
                block: "start"
            });

            if (window.location.hash !== href) {
                history.pushState(null, "", href);
            }
        });
    });

    /* CLOSE ON OUTSIDE CLICK */

    document.addEventListener("click", (event) => {
        if (
            mobileNav.classList.contains("open") &&
            !header.contains(event.target)
        ) {
            setMenu(false);
        }
    });

    /* CLOSE WITH ESCAPE */

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            mobileNav.classList.contains("open")
        ) {
            setMenu(false);
            menuButton.focus();
        }
    });

    /* CLOSE WHEN RETURNING TO DESKTOP */

    window.matchMedia("(min-width: 851px)").addEventListener(
        "change",
        (event) => {
            if (event.matches) setMenu(false);
        }
    );

    /* ACTIVE DESKTOP NAV LINK */

    const desktopLinks = document.querySelectorAll(
        ".nav-links a[href^='#']"
    );

    const sections = [...desktopLinks]
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    function activateLink(id) {
        desktopLinks.forEach((link) => {
            const active = link.getAttribute("href") === `#${id}`;

            link.classList.toggle("active", active);

            if (active) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    if ("IntersectionObserver" in window && sections.length) {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio
                    );

                if (visible.length) {
                    activateLink(visible[0].target.id);
                }
            },
            {
                rootMargin: "-20% 0px -60% 0px",
                threshold: [0, 0.1, 0.25, 0.5]
            }
        );

        sections.forEach((section) => observer.observe(section));
    }
});







/* =========================================
   DEVSEC CORPS — SCROLL REVEAL ENGINE
========================================= */

(() => {
  "use strict";

  const revealSelector = "[data-reveal]";
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  // Find the elements that should animate.
  const revealElements = document.querySelectorAll(revealSelector);

  // If there is nothing to animate, exit safely.
  if (!revealElements.length) return;

  // Respect the user's motion preference.
  if (reducedMotion.matches) return;

  // Enable the CSS animation system.
  document.documentElement.classList.add("js-reveal-enabled");

  // Support custom delays such as data-reveal-delay="120".
  revealElements.forEach((element) => {
    const delay = element.dataset.revealDelay;

    if (delay !== undefined && /^\d+$/.test(delay)) {
      const safeDelay = Math.min(Number(delay), 1000);
      element.style.setProperty("--reveal-delay", `${safeDelay}ms`);
    }
  });

  // Reveal on entry and reset when the element leaves.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
        } else {
          entry.target.classList.remove("is-revealed");
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });

  // If the preference changes while the page is open,
  // stop animations and make every element visible.
  reducedMotion.addEventListener("change", (event) => {
    if (event.matches) {
      observer.disconnect();
      document.documentElement.classList.remove(
        "js-reveal-enabled"
      );
    } else {
      window.location.reload();
    }
  });
})();
