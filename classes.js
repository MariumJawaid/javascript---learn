const user = {
    username: "marium",
    loginCount: 8,
    signedIn:true,

    getUserDetails: function(){
        //console.log(this)
        console.log(this.username)
    }
}


console.log(user.getUserDetails())

function User(username,loginCount, signedIn){
    this.username =username,
    this.loginCount = loginCount,
    this.signedIn = signedIn,

    this.greetings = function(){
        console.log(`hello ${this.username}`)
    }
}


const userOne = new User("mariub",8,true)
// console.log(userOne)
console.log(userOne.constuctor)