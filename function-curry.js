function curry(fn) {
    if (fn.length <= 1) return fn;
    console.log(curry(56, 7, 8));
    const generator = (...args) => {
        if (fn.length === args.length) {

            return fn(...args)
        } else {
            return (...args2) => {

                return generator(...args, ...args2)
            }
        }
    }
    return generator
}
console.log(curry(57, 9, 8))
//this is what i have so far...