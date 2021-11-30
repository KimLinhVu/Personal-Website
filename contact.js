const firebaseConfig = {
    apiKey: "AIzaSyDOXjD1FD8A2czNjCmxv0p61-Z8V-h-e_c",
    authDomain: "contactform-7e175.firebaseapp.com",
    databaseURL: "https://contactform-7e175-default-rtdb.firebaseio.com",
    projectId: "contactform-7e175",
    storageBucket: "contactform-7e175.appspot.com",
    messagingSenderId: "782703962821",
    appId: "1:782703962821:web:0f98a1863895b825b5deac",
    measurementId: "G-S9HXTLWLR7"
  };
firebase.initializeApp(firebaseConfig);

const messagesRef = firebase.database().ref('messages');
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit form
function submitForm(e){
    e.preventDefault();

    //Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var message = getInputVal('message');

    //Save message
    saveMessage(name, company, email, message);

    //enable alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    document.getElementById('contactForm').reset();
}

//Function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name, company, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        comapny: company,
        email: email,
        message: message
    })
}