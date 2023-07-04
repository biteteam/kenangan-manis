
// Hanling redirect
const redirect = (uri) => {
    const index = document.querySelector(uri);

    if (uri.match("#")) {
        if (index) {
            console.log(uri, index);
            window.scrollTo({
                top: (index.getBoundingClientRect().top - document.body.getBoundingClientRect().top) - 110,
                behavior: "smooth"
            })
        }


        return;
    }

    window.location.href = uri;
}
