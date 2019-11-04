function matchHouses(step) {
    var sum = 0
    for (var s = 1; s <= step; s++) {
        if (s == 1) {
            sum+=6
        } else {
            sum += 5
        }
    }
    return sum
}