class Make {
    constructor() {
        this.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        this.num = '0123456789'
        this.alphanum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        this.simple_xss = '<b>test"\'</b> <script>alert("test")</script> <style>*{ color: red !important }</style>'
    }

    make( length, possible ) {
        let random_string = ''
        
        for (let i = 0; i < length; i++)
          random_string += possible.charAt(Math.floor(Math.random() * possible.length))
      
        return random_string
    }

    string( length = 10 ) {
        return this.make( length, this.alphanum )
    }

    number( length = 10 ) {
        return this.make( length, this.num )
    }

    password() {

    }
}

const make = new Make()

export { make, Make }