let quizzesFront = document.getElementById('quizzes-front'),
quizzesHtml = document.getElementById('quizzes-html'),
quizzesCss = document.getElementById('quizzes-css'),
quizzesJavascipt = document.getElementById('quizzes-javascipt');

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



const quizzesPages = (id, arr)=> {arr.map(i => {
    console.log('hello from read');
    id.insertAdjacentHTML("beforeend", `
        <li><a href=${i.href} target="_blank">${i.title}</a></li>
    `)
})}

quizzesPages(quizzesFront, front);
quizzesPages(quizzesHtml, html);
quizzesPages(quizzesCss, css);
quizzesPages(quizzesJavascript, javascript);