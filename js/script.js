function showSidebar() {
    const sidebar = document.querySelector ('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar() {
    const sidebar = document.querySelector ('.sidebar');
    sidebar.style.display = 'none';
}


/*
const icon = document.getElementById('toggleIcon');
const verticalLine = document.getElementById('verticalLine')
const text = document.getElementById('hiddenText');

icon.addEventListener("click", () => {
    if (text.style.display === "none") {
        text.style.display = "block";
        verticalLine.style.display = "none";
     }   
    if (text.style.display === "block") {
        text.style.display = "block";
        verticalLine.style.display = "none";
        
    }  else if  (text.style.display === "none") {
         text.style.display = "none";
        verticalLine.style.display = "block";
    } else if (text.style.display === "block")  {
        text.style.display = "none";
        verticalLine.style.display = "block";
    }
    
    
});
*/
document.querySelectorAll("#toggleIcon").forEach(icon => {


icon.addEventListener("click", function (e) {
    const consult = e.target.closest(".consult");
    if (!consult) return;

    const item = consult.closest(".minus");

    document.querySelectorAll(".minus").forEach(el => {
        if (el !== item) el.classList.remove("active");
    });

    item.classList.toggle("active");
});
});

const slides = document.querySelector(".testimonial-slides");
const slideItems = document.querySelectorAll(".testimonial-track");
const dots = document.querySelectorAll(".dot");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;
const total = slideItems.length;

function showSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

next.onclick = () => {
    index = (index + 1) % total;
    showSlide();
};
prev.onclick = () => {
    index = (index - 1 + total) % total;
    showSlide();
};
dots.forEach((dot, i) => {
    dot.onclick = () => {
        index = i;
    showSlide();
};
});
   showSlide();