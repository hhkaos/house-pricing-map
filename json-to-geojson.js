"use strict";

const fs = require('fs');
const dataset = require("./full-dataset.json");

const output = {
    "type": "FeatureCollection",
    "features": []
};

dataset.forEach(element => {
    const obj = {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "Point",
            "coordinates": [
                element.longitude,
                element.latitude
            ]
        }
    };
    delete element.longitude;
    delete element.latitude;
    obj.properties = {
        ...element
    };
    output.features.push(obj);

});

fs.writeFile('full-dataset.geojson', JSON.stringify(output, null, 2), err => {
    if (err) {
        console.error(err)
        return
    }
    console.log("file written successfully");
})