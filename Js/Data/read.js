let readFront = document.getElementById('read-front'),
    readHtml = document.getElementById('read-html'),
    readCss = document.getElementById('read-css'),
    readJs = document.getElementById('read-javascipt');

const front = [
    {
        title: 'Front-end Developer Guide',
        href: 'https://frontendmasters.com/books/front-end-handbook/2019/'
    },
    {
        title: 'Programming books',
        href: 'https://books.goalkicker.com/'
    }
];

const htmlRead = [
    {
        title: 'w3schools',
        href: 'https://www.w3schools.com/html/'
    },
    {
        title: 'MDN Web Docs',
        href: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    {
        title: 'MDN Web Docs [ Arabic ]',
        href: 'https://developer.mozilla.org/ar/docs/Web/HTML'
    },
    {
        title: 'المكتبة التقنية',
        href: 'https://download-internet-pdf-ebooks.com/27-1-library-books'
    }
];

const cssRead = [
    {
        title: 'CSS-Tricks',
        href: 'https://css-tricks.com/'
    },
    {
        title: 'W3schools',
        href: 'https://www.w3schools.com/css/'
    },
    {
        title: 'MDN Web Docs',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
        title: 'MDN Web Docs [ Arabic ]',
        href: 'https://developer.mozilla.org/ar/docs/Web/CSS'
    },
    {
        title: 'المكتبة التقنية',
        href: 'https://download-internet-pdf-ebooks.com/32-1-library-books'
    },
    {
        title: 'Apress Books - CSS [Free for Egyptions]',
        href: 'https://www.apress.com/gp/web-development/css'
    }
];

const jsRead = [
    {
        title: 'MDN Web Docs',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide'
    },
    {
        title: 'MDN Web Docs [ Arabic ]',
        href: 'https://developer.mozilla.org/ar/docs/Web/JavaScript/Guide'
    },
    {
        title: 'The Modern JavaScript Tutorial',
        href: 'https://javascript.info/'
    },
    {
        title: 'w3schools',
        href: 'https://www.w3schools.com/js/DEFAULT.asp'
    },
    {
        title: 'Tutorials Point',
        href: 'https://www.tutorialspoint.com/javascript/index.htm'
    },
    {
        title: 'You-Dont-Know-JS',
        href: 'https://github.com/getify/You-Dont-Know-JS'
    },
    {
        title: 'رفوف',
        href: 'https://www.rofofs.com/2019/07/Learn-Javascript-pdf-free.html'
    },
    {
        title: 'المكتبة التقنية',
        href: 'https://download-internet-pdf-ebooks.com/29-1-library-books'
    },
    {
        title: 'Apress Books - JavaScript [Free for Egyptions]',
        href: 'https://www.apress.com/gp/web-development/javascript'
    }
]



const readPages = (id, arr)=> {arr.map(i => {
    id.insertAdjacentHTML("beforeend", `
        <li><a href=${i.href} target="_blank">${i.title}</a></li>
    `)
})}

readPages(readFront, front);
readPages(readHtml, htmlRead);
readPages(readCss, cssRead);
readPages(readJs, jsRead);
