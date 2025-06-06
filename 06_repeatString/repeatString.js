const repeatString = function(word ,times) {
    if(times<1) return Error;
    let string = ""
    for(let i = 0;i<times;i++){
        string += word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
