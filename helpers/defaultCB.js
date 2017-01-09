"use strict";
let formatOutput = require('./formatOutput');

module.exports = function(currTime, timeObjKey, parameters){
    console.log('defaultCB');
    console.log(parameters);
    let output = parameters.output || this.output;
    let previousTime = this.timeObject[timeObjKey].length > 1 ? this.timeObject[timeObjKey][this.timeObject[timeObjKey].length - 2] : this.timeObject.startTime;
    // parameters = Object.keys(parameters).length > 0 ? parameters : {
    //     latestDelta: true
    // }
    if (parameters.latestDelta !== false) parameters.latestDelta = true;
    if (parameters.latestDelta === true) {
        console.log(formatOutput(previousTime, currTime, parameters.formattingOptions || {}));
    }
    if (parameters.startDelta === true) {
        console.log(formatOutput(timeObject.startTime, currTime, parameters.formattingOptions || {}));
    }
}
