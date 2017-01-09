// tctest.js
"use strict";
let TimeCheck = require('./index');
// TimeCheck.poop();

// let timecheck = TimeCheck.timecheck();
let timecheck = new TimeCheck();

timecheck.timecheck();
timecheck.timecheck();

for (let x = 0; x < 100000; x++) {x*x;}
timecheck.timecheck();
timecheck.timecheck();
timecheck.timecheck({message: 'poo'});

// let tcb = TimeCheck.timecheck();
let tcb = new TimeCheck();
// tcb();
tcb.timecheck({}, function(currTime) {
    // console.log(this);
    // console.log(currTime);
    this.timeObject.anonymous = [];
    this.timeObject.anonymous.push(currTime);
});

// console.log(timecheck.timeObject);
// console.log(tcb.timeObject);
