# 배열함수(2주 7일)

배열 
---
```
let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];
```
forEach
---
- for 대체할수 있는 forEach 문

```
let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

// forEach
names.forEach((item, index) => {
    console.log(item, index);
});

/* 결과
Steven Paul Jobs 0
Bill Gates 1
Mark Elliot Zuckerberg 2
Elon Musk 3
Jeff Bezos 4
Warren Edward Buffett 5
Larry Page 6
Larry Ellison 7
Tim Cook 8
Lloyd Blankfein 9

*/
```
map 문제
---
- 모든 이름을 대문자로 바꾸어서 출력하시오.
- 성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
- 이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])
```
let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

// 모든 이름을 대문자로 바꾸어서 출력하시오.
let oneCase = names.map((item) => {
    return item.toUpperCase();
});
console.log(oneCase)
/* 결과
[
  'STEVEN PAUL JOBS',
  'BILL GATES',
  'MARK ELLIOT ZUCKERBERG',
  'ELON MUSK',
  'JEFF BEZOS',
  'WARREN EDWARD BUFFETT',
  'LARRY PAGE',
  'LARRY ELLISON',
  'TIM COOK',
  'LLOYD BLANKFEIN'
]
*/


//성을제외한 이름만 출력하시오
let twoCase =  names.map((item) => {
    return item.split(" ")[0];
});
console.log(twoCase)
/* 결과
  'Steven', 'Bill',
  'Mark',   'Elon',
  'Jeff',   'Warren',
  'Larry',  'Larry',
  'Tim',    'Lloyd'
]
*/

// 이름의 이니셜만 출력하시오
let threeCase = names.map((item) => {
    return item.split(" ").map((word) => word[0]).join("");
});
console.log(threeCase)

/* 결과
[
  'SPJ', 'BG', 'MEZ',
  'EM',  'JB', 'WEB',
  'LP',  'LE', 'TC',
  'LB'
]
*/


```

filter 문제
---
- 이름에 a를 포함한 사람들을 출력하시오.
- 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)
```
let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

//이름에 a를 포함한 사람들을 출력하시오.
let aNames = names.filter((item) => {
    return item.includes("a");
});
console.log(aNames);
/* 결과
[
  'Steven Paul Jobs',
  'Bill Gates',
  'Mark Elliot Zuckerberg',
  'Warren Edward Buffett',
  'Larry Page',
  'Larry Ellison',
  'Lloyd Blankfein'
]

*/

// 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)
let pattern = /(\w)\1{1,}/; // 정규 표현식: 연속된 두 문자 이상찾음
let dupNames = names.filter((item) => {
    return pattern.test(item);
});
console.log(dupNames);
/*
(7) ["Bill Gates", "Mark Elliot Zuckerberg", "Jeff Bezos", "Warren Edward Buffett", "Larry Page", "Larry Ellison", "Tim Cook"]
0: "Bill Gates"
1: "Mark Elliot Zuckerberg"
2: "Jeff Bezos"
3: "Warren Edward Buffett"
4: "Larry Page"
5: "Larry Ellison"
6: "Tim Cook"
*/

```

some 문제
---
- 전체 이름의 길이가 20자 이상인 사람이 있는가?
- 성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
```
let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

//전체 이름의 길이가 20자 이상인 사람이 있는가?
let over20 = names.some((item) => {
    return item.length > 20;
});
console.log(over20);
// 결과 : true

//성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
let pNames = names.some((item) => {
    return item.includes("p");
});
console.log(pNames);
// 결과 : false

```

every 문제
---
- 모두의 전체 이름의 길이가 20자 이상인가?
- 모두의 이름에 a 가 포함되어 있는가?
```
let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

//모두의 전체 이름의 길이가 20자 이상인가?
let everyOver20 = names.every((item) => {
    return item.length > 20;
});
console.log(everyOver20);
// 결과 : false

//모두의 이름에 a 가 포함되어 있는가?
let everyPNames = names.every((item) => {
    return item.includes("a");
});
console.log(everyPNames);
// 결과 : false

```

find 문제
---
- 전체 이름의 길이가 20자 이상인 사람을 찾으시오.
- 미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)
```
let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

//전체 이름의 길이가 20자 이상인 사람을 찾으시오.
let findOver20 = names.find((item) => item.length > 20);
console.log(findOver20);
// 결과 : Mark Elliot Zuckerberg


//미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)
let findNames = names.find((name) => name.split(" ").length > 2);
console.log(findNames);
// 결과 : Steven Paul Jobs

```

findIndex 문제
---
- 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
- 미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
```
let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

//전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
let findIndexOver20 = names.findIndex((item) => item.length > 20);
console.log(findIndexOver20);
// 결과 : 2

//미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
let findIndexNames = names.findIndex((name) => name.split(" ").length > 2);
console.log(findIndexNames);
// 결과 : 0

```


