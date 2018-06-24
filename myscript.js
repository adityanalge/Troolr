var obj = JSON.parse('{"url":"alex","name":"Alex Matarasso","score": 0,"views":[{"time": "2018-06-02T22:15:45+00:00","lname": "John","fname": "Abarham"},{"time": "2018-06-03T00:00:48+00:00","lname":"Coffey","fname": "Jeremy"},{"time": "2018-06-10T22:07:31+00:00","lname": "Walden","fname": "Mark"},{"time":"2018-06-11T23:30:40+00:00","lname": "Doraisamy","fname": "Aravindan","id": "5b11cf0095dc466cf99dcb7c"}],"averageRating": 5,"totalReviews": 1,"title": "Freelancer","profile_picture": "https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg","address":[{"city": "Sunnyvale","state": "California","zip_code": "94085","country": "USA"}],"reviews":[{"title": "Thanks for Signing Up!","rating": 5,"dateCreated": "2018-06-02T22:16:10.000Z"}]}')
var obj1 = JSON.parse('{"url":"kyle","name":"Kyle","score":0,"views":[{"time":"2018-06-02T22:15:45+00:00","lname":"Kyle","fname":"Alex"},{"time":"2018-06-10T22:07:31+00:00","lname":"Walden","fname":"Mark"}],"averageRating":3.5,"totalReviews":2,"title":"Freelancer","profile_picture":"https://media.creativemornings.com/uploads/user/avatar/89900/Profile_picture_square.jpg","address":[{"city": "Santa Clara","state": "California","zip_code": "94085","country": "USA"}],"reviews":[{"title":"Thanks for Signing Up!!","rating":5,"dateCreated":"2018-06-02T22:16:10.000Z"}]}')

//Adding Images to Results based on URL in JSON script
var im = new Image();
im.src = obj.profile_picture;
im.setAttribute("class", "image");
im.setAttribute("alt", "effy");
document.getElementById("img1").appendChild(im);

var im1 = new Image();
im1.src = obj1.profile_picture;
im1.setAttribute("class", "image");
im1.setAttribute("alt", "effy");
document.getElementById("img2").appendChild(im1);  

//Parsin data from JSON format into HTML format using Javascript
document.getElementById("title1").innerHTML = obj.title
document.getElementById("name1").innerHTML = obj.name
document.getElementById("location1").innerHTML = obj.address[0].city + ", " + obj.address[0].state;
document.getElementById("title2").innerHTML = obj1.title
document.getElementById("name2").innerHTML = obj1.name
document.getElementById("location2").innerHTML = obj1.address[0].city + ", " + obj1.address[0].state;

//Replace Vanilla JS with Jquery
$(document).ready(function(){
$(".clear").click(function(){
    $("#result1").show();
    $("#result2").show();
});
});

$(document).ready(function(){
$(".toprated").click(function(){
    $("#result1").hide();
    $("#result2").show();    
});
});

$(document).ready(function(){
$(".mostpopular").click(function(){
    $("#result1").show();
    $("#result2").hide();
});
});