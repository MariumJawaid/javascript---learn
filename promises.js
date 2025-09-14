const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("the promise is created")
        resolve()
    },1000)
})

promiseOne.then(function(res){
    console.log("the promise is consumed")

})



new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("i ama mii ")
        resolve()
    },1000)

}).then(function(){

    console.log("promise 2 has been consumed")

})



const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        
        resolve({username:"marium",password:"123"})

    },1000)
})

promiseThree.then(function(user){
    console.log(user)
    console.log(user.username)
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({
                username:"mariumjawaid",password:"123adc"
            })
        }else{
            reject("ERROR Something went wrong")
        }
    },1000)
})

promiseFour.then(
    function(user){
        console.log(user)
        return user.username
        
    }

).then( (user)=>{
    console.log(user)

}).catch((err)=>{
    console.log(err)

})
.finally(()=>{
    console.log("The promise is either resolved or rejected")
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({
                username:"ayeshajawaid",password:"123adc"
            })
        }else{
            reject("ERROR JS went wrong")
        }
    },1000)
})

async function consumeFive(){
    //this means that u r sure when the promise will be resolved u will get response but in this case 
    // we are having rehjection so this case is not being handled here it only handles the resolve part
    try{
        const resp = await promiseFive
        console.log(resp)
    }catch(err){
        console.log(err)


    }
}

consumeFive()



async function getAllUsers(){
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      console.log(data)
    }catch(error){
        console.log("E:",error)
    }
}

getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})