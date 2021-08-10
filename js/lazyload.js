function lazyLoad() {
    var boxes = document.querySelectorAll(".box");

    var timer;
    let count = 0;
    function lazyload() {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(function () {
            var scrollTop = window.pageYOffset;
            boxes.forEach(function (element) {
                let getImage = element.querySelector('.box-inner .box-front img');

                if (element.offsetTop < (window.innerHeight + scrollTop)) {
                    getImage.src = getImage.dataset.src;
                }

            });
        }, 20);
    }

    if (count == 0) {
        lazyload();
        count++;
    }
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
}