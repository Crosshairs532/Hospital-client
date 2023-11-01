// const handlesignInwithpopup = (googleAndfacebook) => {
//     googleAndfacebook()
//         .then(res => {

//             const user = res.user;
//             console.log(user.email, "awfarfafafa");
//             if (user.email) {
//                 const emailCredential = auth.EmailAuthProvider.credential(user.email);
//                 user.linkWithRedirect(emailCredential)
//                     .then(() => { })
//                     .catch(er => { console.log(er) })
//             }
//             // goTo('/')
//             // console.log(res)
//         })
//         .catch(er => console.log(er))
// }
// change password



// chatgpt
// const handlesignInwithpopup = (googleAndfacebook) => {
//     googleAndfacebook()
//         .then(res => {
//             const user = res.user;
//             console.log(user.email, "awfarfafafa");
//             if (user.email) {
//                 const emailCredential = auth.EmailAuthProvider.credential(user.email);

//                 user.linkWithPopup(emailCredential)
//                     .then((linkedUser) => {
//                         console.log(linkedUser, "linked user ");
//                     })
//                     .catch(er => {
//                         console.log(er);
//                         if (er.code === 'auth/credential-already-in-use') {
//                             // Handle the case where the email is already associated with a different account
//                         }
//                     });
//             }
//         })
//         .catch(er => console.log(er));
// }
// chatgpt end






// function linkFacebookAccount() {
//     const user = auth.currentUser;
//     console.log(user, "linkefaceboo");
//     if (user) {
//         // Sign in with Facebook
//         signInWithFacebook()
//             .then((result) => {
//                 // Successfully signed in with Facebook
//                 // Link the Facebook credential to the existing account
//                 return user.linkWithPopup(result.credential);
//             })
//             .then(() => {
//                 // Successfully linked the Facebook account
//                 console.log("Facebook account linked");
//             })
//             .catch((error) => {
//                 // Handle any errors, e.g., if the Facebook account is already linked to another user
//                 console.error(error);
//             });
//     }
// }