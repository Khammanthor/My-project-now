//Sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

//Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
});

// Autocomplete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
        "Aruba": null,
        "Cancun Mexico": null,
        "Hawaii": null,
        "Florida": null,
        "California": null,
        "China": null,
        "Europe": null,
        "Laos": null,
    }
});
// Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.MaterialBox.init(mb, {});

//Scrollspy
const ss = document.querySelectorAll('.scrollspy');
M.Scrollspy.init(ss, {});