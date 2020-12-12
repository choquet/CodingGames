const numberOfCapitals = +readline();
const numberOfGeolocations = +readline();
const dmsToDeg = (deg, min, sec) => deg + min / 60 + sec / 3600;
const NSStringToLat = ns => {
    let n = ns.substr(0, 1);
    let dd = +ns.substr(1, 2);
    let mm = +ns.substr(3, 2);
    let ss = +ns.substr(5, 2);
    let deg = dmsToDeg(dd, mm, ss);

    if(n === 'S') {
        deg = -deg;
    }
    return deg;
}
const EWStringToLon = ew => {
    let e = ew.substr(0, 1);
    let ddd = +ew.substr(1, 3);
    let mm = +ew.substr(4, 2);
    let ss = +ew.substr(6, 2);
    let deg = dmsToDeg(ddd, mm, ss);

    if(e === 'W') {
        deg = -deg;
    }
    return deg;
}
const RADIANS = deg => deg * Math.PI / 180;
const COS = a => Math.cos(a);
const SIN = a => Math.sin(a);
const ACOS = a => Math.acos(a);
const EARTH_RADIUS = 6371;
const distance = (a, b) => {
    return ACOS(
        SIN(RADIANS(a.lat)) * SIN(RADIANS(b.lat)) + 
        COS(RADIANS(a.lat)) * COS(RADIANS(b.lat)) * COS(RADIANS(a.lon - b.lon))
    ) * EARTH_RADIUS
}

const greetings = [];

// Read capitals and location
for (let i = 0; i < numberOfCapitals; i++) {
    let [capital, ns, ew] = readline().split(" ");
    
    let lat = NSStringToLat(ns);
    let lon = EWStringToLon(ew);
    
    greetings.push({
       capital,
       lat,
       lon
    });
}

// Read greetings message
for (let i = 0; i < numberOfCapitals; i++) {
    greetings[i].greeting = readline();
}

// Read target location
for (let i = 0; i < numberOfGeolocations; i++) {
    let [ns, ew] = readline().split(" ");

    let lat = NSStringToLat(ns);
    let lon = EWStringToLon(ew);

    let minDst = Infinity;

    let greet = [];
    greetings.forEach(c => {
        let dst = Math.round(distance(c, { lat, lon }));
        if (dst < minDst) {
            minDst = dst;
            greet = [c.greeting];
        } else if(dst == minDst) {
            greet.push(c.greeting);
        }
    });
    console.log(greet.join(" "));
}
