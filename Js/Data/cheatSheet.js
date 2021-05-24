let cheatSheetFront = document.getElementById('cheatSheet-front'),
cheatSheetHtml = document.getElementById('cheatSheet-html'),
cheatSheetCss = document.getElementById('cheatSheet-css'),
cheatSheetJavascipt = document.getElementById('cheatSheet-javascipt');

const front= [
    {
        title: '',
        href: ''
    },
    {
        title: '',
        href: ''
    }
];

const html = [
    {
        title: '',
        href: ''
    },
    {
        title: '',
        href: ''
    },
    {
        title: '',
        href: ''
    },
    {
        title: '',
        href: ''
    },
    {
        title: '',
        href: ''
    }
];

const css = [
    {
        title: '',
        href: ''
    },
    {
        title: '',
        href: ''
    },
    {
        title: '',
        href: ''
    },
    {
        title: '',
        href: ''
    },
    {
        title: '',
        href: ''
    }
];

const javascipt = [
    {
        title: '',
        href: ''
    },
    {
        title: '',
        href: ''
    },
    {
        title: '',
        href: ''
    },
    {
        title: '',
        href: ''
    },
    {
        title: '',
        href: ''
    }
]



const cheatSheetPages = (id, arr)=> {arr.map(i => {
    console.log('hello from read');
    id.insertAdjacentHTML("beforeend", `
        <li><a href=${i.href} target="_blank">${i.title}</a></li>
    `)
})}

cheatSheetPages(cheatSheetFront, front);
cheatSheetPages(cheatSheetHtml, html);
cheatSheetPages(cheatSheetCss, css);
cheatSheetPages(cheatSheetJavascript, javascript);