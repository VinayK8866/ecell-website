//
// // Refernece contactInfo collections
// let contactInfo = firebase.database().ref("infos");
//
// // Listen for a submit
// document.querySelector("#contactform").addEventListener("submit", submitForm);
//
// function submitForm(e) {
//   e.preventDefault();
//
//   //   Get input Values
//   let name = document.querySelector("#name").value;
//   let email = document.querySelector("#email").value;
//    let state = document.querySelector("#state").value;
//
//   let subject = document.querySelector("#subject").value;
//   console.log(name, email, state, subject);
//
//   saveContactInfo(name, email, state, subject);
//
//   document.querySelector("#contactform").reset();
// }
//
// // Save infos to Firebase
// function saveContactInfo(name, email, message) {
//   let newContactInfo = contactInfo.push();
//
//   newContactInfo.set({
//     name: name,
//     email: email,
//     state:state,
//     subject: subject,
//   });
// }
