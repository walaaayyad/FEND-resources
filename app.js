// start channels section
let arabicChannelsBtn = document.getElementById('arabic-channels-btn'),
    englishChannelsBtn = document.getElementById('english-channels-btn'),
    arabicCloseBtn = document.getElementById('arabicCloseBtn'),
    englishCloseBtn = document.getElementById('englishCloseBtn'),
    arabic = document.getElementById('arabic'),
    english = document.getElementById('english');


arabicChannelsBtn.addEventListener('click', ()=> {
    arabic.classList.add("open");
});
englishChannelsBtn.addEventListener('click', ()=> {
    english.classList.add("open");
});
arabicCloseBtn.addEventListener('click', ()=> {
    arabic.classList.remove("open");
});
englishCloseBtn.addEventListener('click', ()=> {
    english.classList.remove("open");
});
// end channels section