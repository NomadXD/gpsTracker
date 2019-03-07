var config = {
    apiKey: "AIzaSyC9RiCeNdc_AmjLlkNjfeFo4Ok_QhvuKGs",
    authDomain: "androidtracker-16411.firebaseapp.com",
    databaseURL: "https://androidtracker-16411.firebaseio.com",
    projectId: "androidtracker-16411",
    storageBucket: "androidtracker-16411.appspot.com",
    messagingSenderId: "344668856531"
  };
  firebase.initializeApp(config);

const dbRef = firebase.database().ref();
const usersRef = dbRef.child('data');

const userListUI = document.getElementById("userList");

usersRef.once("value",function(data){
  console.log(data.val())
  data.forEach(function(e){
    let $li = document.createElement("li");
    $li.className='list-group-item list-group-item-primary'
    $li.innerHTML = e.key;
    $li.setAttribute("child-key", e.key); 
    $li.addEventListener("click", userClicked)
    userListUI.append($li);
  })
})

var markers = new L.FeatureGroup()

function userClicked(e) {
    console.log('userclicked entered')
    markers.clearLayers()

    var userID = e.target.getAttribute("child-key");
  
    const userRef = dbRef.child('data/' + userID);
  
    const userDetailUI = document.getElementById("userDetail");
    userDetailUI.innerHTML = ""

    userRef.once("value",function(e){
      console.log(e.val())
      e.forEach(function(point){
        var Obj = JSON.parse(point.val())
        const lat = Obj.lat
        const long = Obj.long
        //var location = null
        if(lat!==0 && long!==0){ 
          console.log(lat)
          var marker = L.marker([lat,long]).bindPopup(userID).openPopup()
          markers.addLayer(marker)
        }
      })
      map.addLayer(markers)
      map.panTo(new L.LatLng(location[0], location[1]))
    })
  
    userRef.on("child_added", snap => {
      console.log('from userRef in userClicked')
      console.log(snap) 
      var myObj = JSON.parse(snap.val())
      //console.log(myObj)
      const latKey = 'lat'
      const longKey = 'long'
      const lat = myObj.lat
      const long = myObj.long
      if(lat!==0 && long!==0){
        var marker = L.marker([lat,long]).bindPopup(userID).openPopup()
        markers.addLayer(marker)
        map.addLayer(markers)
      }
        
    
      var $p = document.createElement("p");
      $p.innerHTML = snap.val()
      userDetailUI.append($p);
    });
  
}

var map = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();


 

  