function hash(string) {
    let hashing ="";
    for(let i=0;i<string.length;i++) {
    hashing +=string.charCodeAt(i)
}
return hashing;
}
console.log(hash("Name"))

//The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
//Sample Output :7897109101