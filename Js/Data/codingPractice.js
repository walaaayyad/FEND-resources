let practiceFront = document.getElementById('practice-front'),
    practiceCss = document.getElementById('practice-css'),
    practiceJs = document.getElementById('practice-javascipt');

const frontPractice = [
    {
        title: 'Frontend Mentor',
        href: 'https://www.frontendmentor.io/'
    }
];

const cssPractice = [
    {
        title: 'Responsive Web Design [freeCodeCamp]',
        href: 'https://www.freecodecamp.org/learn/responsive-web-design/'
    },
    {
        title: 'Challenges [codier]',
        href: 'https://codier.io/'
    }
];

const jsPractice = [
    {
        title: 'freeCodeCamp',
        href: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/'
    },
    {
        title: 'Javascript30',
        href: 'https://javascript30.com/'
    },
    {
        title: 'Edabit Challenges',
        href: 'https://edabit.com/challenges'
    },
    {
        title: '10 Days of Javascript [HackerRank]',
        href: 'https://www.hackerrank.com/domains/tutorials/10-days-of-javascript'
    },
    {
        title: 'Learn js',
        href: 'https://www.learn-js.org/'
    },
    {
        title: 'JavaScript - Exercises, Practice, Solution [w3resource]',
        href: 'https://www.w3resource.com/javascript-exercises/'
    },
    {
        title: 'JavaScript Algorithms [freeCodeCamp]',
        href: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/'
    }
]



const practicePages = (id, arr)=> {arr.map(i => {
    id.insertAdjacentHTML("beforeend", `
        <li><a href=${i.href} target="_blank">${i.title}</a></li>
    `)
})}

practicePages(practiceFront, frontPractice);
practicePages(practiceCss, cssPractice);
practicePages(practiceJs, jsPractice);