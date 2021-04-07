// retrive data in channel

let frontPage = document.getElementById('frontPage'),
    htmlPage = document.getElementById('htmlPage'),
    cssPage = document.getElementById('cssPage'),
    jsPage = document.getElementById('jsPage'),
    gitPage = document.getElementById('jsPage'),
    githubPage = document.getElementById('jsPage'),
    aProjectPage = document.getElementById('aProjectPage'),
    eProjectPage = document.getElementById('eProjectPage');
        


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
        totalVid: 88,
        totalDur: 11.48,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '1 Feb 2021',
        ref: 'https://www.youtube.com/watch?v=X1ulCwyhCVM&list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe',
        title: 'Learn CSS In Arabic 2021'
    },
    {
        totalVid: 11,
        totalDur: 2.98,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '12 Nov 2018',
        ref: 'https://www.youtube.com/watch?v=MBxm7SH7pzM&list=PLDoPjvoNmBAycLCqZ6Fx-FT96cRRuPiBh',
        title: 'Advanced Html & Css Lessons'
    },
    {
        totalVid: 56,
        totalDur: 10.30,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '25 Oct 2014',
        ref: 'https://www.youtube.com/watch?v=aBlZ_2rGeb4&list=PLDoPjvoNmBAyEyQaHOHO1HJtmSgGt07VC',
        title: 'Learn Css3 in Arabic'
    },
    {
        totalVid: 29,
        totalDur: 5.85,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '31 May 2014',
        ref: 'https://www.youtube.com/watch?v=Iu1T7j2FA4M&list=PLDoPjvoNmBAzAeIcXA3_JsmSkPKOs9W-Y',
        title: 'Learn Css in Arabic'
    },
    {
        totalVid: 13,
        totalDur: 1.26,
        lang: 'Arabic',
        img: '/uniqueCoderz.jpg',
        alt: 'uniqueCoderz',
        date: '12 Jul 2018',
        ref: 'https://www.youtube.com/watch?v=0KjA2jPIpKY&list=PLtFbQRDJ11kHnEE5SVx_LrfI3o6KgaWC5',
        title: 'Learn CSS Grid Tutorial || CSS Grid دورة كاملة لتعلم الـ'
    },
    {
        totalVid: 14,
        totalDur: 0.96,
        lang: 'Arabic',
        img: '/uniqueCoderz.jpg',
        alt: 'uniqueCoderz',
        date: '28 Dec 2017',
        ref: 'https://www.youtube.com/watch?v=Wpt6QlhwaWg&list=PLtFbQRDJ11kE--j12SU0X5pnXiM0WsWVQ',
        title: 'Centering CSS Techniques Tutorial || CSS توسيط اى عنصر افقيا ورأسيا من خلال'
    },
    {
        totalVid: 9,
        totalDur: 0.99,
        lang: 'Arabic',
        img: '/uniqueCoderz.jpg',
        alt: 'uniqueCoderz',
        date: '10 Jan 2017',
        ref: 'https://www.youtube.com/watch?v=vyc7n200yS0&list=PLtFbQRDJ11kG5SWAH-uHqqZtPbUkNm2RY',
        title: 'Learn Responsive Web Design || دورة تعلم كيفيه جعل الموقع متجاوب'
    },
    {
        totalVid: 28,
        totalDur: 3.92,
        lang: 'Arabic',
        img: '/uniqueCoderz.jpg',
        alt: 'Unique Coderz',
        date: '5 Dec 2016',
        ref: 'https://www.youtube.com/watch?v=aMHr59RCPxI&list=PLtFbQRDJ11kFENgYWivcxJwFKZp815zXX',
        title: 'Learn CSS Tutorial || CSS دورة كاملة لتعلم لغة'
    },
    {
        totalVid: 9,
        totalDur: 2.31,
        lang: 'Arabic',
        img: '/nourHomsi.jpg',
        alt: 'nour',
        date: '3 Oct 2016',
        ref: 'https://www.youtube.com/watch?v=lXw9TmTlXGE&list=PLPTNqXpQ2tbhqO793XtHPRxEkwnaOMIjR',
        title: ' CSS3 أهم تعليمات لغة'
    },
    {
        totalVid: 20,
        totalDur: 4.32,
        lang: 'Arabic',
        img: '/free4arab.jpg',
        alt: 'free4arab',
        date: '16 Jun 2014',
        ref: 'https://www.youtube.com/watch?v=ocspM4WL5Ys&list=PLCIJjtzQPZJ_5Da_I6IMJWRtgxQik2Egd',
        title: 'CSS By Dr.Mohamed Amin'
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
        totalVid: 14,
        totalDur: 1.99,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '31 Mar 2021',
        ref: 'https://www.youtube.com/watch?v=MBq8ZFEIIaQ&list=PLDoPjvoNmBAzHSjcR-HnW9tnxyuye8KbF',
        title: 'HTML And CSS Template 1'
    },
    {
        totalVid: 38,
        totalDur: 5.31,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '30 Apr 2020',
        ref: 'https://www.youtube.com/watch?v=vedT2jk3hi4&list=PLDoPjvoNmBAzvmpzF-6l3tAviiCPbwkB8&index=1',
        title: 'Create Template With HTML, CSS3, JavaScript'
    },
    {
        totalVid: 16,
        totalDur: 4.30,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '15 Nov 2014',
        ref: 'https://www.youtube.com/watch?v=urQihL3GTnw&list=PLDoPjvoNmBAxzmjuEpKP8r4sVWEtFvKoq&index=1',
        title: 'Creating A Website From Preview [ Html, Css Lv1 ]'
    },
    {
        totalVid: 18,
        totalDur: 4.05,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '15 Sept 2015',
        ref: 'https://www.youtube.com/watch?v=52s6c4kYx-Y&list=PLDoPjvoNmBAwccMO4JiLP_vJHxJ_NWeqL',
        title: 'Creating A Website From Preview [ Html, Css, jQuery Lv2 ]'
    },
    {
        totalVid: 18,
        totalDur: 2.90,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '17 Jan 2016',
        ref: 'https://www.youtube.com/watch?v=6olupGFs9DA&list=PLDoPjvoNmBAzVWN837CWYXS18LJ69HvRV',
        title: 'Creating A Website From Preview [ Html, Css3, jQuery Lv3 ]'
    },
    {
        totalVid: 52,
        totalDur: 13.42,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '4 Jul 2014',
        ref: 'https://www.youtube.com/watch?v=auFVttzUoo8&list=PLDoPjvoNmBAw24EjNUp_88S1VeaNK8Cts',
        title: 'Design Using Bootstrap 3 Design 1'
    },
    {
        totalVid: 23,
        totalDur: 4.39,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '5 Apr 2017',
        ref: 'https://www.youtube.com/watch?v=SwCQTLB2zoo&list=PLDoPjvoNmBAxYmbhnyM0yxH3OzhoDiAP9',
        title: 'Design Using Bootstrap 3 Design 2'
    },
    {
        totalVid: 29,
        totalDur: 4.67,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '4 Oct 2017',
        ref: 'https://www.youtube.com/watch?v=DbUjq8J6RK8&list=PLDoPjvoNmBAy0dU3C3_lNRTSTtqePEsI2',
        title: 'Design Using Bootstrap 4 Design 1'
    },
    {
        totalVid: 17,
        totalDur: 3.25,
        lang: 'Arabic',
        img: '/uniqueCoderz.jpg',
        alt: 'uniqueCoderz',
        date: '23 Jan 2018',
        ref: 'https://www.youtube.com/watch?v=s599ucSnBs8&list=PLtFbQRDJ11kG7W2TmVs4gr9FqmZ0Ui551',
        title: 'Design Responsive Template Using ( HTML - CSS - Media Query )'
    },
    {
        totalVid: 10,
        totalDur: 1.19,
        lang: 'Arabic',
        img: '/uniqueCoderz.jpg',
        alt: 'uniqueCoderz',
        date: '4 Jul 2017',
        ref: 'https://www.youtube.com/watch?v=1anI07Bde6g&list=PLtFbQRDJ11kFq3C3I7sKHjXbFru4rx8qs',
        title: 'Design Template Using ( HTML 5 - CSS 3 )'
    },
    {
        totalVid: 13,
        totalDur: 1.89,
        lang: 'Arabic',
        img: '/uniqueCoderz.jpg',
        alt: 'uniqueCoderz',
        date: '21 Jan 2017',
        ref: 'https://www.youtube.com/watch?v=FV1JUHo3mA0&list=PLtFbQRDJ11kHL5MyN6kLTr1n4InvKdeis',
        title: 'Design Template Using ( HTML 5 , CSS 3 , Bootstrap)'
    },
    {
        totalVid: 8,
        totalDur: 1.15,
        lang: 'Arabic',
        img: '/uniqueCoderz.jpg',
        alt: 'uniqueCoderz',
        date: '4 Jan 2017',
        ref: 'https://www.youtube.com/watch?v=MGiqZbnt1n4&list=PLtFbQRDJ11kE3Weby1aZ0wKcgBk_iIlq3',
        title: 'Design Template Using ( HTML , CSS , jQuery )'
    },
    {
        totalVid: 8,
        totalDur: 1.69,
        lang: 'Arabic',
        img: '/uniqueCoderz.jpg',
        alt: 'uniqueCoderz',
        date: '27 Dec 2016',
        ref: 'https://www.youtube.com/watch?v=hIhpIUPFDhM&list=PLtFbQRDJ11kEvT0fwrz003tAGZP7sIBhI',
        title: 'Design Template Multiple Pages Using ( HTML & CSS)'
    },
    {
        totalVid: 15,
        totalDur: 3.48,
        lang: 'Arabic',
        img: '/uniqueCoderz.jpg',
        alt: 'uniqueCoderz',
        date: '22 Dec 2016',
        ref: 'https://www.youtube.com/watch?v=0WL7hR__mw8&list=PLtFbQRDJ11kFg64KOH91XV7JkueV3rUvu',
        title: 'Design Template Using ( HTML 5 - CSS 3 - jQuery )'
    },
    {
        totalVid: 5,
        totalDur: 1.26,
        lang: 'Arabic',
        img: '/uniqueCoderz.jpg',
        alt: 'uniqueCoderz',
        date: '4 Dec 2016',
        ref: 'https://www.youtube.com/watch?v=h9MyENykDLk&list=PLtFbQRDJ11kHihgJYV_6S3j7KhK96cdB1',
        title: 'Design Template Using ( HTML - CSS - JS )'
    },
    {
        totalVid: 5,
        totalDur: 1.41,
        lang: 'Arabic',
        img: '/uniqueCoderz.jpg',
        alt: 'uniqueCoderz',
        date: '3 Dec 2016',
        ref: 'https://www.youtube.com/watch?v=iE1o-VtwfFw&list=PLtFbQRDJ11kHtc8yjnmdxdoebNMumtlzH',
        title: 'Design Template Using ( HTML - CSS )'
    },
    {
        totalVid: 2,
        totalDur: 22,
        lang: 'Arabic',
        img: '/mohamedAbusrea.jpg',
        alt: 'mohamedAbusrea',
        date: '6 May 2020',
        ref: 'https://www.youtube.com/watch?v=IC2XLhYxTOQ&list=PL0_C_32YKLpwetRB-a3Rj0Q4KNuIVocao',
        title: 'مشاريع صغيرة - HTML, CSS, Javascript'
    }
]

const eProject = [
    {
        totalVid: 1,
        totalDur: 1.12,
        lang: 'English',
        img: '/traversyMedia.jpeg',
        alt: 'traversyMedia',
        date: '5 Jun 2017',
        ref: 'https://www.youtube.com/watch?v=qlA7dputiNc&list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU&index=39',
        title: 'Build A Responsive HTML & CSS Template With FlexboxGrid'
    },
    {
        totalVid: 1,
        totalDur: 8.23,
        lang: 'English',
        img: '/codingAddict.jpeg',
        alt: 'codingAddict',
        date: '30 Apr 2020',
        ref: 'https://www.youtube.com/watch?v=c5SIG7Ie0dM&list=PLnHJACx3NwAdT_8forzXYvx0o4A2VnoHX&index=3',
        title: '15 Vanilla Javascript Projects'
    },
    {
        totalVid: 14,
        totalDur: 2.10,
        lang: 'English',
        img: '/theNetNinja.jpeg',
        alt: 'theNetNinja',
        date: '20 Jan 2020',
        ref: 'https://www.youtube.com/watch?v=PM3XW_1RAIs&list=PL4cUxeGkcC9hH1tAjyUPZPjbj-7s200a4',
        title: 'Mobile-First Responsive Build (with CSS Grid)'
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
addvideos(aProjectPage, aProject);
addvideos(eProjectPage, eProject);
addvideos(cssPage, css);
