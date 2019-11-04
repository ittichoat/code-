function minRemovals(str1, str2) {
    let count = 0
    for (let i = 0; i < str1.length; i++) {
        let chk = 0
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] == str2[j]) {
                chk++
            }
        }
        if (chk == 0) {
            count++
        }
    }
    for (let i = 0; i < str2.length; i++) {
        let chk = 0
        for (let j = 0; j < str1.length; j++) {
            if (str2[i] == str1[j]) {
                chk++
            }
        }
        if (chk == 0) {
            count++
        }
    }
    return count
}

console.log(minRemovals("acb", "ghi"))