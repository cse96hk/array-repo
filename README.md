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
```
map 문제
---
- 모든 이름을 대문자로 바꾸어서 출력하시오.
- 성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
- 이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])
```
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

/* 결과
(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: Object
oneCase: "STEVEN PAUL JOBS"   // 대문자변환
threeCase: "SPJ"  // 이니셜
twoCase: "STEVEN" // 성 제외 이름만
__proto__: Object
1: Object
oneCase: "BILL GATES"
threeCase: "BG"
twoCase: "BILL"
__proto__: Object
2: Object
3: Object
4: Object
5: Object
6: Object
7: Object
8: Object
9: Object
length: 10
__proto__: Array(0)
*/
```

filter 문제
---
- 이름에 a를 포함한 사람들을 출력하시오.
- 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)
```
//이름에 a를 포함한 사람들을 출력하시오.
let aNames = names.filter((item) => {
    return item.includes("a");
});
console.log(aNames);
/* 결과
(7) ["Steven Paul Jobs", "Bill Gates", "Mark Elliot Zuckerberg", "Warren Edward Buffett", "Larry Page", "Larry Ellison", "Lloyd Blankfein"]
0: "Steven Paul Jobs"
1: "Bill Gates"
2: "Mark Elliot Zuckerberg"
3: "Warren Edward Buffett"
4: "Larry Page"
5: "Larry Ellison"
6: "Lloyd Blankfein"
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
```

every 문제
---
- 모두의 전체 이름의 길이가 20자 이상인가?
- 모두의 이름에 a 가 포함되어 있는가?
```
```

find 문제
---
- 전체 이름의 길이가 20자 이상인 사람을 찾으시오.
- 미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)
```
```

findIndex 문제
---
- 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
- 미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
```
```


