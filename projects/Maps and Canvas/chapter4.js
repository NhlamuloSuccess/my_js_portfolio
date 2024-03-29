var locations = [
    [51.534467,-0.121631, "Springer Nature (Apress Publishers) London, UK"],
    [41.04796,-73.70539,"Purchase College/SUNY, NY, USA"],
    [35.085136,135.776585,"Kyoto, Japan"]
    ];
    var candiv;
    var can;
    var ctx;
    var pl;
    
    function init() {
        var mylat;
        var mylong;
        candiv = document.
createElement("div");
candiv.innerHTML = ("<canvas id='canvas' width='600'height='400'>No canvas </canvas>");
document.body.appendChild(candiv);
can = document.getElementById("canvas");
pl = document.getElementById("place");
ctx = can.getContext("2d");
can.onmousedown = function ()
{ return false; } ;
can.addEventListener('mousemove',showshadow);
can.addEventListener('mousedown',pushcanvasunder);
can.addEventListener("mouseout",clearshadow);
mylat = locations[1][0];
mylong = locations[1][1];
document.getElementById("first").
checked="checked";
makemap(mylat,mylong);
    }
    function pushcanvasunder(ev) {
        can.style.zIndex = 1; 
        pl.style.zIndex = 100;
    }
    function clearshadow(ev) {

        ctx.clearRect(0,0,600,400);
    }
    function showshadow(ev) {
        var mx;
        var my;
        if ( ev.layerX || ev.layerX == 0) {
            mx = ev.layerX;
            my = ev.layerY;
        } else if (ev.offsetX || ev.offsetX== 0) {
            mx = ev.offsetX;
            my = ev.offsetY;
        }
        can.style.cursor = "url('light.gif'),pointer";
        mx = mx+10;
        my = my + 12;
        drawshadowmask(mx,my);
    }
    var canvasAx = 0; 
    var canvasAy = 0;
    var canvasBx = 600; 
var canvasBy = 0;
var canvasCx = 600;
var canvasCy = 400; 
var canvasDx = 0; 
var canvasDy = 400
var holerad = 50;
var grayshadow = "rgba(250,250,250,.8)";
function drawshadowmask(mx,my) {
    ctx.clearRect(0,0,600,400); 
ctx.fillStyle = grayshadow; 
ctx.beginPath(); 
ctx.moveTo(canvasAx,canvasAy); 
ctx.lineTo(canvasBx,canvasBy); 
ctx.lineTo(canvasBx,my);
ctx.lineTo(mx+holerad,my);
ctx.arc(mx,my,holerad,0,Math.PI,true);
ctx.lineTo(canvasAx,my);
ctx.lineTo(canvasAx,canvasAy);
ctx.closePath();
ctx.fill();
ctx.beginPath();
ctx.moveTo(canvasAx,my);
ctx.lineTo(canvasDx,canvasDy);
ctx.lineTo(canvasCx,canvasCy);
ctx.lineTo(canvasBx,my);
ctx.lineTo(mx+holerad,my);
ctx.arc(mx,my,holerad,0,Math.PI,false);
ctx.lineTo(canvasAx,my);
ctx.closePath();
ctx.fill();
}

var listener;
var map; 
var blatlng;
var myOptions;
/*var rxmarker = "rx1.png";
var bxmarker = "bx1.png";*/
function makemap(mylat,mylong) {
    var marker;
    blatlng = new google.maps.LatLng(mylat,mylong);
    myOptions = {
        zoom: 12,
        center: blatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP};

        map = new google.maps.Map(document.
            getElementById("place"), myOptions);
            marker = new google.maps.Marker({
                position: blatlng,
                title: "center",
                icon: rxmarker,
                map: map
            });
            
listener = google.maps.event. addListener(map, 'mouseup',function(event) {checkit(event.latLng);});    
        }
        function checkit(clatlng) { var distance = dist(clatlng,blatlng);
            var marker; 
            distance = round(distance,2);
            var distanceString = String (distance)+" km";
            marker = new google.maps.Marker({
                position: clatlng,
                title: distanceString,
                icon: bxmarker,
                map: map
            });
            var clat = clatlng.lat();
            var clng = clatlng.lng();
            clat = round(clat,4);
            clng = round(clng,4);
    document.getElementById("answer").innerHTML ="The distance from base to most recent marker ("+ clat+", "+clng+") is "+String(distance) +" km.";can.style.zIndex = 100;pl.style.zIndex = 1;}
    function round (num,places) {var factor = Math.pow(10,places);var increment = 5/(factor*10);
    return Math.floor((num+increment)*factor)/factor;}
    function dist(point1, point2) {
        
    
        var R = 6371; 
        
        var lat1 = point1.lat()*Math.PI/180;
        var lat2 = point2.lat()*Math.PI/180 ;
        var lon1 = point1.lng()*Math.PI/180;
        var lon2 = point2.lng()*Math.PI/180;
        var d =Math.acos(Math.sin(lat1)*Math.sin(lat2) + Math.cos(lat1)*Math.cos(lat2) * Math.cos(lon2-lon1)) * R;
        return d;
    }
    function changebase() {
        var mylat;
        var mylong;
        for(var i=0;i<locations.length;i++) {
            if (document.f.loc[i].checked) {
                mylat = locations[i][0];
                mylong = locations[i][1];
                makemap(mylat,mylong);
                document.getElementById("header").innerHTML = "Base location (small red x) is "+locations[i][2];}
            }
            return false;
        }









