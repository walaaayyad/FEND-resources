let quizzesFront = document.getElementById('quizzes-front'),
    quizzesHtml = document.getElementById('quizzes-html'),
    quizzesCss = document.getElementById('quizzes-css'),
    quizzesJs = document.getElementById('quizzes-javascipt');

const frontQuizzes = [
    {
        title: 'Pluralsight',
        href: 'https://www.pluralsight.com/paths/building-websites-with-html-css-and-javascript'
    },
    {
        title: 'ProProfs',
        href: 'https://www.proprofs.com/quiz-school/story.php?title=how-good-are-you-at-geometry_481gd'
    }
];

const htmlQuizzes = [
    {
        title: 'W3schools',
        href: 'https://www.w3schools.com/html/html_quiz.asp'
    },
    {
        title: 'Ws Cube Tech',
        href: 'https://www.wscubetech.com/quiz-test-html'
    },
    {
        title: 'CodesCracker',
        href: 'https://codescracker.com/exam/showtest.php?subid=4'
    },
    {
        title: 'W3docs',
        href: 'https://www.w3docs.com/quiz-start/html-basic'
    },
    {
        title: 'Introduction To HTML [ProProfs Quizzes]',
        href: 'https://www.proprofs.com/quiz-school/story.php?title=html-coding-quiz-1'
    },
    {
        title: 'Hardest Trivia Quiz On HTML Codes And Tags [ProProfs Quizzes]',
        href: 'https://www.proprofs.com/quiz-school/story.php?title=html-postassessment'
    },
    {
        title: 'Simple HTML Tags Quiz [ProProfs Quizzes]',
        href: 'https://www.proprofs.com/quiz-school/story.php?title=simple-html-tags-quiz'
    },
    {
        title: 'HTML Basics Exam: Trivia Quiz [ProProfs Quizzes]',
        href: 'https://www.proprofs.com/quiz-school/story.php?title=introduction-to-html_2'
    },
    {
        title: 'Hardest HTML Exam Quiz: Trivia [ProProfs Quizzes]',
        href: 'https://www.proprofs.com/quiz-school/story.php?title=html_146'
    },
    {
        title: '13 Most Helpful HTML Interview Questions & Answers [GoSkills]',
        href: 'https://www.goskills.com/Development/Resources/HTML-interview-questions-answers'
    }
];

const cssQuizzes = [
    {
        title: 'W3schools',
        href: 'https://www.w3schools.com/css/css_quiz.asp'
    },
    {
        title: 'Ws Cube Tech - CSS',
        href: 'https://www.wscubetech.com/quiz-test-css'
    },
    {
        title: 'Ws Cube Tech - CSS3',
        href: 'https://www.wscubetech.com/quiz-test-css3'
    },
    {
        title: 'CodesCracker',
        href: 'https://codescracker.com/exam/showtest.php?subid=5'
    },
    {
        title: 'W3docs',
        href: 'https://www.w3docs.com/quiz-start/css-basic'
    },
    {
        title: 'Tutorialspoint',
        href: 'https://www.tutorialspoint.com/css/css_online_test.htm'
    },
    {
        title: 'CSS Portal',
        href: 'https://www.cssportal.com/css-quiz/'
    },
    {
        title: 'After Hours Programming',
        href: 'https://www.afterhoursprogramming.com/tutorial/css/css-quiz/'
    },
    {
        title: 'Top 50 CSS Interview Questions [Edureka]',
        href: 'https://www.edureka.co/blog/interview-questions/css-interview-questions/'
    },
    {
        title: 'CSS Interview Questions [GoSkills]',
        href: 'https://www.javatpoint.com/css-interview-questions'
    },
    {
        title: '20 Most Helpful CSS Interview Q&A [GoSkills]',
        href: 'https://www.goskills.com/Development/Resources/CSS-interview-questions-answers'
    },
    {
        title: 'Top 30+ Popular CSS Interview Q&A [SoftwareTestingHelp]',
        href: 'https://www.softwaretestinghelp.com/css-interview-questions/'
    }
];

const jsQuizzes = [
    {
        title: 'Pluralsight',
        href: 'https://www.pluralsight.com/paths/javascript-core-language'
    },
    {
        title: 'Ws Cube Tech',
        href: 'https://www.wscubetech.com/quiz-test-javascript'
    },
    {
        title: 'CodesCracker',
        href: 'https://codescracker.com/exam/showtest.php?subid=6'
    },
    {
        title: 'W3docs',
        href: 'https://www.w3docs.com/quiz-start/javascript-basic'
    },
    {
        title: 'ES6 Basic [W3docs]',
        href: 'https://www.w3docs.com/quiz-start/es6-basic'
    },
    {
        title: 'After Hours Programming',
        href: 'https://www.afterhoursprogramming.com/tutorial/javascript/javascript-quiz/'
    },
    {
        title: 'Perfection Kills',
        href: 'http://perfectionkills.com/javascript-quiz-es6/'
    },
    {
        title: 'Tutorialspoint',
        href: 'https://www.tutorialspoint.com/javascript/javascript_online_quiz.htm'
    },
    {
        title: 'Top 100 JavaScript Interview Questions [Guru99]',
        href: 'https://www.guru99.com/javascript-interview-questions-answers.html'
    },
    {
        title: 'Javascript Interview Questions [InterviewBit]',
        href: 'https://www.interviewbit.com/javascript-interview-questions/'
    },
    {
        title: '37 Essential JavaScript Interview Questions [Toptal]',
        href: 'https://www.toptal.com/javascript/interview-questions'
    },
    {
        title: '25+ JavaScript Coding Interview Questions [FullStack Cafe]',
        href: 'https://www.fullstack.cafe/blog/javascript-code-interview-questions'
    }
]



const quizzesPages = (id, arr)=> {arr.map(i => {
    id.insertAdjacentHTML("beforeend", `
        <li><a href=${i.href} target="_blank">${i.title}</a></li>
    `)
})}

quizzesPages(quizzesFront, frontQuizzes);
quizzesPages(quizzesHtml, htmlQuizzes);
quizzesPages(quizzesCss, cssQuizzes);
quizzesPages(quizzesJs, jsQuizzes);