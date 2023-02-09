// // import Cookies from 'js-cookie';
// function getUser() {
//     try {
//         fetch("http://localhost:3000/testconnect", {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(),
//         })
//         .then((res) => res.json())
//         .then((data) => {
//             if (data.text === "success") {
//                 // var tokendata = data.tokendata ;
//                 console.log(data.length);
//                 // console.log(data.tokendata);

//             }
//             // console.log(data);
//             if (data.text === "fail") {
//                 console.log("Failed");
//             }
//             });
//     } catch (err){console.log(err);}}
// module.exports = getUser;