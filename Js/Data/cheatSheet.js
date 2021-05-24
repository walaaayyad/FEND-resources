let cheatSheetHtml = document.getElementById('cheatSheet-html'),
    cheatSheetCss = document.getElementById('cheatSheet-css'),
    cheatSheetJs = document.getElementById('cheatSheet-javascipt');


const htmlCheatSheet = [
    {
        title: 'HTML Element Reference',
        href: 'https://www.w3schools.com/TAGS/default.ASP'
    },
    {
        title: 'The Ultimate HTML5 Cheat Sheet–2021',
        href: 'https://www.wpkube.com/html5-cheat-sheet/'
    },
    {
        title: 'Digital HTML Cheatsheet',
        href: 'https://digital.com/tools/html-cheatsheet/'
    }
];

const cssCheatSheet = [
    {
        title: 'CSS Reference',
        href: 'https://www.w3schools.com/cssref/default.asp'
    },
    {
        title: 'Toptal CSS cheat sheet',
        href: 'https://www.toptal.com/css/css-cheat-sheet'
    },
    {
        title: 'CSS Cheat Sheet',
        href: 'https://adam-marsden.co.uk/css-cheat-sheet'
    }
];

const jsCheatSheet = [
    {
        title: 'JavaScript and HTML DOM Reference',
        href: 'https://www.w3schools.com/jsref/default.asp'
    },
    {
        title: 'Cheatography',
        href: 'https://cheatography.com/davechild/cheat-sheets/javascript/'
    },
    {
        title: 'XUL JavaScript Cheat Sheet',
        href: 'https://www.xul.fr/javascript/cheat-sheet.php'
    },
    {
        title: 'JavaScript Array Cheat Sheet',
        href: 'https://andreasnylin.com/js-array-cheat-sheet/'
    },
    {
        title: 'OneDrive javaScript',
        href: 'https://onedrive.live.com/?authkey=%21AB9haHgwXtaDCK0&cid=5E4F6DAE2F8B84DE&id=5E4F6DAE2F8B84DE%21122414&parId=5E4F6DAE2F8B84DE%21103814&o=OneUp'
    }
]



const cheatSheetPages = (id, arr)=> {arr.map(i => {
    id.insertAdjacentHTML("beforeend", `
        <li><a href=${i.href} target="_blank">${i.title}</a></li>
    `)
})}

cheatSheetPages(cheatSheetHtml, htmlCheatSheet);
cheatSheetPages(cheatSheetCss, cssCheatSheet);
cheatSheetPages(cheatSheetJs, jsCheatSheet);