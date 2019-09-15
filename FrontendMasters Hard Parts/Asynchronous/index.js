/////////////////
//             //
// CHALLENGE 1 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 1');
// ...your code below


console.log("I am the beginning of the code");

function consloling() {
  console.log("test");
}

setTimeout(consloling, 0);



console.log('End of Challenge 1');
*/ // (do not alter this line)




/////////////////
//             //
// CHALLENGE 2 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 2');
// ...your code below

function hello() {
  console.log("Interval hello!");
}

var helloInterval = setInterval(hello, 2000);

// setTimeout(clearAllIntervals, 10000);

setTimeout(function(){ clearInterval(helloInterval); }, 10000);


// ...your code above
function clearAllIntervals() {
  for (let i = 0; i < 1000; i++) {
    clearInterval(i);
  }
}
console.log('End of Challenge 2');
*/ // (do not alter this line)



/////////////////
//             //
// CHALLENGE 3 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 3');
// ...your code below

// function everyXsecsForYsecs(instructions, intervalTime, totalTime) {
//   var interval = setInterval(instructions, intervalTime);
//   setTimeout(function() { clearInterval(interval); }, totalTime);
// }

function everyXsecsForYsecs(instructions, intervalTime, totalTime) {
  var length = Math.floor(totalTime / intervalTime);
  for(var i = 1; i <= length; i++) {
    setTimeout(instructions, i * 1000);
  }
}

function sayHowdy() {
  console.log("Howdy");
}

everyXsecsForYsecs(sayHowdy, 1000, 5000);


console.log('End of Challenge 3');
*/ // (do not alter this line)




/////////////////
//             //
// CHALLENGE 4 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 4');
// ...your code below

function forEach(arr, cb) {
  for(var i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}

var delays = [2000, 5000, 0, 3500];

function delayLog(delayTime, index) {
  setTimeout(function() {
    console.log("logging " + index + " in " + delayTime + " ms");
  }, delayTime);
}

forEach(delays, delayLog);

console.log('End of Challenge 4');
*/ // (do not alter this line)



/////////////////
//             //
// CHALLENGE 5 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 5');
// ...your code below

function changeColor() {
  var backgroundColor = document.body.style.background;
  if(backgroundColor === "rgb(221, 238, 255)") {
    document.body.style.background = "rgb(255, 238, 221)";
  } else {
    document.body.style.background = '#def';
  }
  
}

document.getElementById("activate").addEventListener("click", function() {
  console.log("clicked #1");
});

document.getElementById("color").addEventListener("click", function() {
  console.log("clicked #2");
  changeColor();
});


// ...your code above
document.body.style.background = '#def';
console.log('End of Challenge 3');
*/ // (do not alter this line)


/////////////////
//             //
// CHALLENGE 6 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 6');
var dataReceived;

function ajaxSimulate(id, callback) {
  var database = ['Aaron', 'Barbara', 'Chris'];
  setTimeout(callback(database[id]), 0);

}

function storeData(data) {
  dataReceived = data;
}

ajaxSimulate(1, storeData);

console.log("datRecieved: " + dataReceived);
// ...your code below



console.log('End of Challenge 6');
*/ // (do not alter this line)



/////////////////
//             //
// CHALLENGE 7 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 7');
// ...your code below

function httpGetAsync(theUrl, callback)
{
  console.log(theUrl);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

// httpGetAsync('https://rest.bandsintown.com/artists/Maroon%205?app_id=jshp', function(data) {
//     var img = data.image_url;
//     document.querySelector("#ch2").innerHTML = "<img src="+ img +">";
// });

fetch('https://rest.bandsintown.com/artists/Maroon%205?app_id=jshp').then(function(response) {
  return response.json();
}).then(function(data) {
  var img = data.image_url;
  document.querySelector("#ch2").innerHTML = "<img src="+ img +">";
}).catch(function(error) {
  console.log(error);
});





console.log('End of Challenge 7');
*/ // (do not alter this line)



/////////////////
//             //
// CHALLENGE 8 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 8');
// ...your code below


fetch('https://rest.bandsintown.com/artists/Maroon%205/events?app_id=jshp&date=upcoming').then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data);
  for(var item of data) {
    var node = document.createElement("p");
    var textnode = document.createTextNode(item.venue.name);
    node.appendChild(textnode);
    document.querySelector("#ch3").appendChild(node);
  }
}).catch(function(error) {
  console.log(error);
});



console.log('End of Challenge 8');
*/ // (do not alter this line)



/////////////////
//             //
// CHALLENGE 9 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 9');
// ...your code below


fetch('https://rest.bandsintown.com/artists/Maroon%205/events?app_id=jshp&date=all').then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data);
  for(var item of data) {
    if(item.venue.country === "United States") {
          var node = document.createElement("p");
    var textnode = document.createTextNode(item.venue.name + " - " + item.venue.country);
    node.appendChild(textnode);
    document.querySelector("#ch4").appendChild(node);
    }
  }
}).catch(function(error) {
  console.log(error);
});




console.log('End of Challenge 9');
*/ // (do not alter this line)