exports.report = (jsonStrData, id) => {
    const resort = require("./resort");
    let name = '';
    switch (id) {
        case resort.BLUETREE:
            name = "BlueTree";
            break;
        case resort.LAKES:
            name = "Lakes";
            break;
        case resort.TOWNS:
            name = "Towns";
            break;
        case resort.VILLA:
            name = "Villa";
            break;
    }

    console.log("resort name is " + name);
    let jsonData = JSON.parse(jsonStrData);
    // console.log("Towncenter Availability");
    var newArray = jsonData.filter(function (el) {
        return el.availCount > 0 &&
            (el.arrivalDate == 1671944400000 || el.arrivalDate == 1671858000000 || el.arrivalDate == 1671771600000);
    });

    newArray.forEach(element => {
        element.arrivalDate = (new Date(element.arrivalDate)).toLocaleDateString();
    });
    console.log(newArray);
    return newArray;
};