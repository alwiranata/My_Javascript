function evaluate(p, q, r, s) {
    const condition1 = q ? !p : true; // if q then not p
    const condition2 = !(q && p);     // not q and p
    const condition3 = !( 
        (p || s) === (r ? true : false)  // (p or s) if and only if (if r then)
    );

    if (condition1) {
        return condition2;
    } else {
        return condition3;
    }
}

// Contoh penggunaan dengan berbagai interpretasi
console.log(evaluate(true, true, true, true));   // false
console.log(evaluate(false, false, false, false)); // false
console.log(evaluate(true, true, false, false));  // true
console.log(evaluate(false, false, true, true));  // false
