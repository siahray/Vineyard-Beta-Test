
/*----------------------
-------SIDEBAR-------
----------------------- */

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
function toggleDropdown(event) {
    event.preventDefault();
    const dropdown = event.target.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

/*----------------------
-------DONATIONS-------
----------------------- */


let currentSlide = 0;

function moveSlides(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



/*----------------------
-------DONATIONS-------
----------------------- */

function switchTab(tab) {
    document.getElementById('monthly-options').style.display = tab === 'monthly' ? 'grid' : 'none';
    document.getElementById('one-time-options').style.display = tab === 'one-time' ? 'grid' : 'none';
    document.getElementById('monthly').classList.toggle('active', tab === 'monthly');
    document.getElementById('one-time').classList.toggle('active', tab === 'one-time');
}

function selectAmount(amount, event) {
    document.querySelectorAll('.amount-grid button').forEach(btn => btn.classList.remove('selected'));
    event.target.classList.add('selected');
    document.getElementById('custom-donation').value = ''; // Clear custom input when preset is selected
    document.getElementById('donate').classList.add('active');
    document.getElementById('donate').disabled = false;
}

function selectCustomAmount() {
    let customAmount = document.getElementById('custom-donation').value;
    document.querySelectorAll('.amount-grid button').forEach(btn => btn.classList.remove('selected'));

    if (customAmount && customAmount > 0) {
        document.getElementById('donate').classList.add('active');
        document.getElementById('donate').disabled = false;
    } else {
        document.getElementById('donate').classList.remove('active');
        document.getElementById('donate').disabled = true;
    }
}


function showInfoForm() {
    document.getElementById('info-form').style.display = 'block';
    document.getElementById('donate').style.display = 'none';
    document.querySelector('.donate-options').style.display = 'none';
    document.getElementById('payment-form').style.display = 'none';
    updateProgress(1);
}

function showPaymentForm() {
    document.getElementById('info-form').style.display = 'none';
    document.getElementById('payment-form').style.display = 'block';
    updateProgress(2);
}

function goBack(step) {
    if (step === 0) {
        document.querySelector('.donate-options').style.display = 'block';
        document.getElementById('info-form').style.display = 'none';
        document.getElementById('payment-form').style.display = 'none';
        document.getElementById('donate').style.display = 'block';
    } else if (step === 1) {
        document.getElementById('info-form').style.display = 'block';
        document.getElementById('payment-form').style.display = 'none';
    }
    updateProgress(step);
}

function updateProgress(step) {
    document.querySelectorAll('.progress-step').forEach((el, index) => {
        el.classList.toggle('active', index <= step);
    });
}