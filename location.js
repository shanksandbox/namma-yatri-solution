var fullName = document.querySelector('input[type="text"][placeholder="Bharath Kumar"]');
var email = document.querySelector('input[type="email"][placeholder="example@example.com"]');
var address = document.querySelector('input[type="text"][placeholder="room - street - locality"]');
var city = document.querySelector('input[type="text"][placeholder="Chennai"]');
var state = document.querySelector('input[type="text"][placeholder="India"]');
var zipCode = document.querySelector('input[type="text"][placeholder="123 456"]');

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(fillAddress);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function fillAddress(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var apiURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`;
    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        var addressComponents = data.results[0].address_components;
        for (var i = 0; i < addressComponents.length; i++) {
            if (addressComponents[i].types.includes("street_number")) {
                address.value += addressComponents[i].long_name + " ";
            }
            if (addressComponents[i].types.includes("route")) {
                address.value += addressComponents[i].long_name + ", ";
            }
            if (addressComponents[i].types.includes("locality")) {
                city.value = addressComponents[i].long_name;
            }
            if (addressComponents[i].types.includes("administrative_area_level_1")) {
                state.value = addressComponents[i].long_name;
            }
            if (addressComponents[i].types.includes("postal_code")) {
                zipCode.value = addressComponents[i].long_name;
            }
        }
    });
}

getLocation();

function fun(){
    var randNum = Math.floor(Math.random() * 900000) + 100000;
    alert("Payment recieved successfully! Your booking has been confirmed with reference number : " + randNum);
    
}

