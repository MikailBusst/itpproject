function check_size(){
    var window_size = window.innerWidth;
    
    //document.getElementById("width").innerHTML = window_size;
    
    if(window_size <= 700){
        $("edit_link").removeClass("details_edit");
        $("edit_link").addClass("details_edit_mobile");
        $("#map").removeClass("map");
        $("#map").addClass("map-mobile");
    }
    else{
        $("edit_link").removeClass("details_edit_mobile");
        $("edit_link").addClass("details_edit");
        $("#map").removeClass("map-mobile");
        $("#map").addClass("map");
    }
}

function check_resize(){
    var window_size = window.innerWidth;
    
     if(window_size <= 700){
         $("edit_link").removeClass("details_edit");
         $("edit_link").addClass("details_edit_mobile");
         $("#map").removeClass("map");
         $("#map").addClass("map-mobile");
     }
       else{
           $("edit_link").removeClass("details_edit_mobile");
           $("edit_link").addClass("details_edit");
           $("#map").removeClass("map-mobile");
           $("#map").addClass("map");
       }
}

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var location = {lat: 2.250523, lng: 102.276114};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: location});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: location, map: map});
}
