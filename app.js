let now = new Date('14 Aug 2024')
let today = new Date()
let milliSeconds = (now.getTime()-today.getTime());
let days = Math.floor(milliSeconds/(1000*60*60*24))
console.log(days);