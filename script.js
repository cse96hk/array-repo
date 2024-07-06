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

    return item.toUpperCase();
});
console.log(newNames);

// filter
// true, false
let filterNames = names.filter((item) => {
    return item.includes("L");
});
console.log(filterNames);
