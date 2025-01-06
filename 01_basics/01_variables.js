const accountId = 144553 //Not changealbe values
let accountEmail = "hitesh@google.com" //Changeable Value
var accountPassword = "12345" //Changeable Value but var is not uswed anymoreS
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])