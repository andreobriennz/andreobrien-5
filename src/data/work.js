const allProjects = [
    {
        title: 'Andre OBrien - Portfolio',
        id: 'portfolio',
        description: `
            My portfolio is constantly updated. 
            It's currently in version 5 after I redesigned it in Vue and ExpressJS, 
            and has been changed to demonstate the technologies which I use most freqently and reflect my transition from writing mostly pure CSS and JavaScript, 
            to working with JavaScript frameworks such as Vue, as well as various backend frameworks.`,
        image: 'work/andreobrien-5.jpg',
        alt: 'Photo of my portfolio',
        link: 'https://andreobrien.me',
        tags: 'all vue javascript es6',
        secondaryTags: 'php octobercms laravel',
        weight: 100
    },
    {
        title: 'Creative Monday',
        id: 'creative-monday',
        description: `
            Creative Monday required a website which was modern, responsive and very fast loading to fit with it's marketing. 
            
            To achieve the optimum level of performance, I built the website as a single page, where text and content is rendered by the server and then updated when a user clicks a link.`,
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
        description: `Earlier in the year I built an online note editor based on PHP and MySQL. However the project was mostly for my own learning, and focused more on programming than design. I'm now rebuilding the editor from the ground up, this time using SimpleMDE and Laravel (with AES-256-CBC encryption). Please note it is currently in alpha and some features are not yet finished.`,
        image: 'work/relephant1610.min.jpg',
        alt: 'Photo of rELEPHANT editor, showing different screens such as a list of notes and a page to edit the notes',
        link: 'https://relephant.andreobriennz.com/',
        tags: 'all php laravel vue javascript',
        secondaryTags: '',
        weight: 300
    },
    {
        title: 'DH Game',
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
    {
        title: 'GitHub Projects',
        id: 'github',
        description: `
            I have developed a few libraries and tools which I published on GitHub. 
            Some notable mentions include
            <a href="https://github.com/andreobriennz/Skeleton-Flexbox">a fork of the Skeleton Boilerplate which uses flexbox</a>,
            <a href="https://github.com/andreobriennz/vario--colour-and-font-library">a CSS library of colours and fonts</a>,
            <a href="https://github.com/andreobriennz/Vivace-2">a tool for using JavaScript and PHP together isomorphically</a> and
            <a href="https://github.com/andreobriennz/vario--boxy-grid/blob/master/assets/js/vario.js">a mirco-library alternative to jQuery</a>
            `,
        image: 'work/github.jpg',
        alt: 'Showing a project from my GitHub page',
        link: 'https://github.com/andreobriennz',
        tags: 'all css javascript vanilla-js',
        secondaryTags: '',
        weight: 900
    },
    {
        title: 'Shelter of Hope',
        id: 'shelter-of-hope',
        description: 'This website was created for a client who runs a charity',
        image: 'work/shelter.jpg',
        alt: 'The website for Shelter of Hope',
        link: 'https://theshelterofhope.org/',
        tags: 'all',
        secondaryTags: 'css',
        weight: 300
    },
    {
        title: 'GO - Social Media for Board Game Geeks',
        id: 'GO',
        description: '',
        image: 'work/cm1610light.min.jpg',
        alt: '',
        link: '',
        tags: '',
        secondaryTags: '',
        weight: -1
    },
]

let tagDescriptions = []
tagDescriptions['all'] = `A collection of my favourite projects.`
tagDescriptions['javascript'] = `JavaScript is a language I use very freqently, including React, Vue, ES6 and sometimes TypeScript. You can also view projects I have made in <a href="/work#react" class="link">React</a>, <a href="/work#vue" class="link">Vue</a> or <a href="/work#vanilla-js" class="link">Vanilla JS</a> specifically.`
tagDescriptions['php'] = 'I have commercial experience developing with PHP. I tend to use Drupal for commerical projects and Laravel for personal projects.'
tagDescriptions['sass'] = 'While nowadays I spend more time developing with JavaScript and PHP, I still enjoy developing with CSS and SASS and do so freqently. The following work shows some CSS / SASS projects I\'v worked on.'
tagDescriptions['nodejs'] = ''
tagDescriptions['tools'] = 'Over the past couple years I periodically built open-source tools. You can <a href="https://github.com/andreobriennz">view them on GitHub</a>.'

export {allProjects, tagDescriptions}