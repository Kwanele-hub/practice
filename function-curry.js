function curry(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
console.log(curry(57)(9)(8))
//this is what i have so far...