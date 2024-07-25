//=================================================
//---------------------COUNTER---------------------
//=================================================

const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");

let activated = false;

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top + 600 >= 0 && // in case of any issue, replace this line with: rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

function startCounters() {
    counters.forEach(counter => {
        counter.innerText = 0;
        let count = 0;
        function updateCount() {
            const target = parseInt(counter.dataset.count);
            if (count < target) {
                count++;
                counter.innerText = count;
                setTimeout(updateCount, 40);
            } else {
                counter.innerText = target;
            }
        }
        updateCount();
        activated = true;
    });
};

function resetCounters() {
    counters.forEach(counter => {
        counter.innerText = 0;
    });
    activated = false;
};

window.addEventListener("scroll", () => {
    if (isInViewport(container) && !activated) {
        startCounters();
    } else if (!isInViewport(container) && activated) {
        resetCounters();
    }
});