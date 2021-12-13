# JS

## 일단 만들어보면서 배우는 자바스크립트
<자소서 글자수 세기>
![image](https://user-images.githubusercontent.com/86909942/145834289-52de6880-5831-4dfe-b0bf-64c531a4ba88.png)

<배울 수 있었던 것>
- getElementById : 자바스크립트로 DOM에 접근해보기
- substring(0, 200) : 0에서 200미만까지 문자열을 잘라라
- document.getElementById('count').innerHTML = '(' + content.length + '/200)' : 형변환하기

<hr/>

<로또 번호 추첨>
![image](https://user-images.githubusercontent.com/86909942/145835177-81fc7cc9-405d-4255-aee1-915b3259ffc5.png)

<배울 수 있었던 것>
- while (lotto.length < 6) : 조건문을 이용해서 6이하까지 lotto배열 만들기
- let num = parseInt((Math.random() * 45) + 1) : 소숫점 버리고 1부터 45이하의 랜덤한 숫자 추출
- if (lotto.indexOf(num) == -1) : 조건문을 활용해서 indexOf 인덱스값이 -1, 즉 없을때 (중복이 아닐때만) lotto배열에 num을 push해라

<hr/>
