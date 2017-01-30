/*firebase key*/
var config = {
    apiKey: "AIzaSyB3Lv-PMfg4fFh15yHYSftEHXVZEXh7DFQ",
    authDomain: "train-scheduler-3890e.firebaseapp.com",
    databaseURL: "https://train-scheduler-3890e.firebaseio.com",
    storageBucket: "train-scheduler-3890e.appspot.com",
    messagingSenderId: "1094278825070"
  };

  firebase.initializeApp(config);

/*variable for firebase database*/
  var traindatabase = firebase.database();
  var name = "";
  var destination = "";
  var frequency = 0;
  var next = 0;
  var minutes = 0

/*on submit click train information is stored into database*/
  $("#add-train-btn").on("click", function(event) {
      event.preventDefault();

      var trainName = $("#train-name-input").val().trim();
      var destination = $("#destination-input").val().trim(); 
      var firstTrain= $("#first-train-input").val().trim();
      var newFrequency =$("#frequency-input").val().trim();
      
   /*   inputted data is stored*/
    traindatabase.ref().push({
      trainName:trainName,
      destination:destination,
      firstTrain:firstTrain,
      frequency:newFrequency

      });

});

/*console logging of train infor*/
 traindatabase.ref().on("child_added",function(childSnapshot){
      console.log(childSnapshot.val().trainName);
      console.log(childSnapshot.val().destination);
      console.log(childSnapshot.val().firstTrain);
      console.log(childSnapshot.val().frequency);
     
    /*information from database is displayed in current times section*/
    var newTablerow = $('<tr>');
    newTablerow.append("<td>"+childSnapshot.val().trainName+"</td>" + 
      "<td>"+childSnapshot.val().destination+"</td>" + 
      "<td>"+childSnapshot.val().frequency+"</td>"+
      "<td>"+childSnapshot.val().firstTrain+ "</td>")
    $("#train-table").append(newTablerow);

    });


