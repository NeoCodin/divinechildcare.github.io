/* =====================================================================
   Divine Royal Children's Academy — shared header/footer/icons + behavior
   Injected on every page so the nav & footer are edited in ONE place.
   ===================================================================== */

const PHONE_TEL = "+13025430789";
const PHONE = "(302) 543-0789";
const EMAIL = "Ihcdivinetouch@gmail.com";

/* ---- SVG icon sprite (crowns, tiaras, icons) ---- */
const SPRITE = `
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-crown" viewBox="0 0 24 24"><path d="M3 7.2a1.4 1.4 0 1 0-1.4-1.4A1.4 1.4 0 0 0 3 7.2Zm18 0a1.4 1.4 0 1 0-1.4-1.4A1.4 1.4 0 0 0 21 7.2ZM12 4.6a1.4 1.4 0 1 0-1.4-1.4A1.4 1.4 0 0 0 12 4.6ZM4.2 18.4h15.6a1 1 0 0 1 1 1v.6a1.4 1.4 0 0 1-1.4 1.4H4.6a1.4 1.4 0 0 1-1.4-1.4v-.6a1 1 0 0 1 1-1Zm-.6-1.6L2.2 8.2a.5.5 0 0 1 .77-.5l4.2 2.94a.5.5 0 0 0 .73-.18l3.43-6.06a.5.5 0 0 1 .87 0l3.43 6.06a.5.5 0 0 0 .73.18l4.2-2.94a.5.5 0 0 1 .77.5l-1.4 8.6a.5.5 0 0 1-.5.42H4.1a.5.5 0 0 1-.5-.42Z"/></symbol>
  <symbol id="i-tiara" viewBox="0 0 24 24"><path d="M2 16.5c0-1 .7-1.7 1.6-1.8L5 9.6a.5.5 0 0 1 .9-.13L8 12.4l3.1-4.5a.5.5 0 0 1 .82 0L15 12.4l2.1-2.93a.5.5 0 0 1 .9.13l1.4 5.1c.9.1 1.6.8 1.6 1.8a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5ZM3.5 18.6h17a.5.5 0 0 1 .5.5v.2a1.2 1.2 0 0 1-1.2 1.2H4.2A1.2 1.2 0 0 1 3 19.3v-.2a.5.5 0 0 1 .5-.5ZM12 6.6a1.2 1.2 0 1 0-1.2-1.2A1.2 1.2 0 0 0 12 6.6Z"/></symbol>
  <symbol id="i-sparkle" viewBox="0 0 24 24"><path d="M12 1.5c.5 4.6 1.9 6 6.5 6.5-4.6.5-6 1.9-6.5 6.5-.5-4.6-1.9-6-6.5-6.5 4.6-.5 6-1.9 6.5-6.5Zm7 12c.27 2.3 1 3 3.3 3.3-2.3.27-3 1-3.3 3.3-.27-2.3-1-3-3.3-3.3 2.3-.3 3-1 3.3-3.3Z"/></symbol>
  <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3Zm-1.2 13.2-3-3 1.4-1.4 1.6 1.6 4-4 1.4 1.4-5.4 5.4Z"/></symbol>
  <symbol id="i-heart" viewBox="0 0 24 24"><path d="M12 21s-7.4-4.6-10-9.2C.3 8.4 2 4.7 5.5 4.7c2 0 3.4 1.1 4.5 2.6 1.1-1.5 2.5-2.6 4.5-2.6C18 4.7 19.7 8.4 22 11.8 19.4 16.4 12 21 12 21Z"/></symbol>
  <symbol id="i-meal" viewBox="0 0 24 24"><path d="M8 2v8a2 2 0 0 1-2 2 2 2 0 0 1-2-2V2H2v8a4 4 0 0 0 3 3.87V22h2V13.9A4 4 0 0 0 10 10V2H8Zm6 0a3 3 0 0 0-3 3v6h2v11h2V2h-1Zm5 0c-1.7 0-3 2-3 4.5 0 2 1 3.7 2 4.2V22h2V2Z"/></symbol>
  <symbol id="i-clock" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 11H7v-2h4V6h2Z"/></symbol>
  <symbol id="i-book" viewBox="0 0 24 24"><path d="M4 4h7a2 2 0 0 1 2 2v14a3 3 0 0 0-2-1H4Zm16 0h-7v15a3 3 0 0 1 2-1h5Z"/></symbol>
  <symbol id="i-sun" viewBox="0 0 24 24"><path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm0 2a4 4 0 1 1-4 4 4 4 0 0 1 4-4ZM11 1h2v3h-2Zm0 19h2v3h-2ZM1 11h3v2H1Zm19 0h3v2h-3ZM3.5 3.5 5.6 5.6 4.2 7 2.1 4.9Zm15.4 0L21 5.6 18.9 7.7 17.5 6.3ZM4.2 17 5.6 18.4 3.5 20.5 2.1 19.1ZM18.9 16.3 21 18.4l-1.4 1.4-2.1-2.1Z"/></symbol>
  <symbol id="i-camera" viewBox="0 0 24 24"><path d="M9 3 7.2 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.2L15 3Zm3 15a5 5 0 1 1 5-5 5 5 0 0 1-5 5Zm0-2a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z"/></symbol>
  <symbol id="i-phone" viewBox="0 0 24 24"><path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1Z"/></symbol>
  <symbol id="i-mail" viewBox="0 0 24 24"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2.2 8 4.8 8-4.8V6L12 10.8 4 6Z"/></symbol>
  <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z"/></symbol>
  <symbol id="i-chev" viewBox="0 0 24 24"><path d="M12 15.4 5.6 9 7 7.6l5 5 5-5L18.4 9Z"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><path d="M9.6 16.2 4.8 11.4 6.2 10l3.4 3.4L17.8 5.2 19.2 6.6Z"/></symbol>
  <symbol id="i-star" viewBox="0 0 24 24"><path d="m12 2 3 6.5 7 .7-5.2 4.8 1.5 6.9L12 17.8 5.7 20.9l1.5-6.9L2 9.2l7-.7Z"/></symbol>
  <symbol id="i-user" viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4 0-9 2-9 6v2h18v-2c0-4-5-6-9-6Z"/></symbol>
  <symbol id="i-facebook" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"/></symbol>
  <symbol id="i-linkedin" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></symbol>
</svg>`;

/* ---- Header (nav links use page filenames) ---- */
const NAV = [
  ["programs.html", "Programs"],
  ["why-us.html", "Why Us"],
  ["gallery.html", "Gallery"],
  ["rates.html", "Rates"],
  ["faq.html", "FAQ"],
];

const HEADER = `
<div class="announce">
  <div class="bar one"><span class="s">&#10022;</span> Now Enrolling — Limited Royal Openings <span class="s">&#10022;</span></div>
  <div class="bar two">Licensed Delaware Home Daycare &middot; Purchase of Care (POC) Welcome &middot; <a href="contact.html">Book a Free Tour &rarr;</a></div>
</div>
<header id="header">
  <div class="container nav">
    <a class="brand" href="index.html" aria-label="Divine Royal Children's Academy home">
      <!-- LOGO: replace this .badge contents with <img src="logo.png" alt="..."> when ready -->
      <span class="badge"><img src="images/logo-mark.png" alt="Divine Royal Children's Academy logo" /></span>
      <span class="name">Divine Royal<small>Children's Academy</small></span>
    </a>
    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="menu"><span></span><span></span><span></span></button>
    <nav class="menu" id="menu">
      ${NAV.map(([href, label]) => `<a class="link" href="${href}">${label}</a>`).join("")}
      <a class="btn" href="contact.html"><svg><use href="#i-crown"/></svg> Enroll Now</a>
    </nav>
  </div>
  <div class="container subinfo">
    <span>&#128205; Located in Middletown, DE</span>
    <span class="dot">&middot;</span>
    <span>Family Owned &amp; Operated</span>
    <span class="dot">&middot;</span>
    <span class="call">Call us at <a href="tel:${PHONE_TEL}"><b>${PHONE}</b></a></span>
  </div>
</header>`;

const FOOTER = `
<footer>
  <div class="container foot">
    <div>
      <div class="fbrand"><span class="badge"><img src="images/logo-mark.png" alt="Divine Royal Children's Academy logo" /></span><b>Divine Royal Children's Academy</b></div>
      <p style="max-width:42ch">A loving, licensed, family-owned home daycare in Middletown, Delaware — where every child is treated like royalty.</p>
      <div class="badges">
        <span><svg><use href="#i-shield"/></svg> DE OCCL Licensed</span>
        <span><svg><use href="#i-heart"/></svg> CPR &amp; First Aid</span>
        <span><svg><use href="#i-crown"/></svg> POC Welcome</span>
      </div>
      <div class="socials">
        <a href="https://www.facebook.com/profile.php?id=61591373723248" target="_blank" rel="noopener" aria-label="Divine Royal on Facebook"><svg><use href="#i-facebook"/></svg></a>
        <a href="https://www.linkedin.com/in/peace-arousa-5893951a2" target="_blank" rel="noopener" aria-label="Divine Royal on LinkedIn"><svg><use href="#i-linkedin"/></svg></a>
      </div>
    </div>
    <div>
      <h4>Explore</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        ${NAV.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("")}
        <li><a href="contact.html">Book a Tour</a></li>
      </ul>
    </div>
    <div class="fc">
      <h4>Contact</h4>
      <ul>
        <li class="row"><svg><use href="#i-phone"/></svg><a href="tel:${PHONE_TEL}">${PHONE}</a></li>
        <li class="row"><svg><use href="#i-mail"/></svg><a href="mailto:${EMAIL}">${EMAIL}</a></li>
        <li class="row"><svg><use href="#i-pin"/></svg><span>Middletown, DE 19709</span></li>
        <li class="row"><svg><use href="#i-clock"/></svg><span>Mon&ndash;Fri &middot; 6:00am&ndash;6:00pm</span></li>
      </ul>
    </div>
  </div>
  <div class="container copy">
    <div>&copy; <span id="year"></span> Divine Royal Children's Academy. All rights reserved.</div>
    <div>Made with <span style="color:#ff9ec4">&hearts;</span> in Delaware</div>
  </div>
</footer>`;

/* ---- Inject + wire up ---- */
function init() {
  document.body.insertAdjacentHTML("afterbegin", SPRITE);
  const hp = document.getElementById("site-header");
  if (hp) hp.outerHTML = HEADER;
  const fp = document.getElementById("site-footer");
  if (fp) fp.outerHTML = FOOTER;

  // Year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Active nav link (match current filename)
  const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".menu a.link").forEach((a) => {
    if ((a.getAttribute("href") || "").toLowerCase() === here) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    }
  });

  // Mobile menu
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  // Header shadow on scroll
  const header = document.getElementById("header");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Scroll reveal
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  }

  // Contact form -> mailto (only on contact page)
  const form = document.getElementById("tourForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const f = e.target;
      const subject = `Tour Request${f.name.value ? " from " + f.name.value.trim() : ""}`;
      const body = `Name: ${f.name.value.trim()}\nEmail: ${f.email.value.trim()}\nPhone: ${f.phone.value.trim()}\n\n${f.message.value.trim() || "I'd love to schedule a tour!"}`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
