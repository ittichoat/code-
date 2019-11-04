function indexMultiplier(arr) {
    var sum = 0
    for (let a in arr) {
        sum += arr[a] * a
    }
    return sum
}