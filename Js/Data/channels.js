/*
*** To contribute in arabic or english channels ***

1- Choose the array you want to add on.
2- After last item add [ , ] to separate it.
3- Start to add new item 
    {
        title: 'add the channel name here',
        ref: 'add the channle URL here',
        alt: 'add the channle name here',
        img: '/play.png'
    }
4- Keep '/play.png' as a dummy image.
*/

let aChannels = document.getElementById('aChannels'),
    eChannels = document.getElementById('eChannels');

const ara = [
    {
        title: 'Elzero Web School',
        ref: 'https://www.youtube.com/c/ElzeroInfo/playlists',
        alt: 'elzero',
        img: '/elzero.jpg'
    },
    {
        title: 'Unique Coderz Academy',
        ref: 'https://www.youtube.com/c/UniqueCoderzAcademy/playlists',
        alt: 'Unique Coderz Academy',
        img: '/uniqueCoderz.jpg'
    },
    {
        title: 'SemiColon Academy',
        ref: 'https://www.youtube.com/c/SemiColonAcademy/playlists',
        alt: 'semicolon',
        img: '/semicolon.jpg'
    },
    {
        title: 'Mohamed Abusrea',
        ref: 'https://www.youtube.com/c/MohamedAbusrea/playlists',
        alt: 'Mohamed Abusrea',
        img: '/mohamedAbusrea.jpg'
    },
    {
        title: 'Nour Homsi',
        ref: 'https://www.youtube.com/c/NourHomsi/playlists',
        alt: 'Nour Homsi',
        img: '/nourHomsi.jpg'
    },
    {
        title: 'Free4arab',
        ref: 'https://www.youtube.com/user/Nourelhoda2011/playlists',
        alt: 'Free4arab',
        img: '/free4arab.jpg'
    },
    {
        title: 'Codezilla',
        ref: 'https://www.youtube.com/c/Codezilla/playlists',
        alt: 'Codezilla',
        img: '/codezilla.jpg'
    },
    {
        title: 'Codehood',
        ref: 'https://www.youtube.com/c/Codehood/playlists',
        alt: 'Codehood',
        img: '/codehood.jpg'
    },
    {
        title: 'CodeZone',
        ref: 'https://www.youtube.com/c/codeZone/playlists',
        alt: 'CodeZone',
        img: '/codeZone.jpeg'
    },
    {
        title: 'Arabic HTML',
        ref: 'https://www.youtube.com/c/Arabic-html/playlists',
        alt: 'arabicHTML',
        img: '/arabicHtml.jpeg'
    },
    {
        title: 'Angular Army',
        ref: 'https://www.youtube.com/c/AngularArmy/playlists',
        alt: 'angularArmy',
        img: '/angularArmy.jpeg'
    },
    {
        title: 'Freelance Monsters',
        ref: 'https://www.youtube.com/channel/UCirZap8QRlZIZ6LdHQoLaxg/videos',
        alt: 'freelanceMonsters',
        img: '/freelanceMonsters.jpg'
    },
    {
        title: 'Abdelrahman Haridy',
        ref: 'https://www.youtube.com/channel/UCB9oU-M1rmHH6YQ-38CkzOw/playlists',
        alt: 'abdelrahmanHaridy',
        img: '/abdelrahmanH.jpeg'
    }
]

const eng = [
    {
        title: 'The Net Ninja',
        ref: 'https://www.youtube.com/c/TheNetNinja/playlists',
        alt: 'The Net Ninja',
        img: '/theNetNinja.jpeg'
    },
    {
        title: 'Traversy Media',
        ref: 'https://www.youtube.com/c/TraversyMedia/playlists',
        alt: 'TraversyMedia',
        img: '/traversyMedia.jpeg'
    },
    {
        title: 'Academind',
        ref: 'https://www.youtube.com/c/Academind/playlists',
        alt: 'Academind',
        img: '/academind.jpeg'
    },
    {
        title: 'Google Chrome Developers',
        ref: 'https://www.youtube.com/c/GoogleChromeDevelopers/playlists',
        alt: 'Google Chrome Developers',
        img: '/GoogleChrome.jpeg'
    },
    {
        title: 'Online Tutorials',
        ref: 'https://www.youtube.com/c/OnlineTutorials4Designers/playlists',
        alt: 'Online Tutorials',
        img: '/onlineTutorials.jpeg'
    },
    {
        title: 'Coding Addict',
        ref: 'https://www.youtube.com/c/CodingAddict/playlists',
        alt: 'Coding Addict',
        img: '/codingAddict.jpeg'
    },
    {
        title: 'Dev Ed',
        ref: 'https://www.youtube.com/c/DevEd/playlists',
        alt: 'Dev Ed',
        img: '/devEd.jpeg'
    },
    {
        title: 'Going-To Internet',
        ref: 'https://www.youtube.com/c/GoingToInternet/playlists',
        alt: 'Going-To Internet',
        img: '/goingToInternet.jpeg'
    },
    {
        title: 'The Coding Train',
        ref: 'https://www.youtube.com/c/TheCodingTrain/playlists',
        alt: 'The Coding Train',
        img: '/theCodingTrain.jpeg'
    },
    {
        title: 'The WebShala',
        ref: 'https://www.youtube.com/channel/UC94lpQZvaokkIqU-TvtsGXQ/playlists',
        alt: 'The WebShala',
        img: '/theWebShala.jpeg'
    },
    {
        title: 'LearnWebCode',
        ref: 'https://www.youtube.com/user/LearnWebCode/playlists',
        alt: 'LearnWebCode',
        img: '/learnWebCode.jpeg'
    },
    {
        title: 'Programming with Mosh',
        ref: 'https://www.youtube.com/c/programmingwithmosh/playlists',
        alt: 'Programming with Mosh',
        img: '/programmingWithMosh.jpeg'
    },
    {
        title: 'Udemy Tech',
        ref: 'https://www.youtube.com/c/UdemyTech/playlists',
        alt: 'Udemy Tech',
        img: '/udemyTech.jpeg'
    },
    {
        title: 'DevTips',
        ref: 'https://www.youtube.com/c/DevTipsForDesigners/playlists',
        alt: 'DevTips',
        img: '/devTips.jpeg'
    },
    {
        title: 'Mr.Web Design',
        ref: 'https://www.youtube.com/channel/UCKwgH3vASrD2brd1l2m6NHw/playlists',
        alt: 'Mr.WebDesign',
        img: '/mrWebDesigner.jpeg'
    }
]

const addChannels = (id, arr)=> {
    arr.map(i => {
        id.insertAdjacentHTML("beforeend", 
        `
        <li class="channel-card">
            <img src="./channelsLogo${i.img}" alt=${i.alt}>
            <a href=${i.ref} target="_blank">${i.title}</a>
        </li>`);
    });
}

addChannels(aChannels, ara);
addChannels(eChannels, eng);