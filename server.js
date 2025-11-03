var http = require("http"); 

var lessons = [
     {
        subject: "English",
        location: "Barnet",
        price: 40,
        space_available: 5,
        image: "images/english.jpg"
    },
    {
        subject: "Maths",
        location: "Edgware",
        price: 50,
        space_available: 5,
        image: "images/math.jpg"
    },
    {
        subject: "Biology",
        location: "Finchley",
        price: 45,
        space_available: 5,
        image: "images/biology.jpg"
    },
    {
        subject: "Chemistry",
        location: "Harrow",
        price: 55,
        space_available: 5,
        image: "images/chemistry.jpg"
    },
    {
        subject: "Physics",
        location: "Hendon",
        price: 60,
        space_available: 5,
        image: "images/physics.jpg"
    },
    {
        subject: "Geography",
        location: "Westminster",
        price: 70,
        space_available: 5,
        image: "images/geography.jpg"
    },
    {
        subject: "Computing",
        location: "Kilburn",
        price: 65,
        space_available: 5,
        image: "images/computing.png"
    },
    {
        subject: "French",
        location: "Battersea",
        price: 40,
        space_available: 5,
        image: "images/french.png"
    },
    {
        subject: "Spanish",
        location: "Mile End",
        price: 45,
        space_available: 5,
        image: "images/spanish.jpg"
    },
    {
        subject: "Physical Education",
        location: "East Ham",
        price: 35,
        space_available: 5,
        image: "images/PE.jpg"
    }
]


function requestHandler(request, response){
    console.log("Request received " + request.url); 

    response.writeHead(200, {"Content-Type": "application/json"});

    response.end(JSON.stringify({lessons}));
}

//Create server
var server = http.createServer(requestHandler);

// Server listens on port 3000
server.listen(3000); 

