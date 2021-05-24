let practiceFront = document.getElementById('practice-front'),
practiceHtml = document.getElementById('practice-html'),
practiceCss = document.getElementById('practice-css'),
practiceJavascipt = document.getElementById('practice-javascipt');

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



const practicePages = (id, arr)=> {arr.map(i => {
    console.log('hello from read');
    id.insertAdjacentHTML("beforeend", `
        <li><a href=${i.href} target="_blank">${i.title}</a></li>
    `)
})}

practicePages(practiceFront, front);
practicePages(practiceHtml, html);
practicePages(practiceCss, css);
practicePages(practiceJavascript, javascript);