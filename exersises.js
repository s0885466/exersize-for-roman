/**
 * функция которая переводит  пример - AAABBBSSSSLLAL в a3b3s4l2a1l1
 **/

function changeString(str) {
    str = str.trim();
    let newStr = str[0];
    let counter = 1;
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i-1]) {
            counter++;
        } else {
            newStr += counter + str[i];
            counter = 1;
        }
    }

    return (newStr + counter).toLowerCase();
}

console.log(changeString('AAABBBSSSSLLAL'));

/**
 * функция которая проверит отсортирован ли массив. Пример
 **/


function isSort(arr) {
    if (arr.length < 3) return true;

    const rule = compare(arr, 1);

    for (let i = 2; i < arr.length; i++) {
        if (compare(arr, i) !== rule) {
            return false
        }
    }

    function compare(arr, i){
        //цикл while добавлен на случай, если первые два числа равны
        while (arr[i] === arr[i-1]) {
            i++;
        }
        return arr[i] >= arr[i-1];
    }

    return true;

}

console.log(isSort([1,1,1]));


/**
 * функция которая проверит правильно ли расставлены скобки в строке. Пример -
 ((())) -> true, (())) -> false, ))( -> false, (())()()(()) -> true
 **/

function isBracketsTrue(brackets) {

    if (brackets[0] === ')') return false;

    const numOpenBrackets = howMany('(');
    const numCloseBrackets = howMany(')');

    if (numOpenBrackets !== numCloseBrackets) return false;

    const stack = [];

    Array.from(brackets).forEach(el => {
        if (stack[stack.length - 1] === undefined) {
            stack.push(el);
        } else {
            if ((stack[stack.length - 1] === '(') && (el === ')')) {
                stack.pop();
            } else stack.push(el);
        }
    });

    return stack.length === 0;

    function howMany(char) {
        let counter = 0;
        for (let i = 0; i < brackets.length; i++) {
            if (char === brackets[i]) {
                counter++;
            }
        }
        return counter;
    }

}

console.log(isBracketsTrue('(())()()(())'));