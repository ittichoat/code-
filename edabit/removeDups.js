function removeDups(arr) {
    for (var pos = 0; pos < arr.length; pos++) {
        for (var chk = pos + 1; chk < arr.length; chk++) {
            if(arr[pos] == arr[chk]){
                arr.splice(chk,1)
                chk--
            }
        }
    }
    return arr
}

console.log(removeDups([1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5]))