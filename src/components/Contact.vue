<template>
    <section class="flex-grid space-between">
        <div class="col-6 contactText">
            <p>
                <strong>Get in touch</strong><br><br>

                Feel free to contact me with any questions or if you would like to chat further
                <br><br>
                You can also find out more about me through 
                <a href="https://github.com/andreobriennz" class="link">GitHub</a> and 
                <a href="https://www.linkedin.com/in/andreobriennz/" class="link">LinkedIn</a>
                <span class="desktop-hide">, or simply send me an email below.</span>
            </p>
        </div>

        <div class="col-6">
            <form method="POST" action="/mail/send" class="form">
                <div class="form-item">
                    <label>Name</label>
                    <input type="name" name="name">
                </div>

                <div class="form-item">
                    <label>Email</label>
                    <input type="email" name="email">
                </div>
            
                <div class="form-item">
                    <label>Message</label>
                    <textarea name="memo" rows="8"></textarea>
                </div>
            
                <div class="form-item">
                    <button class="send">Send</button>
                </div>
            </form>
        </div>
    </section>

</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* layout */
.col-6 {
    padding: 1rem;
    display: flex;
    align-items: center;
}

@media only screen and (min-width: 1024px) {
    .col-6 {
        padding: 4rem;
    }
}

form {
    width: 100%;
    padding-top: 4rem;
}

.contactText {
    color: #fafafa;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.1rem;
}

strong {
    font-size: 1.5rem;
    font-weight: 700;
}

/* skin */
label {
    color: white;
    font-weight: bold;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus,
.send:hover,
.send:focus {
    box-shadow: 0.1rem 0.2rem .5em #555;
}

.send {
    font-weight: bold;
    /* color: #1976D2; */
    box-shadow: 0.05rem 0.1rem 0.2rem #444;
}

.send:hover {
    /* color: #1976D2; */
    /* margin-top: -1px; */
}
</style>
