import iblogpic from './images/iblognews-min.png'
import shorturl from "./images/url-shortening.png";
import randomusers from "./images/random-users.png";
import Calculator from './images/ernest-calc.png';
import Ernestshop from './images/ernestshop.png';
import Bookstore from './images/bookstore.png';
import Githubusers from './images/searchgit.png';

export const portfolioData = [
    {
        id: 1,
        projectImage: iblogpic,
        imgAlt: 'iblognews.netlify.app - news app by ernstizic',
        title: 'News App',
        description: 'iBlog is a news app for getting latest trends from Sport, Tech, Entertainment...',
        url: 'https://iblognews.netlify.app',
        githubUrl: '',
        techStack: 'HTML, CSS, Js, React',
    },
    {
        id: 2,
        projectImage: shorturl,
        imgAlt: 'url-cropper.netlify.app - shorten url by ernestizic',
        title: 'Shortly',
        description: 'Challenge by Frontendmentor to integrate with the shrtcode API to create shortened URLs and display them like in the given designs.',
        url: 'https://url-cropper.netlify.app',
        githubUrl: 'https://github.com/ernestizic/url-shortner',
        techStack: 'HTML, CSS, Js, React',
    },
    {
        id: 3,
        projectImage: randomusers,
        imgAlt: 'random-users-g.netlify.app - random user generator by ernestizic',
        title: 'Random User Generator',
        description: 'Random User Generator generates and searches for random users using the randomuser.me api',
        url: 'https://random-users-g.netlify.app',
        githubUrl: 'https://github.com/ernestizic/random-users',
        techStack: 'HTML, CSS, JS, Sass, React',
    },
    {
        id: 4,
        projectImage: Calculator,
        imgAlt: 'Picture of Calculator App',
        title: 'Calculator App',
        description: 'Calculator app by frontendmentor.io to perform mathematical operations like addition, subtraction, multiplication, and division. Users would also be able to adjust the color theme based on their preference',
        url: 'https://ernest-calc.netlify.app/',
        githubUrl: 'https://github.com/ernestizic/calculator-app',
        techStack: 'HTML, CSS, Js, React',
    },
    {
        id: 5,
        projectImage: Ernestshop,
        imgAlt: 'Picture of Ernestshop App',
        title: 'E-commerce App',
        description: 'A frontend e-commerce application. It was built using HTML5, CSS3, React JS, Bootstrap and jQuery.',
        url: 'https://ernestshop.netlify.app',
        githubUrl: 'https://github.com/ernestizic/e-shop',
        techStack: 'HTML, CSS, jQuery, React',
    },
    {
        id: 6,
        projectImage: Bookstore,
        imgAlt: 'Picture of Bookstore App',
        title: 'itbook.store',
        description: 'A react application that is built using itbook.store api (api.itbook.store). This frontend application uses Context API to manage state.',
        url: 'https://ernestit-bookstore.netlify.app/',
        githubUrl: 'https://github.com/ernestizic/book-store',
        techStack: 'HTML, CSS, Js, React',
    },
    {
        id: 7,
        projectImage: Githubusers,
        imgAlt: 'Picture of Github users App',
        title: 'Github Users Search App',
        description: 'This is a small application that enables users to search for GitHub users with their usernames. This was implemented using React.',
        url: 'https://searchgit-profile.netlify.app/',
        githubUrl: 'https://github.com/ernestizic/github-users',
        techStack: 'HTML, CSS, Js, React',
    },

]