// BEGINNING examples of reduce() method.

// flattening out an array ... NO IDEA WHY THIS WON'T PRINT TO CONSOLE.
// returns an "Uncaught ReferenceError: concat is not defined " error. If
// I run directly in console using "return" instead of "console.log" it 
// returns results without issue.

var flattened = [[4, 8], [15, 16], [23, 42]]

flattened.reduce(function(previousValue, currentValue, index, array) {
    console.log(previousValue + currentValue);
});

// --> [4, 8, 15, 16, 23, 42]

// I'm pretty sure I had this working  yesterday... now not sure why it's
// not. This is the example from MDN and I can't get it to run in the
// console without an error either.

// var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
//     return a.concat(b);
// });

// flattened is [0, 1, 2, 3, 4, 5] ... can't get this to output correctly
// when I run it in console.

// using .reduce with the Math operators.

[4, 8, 15, 16, 23, 42].reduce(function(x, y){
  console.log(x + y);
})

// --> 108

[4, 8, 15, 16, 23, 42].reduce(function(x, y){
  console.log(x - y);
})

// --> -100

[4, 8, 15, 16, 23, 42].reduce(function(x, y){
  console.log(x * y);
})

// --> 7418880

[4, 8, 15, 16, 23, 42].reduce(function(x, y){
  console.log(x / y);
})

// --> 0.0000021566597653554177

[4, 8, 15, 16, 23, 42].reduce(function(x, y){
  console.log(x % y);
})

// --> 4

// END examples of reduce() method.


// BEGINNING examples of map() method.

var senateData =  {
 "meta": {
  "limit": 100, 
  "offset": 0, 
  "total_count": 12306
 }, 
 "objects": [
  {
   "bioguideid": "G000386", 
   "birthday": "1933-09-17", 
   "cspanid": 1167, 
   "firstname": "Charles", 
   "gender": "male", 
   "gender_label": "Male", 
   "id": 300048, 
   "lastname": "Grassley", 
   "link": "https://www.govtrack.us/congress/members/charles_grassley/300048", 
   "middlename": "E.", 
   "name": "Sen. Charles “Chuck” Grassley [R-IA]", 
   "namemod": "", 
   "nickname": "Chuck", 
   "osid": "N00001758", 
   "pvsid": "53293", 
   "sortname": "Grassley, Charles “Chuck” (Sen.) [R-IA]", 
   "twitterid": "ChuckGrassley", 
   "youtubeid": "senchuckgrassley"
  }, 
  {
   "bioguideid": "A000360", 
   "birthday": "1940-07-03", 
   "cspanid": 5, 
   "firstname": "Lamar", 
   "gender": "male", 
   "gender_label": "Male", 
   "id": 300002, 
   "lastname": "Alexander", 
   "link": "https://www.govtrack.us/congress/members/lamar_alexander/300002", 
   "middlename": "", 
   "name": "Sen. Lamar Alexander [R-TN]", 
   "namemod": "", 
   "nickname": "", 
   "osid": "N00009888", 
   "pvsid": "15691", 
   "sortname": "Alexander, Lamar (Sen.) [R-TN]", 
   "twitterid": "SenAlexander", 
   "youtubeid": "lamaralexander"
  },
 {
   "bioguideid": "M001111", 
   "birthday": "1950-10-11", 
   "cspanid": 25277, 
   "firstname": "Patty", 
   "gender": "female", 
   "gender_label": "Female", 
   "id": 300076, 
   "lastname": "Murray", 
   "link": "https://www.govtrack.us/congress/members/patty_murray/300076", 
   "middlename": "", 
   "name": "Sen. Patty Murray [D-WA]", 
   "namemod": "", 
   "nickname": "", 
   "osid": "N00007876", 
   "pvsid": "53358", 
   "sortname": "Murray, Patty (Sen.) [D-WA]", 
   "twitterid": "PattyMurray", 
   "youtubeid": "SenatorPattyMurray"
  },  
 {
   "bioguideid": "S000148", 
   "birthday": "1950-11-23", 
   "cspanid": 5929, 
   "firstname": "Charles", 
   "gender": "male", 
   "gender_label": "Male", 
   "id": 300087, 
   "lastname": "Schumer", 
   "link": "https://www.govtrack.us/congress/members/charles_schumer/300087", 
   "middlename": "E.", 
   "name": "Sen. Charles “Chuck” Schumer [D-NY]", 
   "namemod": "", 
   "nickname": "Chuck", 
   "osid": "N00001093", 
   "pvsid": "26976", 
   "sortname": "Schumer, Charles “Chuck” (Sen.) [D-NY]", 
   "twitterid": "ChuckSchumer", 
   "youtubeid": "SenatorSchumer"
  }, 
 {
   "bioguideid": "S000320", 
   "birthday": "1934-05-06", 
   "cspanid": 1859, 
   "firstname": "Richard", 
   "gender": "male", 
   "gender_label": "Male", 
   "id": 300089, 
   "lastname": "Shelby", 
   "link": "https://www.govtrack.us/congress/members/richard_shelby/300089", 
   "middlename": "C.", 
   "name": "Sen. Richard Shelby [R-AL]", 
   "namemod": "", 
   "nickname": "", 
   "osid": "N00009920", 
   "pvsid": "53266", 
   "sortname": "Shelby, Richard (Sen.) [R-AL]", 
   "twitterid": "SenShelby", 
   "youtubeid": "SenatorRichardShelby"
  },
 {
   "bioguideid": "S000770", 
   "birthday": "1950-04-29", 
   "cspanid": 45451, 
   "firstname": "Debbie", 
   "gender": "female", 
   "gender_label": "Female", 
   "id": 300093, 
   "lastname": "Stabenow", 
   "link": "https://www.govtrack.us/congress/members/debbie_stabenow/300093", 
   "middlename": "Ann", 
   "name": "Sen. Debbie Stabenow [D-MI]", 
   "namemod": "", 
   "nickname": "", 
   "osid": "N00004118", 
   "pvsid": "515", 
   "sortname": "Stabenow, Debbie (Sen.) [D-MI]", 
   "twitterid": "StabenowPress", 
   "youtubeid": "senatorstabenow"
  } 
 ]
 }

senateData.objects.map(function(name) {
  console.log(name.firstname, name.lastname);
})

senateData.objects.map(function(data) {
  console.log("My name is", data.firstname, data.lastname, "catch me on YouTube at", "http://youtube.com/" + data.youtubeid + ".");
})

// for YouTube, and with complete data set, if "youtubeid" == null, then return "My name is ... and I'm behind the times." ?

senateData.objects.map(function(data) {
  console.log("Yo! Tweet at me bro...", "@" + data.twitterid + ".");
})

// For both the YouTube and Twitter examples, is there a way to convert the Twitter and YouTube IDs
// into links?

// was trying to run this based on gender, however, error in console ended up reading, 
// "Uncaught ReferenceError: female is not defined" ... unsure where to "define" gender
// in this instance.

// senateData.objects.map(function(data) {
//   if (data.gender == female)
//   console.log(data.firstname, data.lastname);
// })

// END examples of map() method.


// BEGINNING examples of forEach() method.


// END examples of forEach() method.


// BEGINNING examples of filter() method.


// END examples of filter() method.










