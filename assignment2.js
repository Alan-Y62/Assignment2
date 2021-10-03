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
    let currentValue = start
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
        }
    }
    //return final currentValue
    return currentValue
};

// INCLUDES //
Array.prototype.myIncludes = function(item, start) {
    let i = 0;
    if(this.length + start > 0) {
        return false
    }
    if(start !== undefined) {
        i = start;
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
Array.prototype.myIndexOf = function() {

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
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};

let arr = [,,1,4,3,7]

console.log('Built in function then created function')
//forEach checks
console.log('For Each check')
arr.forEach(x => console.log(x))
console.log('---------------')
arr.myEach(x => console.log(x))

//push checks
console.log('Push checks')
arr.push(10,20)
arr.myPush(232,321)
console.log(arr)

//map checks
console.log('Map checks')
console.log(arr.map(x => x*2))
console.log(arr.myMap(x => x*2))

//filter checks
console.log('Filter checks')
console.log(arr.filter(x=>x>2))
console.log(arr.myFilter(x=>x>2))

//some checks
console.log('Some checks')
const two = (element) => element === 2
console.log('Any value is 2')
console.log(arr.some(two))
console.log(arr.mySome(two))
const even = (element) => element % 2 === 0
console.log('Any value is even')
console.log(arr.some(even))
console.log(arr.mySome(even))


//every checks
console.log('Every checks')
console.log('Less than 400')
const isBelow400 = (currentValue) => currentValue < 400
console.log(arr.every(isBelow400))
console.log(arr.myEvery(isBelow400))
const isBelow300 = (currentValue) => currentValue < 300
console.log('Less than 300')
console.log(arr.every(isBelow300))
console.log(arr.myEvery(isBelow300))

//reduce checks
console.log('Reduce checks')
const reducer = (previousValue, currentValue) => previousValue + currentValue
console.log(arr.reduce(reducer))
console.log(arr.myReduce(reducer))

//includes checks
console.log('Includes checks')
const arrnum = [1,3,5,29,74,31,69]
console.log(arrnum.includes(2))
console.log(arrnum.myIncludes(2))
console.log('search for 5 starting at pos -10')
console.log(arrnum.includes(5,-10))
console.log(arrnum.myIncludes(5,-10))
console.log('search for 5 starting at pos -1')
console.log(arrnum.includes(5,-1))
console.log(arrnum.myIncludes(5,-1))

//lastIndexOf
console.log('LastIndexOf checks')
const arrnum2 = [1,3,5,29,3,31,69]
console.log(arrnum2.lastIndexOf(3))
console.log(arrnum2.myLastIndexOf(3))
console.log('if index is negative, -4')
console.log(arrnum2.lastIndexOf(3,-4))
console.log(arrnum2.myLastIndexOf(3,-4))
console.log('if index is greater than array length')
console.log(arrnum2.lastIndexOf(3,100))
console.log(arrnum2.myLastIndexOf(3,100))

