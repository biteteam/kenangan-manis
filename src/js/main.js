// Import our custom CSS
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

window.scrollTo(0, 0);

// Hanling Active Links
const navbar = document.querySelector("nav");
const navLinks = navbar?.querySelectorAll("a.nav-link")
navLinks?.forEach((navLink) => {
    if (navLink?.getAttribute("href")?.replace("/", "") == location.pathname.replace("/", "")) {
        navLink.classList.add("active");
    }
})

const navbarInitTransparentOnPage = ["", "/", "/index.html", "/login.html", "/register.html"];
if (!navbarInitTransparentOnPage.includes(location.pathname)) {
    navbar?.classList.add("navbar-shadow")
}

const floatingTop = document.querySelector(".floating-on-top");

const navbarAction = (oldScrollY, scrollY) => {
    !floatingTop && navbar?.classList.add("navbar-shadow")


    if (navbarInitTransparentOnPage.includes(location.pathname) && !floatingTop) {
        if (oldScrollY < scrollY) {
            if (scrollY > 30) navbar?.classList.add("navbar-shadow")
        } else {
            if (scrollY < 30) {
                navbar?.classList.remove("navbar-shadow")
            }
        }

    }


    if (floatingTop) {
        if (oldScrollY < scrollY) {
            if (scrollY > 50) {
                floatingTop.classList.replace("floating-on-top", "floating-on-top-now")
                floatingTop.nextElementSibling?.classList.add("sm-mt-50", "gap-to-header")
            }
        } else {
            if (scrollY < 50) {
                floatingTop.classList.replace("floating-on-top-now", "floating-on-top")
                floatingTop.nextElementSibling?.classList.remove("sm-mt-50", "gap-to-header")
            }
        }
    }
}

window.addEventListener('scroll', function () {
    // @ts-ignore
    const oldScrollY = this.oldScrollY
    const scrollY = this.scrollY

    navbarAction(oldScrollY, scrollY);
    // @ts-ignore
    this.oldScrollY = scrollY
})
