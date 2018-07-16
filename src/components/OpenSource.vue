<template>
    <section class="OpenSource container">
        <div class="header">
            <h1><strong>Open Source</strong> Projects</h1>

            <p>
                I enjoy working with open source tools and have a list of open source tools and frameworks I frequently develop with.
                I also have several open source tools which I have developed over the past 2 years. 
                The best ones are listed below:
            </p>
        </div>

        <div class="project">
            <h2><a class="link" href="https://github.com/andreobriennz/skeleton-flexbox">Skeleton-Flexbox</a></h2>
            <p>
                Skeleton is an excellent and very popular framework (often called boilerplate) which allows rapid development and prototyping. 
                Unfortunately, the project hasn't been developed in 4 years, causing it to lose some popularity as newer CSS specifications haven't been adopted.
                <br /><br />
                Skeleton-flexbox modernizes the popular Skeleton CSS boilerplate by rewriting it in SCSS modules and replacing outdated modules with newer CSS features.
                The most prominent example of this is the CSS grid system in Skeleton being replaced by the more modern and developer friendly flexbox grid. 
                <br /><br />
                <a class="link" href="https://github.com/andreobriennz/skeleton-flexbox">View project</a>
            </p>
        </div>

        <div class="project">
            <h2><a class="link" href="https://github.com/andreobriennz/kube-flexbox">Kube-Flexbox</a></h2>
            <p>
                Kube has for a long time been my favorite CSS framework. 
                The design, typography, and aesthetics stand out as high quality. 
                However, from a developers perspective, certain parts of the framework could be improved. 
                <br /><br />
                Similar to Skeleton, Kube also doesn't use flexbox. 
                Therefore I created a fork of the project to replace the existing grid system with flexbox. 
                <br /><br />
                This project is also used by Remarkable to develop the design of generated sites.
                <br /><br />
                <a class="link" href="https://github.com/andreobriennz/kube-flexbox">View project</a>
            </p>
        </div>

        <div class="project">
            <h2><a class="link" href="https://github.com/andreobriennz/include-html">Include-HTML</a></h2>
            <p>
                The goal of include-html is simple 
                - provide a fast and simple way for developers to include HTML without either a back-end language or full-featured framework.
                Its target is developers working on prototypes and small sites, especially where back-end languages are not possible.
                <br /><br />
                Most often, I find myself using Vue or React in my own projects, 
                however, sometimes these frameworks aren't necessary or appropriate.
                One use case of this is on the demo site for skeleton-flexbox. The demo site is hosted on GitHub Pages
                (which doesn't have any back-end templating). 
                It also isn't ideal to use a JavaScript library as it makes the HTML examples harder to understand.
                Therefore include-html lets partials be added in a super readable way - requiring only an HTML attribute to import a file.
                <br /><br />
                <a class="link" href="https://github.com/andreobriennz/include-html">View project</a>
            </p>
        </div>

        <div class="project">
            <h2><a class="link" href="https://github.com/andreobriennz/remarkable">Remarkable</a></h2>
            <p>
                Remarkable is a site generator and note management tool based on Python and several popular Python packages. 
                The project is currently under development (nearing alpha stage).
                Essential features are usable, but there may be some bugs. 
                <br /><br />
                The tool lets you create a project with multiple markdown files, 
                and have these files converted into styled markup in the form of a flat file website.
                Projects are managed via JSON files which states the order the projects should render in, 
                among other details.
                <br /><br />
                Remarkable also provides a command line interface to automate creating new projects. 
                There is also a GUI (graphical user interface) based on Tkinter, which lets you create and edit projects via a user interface window,
                (currently has limited functionality)
                <br /><br />
                <a class="link" href="https://github.com/andreobriennz/remarkable">View project</a>
            </p>
        </div>

        <div class="project">
            <h2><a class="link" href="https://github.com/andreobriennz/simple-gulp-setup">Simple-Gulp-Setup</a></h2>
            <p>
                Simple-gulp-setup makes it quick and easy to get started using Gulp for common tasks. 
                It provides essential functionality such as concatenating files, compiling ES2015 to ES5, compiling SASS/SCSS to CSS, auto-prefixing CSS for improved browser support, and minifying files.
                <br /><br />
                <a class="link" href="https://github.com/andreobriennz/simple-gulp-setup">View project</a>
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'OpenSource',
}
</script>

<style scoped>
.container {
    padding: 0 10%;
}

h1,
h2 {
    font-weight: normal;
    color: #fafafa;
}

h1 {
    padding-top: 14rem;
}

h2 .link {
    text-decoration: none;
}

p {
    color: #fafafa;
}

.header,
.project {
    padding-bottom: 4rem;
}

/* .project a {
    color: #fafafa;
}
.project a:hover {
    color: #fff;
    text-decoration: underline;
} */

/* $tablet-plus */
@media only screen and (min-width: 768px) {

}
</style>
