document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.accordion-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const answer = this.parentElement.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
            this.textContent = this.textContent === '+' ? '-' : '+';
        });
    });
});

function getCurrentYear() {
    return new Date().getFullYear();
}

document.getElementById('currentYear').textContent = getCurrentYear();


function initMap() {
    const location = { lat: 51.056454, lng: -114.059573 };
    const map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 15, 
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "622 Edmonton Trail, Calgary, AB T2E 3J4"
    });
}