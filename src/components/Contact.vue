<template>
    <section class="flex-grid space-between">
        <div class="col-6 contactText">
            <p>
                <strong class="heading-3">Get in touch</strong><br><br>

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
                    <input id="name" type="name" name="name">
                </div>

                <div class="form-item">
                    <label>Email</label>
                    <input id="email" type="email" name="email">
                </div>
            
                <div class="form-item">
                    <label>Message</label>
                    <textarea id="memo" name="memo" rows="8"></textarea>
                </div>
            
                <div class="form-item">
                    <button @click="send" class="send">Send</button>
                </div>
            </form>
        </div>
    </section>

</template>

<script>
export default {
    name: 'Contact',
    props: {
        msg: String
    },
    methods: {
        send: function (event) {
            if (event) event.preventDefault()

            let params = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                memo: document.getElementById('memo').value,
            }
            params = JSON.stringify (params)

            $.ajaxSetup({
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            });

            $.post("https://api.andreobrien.me/mail/send", params, function(result){
                console.log ('result', result)
            });

            $.ajax({
                type: "POST",
                url: "https://api.andreobrien.me/mail/send",
                data: params,
                // success: console.log ('result', result),
                crossDomain: true,
                    xhrFields: {
                    withCredentials: true
                },
                success: function (response) {
                    var resp = JSON.parse(response)
                    alert(resp.status)
                },
                error: function (xhr, status) {
                    alert("error")
                    console.log (xhr)
                    console.log (status)
                },
            })
        },
    }
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
}

strong {
    font-weight: 700;
}

/* skin */
label {
    color: white;
    font-weight: bold;
}

input,
textarea,
.send {
    box-shadow: .25rem 0.25rem .5rem #555;
    transition: .25s;
}

input:hover,
textarea:hover,
.send:hover {
    box-shadow: .25rem 0.25rem 1rem #444;
}

input:focus,
textarea:focus,
.send:focus {
    box-shadow: .25rem 0.25rem 1rem #333;
}

.send {
    font-weight: bold;
    box-shadow: 0 0 0 #000;
    /* color: #1976D2; */
}

.send:hover {
    /* color: #1976D2; */
    /* margin-top: -1px; */
}
</style>
