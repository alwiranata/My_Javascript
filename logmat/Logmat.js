function evaluateLogic(p, q, r, s) {
    const ifThen = (a, b) => !a || b; // a → b
    const ifAndOnlyIf = (a, b) => (a && b) || (!a && !b); // a ↔ b

    const part1 = ifThen(!q || !p, !q && p);
    const part2 = !(p || s);
    const result = part1 ? true : !part2;

    return result;
}

// Interpretasi nilai kebenaran
console.log(evaluateLogic(true, true, true, true));   // a
console.log(evaluateLogic(false, false, false, false)); // b
console.log(evaluateLogic(true, true, false, false));  // c
console.log(evaluateLogic(false, false, true, true));  // d
