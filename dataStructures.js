// level {2}


// timeComplexity : 0(n)  spaceComplexity: O(n)
function removeEven(arr) {
    var newArr = [];
    for (let item of arr) {
        if (item % 2 != 0) {
            newArr.push(item)
        }
    }
    return newArr;
}

const result1= removeEven([1, 3, 4, 6, 7, 8])
console.log(result1);




// TimeComplexity :O(n)
function vowels(str) {

    let map = {
        'a': "true",
        'e': "true",
        'i': 'true',
        'o': 'true',
        'u': 'true'
    }
    let newStr = [];
    var s;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let asci = str.charCodeAt(i);
        if (char in map) {
            asci = asci - 32;
            newStr.push(String.fromCharCode(asci))
        }
        else {
            newStr.push(String.fromCharCode(asci))

        }
    }
    s = newStr.join('');
    return s;

}

const result1 = vowels("Elie")
console.log(result1);



//Time Complexity O(n)
function Maxarr(arr){
    return Math.max(...arr);
}
const result3=  Maxarr([1, 3, 4, 6, 7, 8, 2, 5]);
console.log(result3)



