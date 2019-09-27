const USER = { 
    lon: parseFloat(readline().replace(",",".")),
    lat: parseFloat(readline().replace(",","."))
};

const EARTH_RADIUS = 6371;

const N = +readline();

var defibrillators = [];
var defibrillator, idDef, naDef, adDef, nuDef, loDef, laDef, i;

var X = (a, b) => (b.lon - a.lon) * Math.cos((a.lat + b.lat) / 2);
var Y = (a, b) => b.lat - a.lat;
var distance = (x, y) => Math.sqrt( x**2 + y**2 ) * EARTH_RADIUS;

for (i = 0; i < N; i++) {
    
    [idDef, naDef, adDef, nuDef, loDef, laDef] = readline().split(';');
    
    defibrillator = {
        lon: parseFloat(loDef.replace(",",".")),
        lat: parseFloat(laDef.replace(",","."))
    }
    
    defibrillators.push({
        name: naDef,
        address: adDef,
        phone: nuDef,
        lon: loDef,
        lat: laDef,
        distance: distance (X(USER, defibrillator), Y(USER, defibrillator))
    });
    
}

print(defibrillators.sort((a, b) => a.distance - b.distance)[0].name);