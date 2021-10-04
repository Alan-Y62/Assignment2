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
Array.prototype.myMap = function(callbackFn) {
    let newArr = [] //new Arr that gets pushed at the end
    for(let i = 0; i < this.length; i++) {
        if(this[i] === undefined) { //if element in arr undefined skip
            continue
        }
        newArr[i] = callbackFn(this[i],i,this) //apply function to element in arr
    }
    //returns newArr with new mapped values
    return newArr
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    let newArr = [] //new arr that gets pushed at the end
    let newArr_i = 0 //set index for newArr
    for(let i = 0; i < this.length; i++) {
        if(this[i] === undefined) { //if element in arr undefined skip
            continue
        }
        if(callbackFn(this[i],i,this)) {
            //adds arr[i] value to newArr if passed callbackFn
            newArr[newArr_i] = this[i] 
            //increment newArr position
            newArr_i++
        }
    }
    //returns newArr with items filtered
    return newArr
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
    for(let i = 0; i < this.length; i++) {
        if(this[i] === undefined) { //if element in arr undefined skip
            continue
        }
        //if callbackFn returns true
        if(callbackFn(this[i],i,this)) {
            //returns true if any value passed the test
            return true
        }
    }
    //can only get here if every value failed the test
    return false
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    for(let i = 0; i < this.length; i++) {
        if(this[i] === undefined) { //if element in arr undefined skip
            continue
        }
        //if callbackFn returns false
        if(!callbackFn(this[i],i,this)) { 
            //return false immediately cause at least one value did not pass the check
            return false
        }
    }
    //can only get here if every value passed the test
    return true //returns true
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn,start) {
    //set currentValue to start arg
    let currentValue = 0
    if(start !== undefined) {
        currentValue = start
    }
    //if currentValue is not undefined 
    if(currentValue !== undefined) {
        for(let i = 0; i < this.length; i++) {
            if(this[i] === undefined) { //if element in arr undefined skip
                continue
            }
            //set currentValue to the return value of callbackFn
            currentValue = callbackFn(currentValue,this[i],i,this)
        }
    }
    //if currentValue is undefined
    else {
        //set currentValue to first value in arr if not undefined
        if(arr[0] !== undefined) {
            currentValue += arr[0]
        }
        for(let i = 1; i < this.length; i++) {
            //if arr[i] or arr[i+1] is undefined, skip
            if(this[i] === undefined) { 
                continue
            }
            //set currentValue to the return value of callbackFn
            currentValue = callbackFn(currentValue,this[i],i,this)
            console.log(currentValue)
        }
    }
    //return final currentValue
    return currentValue
};

// INCLUDES //
Array.prototype.myIncludes = function(item, start) {
    let i = 0;
    if(this.length < start) {
        return false
    }
    if(start !== undefined) {
        if(start < 0) {
            i = this.length + start
            if(i <= 0) {
                i = 0
            }
        }
        else {
            i = start;
        }
    }
    for(i; i< this.length; i++) {
        if(this[i] === undefined) {
            continue
        }
        if(this[i] === item) {
            return true
        }
    }
    return false
};

// INDEXOF //
Array.prototype.myIndexOf = function(item, start) {
    let i = 0
    if(start !== undefined && start !== 0) {
        if(start > this.length) {
            return -1
        }
        if(start < 0) {
            i = this.length + start
        }
        else {
            i = start
        }
    }
    for(i; i < this.length; i++) {
        if(this[i] === item) {
            return i
        }
    }
    return -1
};

// PUSH //
Array.prototype.myPush = function(...args) {
    let args_i = 0 //sets variable for the first arg in function call
    let length = this.length //sets variable for pos of arr after the last
    for(let j = length; j < length + args.length; j++) {
        this[j] = args[args_i] //adds arg[args_i] value to arr[i]
        args_i++ //increment arg position for next value in function call
    }
    return this.length //return the legnth of the arr with added args
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(item, start) {
    let i = this.length - 1
    if(start !== undefined) {
        if(this.length + start < 0) {
            return -1
        }
        if(start < 0) {
            i += start
        }
        if(start > 0 && start < i) {
            i -= start
        }
    }
    for(i; i >= 0; i--) {
        if(this[i] === item) {
            return i
        }
    }
    return -1
};

// KEYS //
Object.grabKeys = function(object) {
    let keys = []
    let i = 0
    for(keys[i++] in object) {

    }
    return keys
};

// VALUES //
Object.grabValues = function(object) {
    const keys1 = Object.keys(object)
    let values = []
    for(let i = 0; i < keys1.length; i++) {
        values.push(object[keys1[i]])
    }
    return values
};
