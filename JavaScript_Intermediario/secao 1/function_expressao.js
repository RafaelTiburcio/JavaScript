const media = function calculoMedia(a, b, c) {
    let mediaNum = (a + b + c) / 3;
    return mediaNum;
}

console.log(media(7,8,9));
console.log(media(10,20,30));

/* arrow function
*/

const media1 = (a, b, c) => {
    let mediaNum1 = (a + b + c) / 3;
    return mediaNum1;
}

console.log(media1(7,8,9));
console.log(media1(30,40,50));