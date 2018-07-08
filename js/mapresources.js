

function days() {
    var LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [25, 35],
        iconAnchor:   [30, 30],
        shadowAnchor: [4, 62],
        popupAnchor:  [-15, -36]
    }
});

var hhicon = new LeafIcon({iconUrl: 'img/hh.png'}),
    nothhicon = new LeafIcon({iconUrl: 'img/nothh.png'}),
    soonhhicon = new LeafIcon({iconUrl: 'img/soonhh.png'}),
    endinghhicon = new LeafIcon({iconUrl: 'img/endhh.png'}),
    current = new LeafIcon({iconUrl: 'img/me.png'});

  var geolocate = document.getElementById('geolocate');

  var mymap = L.map('mapid').setView([40.587353, -105.077061], 13);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY2xvcmFuZ2UiLCJhIjoiY2pqNXF4enk0MGVmYTNxcWh0Yzk1aGltMSJ9.GBc2xdGQ_iRYlssBEkX0Aw', {
    maxZoom: 18,
    attribution: '',
    id: 'mapbox.streets'
  }).addTo(mymap);



  setTimeout(function(){



 


  // Define pin colors to use
    var now = new Date();
    var d = now.getDay();
   var today1 = new Date().getHours()
   var today2 = new Date().getMinutes()/60;
   var today = today1+today2;

    var icc = [nothhicon,nothhicon]; range = 117;var hh = {0:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},1:{0: {1:16,2:18},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},2:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},3:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},4:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:16,2:18}},5:{0: {1:9,2:24},1: {1:11,2:24},2: {1:11,2:24},3: {1:11,2:24},4: {1:11,2:24},5: {1:11,2:24},6: {1:9,2:24}},6:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},7:{0: {1:0,2:0},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:0,2:0}},8:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},9:{0: {1:16,2:24},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:24}},10:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},11:{0: {1:0,2:0},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:0,2:0}},12:{0: {1:11,2:16},1: {1:11,2:16},2: {1:11,2:16},3: {1:11,2:16},4: {1:11,2:16},5: {1:11,2:16},6: {1:11,2:16}},13:{0: {1:0,2:0},1: {1:10,2:14},2: {1:14,2:19},3: {1:14,2:19},4: {1:14,2:19},5: {1:14,2:19},6: {1:11,2:16}},14:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},15:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},16:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},17:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},18:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},19:{0: {1:16,2:18},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},20:{0: {1:21,2:23},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:21,2:23}},21:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},22:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},23:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:12,2:20},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},24:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},25:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},26:{0: {1:12,2:19},1: {1:0,2:0},2: {1:0,2:0},3: {1:16,2:21},4: {1:16,2:21},5: {1:0,2:0},6: {1:0,2:0}},27:{0: {1:22,2:24},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:22,2:24},6: {1:22,2:24}},28:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},29:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},30:{0: {1:0,2:0},1: {1:0,2:0},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},31:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},32:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},33:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},34:{0: {1:0,2:0},1: {1:16.3,2:19},2: {1:16.3,2:19},3: {1:16.3,2:19},4: {1:16.3,2:19},5: {1:16.3,2:19},6: {1:0,2:0}},35:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},36:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},37:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},38:{0: {1:16,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},39:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},40:{0: {1:14,2:22},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},41:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},42:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},43:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},44:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},45:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},46:{0: {1:0,2:0},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:16,2:19}},47:{0: {1:16,2:18},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:0,2:0},6: {1:0,2:0}},48:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},49:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},50:{0: {1:15,2:20},1: {1:15,2:20},2: {1:15,2:20},3: {1:15,2:20},4: {1:15,2:20},5: {1:15,2:20},6: {1:15,2:20}},51:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},52:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},53:{0: {1:15,2:19},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:15,2:19}},54:{0: {1:16,2:18},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},55:{0: {1:15,2:18.3},1: {1:15,2:18.3},2: {1:15,2:18.3},3: {1:15,2:18.3},4: {1:15,2:18.3},5: {1:15,2:18.3},6: {1:15,2:18.3}},56:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},57:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},58:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},59:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:0,2:0},6: {1:0,2:0}},60:{0: {1:16,2:19},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:0,2:0}},61:{0: {1:11,2:22},1: {1:16,2:18},2: {1:11,2:17.3},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},62:{0: {1:11,2:24},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:11,2:19}},63:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},64:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},65:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},66:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},67:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},68:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},69:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},70:{0: {1:15,2:19},1: {1:11,2:20.3},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:15,2:19}},71:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},72:{0: {1:0,2:0},1: {1:15.3,2:18},2: {1:15.3,2:18},3: {1:15.3,2:18},4: {1:15.3,2:18},5: {1:0,2:0},6: {1:0,2:0}},73:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},74:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},75:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},76:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},77:{0: {1:16,2:18},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},78:{0: {1:10,2:18},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:14,2:18},6: {1:10,2:18}},79:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},80:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},81:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},82:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},83:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},84:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},85:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},86:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},87:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},88:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},89:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},90:{0: {1:11,2:21},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},91:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},92:{0: {1:16,2:18},1: {1:16,2:18},2: {1:16,2:24},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},93:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},94:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},95:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},96:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},97:{0: {1:11.3,2:14},1: {1:11,2:14},2: {1:11,2:14},3: {1:11,2:14},4: {1:11,2:14},5: {1:11,2:14},6: {1:11.3,2:14}},98:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},99:{0: {1:0,2:0},1: {1:17,2:18},2: {1:17,2:18},3: {1:17,2:18},4: {1:17,2:18},5: {1:17,2:18},6: {1:0,2:0}},100:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},101:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},102:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},103:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},104:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},105:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},106:{0: {1:18,2:24},1: {1:0,2:0},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:0,2:0},6: {1:0,2:0}},107:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},108:{0: {1:9.3,2:24},1: {1:10.3,2:19},2: {1:10.3,2:19},3: {1:10.3,2:19},4: {1:10.3,2:19},5: {1:10.3,2:19},6: {1:9.3,2:19}},109:{0: {1:0,2:0},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:0,2:0}},110:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},111:{0: {1:11,2:19},1: {1:11,2:24},2: {1:11,2:23},3: {1:11,2:24},4: {1:11,2:24},5: {1:11,2:19},6: {1:11,2:19}},112:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},113:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},114:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},115:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},116:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}}};
for(i=0; i<range; i++) {

     if (today >=hh[i][d][1] && today <= hh[i][d][2]-1) {
            icc[i]=hhicon;   //now
            } else if (today >=hh[i][d][1]-1 && today <= hh[i][d][1]) {
            icc[i]=soonhhicon;  //soon
            } else if (today >=hh[i][d][2]-1&& today <= hh[i][d][2]) {
            icc[i]=endinghhicon;  //ending
            } else {icc[i]=nothhicon;}

 //   if (today >=hh[i][d][1] && today <= hh[i][d][2]) {
 //      icc[i]=hhicon;
 //      } else {
 //      icc[i]=nothhicon;
 //      }
    }


  // Define gps locations
var gps=[
[40.531728,-105.076154],
[40.584597,-105.077343],
[40.578208,-105.082031],
[40.620443,-105.009394],
[40.522584,-105.025332],
[40.579592,-105.079256],
[40.579048,-105.076771],
[40.542238,-105.072501],
[40.587241,-105.076707],
[40.587246,-105.078137],
[40.581021,-105.076772],
[40.523828,-105.027387],
[40.566203,-105.07862],
[40.588161,-105.074807],
[40.585295,-105.077524],
[40.587683,-105.075332],
[40.523872,-105.0759],
[40.546643,-105.077687],
[40.571671,-105.076622],
[40.543434,-105.073653],
[40.537533,-105.050901],
[40.543507,-105.074053],
[40.578286,-105.07652],
[40.584393,-105.077686],
[40.58742,-105.07789],
[40.587391,-105.075629],
[40.589994,-105.076655],
[40.586179,-105.076767],
[40.522758,-105.011408],
[40.549796,-105.077672],
[40.523087,-105.060349],
[40.566077,-105.056792],
[40.523729,-105.033248],
[40.551049,-105.05831],
[40.588436,-105.074501],
[40.587229,-105.074097],
[40.523744,-105.023917],
[40.585125,-105.046107],
[40.585799,-105.078547],
[40.57434,-105.100224],
[40.588875,-105.075542],
[40.551049,-105.05831],
[40.57434,-105.100224],
[40.522662,-105.023278],
[40.551049,-105.05831],
[40.539342,-105.075287],
[40.58804,-105.076588],
[40.543654,-105.074724],
[40.589672,-105.045627],
[40.584532,-105.07735],
[40.588018,-105.074555],
[40.555218,-105.077707],
[40.554659,-105.116577],
[40.551049,-105.05831],
[40.587825,-105.077479],
[40.585365,-105.078164],
[40.584425,-105.076705],
[40.574175,-105.097887],
[40.575013,-105.097076],
[40.588992,-105.076347],
[40.54055,-105.076428],
[40.579048,-105.076771],
[40.587447,-105.076354],
[40.587229,-105.074097],
[40.586442,-105.077499],
[40.550355,-105.07907],
[40.587355,-105.073163],
[40.590092,-105.07255],
[40.588638,-105.077392],
[40.551181,-105.07652],
[40.566624,-105.078691],
[40.593415,-105.066874],
[40.572982,-105.076702],
[40.549144,-105.076063],
[40.589475,-105.063322],
[40.586066,-105.077451],
[40.52168,-105.040327],
[40.578337,-105.078324],
[40.588324,-105.074746],
[40.588152,-105.074395],
[40.588736,-105.0774],
[40.566077,-105.056792],
[40.586822,-105.077238],
[40.586729,-105.078145],
[40.574369,-105.098351],
[40.590139,-105.075401],
[40.521709,-105.060034],
[40.589493,-105.077513],
[40.561498,-105.039806],
[40.58682,-105.07865],
[40.543309,-105.073813],
[40.589929,-105.058724],
[40.587333,-105.075926],
[40.586603,-105.077275],
[40.588477,-105.076657],
[40.574906,-105.114704],
[40.585057,-105.076543],
[40.567421,-105.079369],
[40.587229,-105.074097],
[40.585957,-105.07833],
[40.586451,-105.078568],
[40.52191,-105.042134],
[40.577893,-105.076406],
[40.582315,-105.079252],
[40.578552,-105.076792],
[40.587241,-105.076707],
[40.575132,-105.096707],
[40.522662,-105.023278],
[40.584796,-105.076611],
[40.542402,-105.07652],
[40.551113,-105.077616],
[40.587395,-105.078292],
[40.589369,-105.074458],
[40.568158,-105.076488],
[40.590724,-105.073266],
[40.541968,-105.079037],
 // Define text for popups
 var pop =["<b>Name:</b>3 Margaritas<br><b>Address:</b><a href='http://maps.google.com/?q=4010 S College Ave Fort Collins CO' target='_system' title='Directions'>4010 S College Ave Fort Collins CO</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Ace Gillett's Lounge<br><b>Address:</b><a href='http://maps.google.com/?q=239 South College Avenue, Fort Collins 80524' target='_system' title='Directions'>239 South College Avenue, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:4pm-6pm<br>Monday:4pm-6pm<br>Tuesday:4pm-6pm<br>Wednesday:4pm-6pm<br>Thursday:4pm-6pm<br>Friday:4pm-6pm<br>Saturday:4pm-6pm<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Alley Cat<br><b>Address:</b><a href='http://maps.google.com/?q=120 1/2 W Laurel St, Fort Collins 80524' target='_system' title='Directions'>120 1/2 W Laurel St, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Anheuser-Busch Tour Center<br><b>Address:</b><a href='http://maps.google.com/?q=2351 Busch Drive, Fort Collins, CO 80524' target='_system' title='Directions'>2351 Busch Drive, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Austin's American Grill<br><b>Address:</b><a href='http://maps.google.com/?q=2815 E Harmony Rd, Fort Collins 80528' target='_system' title='Directions'>2815 E Harmony Rd, Fort Collins 80528</a><br><b>Happy Hour Times:</b><br>Sunday:3pm-6pm<br>Monday:3pm-6pm<br>Tuesday:3pm-6pm<br>Wednesday:3pm-6pm<br>Thursday:3pm-6pm<br>Friday:3pm-6pm<br>Saturday:4pm-6pm<br><b>Happy Hour Deals:</b><br>Wide range of drink and food specials",
"<b>Name:</b>Avogadro's Number<br><b>Address:</b><a href='http://maps.google.com/?q=605 S Mason Street, Fort Collins 80524' target='_system' title='Directions'>605 S Mason Street, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:9am-12pm<br>Monday:11am-12pm<br>Tuesday:11am-12pm<br>Wednesday:11am-12pm<br>Thursday:11am-12pm<br>Friday:11am-12pm<br>Saturday:9am-12pm<br><b>Happy Hour Deals:</b><br>Daily Specials",
"<b>Name:</b>Bann Thai<br><b>Address:</b><a href='http://maps.google.com/?q=626 S College Ave, Fort Collins 80524' target='_system' title='Directions'>626 S College Ave, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Bar Louie<br><b>Address:</b><a href='http://maps.google.com/?q=321 E Foothills Pkwy, Fort Collins, CO 80525' target='_system' title='Directions'>321 E Foothills Pkwy, Fort Collins, CO 80525</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:4pm-7pm<br>Tuesday:4pm-7pm<br>Wednesday:4pm-7pm<br>Thursday:4pm-7pm<br>Friday:4pm-7pm<br>Saturday:<br><b>Happy Hour Deals:</b><br>$3.50 Drafts \n $4.50 Wines \n $5.50 Signature Martinis \n Half Price Select Apps and Flatbreads",
"<b>Name:</b>Beau Jo's Pizza<br><b>Address:</b><a href='http://maps.google.com/?q=100 N College Ave, Fort Collins 80524' target='_system' title='Directions'>100 N College Ave, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:3pm-6pm<br>Monday:3pm-6pm<br>Tuesday:3pm-6pm<br>Wednesday:3pm-6pm<br>Thursday:3pm-6pm<br>Friday:3pm-6pm<br>Saturday:3pm-6pm<br><b>Happy Hour Deals:</b><br>Everyday: $1 off Wells, Wines and Drafts \n Monday \n $1 off Domestic Bottles & Drafts \n Tuesday \n $1 off Microbrews \n Wednesday \n $1 off all Gluten Free beer \n $3 Glass of House Wine \n Thursday \n $3 off Draft Pitchers \n $3 off Bottles of Wine \n Friday \n $6 Fat Tire Pints \n $3 Refills- Keep the Glass \n Saturday \n $3 Seasonal beers \n Sunday \n $3 Bloody Marys",
"<b>Name:</b>Big Al's Burgers & Dogs<br><b>Address:</b><a href='http://maps.google.com/?q=140 West Mountain Ave, Fort Collins 80524' target='_system' title='Directions'>140 West Mountain Ave, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:4pm-12pm<br>Monday:4pm-6pm<br>Tuesday:4pm-6pm<br>Wednesday:4pm-6pm<br>Thursday:4pm-6pm<br>Friday:4pm-6pm<br>Saturday:4pm-12pm<br><b>Happy Hour Deals:</b><br>Well Martini: $6.50 \n 100% Agave Margarita: $6.50 \n Draught Pine & Bottled Beer: $1.00 off \n Wine by the Glass & Well Drinks: $1.00 off \n Range of small bites and appetizers",
"<b>Name:</b>Big City Burrito<br><b>Address:</b><a href='http://maps.google.com/?q=510 S College Ave, Fort Collins 80524' target='_system' title='Directions'>510 S College Ave, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>BJ's Restaurant & Brewhouse<br><b>Address:</b><a href='http://maps.google.com/?q=2670 E Harmony Rd, Fort Collins, CO 80525' target='_system' title='Directions'>2670 E Harmony Rd, Fort Collins, CO 80525</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:3pm-7pm<br>Tuesday:3pm-7pm<br>Wednesday:3pm-7pm<br>Thursday:3pm-7pm<br>Friday:3pm-7pm<br>Saturday:<br><b>Happy Hour Deals:</b><br>$2 Domestic Bottles \n $3 Wine \n $4 Calls \n $1 off draft beer and cocktails \n 1/2 off most apps and mini pizzas",
"<b>Name:</b>Black Bottle Brewing<br><b>Address:</b><a href='http://maps.google.com/?q=1611 S. College Ave., Ste 1609, Fort Collins, CO 80525' target='_system' title='Directions'>1611 S. College Ave., Ste 1609, Fort Collins, CO 80525</a><br><b>Happy Hour Times:</b><br>Sunday:11am-4pm<br>Monday:11am-4pm<br>Tuesday:11am-4pm<br>Wednesday:11am-4pm<br>Thursday:11am-4pm<br>Friday:11am-4pm<br>Saturday:11am-4pm<br><b>Happy Hour Deals:</b><br>$1 off Black Bottle Beers \n $4 well drinks",
"<b>Name:</b>Blind Pig<br><b>Address:</b><a href='http://maps.google.com/?q=214 Linden St, Fort Collins, CO 80524' target='_system' title='Directions'>214 Linden St, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:10am-2pm<br>Tuesday:2pm-7pm<br>Wednesday:2pm-7pm<br>Thursday:2pm-7pm<br>Friday:2pm-7pm<br>Saturday:11am-4pm<br><b>Happy Hour Deals:</b><br>Tues-Fri: \n $3 select micros \n $2.50 domestics \n $3 wells \n $4 wine \n $5-7 select appetizers \n Saturdays: \n $12 select micro pitchers \n $10 domestic pitchers \n $3 select cocktails \n $1 mimosas \n $5 build your own bloody mary bar \n $14 all you can eat brunch.",
"<b>Name:</b>Blue Agave<br><b>Address:</b><a href='http://maps.google.com/?q=201 S College Avenue, Fort Collins, CO 80524' target='_system' title='Directions'>201 S College Avenue, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:3pm-6pm<br>Tuesday:3pm-6pm<br>Wednesday:3pm-6pm<br>Thursday:3pm-6pm<br>Friday:3pm-6pm<br>Saturday:<br><b>Happy Hour Deals:</b><br>$5 Margaritas \n $2 off Wines \n $3 Bottled Beer",
"<b>Name:</b>Bondi's Beach Bar<br><b>Address:</b><a href='http://maps.google.com/?q=11 Old Town Square #120, Fort Collins, CO 80524' target='_system' title='Directions'>11 Old Town Square #120, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:3pm-6pm<br>Friday:3pm-6pm<br>Saturday:3pm-6pm<br><b>Happy Hour Deals:</b><br>$2 wells \n $3 draughts \n $4 select wines",
"<b>Name:</b>Buffalo Wild Wings<br><b>Address:</b><a href='http://maps.google.com/?q=150 E. Harmony Road, 2A, Fort Collins, CO 80525' target='_system' title='Directions'>150 E. Harmony Road, 2A, Fort Collins, CO 80525</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Cafe mexacali<br><b>Address:</b><a href='http://maps.google.com/?q=2925 S College Ave Fort Collins CO' target='_system' title='Directions'>2925 S College Ave Fort Collins CO</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Cafe Vino<br><b>Address:</b><a href='http://maps.google.com/?q=1200 S College Ave., Fort Collins 80524' target='_system' title='Directions'>1200 S College Ave., Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Casa Del Matador<br><b>Address:</b><a href='http://maps.google.com/?q=341 E Foothills Pkwy #110 Fort Collins, CO 80525' target='_system' title='Directions'>341 E Foothills Pkwy #110 Fort Collins, CO 80525</a><br><b>Happy Hour Times:</b><br>Sunday:4pm-6pm<br>Monday:4pm-6pm<br>Tuesday:4pm-6pm<br>Wednesday:4pm-6pm<br>Thursday:4pm-6pm<br>Friday:4pm-6pm<br>Saturday:4pm-6pm<br><b>Happy Hour Deals:</b><br>Frozen Lime Margarita: $4 \n Frozen Mango Margarita: $6 \n Coin Margarita: $5 \n Coors Light: $4 \n Tecate: $4 \n Wine: $5 \n Street Tacos: $2 for 1, $5 for 3, $8 for 5 \n Wide Selection of Happy Hour Foods",
"<b>Name:</b>CB & Potts Restaurant & Craft Beer - Collindale<br><b>Address:</b><a href='http://maps.google.com/?q=1441 E Horsetooth Rd, Fort Collins, CO 80525' target='_system' title='Directions'>1441 E Horsetooth Rd, Fort Collins, CO 80525</a><br><b>Happy Hour Times:</b><br>Sunday:9pm-11pm<br>Monday:3pm-6pm<br>Tuesday:3pm-6pm<br>Wednesday:3pm-6pm<br>Thursday:3pm-6pm<br>Friday:3pm-6pm<br>Saturday:9pm-11pm<br><b>Happy Hour Deals:</b><br>$3.50 18oz house drafts, wells, wine & Potts Teas \n $3 to $5.50 select appetizers",
"<b>Name:</b>CB & Potts Restaurant & Craft Beer - Foothills<br><b>Address:</b><a href='http://maps.google.com/?q=195 E Foothills Parkway, Fort Collins CO 80525' target='_system' title='Directions'>195 E Foothills Parkway, Fort Collins CO 80525</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:3pm-6pm<br>Tuesday:3pm-6pm<br>Wednesday:3pm-6pm<br>Thursday:3pm-6pm<br>Friday:3pm-6pm<br>Saturday:<br><b>Happy Hour Deals:</b><br>$4 drafts \n $4.50 wells \n $6 wine",
"<b>Name:</b>Cheba Hut Toasted Subs<br><b>Address:</b><a href='http://maps.google.com/?q=104 E Laurel St, Fort Collins 80524' target='_system' title='Directions'>104 E Laurel St, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Choice City Butcher & Deli<br><b>Address:</b><a href='http://maps.google.com/?q=104 W Olive St, Fort Collins 80524' target='_system' title='Directions'>104 W Olive St, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:0pm-8pm<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>Wed Beer Night! Check out the Facebook page for the weekly deal",
"<b>Name:</b>Comet Chicken<br><b>Address:</b><a href='http://maps.google.com/?q=126 W. Mountain Avenue, Fort Collins, CO 80524' target='_system' title='Directions'>126 W. Mountain Avenue, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Coopersmith's Pub & Brewing<br><b>Address:</b><a href='http://maps.google.com/?q=5 Old Town Sq, Fort Collins 80524' target='_system' title='Directions'>5 Old Town Sq, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:3pm-6pm<br>Tuesday:3pm-6pm<br>Wednesday:3pm-6pm<br>Thursday:3pm-6pm<br>Friday:3pm-6pm<br>Saturday:<br><b>Happy Hour Deals:</b><br>Mugs: $2.75 \n 20 Ounce Pints: $4 \n Pitchers: $12 \n Bargain Priced Pool",
"<b>Name:</b>CopperMuse Distillery<br><b>Address:</b><a href='http://maps.google.com/?q=244 N. College Ave, Fort Collins, CO 80524' target='_system' title='Directions'>244 N. College Ave, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:0pm-7pm<br>Monday:<br>Tuesday:<br>Wednesday:4pm-9pm<br>Thursday:4pm-9pm<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>Sundays: $2 off Bloody Mary�s \n Wed-Thur: \n $6 select cocktails including mules \n $2 off select appetizers",
"<b>Name:</b>Crown Pub<br><b>Address:</b><a href='http://maps.google.com/?q=134 S College Ave, Fort Collins 80524' target='_system' title='Directions'>134 S College Ave, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:10pm-12pm<br>Monday:3pm-6pm<br>Tuesday:3pm-6pm<br>Wednesday:3pm-6pm<br>Thursday:3pm-6pm<br>Friday:10pm-12pm<br>Saturday:10pm-12pm<br><b>Happy Hour Deals:</b><br>Premium Wells: $3.50 \n Martini�s & Manhattan's: $5.00  \n Select Draft Beers: $3.50 \n House Wines: $3.50 \n A range of food specials",
"<b>Name:</b>DC Oaks<br><b>Address:</b><a href='http://maps.google.com/?q=3581 E. Harmony Road Fort Collins CO' target='_system' title='Directions'>3581 E. Harmony Road Fort Collins CO</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:3pm-6pm<br>Tuesday:3pm-6pm<br>Wednesday:3pm-6pm<br>Thursday:3pm-6pm<br>Friday:3pm-6pm<br>Saturday:<br><b>Happy Hour Deals:</b><br>$3 select brews <br> $4 wells <br> $5 house wines",
"<b>Name:</b>Dickies BBQ<br><b>Address:</b><a href='http://maps.google.com/?q=2721 S. College Ave. Fort Collins CO' target='_system' title='Directions'>2721 S. College Ave. Fort Collins CO</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Dominic's Restaurant<br><b>Address:</b><a href='http://maps.google.com/?q=931 E. Harmony Road, Fort Collins Shopping Cener, Fort Collins, CO 80525' target='_system' title='Directions'>931 E. Harmony Road, Fort Collins Shopping Cener, Fort Collins, CO 80525</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:4pm-6pm<br>Wednesday:4pm-6pm<br>Thursday:4pm-6pm<br>Friday:4pm-6pm<br>Saturday:4pm-6pm<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>East Moon Asian Bistro<br><b>Address:</b><a href='http://maps.google.com/?q=1624 S Lemay Ave, Fort Collins 80525' target='_system' title='Directions'>1624 S Lemay Ave, Fort Collins 80525</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>East Moon Asian Bistro & Hibachi<br><b>Address:</b><a href='http://maps.google.com/?q=2400 E Harmony Rd #102, Fort Collins 80528' target='_system' title='Directions'>2400 E Harmony Rd #102, Fort Collins 80528</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Elevation 5003 Distillery<br><b>Address:</b><a href='http://maps.google.com/?q=2601 S Lemay Ave Unit 8, Fort Collins, CO 80525' target='_system' title='Directions'>2601 S Lemay Ave Unit 8, Fort Collins, CO 80525</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Elliot's Martini Bar<br><b>Address:</b><a href='http://maps.google.com/?q=234 Linden St, Fort Collins, CO 80524' target='_system' title='Directions'>234 Linden St, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:4.3pm-7pm<br>Tuesday:4.3pm-7pm<br>Wednesday:4.3pm-7pm<br>Thursday:4.3pm-7pm<br>Friday:4.3pm-7pm<br>Saturday:<br><b>Happy Hour Deals:</b><br>$2 off martinis \n $2 off tapas",
"<b>Name:</b>Emporium Kitchen and Wine Market<br><b>Address:</b><a href='http://maps.google.com/?q=378 Walnut St, Fort Collins, CO 80524' target='_system' title='Directions'>378 Walnut St, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:3pm-6pm<br>Monday:3pm-6pm<br>Tuesday:3pm-6pm<br>Wednesday:3pm-6pm<br>Thursday:3pm-6pm<br>Friday:3pm-6pm<br>Saturday:3pm-6pm<br><b>Happy Hour Deals:</b><br>Aperol Spritz, Gin and Tonic, Martini, Manhattan, Local Draft Beer, French 75, Negroni, Old Fashioned: $5 \n House Red Wine, House White Wine, Rose of the Day: $6 \n Selection of Happy Hour Foods",
"<b>Name:</b>Famous Dave's BBQ<br><b>Address:</b><a href='http://maps.google.com/?q=2880 E. Harmony Road Fort Collins CO' target='_system' title='Directions'>2880 E. Harmony Road Fort Collins CO</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Feisty Spirits Distillery<br><b>Address:</b><a href='http://maps.google.com/?q=1708 East Lincoln Ave. #1, Fort Collins, CO 80524' target='_system' title='Directions'>1708 East Lincoln Ave. #1, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Fish Restaurant<br><b>Address:</b><a href='http://maps.google.com/?q=150 W Oak Street, Fort Collins 80524' target='_system' title='Directions'>150 W Oak Street, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:4pm-6pm<br>Monday:3pm-6pm<br>Tuesday:3pm-6pm<br>Wednesday:3pm-6pm<br>Thursday:3pm-6pm<br>Friday:3pm-6pm<br>Saturday:3pm-6pm<br><b>Happy Hour Deals:</b><br>Extensive menu of discounted & Happy Hour only food items as well as sixteen different half price wines and discounts on draft beer and cocktails",
"<b>Name:</b>Five Guys Burgers and Fries<br><b>Address:</b><a href='http://maps.google.com/?q=1335 W Elizabeth St, Fort Collins 80521' target='_system' title='Directions'>1335 W Elizabeth St, Fort Collins 80521</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Forge Publick House<br><b>Address:</b><a href='http://maps.google.com/?q=255 Old Firehouse Alley, Fort Collins, CO 80524' target='_system' title='Directions'>255 Old Firehouse Alley, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:2pm-10pm<br>Monday:4pm-6pm<br>Tuesday:4pm-6pm<br>Wednesday:4pm-6pm<br>Thursday:4pm-6pm<br>Friday:4pm-6pm<br>Saturday:4pm-6pm<br><b>Happy Hour Deals:</b><br>$2 off select drafts",
"<b>Name:</b>Fox and Crow<br><b>Address:</b><a href='http://maps.google.com/?q=2601 S Lemay Ave Suite #9, Fort Collins, CO 80525' target='_system' title='Directions'>2601 S Lemay Ave Suite #9, Fort Collins, CO 80525</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:4pm-6pm<br>Tuesday:4pm-6pm<br>Wednesday:4pm-6pm<br>Thursday:4pm-6pm<br>Friday:4pm-6pm<br>Saturday:<br><b>Happy Hour Deals:</b><br>1/2 off beer and cider \n Almost wines 1/2 off \n $6 Mini cheeseboard \n Other food specials",
"<b>Name:</b>Fuzzy's Taco Shop - Elizabeth<br><b>Address:</b><a href='http://maps.google.com/?q=1335 W. Elizabeth Street, Fort Collins, CO 80521' target='_system' title='Directions'>1335 W. Elizabeth Street, Fort Collins, CO 80521</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Fuzzy's Taco Shop - Harmony<br><b>Address:</b><a href='http://maps.google.com/?q=2909 E. Harmony Road, Fort Collins, CO 80528' target='_system' title='Directions'>2909 E. Harmony Road, Fort Collins, CO 80528</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Garlic Knot<br><b>Address:</b><a href='http://maps.google.com/?q=2601 S. Lemay Ave Fort Collins CO' target='_system' title='Directions'>2601 S. Lemay Ave Fort Collins CO</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Gilded Goat Brewing<br><b>Address:</b><a href='http://maps.google.com/?q=3500 S. College Avenue, Fort Collins, CO 80525' target='_system' title='Directions'>3500 S. College Avenue, Fort Collins, CO 80525</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>High Point<br><b>Address:</b><a href='http://maps.google.com/?q=146 N College Ave, Fort Collins, CO 80524' target='_system' title='Directions'>146 N College Ave, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:4pm-7pm<br>Tuesday:4pm-7pm<br>Wednesday:4pm-7pm<br>Thursday:4pm-7pm<br>Friday:4pm-7pm<br>Saturday:4pm-7pm<br><b>Happy Hour Deals:</b><br>$2 PBR and Bud Lite \n $3 Wells \n $3.25 drafts \n $3.50 wine",
"<b>Name:</b>Hop Grenade<br><b>Address:</b><a href='http://maps.google.com/?q=347 E. FOOTHILLS PKWY,  #120 FORT COLLINS, CO 80525' target='_system' title='Directions'>347 E. FOOTHILLS PKWY,  #120 FORT COLLINS, CO 80525</a><br><b>Happy Hour Times:</b><br>Sunday:4pm-6pm<br>Monday:4pm-6pm<br>Tuesday:4pm-6pm<br>Wednesday:4pm-6pm<br>Thursday:4pm-6pm<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>$1 Off Drafts \n $5 House Wine \n Happy Hour Food Menu",
"<b>Name:</b>Horse & Dragon Brewing Company<br><b>Address:</b><a href='http://maps.google.com/?q=124 Racquette Drive, Fort Collins, CO 80524' target='_system' title='Directions'>124 Racquette Drive, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>HuHot Mongolian Grill<br><b>Address:</b><a href='http://maps.google.com/?q=249 S College Ave, Fort Collins 80524' target='_system' title='Directions'>249 S College Ave, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Illegal Pete's<br><b>Address:</b><a href='http://maps.google.com/?q=320 Walnut Street, Fort Collins, CO 80524' target='_system' title='Directions'>320 Walnut Street, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:3pm-8pm<br>Monday:3pm-8pm<br>Tuesday:3pm-8pm<br>Wednesday:3pm-8pm<br>Thursday:3pm-8pm<br>Friday:3pm-8pm<br>Saturday:3pm-8pm<br><b>Happy Hour Deals:</b><br>$2.50 Coors Lights & Coors Drafts \n $3.50 Select Craft Drafts \n $4 House Margaritas \n $3 Wells \n Free Chips and Salsa w/ Bar purchase",
"<b>Name:</b>Inca<br><b>Address:</b><a href='http://maps.google.com/?q=2413 South College Fort Collins CO' target='_system' title='Directions'>2413 South College Fort Collins CO</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Intersect Brewing<br><b>Address:</b><a href='http://maps.google.com/?q=2160 W. Drake Road, Fort Collins, CO 80526' target='_system' title='Directions'>2160 W. Drake Road, Fort Collins, CO 80526</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Island Grill<br><b>Address:</b><a href='http://maps.google.com/?q=2601 S Lemay Ave Unit 12, Fort Collins 80525' target='_system' title='Directions'>2601 S Lemay Ave Unit 12, Fort Collins 80525</a><br><b>Happy Hour Times:</b><br>Sunday:3pm-7pm<br>Monday:3pm-7pm<br>Tuesday:3pm-7pm<br>Wednesday:3pm-7pm<br>Thursday:3pm-7pm<br>Friday:3pm-7pm<br>Saturday:3pm-7pm<br><b>Happy Hour Deals:</b><br>$3.25 Domestic Pints \n $3.00 Shot Specials \n $3.50 Well Drinks \n $4.25 Micro Beer Pints \n $4.00 House Wines \n $5.00 Margaritas \n $6.00 House Martinis",
"<b>Name:</b>Jax Fish House & Oyster Bar<br><b>Address:</b><a href='http://maps.google.com/?q=123 N College Ave., Fort Collins, CO, Fort Collins 80524' target='_system' title='Directions'>123 N College Ave., Fort Collins, CO, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:4pm-6pm<br>Monday:4pm-6pm<br>Tuesday:4pm-6pm<br>Wednesday:4pm-6pm<br>Thursday:4pm-6pm<br>Friday:4pm-6pm<br>Saturday:4pm-6pm<br><b>Happy Hour Deals:</b><br>Numerous food and drink specials including a wide selection of oysters, mussels, and shrimp",
"<b>Name:</b>Jay's Bistro<br><b>Address:</b><a href='http://maps.google.com/?q=135 W Oak St, Fort Collins 80524' target='_system' title='Directions'>135 W Oak St, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:3pm-6.3pm<br>Monday:3pm-6.3pm<br>Tuesday:3pm-6.3pm<br>Wednesday:3pm-6.3pm<br>Thursday:3pm-6.3pm<br>Friday:3pm-6.3pm<br>Saturday:3pm-6.3pm<br><b>Happy Hour Deals:</b><br>Cocktails: $5 \n Martinis: $6 \n Wine by the Glass: $5 \n Selected Draft Beers: $3.50",
"<b>Name:</b>Jeju Restaurant<br><b>Address:</b><a href='http://maps.google.com/?q=238 S College Ave, Fort Collins 80524' target='_system' title='Directions'>238 S College Ave, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>House Hot Sake $2.50 (small) $5.00 (large) \n House Wine $5.00 \n Sake Bomb $2.00 \n ODELL IPA (FT. COLLINS) $3.00 \n Kirin Ichiban (draft) $3.00 \n New Belgium (draft) $3.00 \n Corona (bottle) $2.50 \n Coors Light (bottle) $2.50 \n Bud Light (bottle) $2.50 \n Wide range of sushi specials",
"<b>Name:</b>Jim's Wings<br><b>Address:</b><a href='http://maps.google.com/?q=1205 W Elizabeth St Ste C, Fort Collins 80521' target='_system' title='Directions'>1205 W Elizabeth St Ste C, Fort Collins 80521</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Krazy Karl's Pizza<br><b>Address:</b><a href='http://maps.google.com/?q=1124 W. Elizabeth St., Fort Collins 80521' target='_system' title='Directions'>1124 W. Elizabeth St., Fort Collins 80521</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>La Luz Mexican Grill<br><b>Address:</b><a href='http://maps.google.com/?q=200 Walnut Street, Fort Collins, CO 80524' target='_system' title='Directions'>200 Walnut Street, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:3pm-6pm<br>Tuesday:3pm-6pm<br>Wednesday:3pm-6pm<br>Thursday:3pm-6pm<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>$3 Shots and Drafts \n $5 Jefe, Del Sol, Pomegranate Marg, MND & Lunch Box",
"<b>Name:</b>Longhorn Steakhouse<br><b>Address:</b><a href='http://maps.google.com/?q=3450 S College Ave, Fort Collins, CO 80525' target='_system' title='Directions'>3450 S College Ave, Fort Collins, CO 80525</a><br><b>Happy Hour Times:</b><br>Sunday:4pm-7pm<br>Monday:4pm-7pm<br>Tuesday:4pm-7pm<br>Wednesday:4pm-7pm<br>Thursday:4pm-7pm<br>Friday:4pm-7pm<br>Saturday:<br><b>Happy Hour Deals:</b><br>Cocktails: $5 \n Wine: $4 \n Domestic Drafts: $3 \n Chili Cheese Fries: $5 \n Spicy Chicken Bites: $4 \n Fried Pickles: $3",
"<b>Name:</b>Los Tarascos<br><b>Address:</b><a href='http://maps.google.com/?q=626 S College Ave, Fort Collins 80524' target='_system' title='Directions'>626 S College Ave, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:11am-10pm<br>Monday:4pm-6pm<br>Tuesday:11am-5.3pm<br>Wednesday:4pm-6pm<br>Thursday:4pm-6pm<br>Friday:4pm-6pm<br>Saturday:4pm-6pm<br><b>Happy Hour Deals:</b><br>House Margaritas $8.00 \n Gold House Pitcher $17.00 \n Classic Margaritas $4.25 \n Classic Pitchers $19 \n Imported Beer $2 \n Domestic Beer $2 \n Tuesdays - Lady's Day (all day) \n Sunday - Men's Day (all day) \n 2 for 1 on House Margs, Classic Margs, Beers, and Wines \n Wed - Buy a Pitcher and Get a Free App 11am-4pm & 6pm-10pm",
"<b>Name:</b>Lucky Joes<br><b>Address:</b><a href='http://maps.google.com/?q=25 Old Town Square, Fort Collins, CO 80524' target='_system' title='Directions'>25 Old Town Square, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:11am-12pm<br>Monday:3pm-7pm<br>Tuesday:3pm-7pm<br>Wednesday:3pm-7pm<br>Thursday:3pm-7pm<br>Friday:3pm-7pm<br>Saturday:11am-7pm<br><b>Happy Hour Deals:</b><br>Monday-Friday \n $1 off wells, wines, and drafts \n Saturday \n $1.50 Bud and Coors \n $2.50 wells and micros \n $3.50 Guinness \n $1 off wines \n Monday \n $3.50 burger baskets \n $2.50 pints of 90 Schilling, 5 Barrel, Odell IPA \n Tuesday \n $2.50 Guinness pints all day \n Wednesday \n $2.50 You Call It 7pm-close \n Thursday \n $3 pints w/ $3 bomb shots \n Sunday \n $2 Bloody Marys, well vodka drinks, and green chili \n $2.50 New Belgium",
"<b>Name:</b>Magic Rat<br><b>Address:</b><a href='http://maps.google.com/?q=378 Walnut St, Fort Collins, CO 80524' target='_system' title='Directions'>378 Walnut St, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Mainline<br><b>Address:</b><a href='http://maps.google.com/?q=125 S College Ave, Fort Collins, CO 80524' target='_system' title='Directions'>125 S College Ave, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:3pm-6pm<br>Monday:3pm-6pm<br>Tuesday:3pm-6pm<br>Wednesday:3pm-6pm<br>Thursday:3pm-6pm<br>Friday:3pm-6pm<br>Saturday:3pm-6pm<br><b>Happy Hour Deals:</b><br>$3 craft beer cocktails \n $3.5 wells \n $1.5 off Breck and Wynkoop drafts \n $5 house wines",
"<b>Name:</b>Maxline Brewing<br><b>Address:</b><a href='http://maps.google.com/?q=2724 McClelland Drive Unit 190, Fort Collins, CO 80525' target='_system' title='Directions'>2724 McClelland Drive Unit 190, Fort Collins, CO 80525</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Melting Pot<br><b>Address:</b><a href='http://maps.google.com/?q=334 E Mountain Ave, Fort Collins 80524' target='_system' title='Directions'>334 E Mountain Ave, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Mobb Mountain Distillers<br><b>Address:</b><a href='http://maps.google.com/?q=400 Linden Street, Fort Collins, CO 80524' target='_system' title='Directions'>400 Linden Street, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Moes Original BBQ<br><b>Address:</b><a href='http://maps.google.com/?q=181 N College Ave' target='_system' title='Directions'>181 N College Ave</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Moot House<br><b>Address:</b><a href='http://maps.google.com/?q=2626 S College Ave, Fort Collins 80525' target='_system' title='Directions'>2626 S College Ave, Fort Collins 80525</a><br><b>Happy Hour Times:</b><br>Sunday:3pm-6pm<br>Monday:3pm-6pm<br>Tuesday:3pm-6pm<br>Wednesday:3pm-6pm<br>Thursday:3pm-6pm<br>Friday:3pm-6pm<br>Saturday:3pm-6pm<br><b>Happy Hour Deals:</b><br>Mule: $7 /n Martini: $6 \n Select Cocktails: $6 \n Season Beer: $6 \n Wines: $5 \n Draft Beer: $1.50 off \n Fish & Chips with Beer: $24.95 \n Wide range of appetizers",
"<b>Name:</b>Music City Hot Chicken<br><b>Address:</b><a href='http://maps.google.com/?q=111 W. Prospect Road, Propsector Shops, Fort Collins, CO 80525' target='_system' title='Directions'>111 W. Prospect Road, Propsector Shops, Fort Collins, CO 80525</a><br><b>Happy Hour Times:</b><br>Sunday:3pm-7pm<br>Monday:11am-8.3pm<br>Tuesday:3pm-7pm<br>Wednesday:3pm-7pm<br>Thursday:3pm-7pm<br>Friday:3pm-7pm<br>Saturday:3pm-7pm<br><b>Happy Hour Deals:</b><br>$1 Off House Cocktails \n $5 Mai Tais All Day on Mondays!",
"<b>Name:</b>New Belgium Brewing Company<br><b>Address:</b><a href='http://maps.google.com/?q=500 Linden Street, Fort Collins, CO 80524' target='_system' title='Directions'>500 Linden Street, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Nick's Italian<br><b>Address:</b><a href='http://maps.google.com/?q=1100 S. College Avenue, Fort Collins, CO 80524' target='_system' title='Directions'>1100 S. College Avenue, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:3.3pm-6pm<br>Tuesday:3.3pm-6pm<br>Wednesday:3.3pm-6pm<br>Thursday:3.3pm-6pm<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>Draft beers $3.00 \n Budwiser $2.00 \n House Wine $3.75 \n Appetizer specials and pizza by the slice",
"<b>Name:</b>Nyala Ethiopian Cuisine<br><b>Address:</b><a href='http://maps.google.com/?q=2900 Harvard St Ste A, Fort Collins 80525' target='_system' title='Directions'>2900 Harvard St Ste A, Fort Collins 80525</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Odell Brewing Company<br><b>Address:</b><a href='http://maps.google.com/?q=800 E. Lincoln Avenue, Fort Collins, CO 80524' target='_system' title='Directions'>800 E. Lincoln Avenue, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Old Chicago<br><b>Address:</b><a href='http://maps.google.com/?q=147 S College Ave, Fort Collins 80524' target='_system' title='Directions'>147 S College Ave, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Old Chicago Timberline<br><b>Address:</b><a href='http://maps.google.com/?q=4709 S. Timberline Rd. Fort Collins CO' target='_system' title='Directions'>4709 S. Timberline Rd. Fort Collins CO</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Pickle Barrel<br><b>Address:</b><a href='http://maps.google.com/?q=122 W Laurel St, Fort Collins 80524' target='_system' title='Directions'>122 W Laurel St, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:4pm-6pm<br>Monday:4pm-6pm<br>Tuesday:4pm-6pm<br>Wednesday:4pm-6pm<br>Thursday:4pm-6pm<br>Friday:4pm-6pm<br>Saturday:4pm-6pm<br><b>Happy Hour Deals:</b><br>Daily Drink Specials",
"<b>Name:</b>Pour Brothers Community Tavern<br><b>Address:</b><a href='http://maps.google.com/?q=220 Linden Street, Fort Collins, CO 80524' target='_system' title='Directions'>220 Linden Street, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:10am-6pm<br>Monday:4pm-6pm<br>Tuesday:4pm-6pm<br>Wednesday:4pm-6pm<br>Thursday:4pm-6pm<br>Friday:2pm-6pm<br>Saturday:10am-6pm<br><b>Happy Hour Deals:</b><br>$1 off all drafts \n $3.50 Wells \n $5 grilled cheese meals.",
"<b>Name:</b>Prost Brewing Company<br><b>Address:</b><a href='http://maps.google.com/?q=321 Old Firehouse Alley, Fort Collins, CO 80524' target='_system' title='Directions'>321 Old Firehouse Alley, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Pueblo Viejo<br><b>Address:</b><a href='http://maps.google.com/?q=185 N College Ave Fort Collins CO' target='_system' title='Directions'>185 N College Ave Fort Collins CO</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Rally King Brewing<br><b>Address:</b><a href='http://maps.google.com/?q=1624 S Lemay Ave #4, Fort Collins, CO' target='_system' title='Directions'>1624 S Lemay Ave #4, Fort Collins, CO</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>RARE Italian<br><b>Address:</b><a href='http://maps.google.com/?q=101 S. College Avenue, Fort Collins, CO 80524' target='_system' title='Directions'>101 S. College Avenue, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:4pm-6pm<br>Tuesday:4pm-6pm<br>Wednesday:4pm-6pm<br>Thursday:4pm-6pm<br>Friday:4pm-6pm<br>Saturday:4pm-6pm<br><b>Happy Hour Deals:</b><br>Wide range of food and drink specials",
"<b>Name:</b>Rio Grande Mexican Restaurant<br><b>Address:</b><a href='http://maps.google.com/?q=143 W Mountain Ave, Fort Collins 80524' target='_system' title='Directions'>143 W Mountain Ave, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:3pm-6pm<br>Tuesday:3pm-6pm<br>Wednesday:3pm-6pm<br>Thursday:3pm-6pm<br>Friday:3pm-6pm<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Road 34<br><b>Address:</b><a href='http://maps.google.com/?q=1213 W. Elizabeth Street, Fort Collins, CO 80521' target='_system' title='Directions'>1213 W. Elizabeth Street, Fort Collins, CO 80521</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Rodizio Grill<br><b>Address:</b><a href='http://maps.google.com/?q=200 Jefferson St, Fort Collins 80524' target='_system' title='Directions'>200 Jefferson St, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Ryan's Sports Grill<br><b>Address:</b><a href='http://maps.google.com/?q=925 East Harmony Road Fort Collins CO' target='_system' title='Directions'>925 East Harmony Road Fort Collins CO</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Scrumpy's<br><b>Address:</b><a href='http://maps.google.com/?q=�215 N. College Avenue, Fort Collins, CO 80524' target='_system' title='Directions'>�215 N. College Avenue, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Serious Texas BBQ<br><b>Address:</b><a href='http://maps.google.com/?q=2001 S. Timberline Fort Collins CO' target='_system' title='Directions'>2001 S. Timberline Fort Collins CO</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Slyce Pizza Co<br><b>Address:</b><a href='http://maps.google.com/?q=163 W. Mountain Ave, Fort Collins, Co 80524' target='_system' title='Directions'>163 W. Mountain Ave, Fort Collins, Co 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Smokin Fins<br><b>Address:</b><a href='http://maps.google.com/?q=327 E Foothills Pkwy #120, Fort Collins, CO 80525' target='_system' title='Directions'>327 E Foothills Pkwy #120, Fort Collins, CO 80525</a><br><b>Happy Hour Times:</b><br>Sunday:11am-9pm<br>Monday:3pm-6pm<br>Tuesday:3pm-6pm<br>Wednesday:3pm-6pm<br>Thursday:3pm-6pm<br>Friday:3pm-6pm<br>Saturday:<br><b>Happy Hour Deals:</b><br>2 for 1 Drink Specials /n Range of Appetizer Specials /n Buy 1 Sushi Roll, Get Half Off 2nd Roll",
"<b>Name:</b>Snowbank Brewing<br><b>Address:</b><a href='http://maps.google.com/?q=225 N. Lemay Avenue, Suite 1, Fort Collins, CO 80524' target='_system' title='Directions'>225 N. Lemay Avenue, Suite 1, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Social<br><b>Address:</b><a href='http://maps.google.com/?q=1, Old Town Square #7, Fort Collins, CO 80524' target='_system' title='Directions'>1, Old Town Square #7, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:4pm-6pm<br>Monday:4pm-6pm<br>Tuesday:4pm-12pm<br>Wednesday:4pm-6pm<br>Thursday:4pm-6pm<br>Friday:4pm-6pm<br>Saturday:4pm-6pm<br><b>Happy Hour Deals:</b><br>$3 � $6 drink and food specials",
"<b>Name:</b>Sonny Lubick Steakhouse<br><b>Address:</b><a href='http://maps.google.com/?q=115 S College Ave, Fort Collins 80524' target='_system' title='Directions'>115 S College Ave, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Spoons Soups & Salads<br><b>Address:</b><a href='http://maps.google.com/?q=172 N College Ave, Fort Collins 80524' target='_system' title='Directions'>172 N College Ave, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Sri Tahi<br><b>Address:</b><a href='http://maps.google.com/?q=950 S Taft Hill Rd, Fort Collins 80521' target='_system' title='Directions'>950 S Taft Hill Rd, Fort Collins 80521</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Stuft - A Burger Bar<br><b>Address:</b><a href='http://maps.google.com/?q=210 S. College Ave., Fort Collins 80524' target='_system' title='Directions'>210 S. College Ave., Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Suh Sushi<br><b>Address:</b><a href='http://maps.google.com/?q=200 W Prospect Rd, Fort Collins 80526' target='_system' title='Directions'>200 W Prospect Rd, Fort Collins 80526</a><br><b>Happy Hour Times:</b><br>Sunday:11.3am-2pm<br>Monday:11am-2pm<br>Tuesday:11am-2pm<br>Wednesday:11am-2pm<br>Thursday:11am-2pm<br>Friday:11am-2pm<br>Saturday:11.3am-2pm<br><b>Happy Hour Deals:</b><br>Special Priced Lunch Menu",
"<b>Name:</b>Sunset Lounge<br><b>Address:</b><a href='http://maps.google.com/?q=378 Walnut St, Fort Collins, CO 80524' target='_system' title='Directions'>378 Walnut St, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Taj Mahal Restaurant<br><b>Address:</b><a href='http://maps.google.com/?q=148 W Oak St, Fort Collins 80524' target='_system' title='Directions'>148 W Oak St, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:5pm-6pm<br>Tuesday:5pm-6pm<br>Wednesday:5pm-6pm<br>Thursday:5pm-6pm<br>Friday:5pm-6pm<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Tasty Harmony<br><b>Address:</b><a href='http://maps.google.com/?q=130 South Mason, Fort Collins 80524' target='_system' title='Directions'>130 South Mason, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Texas Roadhouse<br><b>Address:</b><a href='http://maps.google.com/?q=4633 Timberline Rd. Fort Collins CO' target='_system' title='Directions'>4633 Timberline Rd. Fort Collins CO</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Thai Pepper<br><b>Address:</b><a href='http://maps.google.com/?q=109 E Laurel St, Fort Collins 80524' target='_system' title='Directions'>109 E Laurel St, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>The 415<br><b>Address:</b><a href='http://maps.google.com/?q=415 S Mason, Fort Collins 80521' target='_system' title='Directions'>415 S Mason, Fort Collins 80521</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>The Colorado Room<br><b>Address:</b><a href='http://maps.google.com/?q=642 S. College Ave, Fort Collins, CO 80524' target='_system' title='Directions'>642 S. College Ave, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:3pm-6pm<br>Tuesday:3pm-6pm<br>Wednesday:3pm-6pm<br>Thursday:3pm-6pm<br>Friday:3pm-6pm<br>Saturday:<br><b>Happy Hour Deals:</b><br>Drinks \n $2 Domestics & Well Drinks \n $3 Flavored Pinnacle & Three Olives Vodka \n $4 Mile High Spirits \n Fireside & Fireside Peach Bourbon, Elevate Vodka, Denver Dry Gin, Peg Leg Rum \n $1 off Craft Drafts \n Food \n $2.50 Pork Sammys \n $3 Poutine",
"<b>Name:</b>The Kitchen<br><b>Address:</b><a href='http://maps.google.com/?q=100 N. College Ave, Fort Collins, CO 80524' target='_system' title='Directions'>100 N. College Ave, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:3pm-6pm<br>Tuesday:3pm-6pm<br>Wednesday:3pm-6pm<br>Thursday:3pm-6pm<br>Friday:3pm-6pm<br>Saturday:<br><b>Happy Hour Deals:</b><br>$4 draft beer \n $5 wine \n $5 select cocktails \n $4 select appetizers",
"<b>Name:</b>Three Four Beer Co<br><b>Address:</b><a href='http://maps.google.com/?q=829 S. Shields Street, #100, Fort Collins, CO 80521' target='_system' title='Directions'>829 S. Shields Street, #100, Fort Collins, CO 80521</a><br><b>Happy Hour Times:</b><br>Sunday:6pm-12pm<br>Monday:<br>Tuesday:3pm-6pm<br>Wednesday:3pm-6pm<br>Thursday:3pm-6pm<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>$1 off guest drafts",
"<b>Name:</b>Tom and Chee<br><b>Address:</b><a href='http://maps.google.com/?q=2909 E. Harmony Rd. Fort Collins CO' target='_system' title='Directions'>2909 E. Harmony Rd. Fort Collins CO</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Tony's Bar<br><b>Address:</b><a href='http://maps.google.com/?q=224 S. College Avenue, Fort Collins, CO 80524' target='_system' title='Directions'>224 S. College Avenue, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:9.3am-12pm<br>Monday:10.3am-7pm<br>Tuesday:10.3am-7pm<br>Wednesday:10.3am-7pm<br>Thursday:10.3am-7pm<br>Friday:10.3am-7pm<br>Saturday:9.3am-7pm<br><b>Happy Hour Deals:</b><br>Free pool during Happy Hour and all day Tuesday \n $2.00 Domestic Drafts \n $3.00 Select Micro Drafts \n $3.00 Single/$5.00 Double Wells and Freshies \n $5.00 Moscow Mules \n Happy Hour Appetizers: $6.00 Select appetizers Monday thru Friday 2 PM til 6 PM",
"<b>Name:</b>Torchys Tacos<br><b>Address:</b><a href='http://maps.google.com/?q=3280 S COLLEGE AVE FORT COLLINS, CO 80525' target='_system' title='Directions'>3280 S COLLEGE AVE FORT COLLINS, CO 80525</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:3pm-7pm<br>Tuesday:3pm-7pm<br>Wednesday:3pm-7pm<br>Thursday:3pm-7pm<br>Friday:3pm-7pm<br>Saturday:<br><b>Happy Hour Deals:</b><br>$1.50 Off All Beers and Margs \n $0.50 Off Everything Else",
"<b>Name:</b>Tortilla Marissa's<br><b>Address:</b><a href='http://maps.google.com/?q=2635 S. College Avenue, Fort Collins, CO 80525' target='_system' title='Directions'>2635 S. College Avenue, Fort Collins, CO 80525</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Trailhead Tavern<br><b>Address:</b><a href='http://maps.google.com/?q=148 W Mountain Ave, Fort Collins, CO 80524' target='_system' title='Directions'>148 W Mountain Ave, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:11am-7pm<br>Monday:11am-12pm<br>Tuesday:11am-11pm<br>Wednesday:11am-12pm<br>Thursday:11am-12pm<br>Friday:11am-7pm<br>Saturday:11am-7pm<br><b>Happy Hour Deals:</b><br>Monday-Sunday 11 am-7 pm: \n $2 domestics and $6 pitchers \n $2.50-micros and $8 pitchers \n $2 wells \n $2 PBR pints (all day) \n Monday: \n Happy Hour All Day \n Tuesday: \n 2-for-1 burgers 7pm-11pm \n $2 select micros 7pm-close \n Wednesday 7 pm-close: \n $2.50 New Belgium \n Thursday 7 pm-close: \n $2.50 Odell beers \n $1 tacos 6-11 pm \n Friday: \n $6 PBR pitchers and $2.50 Jagermeister \n Saturday: \n $4 domestic beer and brat \n Sunday: \n $16 wings and pitcher (domestic) \n $19 wings and pitcher (micro)",
"<b>Name:</b>Union<br><b>Address:</b><a href='http://maps.google.com/?q=250 Jefferson St, Fort Collins, CO 80524' target='_system' title='Directions'>250 Jefferson St, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Wild Boar Coffee<br><b>Address:</b><a href='http://maps.google.com/?q=1510 South College Ave, Fort Collins 80524' target='_system' title='Directions'>1510 South College Ave, Fort Collins 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Wolverine Farm Letterpress & Publick House<br><b>Address:</b><a href='http://maps.google.com/?q=316 Willow Street, Fort Collins, CO 80524' target='_system' title='Directions'>316 Willow Street, Fort Collins, CO 80524</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Youngs Caf�<br><b>Address:</b><a href='http://maps.google.com/?q=3307 S College Ave Ste 114, Fort Collins 80525' target='_system' title='Directions'>3307 S College Ave Ste 114, Fort Collins 80525</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
"<b>Name:</b>Zwei Brewing<br><b>Address:</b><a href='http://maps.google.com/?q=4612 S. Mason St., Suite 120, Fort Collins, CO 80525' target='_system' title='Directions'>4612 S. Mason St., Suite 120, Fort Collins, CO 80525</a><br><b>Happy Hour Times:</b><br>Sunday:<br>Monday:<br>Tuesday:<br>Wednesday:<br>Thursday:<br>Friday:<br>Saturday:<br><b>Happy Hour Deals:</b><br>",
]


  
  //Remove old pins
  for(i=0;i<gps.length;i++) {
    L.marker([gps[i][0], gps[i][1]],{icon: icc[i]}).removeFrom(mymap)
   
    }  


  // Loop through variables and create pins
  for(i=0; i<gps.length; i++) {


     
  L.marker([gps[i][0], gps[i][1]],{icon: icc[i]}).addTo(mymap)
    .bindPopup(pop[i]);    

    }








// This uses the HTML5 geolocation API, which is available on
// most mobile browsers and modern browsers, but not in Internet Explorer
//
// See this chart of compatibility for details:
// http://caniuse.com/#feat=geolocation
  if (!navigator.geolocation) {
    geolocate.innerHTML = 'Geolocation is not available';
} else {
    geolocate.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        mymap.locate();
        
 

    };
}


// Once we've got a position, zoom and center the map
// on it, and add a single marker.
  mymap.on('locationfound', function(e) {


 
    
    mymap.panTo(new L.LatLng(e.latlng.lat, e.latlng.lng));
    L.marker([e.latlng.lat, e.latlng.lng],{icon: current}).addTo(mymap)
    .bindPopup('Here I am!');
    

    console.log(e.latlng.lat);
    console.log(e.latlng.lng);     



 // And hide the geolocation button
    geolocate.parentNode.removeChild(geolocate);

});

// If the user chooses not to allow their location
// to be shared, display an error message.
mymap.on('locationerror', function() {
    geolocate.innerHTML = 'Position could not be found';
});


    }, 500);

}

