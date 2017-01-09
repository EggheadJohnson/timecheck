"use strict";

module.exports = function(previousTime, currTime, formattingOptions){
    let deltaSeconds = currTime[0] - previousTime[0];
    let deltaNanoSeconds = (currTime[1] - previousTime[1])*1e-9;
    let outputTime = deltaSeconds + deltaNanoSeconds;
    if (formattingOptions.sciNot === true) {
        return outputTime.toExponential();
    }
    else {
        return outputTime;
    }
}
