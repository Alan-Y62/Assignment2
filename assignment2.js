// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    //iterate through arr
    for(let i = 0; i < this.length; i++) {
        if(this[i] === undefined) { //if element in arr undefined skip
            continue
        }
        callbackFn(this[i],i,this) //apply function to element in arr
    }
};

// MAP //
Array.prototype.myMap = function() {

};

// FILTER //
Array.prototype.myFilter = function() {

};

// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function(...args) {
    let args_i = 0
    let length = this.length
    for(let j = length; j < length + args.length; j++) {
        this[j] = args[args_i]
        args_i++
    }
    return this.length
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};
