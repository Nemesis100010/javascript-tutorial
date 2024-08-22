const accountId = "133452"
let accountEmail = "som2000@google.com"
var accountPassword = "34412"
accountCity = "Barasat"
//try not to use var 
let accountState;
//accountId=2 // it is not allowed to change const variable as we are using nodejs not browser
accountEmail="nomoney@gmail.com"
accountPassword="12345"
accountCity ="Midnpore"
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
//accountState shows undefined as its value isn't given
