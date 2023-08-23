var firebaseConfig = {
  apiKey: "AIzaSyAey9iTHEYx45JHDkdQGVyHHreXDx4Tud4",
  authDomain: "ftcode-92fc2.firebaseapp.com",
  databaseURL: "https://ftcode-92fc2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ftcode-92fc2",
  storageBucket: "ftcode-92fc2.appspot.com",
  messagingSenderId: "613152855568",
  appId: "1:613152855568:web:6399de2f7a1faac2c01c95",
  measurementId: "G-YDS3C1SWZT"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var dataList = document.getElementById('dataList');

function storeData() {
  var dataValue = document.getElementById('data').value;

  if (dataValue.length <= 12 && dataValue.startsWith("ft")) {
    var newDataKey = database.ref().child('data').push().key;
    var updates = {};
    updates['/data/' + newDataKey] = dataValue;
    database.ref().update(updates);

    alert('Submit successful!');
  } else if (dataValue.length > 12) {
    alert('Code length exceeds 12 characters.');
  } else {
    alert('Code must start with "ft" to be stored.');
  }
}

database.ref('data').on('child_added', function(snapshot) {
  var dataItem = snapshot.val();
  dataList.innerHTML += '<li>' + dataItem + '</li>';
});
