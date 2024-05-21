// const prev = document.getElementsByClassName('prevbtn')[0];

// prev.addEventListener('click', () => {
//     const section = document.getElementsByClassName('sec1')[0];
//     section.innerHTML =`<p>Exclusive Product New Arrival</p>

//     <h2>Fit Low Carb</h2>
//     <h2>CANDY BAR</h2>

//     <p>Sugar-Free</p>
//     <br>
//     <p>BREAKFAST PRODUCTS ON SALE</p>
//     <br>
//     <h2>UP TO </h2>
//     <span class="seventy">70%</span>`
// })

// const next = document.getElementsByClassName('nextbtn')[0];

// next.addEventListener('click', () => {
//     const section = document.getElementsByClassName('sec1')[0];
//     section.innerHTML =`<p>Exclusive Product New Arrival</p>

//     <h2>Organic Coffee</h2>
//     <h2>SPECIAL BLEND</h2>

//     <p>Sugar-Free</p>
//     <br>
//     <p>BREAKFAST PRODUCTS ON SALE</p>
//     <br>
//     <h2>UP TO </h2>
//     <span class="fifty">50%</span>`
// })

// const content = [
//     `<p>Exclusive Product New Arrival</p>

//     <h2>Fit Low Carb</h2>
//     <h2>CANDY BAR</h2>

//     <p>Sugar-Free</p>
//     <br>
//     <p>BREAKFAST PRODUCTS ON SALE</p>
//     <br>
//     <h2>UP TO </h2>
//     <span class="seventy">70%</span>`,
//     `<p>Exclusive Product New Arrival</p>

//     <h2>Organic Coffee</h2>
//     <h2>SPECIAL BLEND</h2>

//     <p>Sugar-Free</p>
//     <br>
//     <p>BREAKFAST PRODUCTS ON SALE</p>
//     <br>
//     <h2>UP TO </h2>
//     <span class="fifty">50%</span>`
// ];

// let currentIndex = 0;

// const prev = document.getElementsByClassName('prevbtn')[0];
// const next = document.getElementsByClassName('nextbtn')[0];
// const section = document.getElementsByClassName('sec1')[0];

// prev.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + content.length) % content.length;
//     section.innerHTML = content[currentIndex];
// });

// next.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % content.length;
//     section.innerHTML = content[currentIndex];
// });

const content = [
    `<p>Exclusive Product New Arrival</p>

    <h2 class="special-h2">Fit Low Carb</h2>
    <h2 class="special-h2">CANDY BAR</h2>

    <p>Sugar-Free</p>
    <br>
    <p>BREAKFAST PRODUCTS ON SALE</p>
    <br>
    <h2 class="special-h2">UP TO </h2>
    <span class="seventy special-span">70%</span>`,
    `<p>Exclusive Product New Arrival</p>

    <h2>Organic Coffee</h2>
    <h2>SPECIAL BLEND</h2>

    <p>Sugar-Free</p>
    <br>
    <p>BREAKFAST PRODUCTS ON SALE</p>
    <br>
    <h2>UP TO </h2>
    <span class="fifty">50%</span>`
];

const bgClassNames = ['bg-color-1', 'bg-color-2']; // Add more class names if needed

let currentIndex = 0;

const prev = document.getElementsByClassName('prevbtn')[0];
const next = document.getElementsByClassName('nextbtn')[0];
const section = document.getElementsByClassName('sec1')[0];

prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + content.length) % content.length;
    section.innerHTML = content[currentIndex];
    applyStyles();
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % content.length;
    section.innerHTML = content[currentIndex];
    applyStyles();
});

function applyStyles() {
    section.className = ''; // Remove all existing class names
    section.classList.add(bgClassNames[currentIndex]); // Add the appropriate background color class
}
