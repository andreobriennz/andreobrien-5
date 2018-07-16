const allProjects = [
    {
        title: 'Andre OBrien - Portfolio',
        id: 'portfolio',
        description: `
            I recently redesigned my portfolio.
            The current version is developed with <strong>Vue and ExpressJS</strong>, 
            whereas previous versions were built with Laravel and pure JavaScript / jQuery.
            <br><br>
            For this version, I also began using Digital Ocean cloud hosting in an Ubuntu / Nginx environment.`,
        image: 'work/andreobrien-5.jpg',
        alt: 'Photo of my portfolio',
        link: 'https://andreobrien.me',
        tags: 'all vue javascript es6',
        secondaryTags: 'expressjs',
        weight: 500
    },
    {
        title: 'Creative Monday',
        id: 'creative-monday',
        description: `
            Creative Monday required a website which was modern, responsive and very fast loading to fit with it's marketing. 
            
            To achieve the optimum level of performance, I built the website as a single page, where text and content are rendered by the server and then updated when a user clicks a link.`,
        image: 'work/cm1610light.min.jpg',
        alt: 'Photo of Creative Monday website',
        link: 'https://creativemonday.co.nz',
        tags: 'all javascript vanilla-js animation octobercms',
        secondaryTags: 'php laravel',
        weight: 200
    },
    {
        title: 'rELEPHANT Editor',
        id: 'relephant-editor',
        description: `Earlier in the year, I built an online note editor based on PHP and MySQL. However, the project was mostly for my own learning and focused more on programming than design. I'm now rebuilding the editor from the ground up, this time using SimpleMDE and Laravel (with AES-256-CBC encryption). Please note it is currently in alpha and some features are not yet finished.`,
        image: 'work/relephant1610.min.jpg',
        alt: 'Photo of rELEPHANT editor, showing different screens such as a list of notes and a page to edit the notes',
        link: 'https://relephant.andreobriennz.com/',
        tags: 'all php laravel vue javascript',
        secondaryTags: '',
        weight: 300
    },
    {
        title: 'Game development: DH Game (vanilla JS) and 29 (React)',
        id: 'dh-game',
        description: `
            About once a year, as a personal project, I build an online game. The first time around, as part of a group project, I created the logic (JavaScript) for the game along with some of the design, CSS and backend development. The game was themed around robots vs humans, where users play cards to try and defeat the robots. 

            This time around, I'm building a completely new web app (based on <strong>Express.js and React</strong>). It's still under development but I can provide a demo upon request, or you can view the project on <a href="https://github.com/andreobriennz/29">GitHub</a>`,
        image: 'work/dh1610light.min.jpg',
        alt: 'Showing the online card game called Dead Humanity',
        link: 'https://dead-humanity-game.andreobriennz.com/',
        tags: 'all javascript vanilla-js react es6 php laravel',
        secondaryTags: '',
        weight: 400
    },
    {
        title: 'Vario Theme',
        id: 'vario-theme',
        description: `I created this theme for October CMS. It is designed to be modern, lightweight, fast-loading and easily customizable. It includes a range of different components developers can use, as well as different font and colour options.`,
        image: 'work/vario1610light.min.jpg',
        alt: 'Vario theme, built for OctoberCMS',
        link: 'https://octobercms.com/theme/creativemonday-vario',
        tags: 'all css sass',
        secondaryTags: 'css octobercms laravel',
        weight: 600
    },
    // {
    //     title: 'GitHub Projects',
    //     id: 'github',
    //     description: `
    //         I have developed a few libraries and tools which I published on GitHub. Some of the most notable one are:
            
    //         <br /><br />

    //         <h3><a href="https://github.com/andreobriennz/skeleton-flexbox">skeleton-flexbox</a></h3>
    //         <p>
    //             The Skeleton CSS boilerplate remains a popular boilerplate, despite the fact it hasn't been updated in the last 4 years. 
    //             This means that developers are forced to develop with its outdated grid system, rather than using flexbox.
    //             When I first developed skeleton-flexbox about a year ago I replaced the original grid system with my own custom flexbox grid. 
    //             However, I more recently I discovered flexbox-grid by kristoferjoseph and was very impressed with it. 
    //             Version 3 of skeleton-flexbox therefore switches to using his framework. 
    //             It also splits the Skeleton project into seperate SCSS files and adds some additional improvements<br />
    //             skeleton-flexbox is available on both <a href="https://github.com/andreobriennz/skeleton-flexbox">GitHub</a> and <a href="https://www.npmjs.com/package/skeleton-flexbox">NPM</a>. 
    //             It also has its own <a href="https://andreobriennz.github.io/skeleton-flexbox/">demo site.</a>
    //         </p>

    //         <h3><a href="https://github.com/andreobriennz/kube-flexbox">kube-flexbox</a></h3>
    //         <p>
    //             Kube is a lesser known, but very nice CSS/SASS framework that offers a great design with less bloat than bootstrap.
    //             kube-flexbox is a project very similar to skeleton-flexbox (mentioned above), 
    //             but in this case updating the Kube framework to work with flexbox. 
    //             <a href="https://github.com/andreobriennz/kube-flexbox">View it here</a>
    //         </p>

    //         <h3><a href="https://github.com/andreobriennz/Vivace-2">Vivace 2</a></h3>
    //         <p>
    //             Vivace 2 combined 2 previous tools I developed: 
    //             one tool acts as a templating language allowing JavaScript and PHP together isomorphically, 
    //             the other (Vario) is a JavaScript library which acts as a more lightweight alternative to jQuery.
    //             I am currently developing a newer version of this tool which makes better use of ES2015 syntax.
    //             <a href="https://github.com/andreobriennz/Vivace-2">a tool for using JavaScript and PHP together isomorphically</a> and
    //         </p>
    //         `,
    //     image: 'work/github.jpg',
    //     alt: 'Showing a project from my GitHub page',
    //     link: 'https://github.com/andreobriennz',
    //     tags: 'all css javascript vanilla-js',
    //     secondaryTags: '',
    //     weight: 10
    // },
    {
        title: 'Shelter of Hope',
        id: 'shelter-of-hope',
        description: 'This website was created for a client who runs a charity.',
        image: 'work/shelter.jpg',
        alt: 'The website for Shelter of Hope',
        link: 'https://theshelterofhope.org/',
        tags: 'all',
        secondaryTags: 'css',
        weight: 300
    },
    {
        title: 'Testing the Zagga Platform',
        id: 'zagga',
        description: `
            While at Communica I created tests for many forms on Zagga's website.
            The tests were created using Cypress, a modern and popular JavaScript testing framework. 
            I also developed tests for NZ Doctor and Pharmacy Today, 
            including testing forms, functionality, and responsiveness.
        `,
        image: 'work/zagga.jpg',
        alt: 'A form on Zagga\'s website',
        link: '',
        tags: 'all testing javascript',
        secondaryTags: '',
        weight: 200
    },
]

let tagDescriptions = []
tagDescriptions['all'] = `A collection of my favourite projects.`

tagDescriptions['sass'] = 'While nowadays I spend more time developing with JavaScript and PHP, I still enjoy developing with CSS and SASS and do so freqently. The following work shows some CSS / SASS projects I\'v worked on.'

tagDescriptions['javascript'] = `JavaScript is a language I use very freqently, including React, Vue, Cypress ES6 and sometimes TypeScript. You can also view projects I have made in <a href="/work#react" class="link">React</a>, <a href="/work#vue" class="link">Vue</a> or <a href="/work#vanilla-js" class="link">Vanilla JS</a> specifically.`
tagDescriptions['react'] = `
    I have a couple projects with React that I've developed. 
    One of them is a card game developed with React (shown here). 
    The other is a social media site which is currently under development, but I can show it upon request.
    `
tagDescriptions['vue'] = `
    I've developed with Vue since 2016, starting with an earlier version of this portfolio which used Vue version 1.
    This portfolio showcases my 2 most recent Vue based projects.
    `
tagDescriptions['vanilla-js'] = `
    I enjoy developing with pure JavaScript, as well as with frameworks and libraries. 
    Here is a sample of some of my projects based on pure JavaScript, as explained in the descriptions.
`

tagDescriptions['php'] = 'I have commercial experience developing with PHP. I tend to use Drupal for commerical projects and Laravel for personal projects.'

tagDescriptions['tools'] = 'Over the past couple years I periodically built open-source tools. You can <a href="https://github.com/andreobriennz">view them on GitHub</a>.'

export {allProjects, tagDescriptions}