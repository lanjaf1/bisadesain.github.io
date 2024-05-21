// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = e => {
    navbarNav.classList.toggle("active");
    e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});

const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach(btn => {
    btn.onclick = e => {
        const img = btn.getAttribute("data-img");
        const title = btn.getAttribute("data-title");
        const description = btn.getAttribute("data-description");
        const price = btn.getAttribute("data-price");
        const oldPrice = btn.getAttribute("data-old-price");

        document.querySelector("#modal-img").src = img;
        document.querySelector("#modal-img").alt = title;
        document.querySelector("#modal-title").innerText = title;
        document.querySelector("#modal-description").innerText = description;
document.querySelector("#modal-price").innerHTML = 
    `${oldPrice ? `<span class="original-price">${oldPrice}</span>` : ''} 
    <span class="discounted-price">${price}</span>`;


        itemDetailModal.style.display = "flex";
        e.preventDefault();
    };
});

document.querySelector(".modal .close-icon").onclick = e => {
    itemDetailModal.style.display = "none";
    e.preventDefault();
};

// Klik di luar modal
window.onclick = e => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = "none";
    }
};

//format untuo wa
document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        var nama = document.getElementById("nama").value;
        var pesan = document.getElementById("pesan").value;
        var tanya = document.getElementById("tanya").value;

        var whatsappNumber = "0895338499819";
        var whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            `Nama: ${nama}\nPesan: ${pesan}\nPertanyaan: ${tanya}`
        )}`;

        window.open(whatsappURL, "_blank");
    });
