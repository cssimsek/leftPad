function leftPad(str, len, ch) {
    var customFalsy = [false, "", null, undefined, NaN], i=0;
    str = "" + str;
    len = len - str.length;
    ch = !(customFalsy.filter((falsy) => falsy === ch).length) ? ch : " ";
    while (i++ < len) str = ch + str;
    return str;
}