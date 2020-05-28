// Navigation
(function () {
    const menuBtn = document.querySelector(".navigation__button");
    const navList = document.querySelector(".navigation__list");

    menuBtn.addEventListener("click", function () {
        this.classList.toggle('navigation__button--close');
        navList.classList.toggle('navigation__list--close');
    });
})();

// Feedback
$(document).ready(function () {
    $('.feedback').slick({
        // autoplay: true,
        // autoplaySpeed: 5000,
        centerMode: true,
        dots: true,
        slidesToShow: 1,
        variableWidth: true
    });
});

// Price table
const priceTable = $('.table');
const breakpointMobile = 700;

let isChanging = false,
    isFiltered = false;

const slickSettings = {
    arrows: false,
    centerMode: true,
    centerPadding: '20px',
    //autoplay: true,
    dots: true,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: breakpointMobile,
            settings: 'unslick',
        },
    ]
};

$(window).on('resize', function () {
    if ($(window).width() < breakpointMobile && !priceTable.hasClass('slick-initialized')) {
        priceTable.slick(slickSettings)
    }
});

priceTable.on('init breakpoint', function (event, slick) {
    if (!isChanging) {
        isChanging = true;

        if (slick.activeBreakpoint && isFiltered) {
            slick.slickUnfilter();
            isFiltered = false;
        } else if (!slick.activeBreakpoint && !isFiltered) {
            slick.slickFilter(':not(.table__column--hide)');
            isFiltered = true;
        }

        isChanging = false;
    }
}).slick(slickSettings);