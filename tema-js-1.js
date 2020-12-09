/* 1. O functie "equals" care primeste 2 parametrii si returneaza daca cei 2 parametrii sunt egali, strict */

function equals(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}

console.log(equals(4, 8));


/* 2. O functie "compare" care primeste 2 parametrii si returneaza -1 daca primul e mai mic ca al doilea, 0 daca sunt egale si 1 daca primul e mai mare ca al doilea */

function compare(c, d) {
    if (c < d) {
        return -1;
    } else if (c == d) {
        return 0;
    } else if (c > d) {
        return 1;
    }
}

console.log(compare(4, 4));


/* 3. O functie "max" care primeste 2 parametrii si returneaza maximul dintre cele 2 */

function max(e, f) {
    if (e > f) {
        return e;
    } else if (e < f) {
        return f;
    } else {
        return e;
    }
}

console.log(max(8, 9));

/* 4. O functie "min" care primeste 2 parametrii si returneaza minimul dintre cele 2 */

function min(g, h) {
    if (g < h) {
        return g;
    } else if (g > h) {
        return h;
    } else {
        return g;
    }
}

console.log(min(8, 9));

/* 5. O functie "suma" care primeste 1 parametru, numar intreg si returneaza suma primelor N numere naturale pozitive (exemplu: daca N este 3, trebuie sa returneze 6) */

function suma(a) {
    let sum = 0;
    for (let i = 0; i <= a; i++) {
        sum += i;
    }
    return sum;
}

console.log(suma(5));


/*6. O functie "prim" care primeste 1 parametru si returneaza true/false daca N este numar prim sau nu (restul impartirii la 1 si la N ==0)*/

function prim(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(prim(55));


/* 7. O functie "sumaPrime" care primeste 1 parametru si returneaza suma primelor N numere prime (pentru N=5 trebuie sa returneze 2+3+5+7+11=28)*/

function sumaPrime(num) {
    var sum = 0;
    function checkPrime(i) {
        for (var k = 2; k < i; k++) {
            if (i % k === 0) {
                return false;
            }
        }
        return true;
    }

    for (var i = 2; i <= num; i++) {
        if (checkPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumaPrime(5));


/* 8. O functie "invers" care primeste un parametru de tip numar si intoarce inversul acestuia (ca numar) (123 => 321) */
function invers(a) {
    let string = String(a);
    let output = '';
    for (let i = string.length; i > 0; i--) {
        output += string[i - 1];
    }
    return parseInt(output);
}


/* 9. O functie "produsImpare" care primeste 1 parametru si returneaza produsul primelor N numere impare pozitive (pentru N=5; returneaza 1*3*5*7*9=945)*/

function produsImpare(a) {
    let n = 1;
    for (let i = 0; i < (a * 2); i++) {
        if (i % 2 != 0) {
            n *= i;
        }
    }
    return n;
}


/* 10. O functie "contains" care primeste 2 parametri(arr - array de nr intregi si x - numar) si verifica daca x exista in array (rezultatul este true/false) */

function contains(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return true;
        }
    }
    return false;
}


/* 11. O functie "maxArray" care primeste un array si returneaza valoarea maxima (ar trebui sa functioneze si pentru numere si pentru stringuri) */

function maxArray(arr) {
    let x = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (x < arr[i]) {
            x = arr[i];
        }
    }
    return x;
}


/* 12. O functie "sumMinMax" care primeste un array de numere si returneaza suma dintre valoare maxima si valoare minima */
function sumMinMax(arr) {
    let min = arr[0],
        max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return (min + max);
}


/* 13. O functie "hasDuplicates" care primeste un array si returneaza daca exista duplicate intr-un array primit ca parametru (true/false) */

function hasDuplicates(array) {
    let valuesAlreadySeen = []

    for (let i = 0; i < array.length; i++) {
        let value = array[i]
        if (valuesAlreadySeen.indexOf(value) !== -1) {
            return true
        }
        valuesAlreadySeen.push(value)
    }
    return false
}

/* 14. O functie "produsPozitive" care primeste un array si returneaza produsul numerelor pozitive intr-un array primit ca parametru */

function produsPozitive(arr) {
    let n = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            n *= arr[i];
        }
    }
    return n;
}


/* 15. O functie "palindrom" care primeste un string si returneaza daca este palindrom (inversul == originalul, ex: "1234321", "55", "787") (true/false) */

function palindrom(string) {
    let str = string,
        length = str.length;
    for (let i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - 1 - i]) {
            return false;
        }
    }
    return true;
}