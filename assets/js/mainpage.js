// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyChyNVbI7JrZyAhb5OnkWjme1YssiMst0Y",
    authDomain: "unityhelper-c6e6e.firebaseapp.com",
    databaseURL: "https://unityhelper-c6e6e.firebaseio.com",
    projectId: "unityhelper-c6e6e",
    storageBucket: "unityhelper-c6e6e.appspot.com",
    messagingSenderId: "263622566191",
    appId: "1:263622566191:web:564dc413a1063fb4ab81da",
    measurementId: "G-G1SS17T3HG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  var uiConfig = {
  callbacks: {
  signInSuccessWithAuthResult: function(authResult, redirectUrl) {
    // User successfully signed in.
    // Return type determines whether we continue the redirect automatically
    // or whether we leave that to developer to handle.
    return true;
  },
  uiShown: function() {
    // The widget is rendered.
    // Hide the loader.
    //document.getElementById('loader').style.display = 'none';
  }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
  // Leave the lines as is for the providers you want to offer your users.
  firebase.auth.EmailAuthProvider.PROVIDER_ID,
  firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: 'https://github.com/Darckcomsoft/Darckcomsoft-Stuff',
  // Privacy policy url.
  privacyPolicyUrl: 'https://github.com/Darckcomsoft/Darckcomsoft-Stuff'
  };
  
  ui.start('#firebaseui-auth-container', uiConfig);

  //Get cookies and do all the check if is signed in
  if (localStorage.getItem("firebaseui::rememberedAccounts") != null)
  {
    var cookiesstring = localStorage.getItem("firebaseui::rememberedAccounts");
    var obj = JSON.parse(cookiesstring);

    doAfterLoginStuff();
  }else{
    doBeforeLoginStuff();
  }

  function doAfterLoginStuff(){
    console.log("DEBUG: voce esta logado, e seu nome publico é :" + obj[0].displayName); 
    document.getElementById("logintext").style = "display: none;";
    document.getElementById("loginimg").style = "display: block;";
    document.getElementById("loginimg").src = obj[0].photoUrl;
    document.getElementById("dcs_userMenu").style = "display: block;";
    document.getElementById("firebaseui-auth-container").style = "display: none;";
  }

  function doBeforeLoginStuff(){
    document.getElementById("logintext").style = "display: block;";
    document.getElementById("loginimg").style = "display: none;";
    document.getElementById("dcs_userMenu").style = "display: none;";
    document.getElementById("firebaseui-auth-container").style = "display: block;";
  }


  function loginbox(){
      if (document.getElementById("loginBox").style.visibility == "hidden"){
        document.getElementById("loginBox").style = "visibility: none;";
      }else{
        document.getElementById("loginBox").style = "visibility: hidden;";
      }
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }