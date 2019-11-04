function calculator(num1, operator, num2) {
    if (num2 == 0 && operator == '/') {
        return "Can't divide by 0!"
    }
    return eval(num1 + operator + num2)
}