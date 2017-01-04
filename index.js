"use strict";

module.exports = function(){
        let startTime = process.hrtime();
        let previousTime = startTime;
        return function(message){
            message = message || '';
            let timeSinceStart = process.hrtime(startTime);
            let timeSincePrevious = process.hrtime(previousTime);
            previousTime = process.hrtime();
            console.log(message,timeSinceStart[0]+timeSinceStart[1]/1000000000,"seconds have passed since starting");
            console.log('',timeSincePrevious[0]+timeSincePrevious[1]/1000000000,"seconds have passed since timecheck was last called");
            // console.log(process.hrtime(startTime));
        }

    }
