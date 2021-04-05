// retrive data in channel

let frontPage = document.getElementById('frontPage'),
    htmlPage = document.getElementById('htmlPage'),
    cssPage = document.getElementById('jsPage'),
    jsPage = document.getElementById('jsPage'),
    gitPage = document.getElementById('jsPage'),
    githubPage = document.getElementById('jsPage'),
    aProjectPage = document.getElementById('jsPage'),
    eprojectPage = document.getElementById('jsPage');
        

// const data= [
//   {
//     totalVid: 5,
//     totalDur: 1.22,
//     lang: 'Arabic',
//     img: '/elzero.jpg',
//     alt: 'elzero',
//     date: '2 oct 2020',
//     ref: 'https://www.youtube.com/watch?v=6QAELgirvjs&list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji',
//     title: 'first vid'
//   },
//   {
//     totalVid: 8,
//     totalDur: 1.22,
//     lang: 'Arabic',
//     img: '/elzero.jpg',
//     alt: 'elzero',
//     date: '2 oct 2020',
//     ref: 'https://www.youtube.com/watch?v=6QAELgirvjs&list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji',
//     title: 'second vid'
//   },
//   {
//     totalVid: 7,
//     totalDur: 1.22,
//     lang: 'Arabic',
//     img: '/elzero.jpg',
//     alt: 'elzero',
//     date: '2 oct 2020',
//     ref: 'https://www.youtube.com/watch?v=6QAELgirvjs&list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji',
//     title: 'third vid'
//   }
// ]

const frontEnd = [
    {
      totalVid: 64,
      totalDur: 54.68,
      lang: 'Arabic',
      img: '/uniqueCoderz.jpg',
      alt: 'uniqueCoderz',
      date: '13 Sept 2019',
      ref: 'https://www.youtube.com/playlist?app=desktop&list=PLtFbQRDJ11kFJFzd5UNy5vSnkbR031vG9',
      title: 'دورة تأهيل لسوق العمل فى مجال الويب'
    },
    {
        totalVid: 27,
        totalDur: 4.17,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '7 Oct 2019',
        ref: "https://www.youtube.com/watch?v=mTpsdebd1qA&list=PLDoPjvoNmBAxIUWHxTnmyS9jZwWtXGLon",
        title: 'The Ultimate Front-End Practical Course'
    },
    {
        totalVid: 4,
        totalDur: 0.45,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '29 Mar 2020',
        ref: 'https://www.youtube.com/watch?v=tr3s4EYGkNQ&list=PLDoPjvoNmBAzApFIsAVfXYDWDFjrve2b6',
        title: 'قصص من عالم البرمجة' 
    },
    {
        totalVid: 14,
        totalDur: 3.89,
        lang: 'Arabic',
        img: '/nourHomsi.jpg',
        alt: 'nourHomsi',
        date: '19 Sept 2015',
        ref: 'https://www.youtube.com/watch?v=E1z1qWWCGGA&list=PLPTNqXpQ2tbj12WDefiTH0VgnrTacD9cE',
        title: 'HTML و CSS  ( المستوى الأول )'
    },
    {
        totalVid: 7,
        totalDur: 1.97,
        lang: 'Arabic',
        img: '/nourHomsi.jpg',
        alt: 'nourHomsi',
        date: '29 Mar 2016',
        ref: 'https://www.youtube.com/watch?v=9m6dNuxQxxg&list=PLPTNqXpQ2tbhUchotBAtHh0z3Bjq01DHD',
        title: 'HTML و CSS  ( المستوى الثاني )'
    },
    {
        totalVid: 1,
        totalDur: 10.59,
        lang: 'English',
        img: '/codingAddict.jpeg',
        alt: 'codingAddict',
        date: '16 Apr 2020',
        ref: 'https://www.youtube.com/watch?v=-8ORfgUa8ow&list=PLnHJACx3NwAdT_8forzXYvx0o4A2VnoHX',
        title: 'HTML & CSS Tutorial'
    },
    {
        totalVid: 11,
        totalDur: 4.15,
        lang: 'English',
        img: '/theNetNinja.jpeg',
        alt: 'theNetNinja',
        date: '9 Jul 2019',
        ref: 'https://www.youtube.com/watch?v=hu-q2zYwEYs&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G',
        title: 'HTML & CSS Crash Course Tutorial'
    }
]

const html = [
    {
        totalVid: 37,
        totalDur: 4.21,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '8 Jan 2021',
        ref: 'https://www.youtube.com/watch?v=6QAELgirvjs&list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji',
        title: 'Learn HTML In Arabic 2021'
    },
    {
        totalVid: 1,
        totalDur: 1.41,
        lang: 'Arabic',
        img: '/nourHomsi.jpg',
        alt: 'nourHomsi',
        date: '22 Dec 2019',
        ref: 'https://www.youtube.com/watch?v=yFCUhQONVGA',
        title: 'html في فيديو واحد '
    },
    {
        totalVid: 30,
        totalDur: 2.33,
        lang: 'Arabic',
        img: '/hassounaAcademy.jpeg',
        alt: 'hassounaAcademy',
        date: '29 May 2016<',
        ref: 'https://www.youtube.com/watch?v=8dO3iDegZ9o&list=PLHIfW1KZRIfnXKjZ9UcT5BVt9x19BlItX',
        title: 'شرح دورة سريعه html'
    },
    {
        totalVid: 1,
        totalDur: 1.39,
        lang: 'Arabic',
        img: '/gamal.jpeg',
        alt: 'gamal',
        date: '10 Oct 2020',
        ref: 'https://www.youtube.com/watch?v=q3yFo-t1ykw',
        title: ' بالكامل في فيديو واحد فقط html'
    },
    {
        totalVid: 20,
        totalDur: 4.67,
        lang: 'Arabic',
        img: '/free4arab.jpg',
        alt: 'free4arab',
        date: '16 Jun 2014',
        ref: 'https://www.youtube.com/watch?v=ErtKtOSPZFI&list=PLCIJjtzQPZJ9_g_K-esUR_B8v8_ayR8ri',
        title: 'HTML Language By Dr.Mohamed Amin'
    }
]

const css = [
    {
        totalVid: 2,
        totalDur: 22,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: '',
        date: '',
        ref: '',
        title: ''
    },
    {
        totalVid: 2,
        totalDur: 22,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: '',
        date: '',
        ref: '',
        title: ''
    },
    {
        totalVid: 2,
        totalDur: 22,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: '',
        date: '',
        ref: '',
        title: ''
    }
    ]

    const js = [
    {
        totalVid: 2,
        totalDur: 22,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: '',
        date: '',
        ref: '',
        title: ''
    },
    {
        totalVid: 2,
        totalDur: 22,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: '',
        date: '',
        ref: '',
        title: ''
    },
    {
        totalVid: 2,
        totalDur: 22,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: '',
        date: '',
        ref: '',
        title: ''
    }
]

const git = [
    {
        totalVid: 2,
        totalDur: 22,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: '',
        date: '',
        ref: '',
        title: ''
    },
    {
        totalVid: 2,
        totalDur: 22,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: '',
        date: '',
        ref: '',
        title: ''
    },
    {
        totalVid: 2,
        totalDur: 22,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: '',
        date: '',
        ref: '',
        title: ''
    }
]

const github = [
    {
        totalVid: 2,
        totalDur: 22,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: '',
        date: '',
        ref: '',
        title: ''
    },
    {
        totalVid: 2,
        totalDur: 22,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: '',
        date: '',
        ref: '',
        title: ''
    },
    {
        totalVid: 2,
        totalDur: 22,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: '',
        date: '',
        ref: '',
        title: ''
    }
]

const aProject = [
    {
        totalVid: 2,
        totalDur: 22,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: '',
        date: '',
        ref: '',
        title: ''
    },
    {
        totalVid: 2,
        totalDur: 22,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: '',
        date: '',
        ref: '',
        title: ''
    },
    {
        totalVid: 2,
        totalDur: 22,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: '',
        date: '',
        ref: '',
        title: ''
    }
]

const eProject = [
    {
        totalVid: 2,
        totalDur: 22,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: '',
        date: '',
        ref: '',
        title: ''
    },
    {
        totalVid: 2,
        totalDur: 22,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: '',
        date: '',
        ref: '',
        title: ''
    },
    {
        totalVid: 2,
        totalDur: 22,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: '',
        date: '',
        ref: '',
        title: ''
    }
]







//addVid(jsPage);
const addvideos= (id, arr)=> {arr.map(i => {
    id.insertAdjacentHTML("beforeend", `
    <li class="subject-page-card">
    <div class="subject-page-card-title">
        <h6>Playlist Total Videos (${i.totalVid})</h6>
        <h6>Playlist Total Duration ( ${i.totalDur} hours)</h6>
    </div>
    <div class="subject-page-card-img">
        <div class="language">${i.lang}</div>
        <img src="./channelsLogo${i.img}" alt="${i.alt}">
        <div class="vid-date">${i.date}</div>
    </div>                          
    <div class="subject-page-card-content"><a href="${i.ref}">${i.title}</a></div>      
    </li>
  `)
})
}

addvideos(frontPage, frontEnd);
addvideos(htmlPage, html);
