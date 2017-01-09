"use strict";
let timecheck = require('./lib/timecheck'),
    functioncheck = require('./lib/functioncheck'),
    defaultCB = require('./helpers/defaultCB');

let timecheckexport = function(initializationCB){
    this.timeObject = {
        startTime: process.hrtime()
    }; // add accessor functions?  e.g. timeSinceStart/timeSinceLatest? what is the difference between this and the timecheck callback?
    this.timecheck = timecheck;
    this.functioncheck = functioncheck;
    this.defaultCB = initializationCB || defaultCB;
    this.poop = poop;
}

// let timecheckexport = {
//     timeObject: {},
//     timecheck: timecheck,
//     functioncheck: functioncheck,
//     poop: poop
// }

module.exports = timecheckexport;

function poop(){
    console.log(this);
}



// function(initializationParameters){
//         let startTime = process.hrtime();
//         let previousTime = startTime;
//         return function(executionParameters){
//             let parameters = executionParameters || initializationParameters;
//             let timeSinceStart = process.hrtime(startTime);
//             let timeSincePrevious = process.hrtime(previousTime);
//             previousTime = process.hrtime();
//             console.log(timeSinceStart[0]+timeSinceStart[1]/1000000000,"seconds have passed since starting");
//             console.log(timeSincePrevious[0]+timeSincePrevious[1]/1000000000,"seconds have passed since timecheck was last called");
//             // console.log(process.hrtime(startTime));
//         }
//
//     }
