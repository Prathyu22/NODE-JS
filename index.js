console.log("something")

for(var i=0; i<10; i++){
    console.log('iteration',i+1)
}

//console.log(document) // document is the part of browser.
//console.log(window) // window is also a part of browser... " Now, there is no DOM. "

setTimeout( () => {
    console.log('Hi')
}, 6000) // setTimeout is not the part of browser. So, it works here.

console.log(module) 
console.log(module.exports)


const greet = () => 'Hi'
module.exports.something = 'Hi' // OR module.exports['something']='Hi'
console.log(module)

module.exports.greet = greet
console.log(module)