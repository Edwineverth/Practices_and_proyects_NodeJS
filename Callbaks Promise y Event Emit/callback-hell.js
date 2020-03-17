// "use strict";
 
// function asyncSqrt(value, callback) {
//     console.log('START execution with value =', value);
//     setTimeout(function () {
//         callback(value, value * value);
//     }, 0 | Math.random() * 100);
// }
 
// asyncSqrt(0, function (value, result) {
//     console.log('END execution with value =', value, 'and result =', result);
//     asyncSqrt(1, function (value, result) {
//         console.log('END execution with value =', value, 'and result =', result);
//         asyncSqrt(2, function (value, result) {
//             console.log('END execution with value =', value, 'and result =', result);
//             asyncSqrt(3, function (value, result) {
//                 console.log('END execution with value =', value, 'and result =', result);
//                 asyncSqrt(4, function (value, result) {
//                     console.log('END execution with value =', value, 'and result =', result);
//                     asyncSqrt(5, function (value, result) {
//                         console.log('END execution with value =', value, 'and result =', result);
//                         asyncSqrt(6, function (value, result) {
//                             console.log('END execution with value =', value, 'and result =', result);
//                             asyncSqrt(7, function (value, result) {
//                                 console.log('END execution with value =', value, 'and result =', result);
//                                 asyncSqrt(8, function (value, result) {
//                                     console.log('END execution with value =', value, 'and result =', result);
//                                     asyncSqrt(9, function (value, result) {
//                                         console.log('END execution with value =', value, 'and result =', result);
//                                         console.log('COMPLETED');
//                                     });
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

"use strict";
 
function asyncSqrt(value, callback) {
    console.log('START execution with value =', value);
    setTimeout(function() {
        callback(value, value * value);
    }, 0 | Math.random() * 100);
}
 
var max = 10;
var cnt = 0;
asyncSqrt(cnt, function callback(value, result) {
    console.log('END execution with value =', value, 'and result =', result);
    if (++cnt === max) {
        console.log('COMPLETED');
    } else {
        asyncSqrt(cnt, callback);
    }
});




"use strict";
 
function promiseSqrt(value){
    return new Promise(function (fulfill, reject){
        console.log('START execution with value =', value);
        setTimeout(function() {
            fulfill({ value: value, result: value * value });
        }, 0 | Math.random() * 100);
    });
}
 
var p = [0,1,2,3,4,5,6,7,8,9];
p.reduce(
    function (sequence, value) {
        return sequence.then(function() {
            return promiseSqrt(value);
        }).then(function(obj) {
            console.log('END execution with value =', obj.value,
                        'and result =', obj.result);
        });
    },
    Promise.resolve()
).then(function() {
    console.log('COMPLETED');
});