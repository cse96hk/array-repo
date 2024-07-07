// 배열
let names = ["Steven Paul Jobs", "Bill Gates", "Mark Elliot Zuckerberg", "Elon Musk", "Jeff Bezos", "Warren Edward Buffett", "Larry Page", "Larry Ellison", "Tim Cook", "Lloyd Blankfein"];

// forEach
names.forEach((item, index) => {
    console.log(item, index);
});

// map
// 배열로 리턴 받는다
// 모든 이름을 대문자로 바꾸어서 출력하시오.
// 성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
// 이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])
let newNames = names.map((item) => {
    // 모든 이름을 대문자로 바꾸어서 출력하시오.
    let oneCase = item.toUpperCase();
    //성을제외한 이름만 출력하시오
    let twoCase = oneCase.split(" ")[0];
    // 이름의 이니셜만 출력하시오
    let threeCase = oneCase
        .split(" ")
        .map((word) => word[0])
        .join("");

    let itemResult = {
        oneCase: oneCase,
        twoCase: twoCase,
        threeCase: threeCase,
    };

    return itemResult;
});
console.log(newNames);

/**     
filter 문제
**/
//이름에 a를 포함한 사람들을 출력하시오.
let aNames = names.filter((item) => {
    return item.includes("a");
});
console.log(aNames);
// 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)
let pattern = /(\w)\1{1,}/; // 정규 표현식: 연속된 두 문자 이상찾음
let dupNames = names.filter((item) => {
    return pattern.test(item);
});
console.log(dupNames);
/**
 * some 문제
 */

//전체 이름의 길이가 20자 이상인 사람이 있는가?
let over20 = names.some((item) => {
    return item.length > 20;
});

console.log(over20);
//성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
let pNames = names.some((item) => {
    return item.includes("p");
});
console.log(pNames);

/**
 * every 문제
 */

//모두의 전체 이름의 길이가 20자 이상인가?
let everyOver20 = names.every((item) => {
    return item.length > 20;
});
console.log(everyOver20);
//모두의 이름에 a 가 포함되어 있는가?
let everyPNames = names.every((item) => {
    return item.includes("a");
});
console.log(everyPNames);

/**
 * find 문제
 */

//전체 이름의 길이가 20자 이상인 사람을 찾으시오.
let findOver20 = names.find((item) => item.length > 20);
console.log(findOver20);

//미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)
let findNames = names.find((name) => name.split(" ").length > 2);
console.log(findNames);

/**
 * findIndex 문제
 */

//전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
let findIndexOver20 = names.findIndex((item) => item.length > 20);
console.log(findIndexOver20);

//미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
let findIndexNames = names.findIndex((name) => name.split(" ").length > 2);
console.log(findIndexNames);
