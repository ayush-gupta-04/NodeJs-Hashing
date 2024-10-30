const bcrypt = require('bcrypt');
const userPass = "ayushgupta"


// every method of bcrypt is asynchronous.

// async function hashing(){
//     //accesssing salt ---> METHOD 1
//     //fault in this method --> 
//     //1. this is async therefore .. the control will execute the below codes before salting...which i dont want.
//     //2. I want every process to be sync.
//     bcrypt.genSalt(10,(err,salt) => {
//         if(err){
//             console.log('error in salting')
//         }else{
//             //we have access to salt here.
//             console.log(salt)
//         }
//     });



//     //accesssing salt ---> METHOD 2
//     try {
//         const salt = await bcrypt.genSalt(10);
//         console.log(salt)
//     } catch (error) {
//         console.log("error while salting")
//     }
// }
// hashing();







// async function hashing(){
//     try {
//         const salt = await bcrypt.genSalt(11);
//         //we have salt created.

//         try {
//             const hashedPass = await bcrypt.hash(userPass,salt);
//             console.log(hashedPass);
//             try {
//                 const result = await bcrypt.compare(userPass,hashedPass);
//                 if(result){
//                     console.log('passWord Matched')
//                 }else{
//                     console.log('wrong Password')
//                 }
//             } catch (error) {
//                 console.log('error while comparing')
//             }

//         } catch (error) {
//             console.log('error while hashing')
//         }


//     } catch (error) {
//         console.log('error while salting')
//     }
// }
// hashing();