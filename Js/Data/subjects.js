// Global Variables
let frontPage = document.getElementById('frontPage'),
    htmlPage = document.getElementById('htmlPage'),
    cssPage = document.getElementById('cssPage'),
    jsPage = document.getElementById('jsPage'),
    gitPage = document.getElementById('gitPage'),
    githubPage = document.getElementById('githubPage'),
    aProjectPage = document.getElementById('aProjectPage'),
    eProjectPage = document.getElementById('eProjectPage');
        

// frontEnd Channels
const frontEnd = [
    {
        totalVid: 4,
        totalDur: 0.98,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '24 Nov 2020',
        ref: "https://www.youtube.com/watch?v=9QC-PFHo8Yw&list=PLDoPjvoNmBAwGClt7wqdUOfqZbq_f2Uek",
        title: 'Intro To Programming'
    },
    {
        totalVid: 4,
        totalDur: 0.45,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '29 Mar 2020',
        ref: "https://www.youtube.com/watch?v=tr3s4EYGkNQ&list=PLDoPjvoNmBAzApFIsAVfXYDWDFjrve2b6",
        title: 'قصص من عالم البرمجة'
    },
    {
        totalVid: 8,
        totalDur: 1.73,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '28 Feb 2021',
        ref: "https://www.youtube.com/watch?v=c8vpPwpAc3c&list=PLDoPjvoNmBAyoB1hSU3AaidyHy1CNd3ZD",
        title: 'نقاشات برمجية'
    },
    {
        totalVid: 4,
        totalDur: 0.84,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '13 Oct 2018',
        ref: "https://www.youtube.com/watch?v=2qZiBnbY4DQ&list=PLDoPjvoNmBAzTQ5TBsxkF2bZ4djZetUba",
        title: 'How To Become A Front-End Monster'
    },
    {
        totalVid: 55,
        totalDur: 13.00,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '29 Jul 2019',
        ref: "https://www.youtube.com/watch?v=D7m-cb5nDk8&list=PLDoPjvoNmBAwaV2taZfJ8WCSy-TmYvUYc",
        title: 'Web Design Tutorials'
    },
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
        totalVid: 8,
        totalDur: 1.05,
        lang: 'Arabic',
        img: '/uniqueCoderz.jpg',
        alt: 'uniqueCoderz',
        date: '8 Dec 2016',
        ref: 'https://www.youtube.com/watch?v=frrwpg2yAx4&list=PLtFbQRDJ11kGpFFwvzRf8NUelhAnokbq8',
        title: 'Different In Web || فروقات مهمة فى عالم الويب'
    },
    {
        totalVid: 5,
        totalDur: 1.84,
        lang: 'Arabic',
        img: '/uniqueCoderz.jpg',
        alt: 'uniqueCoderz',
        date: '10 Dec 2016',
        ref: 'https://www.youtube.com/watch?v=TYd41LJdRIg&list=PLtFbQRDJ11kGRt3bUHlOdjsPvr-lchIYe',
        title: 'Think Then Code || التفكير اولاً ثم الكود ثانياً'
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
        totalVid: 6,
        totalDur: 2.94,
        lang: 'Arabic',
        img: '/semicolon.jpg',
        alt: 'semicolon',
        date: '7 Jul 2020',
        ref: 'https://www.youtube.com/watch?v=4TPszCQt8nk&list=PLtxOBbrOOPH504D65F8jJZKtKr09fATpU&ab_channel=SemiColonAcademy',
        title: 'UI challenges'
    },
    //-----------------E---------------------
    {
        totalVid: 1,
        totalDur: 9.16,
        lang: 'English',
        img: '/codingAddict.jpeg',
        alt: 'codingAddict',
        date: '18 Mar 2017',
        ref: 'https://www.youtube.com/watch?v=aYSgpR5VGPM&list=PLnHJACx3NwAcgdSFN77vdSd22unfGWQZv&ab_channel=CodingAddict',
        title: 'HTML and CSS Tutorial for beginners 0 - Full Video'
    },
    {
        totalVid: 1,
        totalDur: 11.30,
        lang: 'English',
        img: '/codingAddict.jpeg',
        alt: 'codingAddict',
        date: '25 Feb 2019',
        ref: 'https://www.youtube.com/watch?v=V5rIPKzcX7Q&list=PLnHJACx3NwAebRxK_nO6aZIfAZyV7WV6Y&ab_channel=CodingAddict',
        title: 'HTML5 and CSS3 From Scratch with VS-CODE'
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
    },
    {
        totalVid: 55,
        totalDur: 42.39,
        lang: 'English',
        img: '/traversyMedia.jpeg',
        alt: 'traversyMedia',
        date: '17 Jul 2017',
        ref: 'https://www.youtube.com/watch?v=UB1O30fR-EE&list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU&ab_channel=TraversyMedia',
        title: 'HTML & CSS'
    },
    {
        totalVid: 4,
        totalDur: 0.81,
        lang: 'English',
        img: '/academind.jpeg',
        alt: 'academind',
        date: '24 Dec 2015',
        ref: 'https://www.youtube.com/watch?v=8FxVEioS41U&list=PL55RiY5tL51oJMqB1syVpXmQySoJsduFl&ab_channel=Academind',
        title: 'Real Beginners Corner: HTML, CSS & JavaScript Basics'
    },
    {
        totalVid: 17,
        totalDur: 6.29,
        lang: 'English',
        img: '/academind.jpeg',
        alt: 'academind',
        date: '13 Nov 2017',
        ref: 'https://www.youtube.com/watch?v=OxOx3WI3Df4&list=PL55RiY5tL51rv_vo3TM3Byu71RYchX_l_&ab_channel=Academind',
        title: 'Web Development - Beginner"s Guide'
    },
    {
        totalVid: 28,
        totalDur: 12.52,
        lang: 'English',
        img: '/devTips.jpeg',
        alt: 'devTips',
        date: '29 Jun 2015',
        ref: 'https://www.youtube.com/watch?v=sJhhLvW-Xvg&list=PLqGj3iMvMa4KeBN2krBtcO3U90_7SOl-A&ab_channel=DevTips',
        title: 'Design + Code My Personal Website'
    },
    {
        totalVid: 983,
        totalDur: 115.94,
        lang: 'English',
        img: '/onlineTutorials.jpeg',
        alt: 'onlineTutorials',
        date: '29 Mar 2020',
        ref: 'https://www.youtube.com/watch?v=TawH-AqHTXc&list=PL5e68lK9hEzdYG6YQZCHtM9gon_cDNQMh&ab_channel=OnlineTutorials',
        title: 'Html CSS Tutorial For Beginners'
    },
    {
        totalVid: 20,
        totalDur: 13.42,
        lang: 'English',
        img: '/learnWebCode.jpeg',
        alt: 'learnWebCode',
        date: '11 Aug 2020',
        ref: 'https://www.youtube.com/watch?v=HqzWCNbX_wg&list=PLpcSpRrAaOargYaCNYxZCiFIp9YTqEl-l&ab_channel=LearnWebCode',
        title: "Brad's Bootcamp - Free Coding Bootcamp"
    },
    {
        totalVid: 57,
        totalDur: 18.86,
        lang: 'English',
        img: '/udemyTech.jpeg',
        alt: 'udemyTech',
        date: '6 Mar 2018',
        ref: 'https://www.youtube.com/watch?v=BU2rjqA_8Y4&list=PL6cactdCCnTLkQah9GKzsJmiLbegy4dEk&ab_channel=UdemyTech',
        title: 'Web Development Tutorials: Ultimate Udemy Playlist(2018)'
    }
]

// html Channels
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
        totalVid: 17,
        totalDur: 1.85,
        lang: 'Arabic',
        img: '/uniqueCoderz.jpg',
        alt: 'uniqueCoderz',
        date: '21 Dec 2016',
        ref: 'https://www.youtube.com/watch?v=FsgKs-_WD9k&list=PLtFbQRDJ11kEr1o13ggD6-nXaANPFMYFj',
        title: 'Learn HTML 5 Tutorial || HTML دورة كاملة لتعلم الاصدار الخامس'
    },
    {
        totalVid: 24,
        totalDur: 2.89,
        lang: 'Arabic',
        img: '/uniqueCoderz.jpg',
        alt: 'uniqueCoderz',
        date: '9 Feb 2017',
        ref: 'https://www.youtube.com/watch?v=lgDs2m1Oatc&list=PLtFbQRDJ11kHSmfYMvSprAHaPeNlpF4qK',
        title: 'Learn HTML Tutorial || HTML دورة كاملة لتعلم لغة'
    },
    {
        totalVid: 30,
        totalDur: 2.33,
        lang: 'Arabic',
        img: '/hassounaAcademy.jpeg',
        alt: 'hassounaAcademy',
        date: '29 May 2016',
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
    },
    //-----------------E---------------------
    {
        totalVid: 1,
        totalDur: 1.09,
        lang: 'English',
        img: '/programmingWithMosh.jpeg',
        alt: 'programmingWithMosh',
        date: '11 Jan 2021',
        ref: 'https://www.youtube.com/watch?v=qz0aGYrrlhU&list=PLTjRvDozrdlw5En5v2xrBr_EqieHf7hGs&index=11&ab_channel=ProgrammingwithMosh',
        title: 'HTML Tutorial for Beginners: HTML Crash Course [2021]'
    },
    {
        totalVid: 17,
        totalDur: 2.04,
        lang: 'English',
        img: '/theNetNinja.jpeg',
        alt: 'theNetNinja',
        date: '12 May 2015',
        ref: 'https://www.youtube.com/watch?v=Y1BlT4_c_SU&list=PL4cUxeGkcC9ibZ2TSBaGGNrgh4ZgYE6Cc&ab_channel=TheNetNinja',
        title: 'HTML Tutorials For Beginners'
    },
    {
        totalVid: 54,
        totalDur: 10.87,
        lang: 'English',
        img: '/codingAddict.jpeg',
        alt: 'codingAddict',
        date: '6 Mar 2017',
        ref: 'https://www.youtube.com/watch?v=CmsoTHqdTn8&list=PLnHJACx3NwAfFkpKE-VUl5zdAxqqa3O5Y&ab_channel=CodingAddict',
        title: 'HTML Tutorial for Beginners'
    },
    {
        totalVid: 4,
        totalDur: 0.37,
        lang: 'English',
        img: '/learnWebCode.jpeg',
        alt: 'learnWebCode',
        date: '10 Feb 2010',
        ref: 'https://www.youtube.com/watch?v=BBcq9abR9Es&list=PLpcSpRrAaOaqiiUGIKOec4pb4LMsBRfnl&ab_channel=LearnWebCode',
        title: 'Learn HTML'
    }
]

// css Channels
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
        totalVid: 21,
        totalDur: 4.28,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '20 Jan 2017',
        ref: 'https://www.youtube.com/watch?v=IjY-BZQHqLA&list=PLDoPjvoNmBAzVaRnCYoklHqz01jve8ZWv&index=1',
        title: 'Create Responsive Web Design Without Framework'
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
        alt: 'unique Coderz',
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
    },
    //-----------------E---------------------
    {
        totalVid: 53,
        totalDur: 5.73,
        lang: 'English',
        img: '/theNetNinja.jpeg',
        alt: 'theNetNinja',
        date: '13 May 2015',
        ref: 'https://www.youtube.com/watch?v=I9XRrlOOazo&list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT&ab_channel=TheNetNinja',
        title: 'CSS Tutorials For Beginners'
    },
    {
        totalVid: 12,
        totalDur: 1.13,
        lang: 'English',
        img: '/theNetNinja.jpeg',
        alt: 'theNetNinja',
        date: '15 Oct 2015',
        ref: 'https://www.youtube.com/watch?v=7ZXsPj43heo&list=PL4cUxeGkcC9hudKGi5o5UiWuTAGbxiLTh&ab_channel=TheNetNinja',
        title: 'CSS Positioning Tutorials'
    },
    {
        totalVid: 12,
        totalDur: 1.41,
        lang: 'English',
        img: '/theNetNinja.jpeg',
        alt: 'theNetNinja',
        date: '17 Dec 2015',
        ref: 'https://www.youtube.com/watch?v=3tLb3i7GB38&list=PL4cUxeGkcC9g9Vh9MAA-XKnfJsWZnPZFw&ab_channel=TheNetNinja',
        title: 'Responsive Web Design Tutorials'
    },
    {
        totalVid: 12,
        totalDur: 1.20,
        lang: 'English',
        img: '/theNetNinja.jpeg',
        alt: 'theNetNinja',
        date: '16 Mar 2016',
        ref: 'https://www.youtube.com/watch?v=Y8zMYaD1bz0&list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG&ab_channel=TheNetNinja',
        title: 'CSS Flexbox Tutorial'
    },
    {
        totalVid: 13,
        totalDur: 1.32,
        lang: 'English',
        img: '/theNetNinja.jpeg',
        alt: 'theNetNinja',
        date: '12 Apr 2016',
        ref: 'https://www.youtube.com/watch?v=jgw82b5Y2MU&list=PL4cUxeGkcC9iGYgmEd2dm3zAKzyCGDtM5&ab_channel=TheNetNinja',
        title: 'CSS Animation Tutorial'
    },
    {
        totalVid: 10,
        totalDur: 1.35,
        lang: 'English',
        img: '/theNetNinja.jpeg',
        alt: 'theNetNinja',
        date: '22 Sept 2017',
        ref: 'https://www.youtube.com/watch?v=x7tLPhnA06w&list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY&ab_channel=TheNetNinja',
        title: 'CSS Grid Tutorial'
    },
    {
        totalVid: 4,
        totalDur: 0.47,
        lang: 'English',
        img: '/theNetNinja.jpeg',
        alt: 'theNetNinja',
        date: '20 Jan 2018',
        ref: 'https://www.youtube.com/watch?v=8Yum7EQgadM&list=PL4cUxeGkcC9ii5PB2UMyYH7QFZWfGnVgZ&ab_channel=TheNetNinja',
        title: 'CSS Variables Tutorial'
    },
    {
        totalVid: 8,
        totalDur: 3.66,
        lang: 'English',
        img: '/devTips.jpeg',
        alt: 'devTips',
        date: '4 Jul 2016',
        ref: 'https://www.youtube.com/watch?v=8kK-cA99SA0&list=PLqGj3iMvMa4LvJ8VctoXnPI0dtE40wfid&ab_channel=DevTips',
        title: 'CSS Animations Series'
    },
    {
        totalVid: 5,
        totalDur: 1.75,
        lang: 'English',
        img: '/academind.jpeg',
        alt: 'academind',
        date: '4 Dec 2017',
        ref: 'https://www.youtube.com/watch?v=wmAP2xvNs08&list=PL55RiY5tL51q6KKXoA0_CIskaTSJEM1fN&ab_channel=Academind',
        title: 'Understanding CSS'
    },
    {
        totalVid: 6,
        totalDur: 1.34,
        lang: 'English',
        img: '/academind.jpeg',
        alt: 'academind',
        date: '9 Dec 2015',
        ref: 'https://www.youtube.com/watch?v=azlhEegg5LA&list=PL55RiY5tL51q5zdtvyZJd2-ipHaeERn7O&ab_channel=Academind',
        title: "Stylin' Around"
    },
    {
        totalVid: 32,
        totalDur: 3.39,
        lang: 'English',
        img: '/codingAddict.jpeg',
        alt: 'codingAddict',
        date: '28 Dec 2017',
        ref: 'https://www.youtube.com/watch?v=VyjbVXy4m60&list=PLnHJACx3NwAcLB8iaBVtP2reKY5IO3d0S&ab_channel=CodingAddict',
        title: 'CSS'
    },
    {
        totalVid: 24,
        totalDur: 4.28,
        lang: 'English',
        img: '/learnWebCode.jpeg',
        alt: 'learnWebCode',
        date: '12 Feb 2010',
        ref: 'https://www.youtube.com/watch?v=Awmx8XlgcaE&list=PLpcSpRrAaOaqfJ5uIRikm04Gd5X5aiqSB&ab_channel=LearnWebCode',
        title: 'Learn CSS'
    },
    {
        totalVid: 4,
        totalDur: 1.20,
        lang: 'English',
        img: '/learnWebCode.jpeg',
        alt: 'learnWebCode',
        date: '14 Oct 2013',
        ref: 'https://www.youtube.com/watch?v=BIz02qY5BRA&list=PLpcSpRrAaOaqsnCdAcHPC5Dob5cjC3-Dh&ab_channel=LearnWebCode',
        title: 'Responsive Web Design'
    },
    {
        totalVid: 3,
        totalDur: 1.25,
        lang: 'English',
        img: '/learnWebCode.jpeg',
        alt: 'learnWebCode',
        date: '7 Oct 2014',
        ref: 'https://www.youtube.com/watch?v=mA_htWfLLQs&list=PLpcSpRrAaOapjtXjnMmMh3fxmQTRGulmy&ab_channel=LearnWebCode',
        title: 'Free Clips from "Real World Coding in HTML & CSS"'
    },
    {
        totalVid: 10,
        totalDur: 3.33,
        lang: 'English',
        img: '/devEd.jpeg',
        alt: 'devEd',
        date: '10 Dec 2018',
        ref: 'https://www.youtube.com/watch?v=IxRJ8vplzAo&list=PLDyQo7g0_nsUjf046cCHKJ16U1SoXrElZ&ab_channel=DevEd',
        title: 'CSS Tutorials'
    },
    {
        totalVid: 825,
        totalDur: 71.77,
        lang: 'English',
        img: '/onlineTutorials.jpeg',
        alt: 'onlineTutorials',
        date: '26 Aug 2019',
        ref: 'https://www.youtube.com/watch?v=OqcgQnn3dBk&list=PL5e68lK9hEzcSUe73TgkQYGmYz0Fh9ptT&ab_channel=OnlineTutorials',
        title: 'Css Quick Tutorial / Tips'
    },
    {
        totalVid: 1621,
        totalDur: 194.98,
        lang: 'English',
        img: '/onlineTutorials.jpeg',
        alt: 'onlineTutorials',
        date: '19 Jan 2017',
        ref: 'https://www.youtube.com/watch?v=tla17buc3tw&list=PL5e68lK9hEzeEe1bOwe7W7gBgP-cFiD45&ab_channel=OnlineTutorials',
        title: 'Css Tutorials'
    },
    {
        totalVid: 98,
        totalDur: 12.35,
        lang: 'English',
        img: '/onlineTutorials.jpeg',
        alt: 'onlineTutorials',
        date: '18 Apr 2017',
        ref: 'https://www.youtube.com/watch?v=vMt1u4HG7jA&list=PL5e68lK9hEzd3SRm5QW80K1ZMQ28MG6s7&ab_channel=OnlineTutorials',
        title: 'Pure HTML CSS Shape'
    },
    {
        totalVid: 157,
        totalDur: 13.64,
        lang: 'English',
        img: '/onlineTutorials.jpeg',
        alt: 'onlineTutorials',
        date: '26 Aug 2020',
        ref: 'https://www.youtube.com/watch?v=ttWXapXj4cg&list=PL5e68lK9hEzeeXtsQCQYd9SAzj6u6wZpi&ab_channel=OnlineTutorials',
        title: 'CSS Loading Animation'
    },
    {
        totalVid: 130,
        totalDur: 13.11,
        lang: 'English',
        img: '/onlineTutorials.jpeg',
        alt: 'onlineTutorials',
        date: '24 Feb 2019',
        ref: 'https://www.youtube.com/watch?v=w0V4HAYYCbU&list=PL5e68lK9hEzd81JLjU2ey6WqODkKB2xFF&ab_channel=OnlineTutorials',
        title: 'Css Button Hover Effect'
    },
    {
        totalVid: 57,
        totalDur: 4.81,
        lang: 'English',
        img: '/onlineTutorials.jpeg',
        alt: 'onlineTutorials',
        date: '24 Feb 2017',
        ref: 'https://www.youtube.com/watch?v=WdwLHHk56q0&list=PL5e68lK9hEzd06VdDlXIsOxpePuN_LPK4&ab_channel=OnlineTutorials',
        title: 'Css Text Background Effect'
    },
    {
        totalVid: 123,
        totalDur: 15.78,
        lang: 'English',
        img: '/onlineTutorials.jpeg',
        alt: 'onlineTutorials',
        date: '16 Feb 2017',
        ref: 'https://www.youtube.com/watch?v=l0qf1SmyyBo&list=PL5e68lK9hEzc_7RNnkAO19nQi_Gip2s92&ab_channel=OnlineTutorials',
        title: 'Css Image Hover Effect'
    },
    {
        totalVid: 81,
        totalDur: 9.89,
        lang: 'English',
        img: '/onlineTutorials.jpeg',
        alt: 'onlineTutorials',
        date: '7 Mar 2017',
        ref: 'https://www.youtube.com/watch?v=Cx5TSXXaR9A&list=PL5e68lK9hEzfe1nPJ2aB5A7jmwgRuTZOm&ab_channel=OnlineTutorials',
        title: 'Css Menu Hover Effect'
    },
    {
        totalVid: 1473,
        totalDur: 174.58,
        lang: 'English',
        img: '/onlineTutorials.jpeg',
        alt: 'onlineTutorials',
        date: '22 Feb 2017',
        ref: 'https://www.youtube.com/watch?v=Ifzyhj9nHKQ&list=PL5e68lK9hEzfwcPS1vTBsfKEtkK5KMts1&ab_channel=OnlineTutorials',
        title: 'Css Awesome Effect'
    },
    {
        totalVid: 27,
        totalDur: 2.30,
        lang: 'English',
        img: '/onlineTutorials.jpeg',
        alt: 'onlineTutorials',
        date: '10 Mar 2017',
        ref: 'https://www.youtube.com/watch?v=ikMCJhJ74Cg&list=PL5e68lK9hEzcAwLq-LTkncRFAhOALZII8&ab_channel=OnlineTutorials',
        title: 'Css Text Reveal Effect'
    },
    {
        totalVid: 81,
        totalDur: 9.89,
        lang: 'English',
        img: '/onlineTutorials.jpeg',
        alt: 'onlineTutorials',
        date: '7 Mar 2017',
        ref: 'https://www.youtube.com/watch?v=Cx5TSXXaR9A&list=PL5e68lK9hEzfe1nPJ2aB5A7jmwgRuTZOm&index=1&ab_channel=OnlineTutorials',
        title: 'Css Menu Hover Effect'
    }
]

// javaScript Channels
const js = [
    {
        totalVid: 65,
        totalDur: 14.06,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '21 Jan 2015',
        ref: 'https://www.youtube.com/watch?v=eKuNnpWhm7c&list=PLDoPjvoNmBAw6p0z0Ek0OjPzeXoqlFlCh',
        title: 'Learn JavaScript In Arabic' 
    },
    {
        totalVid: 50,
        totalDur: 7.76,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '26 Apr 2019',
        ref: 'https://www.youtube.com/watch?v=AeXkyj4mXms&list=PLDoPjvoNmBAz7_BgzvNcOaE-m_SnE4jiT',
        title: 'JavaScript Big Tutorials' 
    },
    {
        totalVid: 52,
        totalDur: 6.75,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '2 Aug 2019',
        ref: 'https://www.youtube.com/watch?v=DcyOVddJ62E&list=PLDoPjvoNmBAy3siU1b04xY24ZlstofO9M',
        title: 'Learn ECMAScript 6' 
    },
    {
        totalVid: 3,
        totalDur: 0.49,
        lang: 'Arabic',
        img: '/uniqueCoderz.jpg',
        alt: 'unique Coderz',
        date: '1 Jul 2019',
        ref: 'https://www.youtube.com/watch?v=3nswTRsN5XA&list=PLtFbQRDJ11kEhLLbY0DWYmQvNsPilosdM',
        title: 'JavaScript Wonders'
    },
    {
        totalVid: 12,
        totalDur: 2.56,
        lang: 'Arabic',
        img: '/uniqueCoderz.jpg',
        alt: 'uniqueCoderz',
        date: '30 Mar 2018',
        ref: 'https://www.youtube.com/watch?v=KZFSZjLnr_o&list=PLtFbQRDJ11kH1QG_cGo4Z9-V66BBuAH9Q',
        title: 'Practice On JavaScript || تطبيقات وامثلة على الجافاسكربت'
    },
    {
        totalVid: 8,
        totalDur: 3.12,
        lang: 'Arabic',
        img: '/nourHomsi.jpg',
        alt: 'nourHomsi',
        date: '27 Dec 2016',
        ref: 'https://www.youtube.com/watch?v=1l_8nECYRvQ&list=PLPTNqXpQ2tbg3LD_mAlVFwYSGXLaypyx-',
        title: 'دورة أساسيات جافا سكريبت'
    },
    {
        totalVid: 15,
        totalDur: 5.06,
        lang: 'Arabic',
        img: '/semicolon.jpg',
        alt: 'semicolon',
        date: '1 Dec 2020',
        ref: 'https://www.youtube.com/watch?v=OOgpNtFHG9E&list=PLtxOBbrOOPH662qi7iHkyH4_TY3wMslp2',
        title: 'جافاسكريبت ES6 | FastCode'
    },
    {
        totalVid: 2,
        totalDur: 0.53,
        lang: 'Arabic',
        img: '/codehood.jpg',
        alt: 'codehood',
        date: '4 Apr 2020',
        ref: 'https://www.youtube.com/watch?v=ZJeVkLqMMrg&list=PL_3a5GrRZB8_dZbjt-g4FjmGfe4sr2zVO&ab_channel=Codehood',
        title: 'Javascript'
    },
    {
        totalVid: 4,
        totalDur: 0.56,
        lang: 'Arabic',
        img: '/codehood.jpg',
        alt: 'codehood',
        date: '27 Apr 2020',
        ref: 'https://www.youtube.com/watch?v=9cGW2OVcl8E&list=PL_3a5GrRZB88BoMqcgXh_1izFFnKW4l41&ab_channel=Codehood',
        title: 'Array Methods'
    },
    //-----------------E---------------------
    {
        totalVid: 47,
        totalDur: 4.89,
        lang: 'English',
        img: '/theNetNinja.jpeg',
        alt: 'theNetNinja',
        date: '22 Jul 2015',
        ref: 'https://www.youtube.com/watch?v=qoSksQ4s_hg&list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET&ab_channel=TheNetNinja',
        title: 'JavaScript Tutorials for Beginners'
    },
    {
        totalVid: 2,
        totalDur: 0.67,
        lang: 'English',
        img: '/theNetNinja.jpeg',
        alt: 'theNetNinja',
        date: '15 Dec 2015',
        ref: 'https://www.youtube.com/watch?v=ANDyf6VEYHE&list=PL4cUxeGkcC9gdqHxcUgGhl_cV6xET1_0N&ab_channel=TheNetNinja',
        title: 'JavaScript Tips & Tricks'
    },
    {
        totalVid: 11,
        totalDur: 1.24,
        lang: 'English',
        img: '/theNetNinja.jpeg',
        alt: 'theNetNinja',
        date: '31 Mar 2016',
        ref: 'https://www.youtube.com/watch?v=0Mp2kwE8xY0&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&ab_channel=TheNetNinja',
        title: 'JavaScript ES6 Tutorials'
    },
    {
        totalVid: 5,
        totalDur: 0.91,
        lang: 'English',
        img: '/theNetNinja.jpeg',
        alt: 'theNetNinja',
        date: '30 Apr 2016',
        ref: 'https://www.youtube.com/watch?v=YxWMxJONp7E&list=PL4cUxeGkcC9jAhrjtZ9U93UMIhnCc44MH&ab_channel=TheNetNinja',
        title: 'Asynchronous JavaScript Tutorial'
    },
    {
        totalVid: 18,
        totalDur: 1.99,
        lang: 'English',
        img: '/theNetNinja.jpeg',
        alt: 'theNetNinja',
        date: '15 Aug 2017',
        ref: 'https://www.youtube.com/watch?v=FIORjGvT0kk&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&ab_channel=TheNetNinja',
        title: 'JavaScript DOM Tutorial'
    },
    {
        totalVid: 11,
        totalDur: 1.34,
        lang: 'English',
        img: '/theNetNinja.jpeg',
        alt: 'theNetNinja',
        date: '11 May 2018',
        ref: 'https://www.youtube.com/watch?v=4l3bTDlT6ZI&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7&ab_channel=TheNetNinja',
        title: 'Object Oriented JavaScript'
    },
    {
        totalVid: 6,
        totalDur: 4.74,
        lang: 'English',
        img: '/theNetNinja.jpeg',
        alt: 'theNetNinja',
        date: '11 Apr 2019',
        ref: 'https://www.youtube.com/watch?v=iWOYAxlnaww&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&ab_channel=TheNetNinja',
        title: 'Modern JavaScript Tutorial'
    },
    {
        totalVid: 21,
        totalDur: 4.62,
        lang: 'English',
        img: '/programmingWithMosh.jpeg',
        alt: 'programmingWithMosh',
        date: '24 Apr 2018',
        ref: 'https://www.youtube.com/watch?v=upDLs1sn7g4&list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax&ab_channel=ProgrammingwithMosh',
        title: 'JavaScript Tutorial'
    },
    {
        totalVid: 1,
        totalDur: 0.50,
        lang: 'English',
        img: '/programmingWithMosh.jpeg',
        alt: 'programmingWithMosh',
        date: '29 Jun 2018',
        ref: 'https://www.youtube.com/watch?v=NCwa_xi0Uuc&list=PLTjRvDozrdlw5En5v2xrBr_EqieHf7hGs&index=6&ab_channel=ProgrammingwithMosh',
        title: 'ES6 Tutorial: Learn Modern JavaScript in 1 Hour'
    },
    {
        totalVid: 11,
        totalDur: 1.38,
        lang: 'English',
        img: '/traversyMedia.jpeg',
        alt: 'traversyMedia',
        date: '6 May 2016',
        ref: 'https://www.youtube.com/watch?v=2LeqilIw-28&list=PLillGF-RfqbZ7s3t6ZInY3NjEOOX7hsBv&ab_channel=TraversyMedia',
        title: 'JavaScript ES6 / ES2015 Tutorials'
    },
    {
        totalVid: 51,
        totalDur: 34.15,
        lang: 'English',
        img: '/traversyMedia.jpeg',
        alt: 'traversyMedia',
        date: '13 Mar 2019',
        ref: 'https://www.youtube.com/watch?v=hdI2bqOjy3c&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&ab_channel=TraversyMedia',
        title: 'Vanilla JavaScript'
    },
    {
        totalVid: 4,
        totalDur: 1.94,
        lang: 'English',
        img: '/traversyMedia.jpeg',
        alt: 'traversyMedia',
        date: '12 Sept 2017',
        ref: 'https://www.youtube.com/watch?v=0ik6X4DJKCc&list=PLillGF-RfqbYE6Ik_EuXA2iZFcE082B3s&ab_channel=TraversyMedia',
        title: 'JavaScript DOM Crash Course'
    },
    {
        totalVid: 263,
        totalDur: 34.37,
        lang: 'English',
        img: '/onlineTutorials.jpeg',
        alt: 'onlineTutorials',
        date: '22 Feb 2020',
        ref: 'https://www.youtube.com/watch?v=HzJngc-Se9Q&list=PL5e68lK9hEzd6RUzREoABqimRI4SY63ND&ab_channel=OnlineTutorials',
        title: 'Vanilla Javascript'
    },
    {
        totalVid: 14,
        totalDur: 1.91,
        lang: 'English',
        img: '/codingAddict.jpeg',
        alt: 'codingAddict',
        date: '25 Mar 2019',
        ref: 'https://www.youtube.com/watch?v=yG03EvfHSIU&list=PLnHJACx3NwAdQElswAscNtHAZLAQYgpDA&ab_channel=CodingAddict',
        title: 'Javascript Challenges'
    },
    {
        totalVid: 14,
        totalDur: 7.86,
        lang: 'English',
        img: '/learnWebCode.jpeg',
        alt: 'learnWebCode',
        date: '29 Oct 2018',
        ref: 'https://www.youtube.com/watch?v=dc-2t26Vuhs&list=PLpcSpRrAaOaoIqHQddZOdbRrzr5dJtgSs&ab_channel=LearnWebCode',
        title: 'The 10 Days of JavaScript'
    },
    {
        totalVid: 12,
        totalDur: 3.69,
        lang: 'English',
        img: '/devEd.jpeg',
        alt: 'devEd',
        date: '23 Jan 2019',
        ref: 'https://www.youtube.com/watch?v=2nZiB1JItbY&list=PLDyQo7g0_nsX8_gZAB8KD1lL4j4halQBJ&ab_channel=DevEd',
        title: 'Javascript For Beginners'
    },
    {
        totalVid: 13,
        totalDur: 6.91,
        lang: 'English',
        img: '/devEd.jpeg',
        alt: 'devEd',
        date: '27 May 2018',
        ref: 'https://www.youtube.com/watch?v=oUSvlrDTLi4&list=PLDyQo7g0_nsXlSfuoBpG5Fgz0Qe3IvWnA&ab_channel=DevEd',
        title: 'Vanilla Javascript Tutorials'
    },
    {
        totalVid: 8,
        totalDur: 3.68,
        lang: 'English',
        img: '/devEd.jpeg',
        alt: 'devEd',
        date: '28 Feb 2019',
        ref: 'https://www.youtube.com/watch?v=bfaPnlYE8Jo&list=PLDyQo7g0_nsXEOxGlAgccV8fu-cHZnI5B&ab_channel=DevEd',
        title: 'Javascript Animation Tutorials'
    },
    {
        totalVid: 20,
        totalDur: 4.60,
        lang: 'English',
        img: '/theCodingTrain.jpeg',
        alt: 'theCodingTrain',
        date: '8 Jul 2019',
        ref: 'https://www.youtube.com/watch?v=DbcLg8nRWEg&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&ab_channel=TheCodingTrain',
        title: 'Working with Data and APIs in JavaScript'
    },
    {
        totalVid: 6,
        totalDur: 1.21,
        lang: 'English',
        img: '/theCodingTrain.jpeg',
        alt: 'theCodingTrain',
        date: '28 May 2018',
        ref: 'https://www.youtube.com/watch?v=QO4NXhWo_NM&list=PLRqwX-V7Uu6bKLPQvPRNNE65kBL62mVfx&ab_channel=TheCodingTrain',
        title: 'JavaScript Promises'
    },
    {
        totalVid: 6,
        totalDur: 1.44,
        lang: 'English',
        img: '/theCodingTrain.jpeg',
        alt: 'theCodingTrain',
        date: '19 Feb 2018',
        ref: 'https://www.youtube.com/watch?v=H4awPsyugS0&list=PLRqwX-V7Uu6aAEUqu96Newc-7qpuh-cxc&ab_channel=TheCodingTrain',
        title: 'Array Functions in JavaScript'
    },
    {
        totalVid: 20,
        totalDur: 4.35,
        lang: 'English',
        img: '/theCodingTrain.jpeg',
        alt: 'theCodingTrain',
        date: '28 Sept 2017',
        ref: 'https://www.youtube.com/watch?v=q8SHaDQdul0&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&ab_channel=TheCodingTrain',
        title: 'Topics of JavaScript/ES6-ES8 - p5.js Tutorial'
    }
]

// git Channels
const git = [
    {
        totalVid: 7,
        totalDur: 1.41,
        lang: 'Arabic',
        img: '/semicolon.jpg',
        alt: 'semicolon',
        date: '12 Mar 2021',
        ref: 'https://www.youtube.com/watch?v=TUXmJXw1OJg&list=PLtxOBbrOOPH4zeJLOdRNrP4pGft2IfMgo',
        title: 'Mastering Git'
    },
    //-----------------E---------------------
    {
        totalVid: 1,
        totalDur: 1.09,
        lang: 'English',
        img: '/programmingWithMosh.jpeg',
        alt: 'programmingWithMosh',
        date: '15 Sept 2020',
        ref: 'https://www.youtube.com/watch?v=8JJ101D3knE&list=PLTjRvDozrdlw5En5v2xrBr_EqieHf7hGs&index=10&ab_channel=ProgrammingwithMosh',
        title: 'Git Tutorial for Beginners: Learn Git in 1 Hour'
    },
    {
        totalVid: 4,
        totalDur: 1.24,
        lang: 'English',
        img: '/academind.jpeg',
        alt: 'academind',
        date: '31 May 2018',
        ref: 'https://www.youtube.com/watch?v=_OZVJpLHUaI&list=PL55RiY5tL51poFMpbva1IqfO-pylwSNsN&ab_channel=Academind',
        title: 'Git & GitHub - Managing Your Code'
    },
    {
        totalVid: 4,
        totalDur: 0.90,
        lang: 'English',
        img: '/learnWebCode.jpeg',
        alt: 'learnWebCode',
        date: '18 Oct 2016',
        ref: 'https://www.youtube.com/watch?v=9GKpbI1siow&list=PLpcSpRrAaOarEpNz71TSfNVd0eQmsZSgN&ab_channel=LearnWebCode',
        title: 'Git Tutorial - Learn Command-line Git & GitHub'
    }
]

// github Channels
const github = [
    {
        totalVid: 20,
        totalDur: 2.51,
        lang: 'Arabic',
        img: '/elzero.jpg',
        alt: 'elzero',
        date: '11 Jun 2019',
        ref: 'https://www.youtube.com/watch?v=ACOiGZoqC8w&list=PLDoPjvoNmBAw4eOj58MZPakHjaO3frVMF',
        title: 'Learn Git and Github'
    },
    //-----------------E---------------------
    {
        totalVid: 12,
        totalDur: 1.66,
        lang: 'English',
        img: '/theNetNinja.jpeg',
        alt: 'theNetNinja',
        date: '7 Jun 2017',
        ref: 'https://www.youtube.com/watch?v=3RjQznt-8kE&list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR&ab_channel=TheNetNinja',
        title: 'Git & GitHub Tutorial for Beginners'
    },
    {
        totalVid: 1,
        totalDur: 0.12,
        lang: 'English',
        img: '/theNetNinja.jpeg',
        alt: 'theNetNinja',
        date: '19 Feb 2021',
        ref: 'https://www.youtube.com/watch?v=QyFcl_Fba-k&list=PL4cUxeGkcC9jjuXmnTyPSMo5NZ8dANHSW&ab_channel=TheNetNinja',
        title: 'Getting Started with GitHub Pages'
    },
    {
        totalVid: 4,
        totalDur: 0.98,
        lang: 'English',
        img: '/devTips.jpeg',
        alt: 'devTips',
        date: '1 Feb 2016',
        ref: 'https://www.youtube.com/watch?v=1h9_cB9mPT8&list=PLqGj3iMvMa4LFz8DZ0t-89twnelpT4Ilw&ab_channel=DevTips',
        title: 'GitHub for Noobs'
    }
]

// Arabic Projects Channels
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
        title: 'Design Template Using ( HTML5 - CSS3 )'
    },
    {
        totalVid: 13,
        totalDur: 1.89,
        lang: 'Arabic',
        img: '/uniqueCoderz.jpg',
        alt: 'uniqueCoderz',
        date: '21 Jan 2017',
        ref: 'https://www.youtube.com/watch?v=FV1JUHo3mA0&list=PLtFbQRDJ11kHL5MyN6kLTr1n4InvKdeis',
        title: 'Design Template Using ( HTML5 , CSS3 , Bootstrap)'
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
        title: 'Design Template Using ( HTML5 - CSS3 - jQuery )'
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
    },
    {
        totalVid: 16,
        totalDur: 10.33,
        lang: 'Arabic',
        img: '/semicolon.jpg',
        alt: 'semicolon',
        date: '24 Apr 2020',
        ref: 'https://www.youtube.com/watch?v=ET5xqznLP7E&list=PLtxOBbrOOPH6Os1EJifSE59Bd5WbL15pn',
        title: '[Project] SPA with JavaScript'
    },

]

// English Projects Channels
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
        totalVid: 6,
        totalDur: 7.86,
        lang: 'English',
        img: '/codingAddict.jpeg',
        alt: 'codingAddict',
        date: '26 Feb 2017',
        ref: 'https://www.youtube.com/watch?v=n_anTrNkRCQ&list=PLnHJACx3NwAd9rkfjamhmUs8iO38CgYXR&ab_channel=CodingAddict',
        title: 'Projects'
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
    },
    {
        totalVid: 1,
        totalDur: 0.40,
        lang: 'English',
        img: '/codingAddict.jpeg',
        alt: 'codingAddict',
        date: '3 Aug 2020',
        ref: 'https://www.youtube.com/watch?v=1I19G1jSkvw&list=PLnHJACx3NwAePj6M2FCEn7m1vaO84imNA&ab_channel=CodingAddict',
        title: 'HTML AND CSS Project - Slider'
    },
    {
        totalVid: 7,
        totalDur: 4.59,
        lang: 'English',
        img: '/codingAddict.jpeg',
        alt: 'codingAddict',
        date: '22 Dec 2017',
        ref: 'https://www.youtube.com/watch?v=aVLl1Lhvxo0&list=PLnHJACx3NwAf5ZJMIa-fNLKHS7MXtbJ1K&ab_channel=CodingAddict',
        title: 'Javascript and Jquery Projects'
    },
    {
        totalVid: 5,
        totalDur: 17.75,
        lang: 'English',
        img: '/codingAddict.jpeg',
        alt: 'codingAddict',
        date: '16 Dec 2017',
        ref: 'https://www.youtube.com/watch?v=cUzHoVsNWgU&list=PLnHJACx3NwAc1EOWalM2fyUQgdqlO9s3T&ab_channel=CodingAddict',
        title: 'Responsive Websites'
    },
]


//######################################################
// Function to add videos to the DOM
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
        <div class="subject-page-card-content"> 
            <a href="${i.ref}" target="_blank">${i.title}</a>
            <div>&nbsp</div>
        </div>      
    </li>
  `)
})
}

addvideos(frontPage, frontEnd);
addvideos(htmlPage, html);
addvideos(aProjectPage, aProject);
addvideos(eProjectPage, eProject);
addvideos(cssPage, css);
addvideos(jsPage, js);
addvideos(gitPage, git);
addvideos(githubPage, github);
