var request = new XMLHttpRequest();
request.open("GET", "././api.php", false);
request.send(null);
var jsonInterprete = JSON.parse(request.responseText);
var jsonFloors = jsonInterprete.Floors;
var jsonMaps = jsonInterprete.Maps;
var jsonYears = jsonInterprete.Years;
var linkClicked;
var lastHovered;

function unClickLink() {
  if (typeof linkClicked != "undefined") {
    linkClicked.style.fontWeight = "normal";
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "#core_" + lastHovered + ":before {background-color: white;border:2px solid #C8AD7F;transition: background-color 0.5s ease;}";
  }
}

function hoverLeftButton() {
  var styleElem = document.head.appendChild(document.createElement("style"));
  styleElem.innerHTML = "#core_" + lastHovered + ":before {background-color: #C8AD7F;border:2px solid white;transition: background-color 0.5s ease;}";
}

var first_value = true;
var minimum_date = 9999;
var id_year;
for(let i = 0; i < jsonYears.length; i++) {  
    var yearObj = jsonYears[i]; 
      if (yearObj.year < minimum_date){
        minimum_date = yearObj.year;
        id_year = yearObj.id;
      }
}

getFloorsByYear(id_year);

function getFloorsByYear(yearSelected) {
  for(let i = 0; i < jsonMaps.length; i++) {  
    var mapObj = jsonMaps[i]; 
    var leftTimeline = document.getElementById("leftTimeline");
    $('#leftTimeline').empty();
    if (yearSelected == mapObj.annee){
        for(let i = 0; i < jsonFloors.length; i++) {  
          var floorObj = jsonFloors[i]; 
          if (floorObj.id == mapObj.etage){
            leftTimeline.innerHTML += '<div class="entry"><a href="#" id="'+floorObj.identifier+'" style="display: block;height: 100%;outline: none;color:#C8AD7F !important;" onclick="changeMapLayer(\''+mapObj.id+'\')"><div id="core_'+floorObj.identifier+'" class="core"><span>'+floorObj.label+'</span></div></a></div>';
          }
        }
        break;
      }
  }
}
/*

for(let i = 0; i < jsonFloors.length; i++) { // pour chaque marqueur
        var obj = jsonFloors[i]; 
        if (obj.identifier == floor){
          unClickLink();
          document.getElementById(floor).style.fontWeight = "bold";
          linkClicked = document.getElementById(floor);
          lastHovered = floor;
          hoverLeftButton();

          


          changeMapLayer(obj.id);
          return false; // empecher de scroll to the TOP.
        }
      }



document.getElementById('rdc').onclick = function () {
  unClickLink();
  document.getElementById('rdc').style.fontWeight = "bold";
  linkClicked = document.getElementById('rdc');
  lastHovered = "rdc";
  $('#yearsTimeline ol').empty();
  $("#yearsTimeline ol").append('<li><a href="#0" data-date="00/00/1835">1835</a></li>');
  //document.getElementById("navbarItems").append('<li><a href="#0" data-date="00/00/1789">1835</a></li>');

  hoverLeftButton();
  changeMapLayer(1);
  return false; // empecher de scroll to the TOP.
};

document.getElementById('etage1').onclick = function () {
  unClickLink();

  lastHovered = "etage1";
  document.getElementById('etage1').style.fontWeight = "bold";
  linkClicked = document.getElementById('etage1');

  hoverLeftButton();
  changeMapLayer(2);
  return false; // empecher de scroll to the TOP.
};*/