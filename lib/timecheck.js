"use strict"

module.exports = function(parameters, cb) {
        let currTime = process.hrtime();
        parameters = parameters || {};
        // let cb = initializationCB;
        // if (typeof cb !== 'function') {
        //     cb = handleOutput.call(this, currTime, parameters);
        // }
        // else {
        //     console.log(this);
        //     cb.call(this, currTime);
        // }
        if (typeof cb !== 'function') cb = this.defaultCB;
        handleOutput.call(this, currTime, parameters, cb);



    // console.log(this);
}

function handleOutput(currTime, parameters, cb){
    // console.log("ho",this);
    let timeObjKey = typeof parameters === 'string' ? parameters : typeof parameters === 'object' && typeof parameters.message === 'string' ? parameters.message : '';

    if (parameters && parameters.preserve !== false) {
        if (!Array.isArray(this.timeObject[timeObjKey])) this.timeObject[timeObjKey] = [];
        this.timeObject[timeObjKey].push(currTime);
    }
    // console.log(cb);
    cb.call(this, currTime, timeObjKey, parameters);


    // if (typeof parameters === 'string'){
    //     if (!Array.isArray(this.timeObject[parameters])) this.timeObject[parameters] = [];
    //     this.timeObject[parameters].push(currTime);
    // }
    // else if (typeof parameters === 'object' && typeof parameters.message === 'string'){
    //     if (!Array.isArray(this.timeObject[parameters.message])) this.timeObject[parameters.message] = [];
    //     this.timeObject[parameters.message].push(currTime);
    //     if (parameters.latestDelta === true) {
    //         this.handleOutput()
    //     }
    //     if (parameters.startDelta === true) {
    //
    //     }
    // }
    // else {
    //     if (!Array.isArray(this.timeObject.anonymous)) this.timeObject.anonymous = [];
    //     this.timeObject.anonymous.push(currTime);
    // }
}
