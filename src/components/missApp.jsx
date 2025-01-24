// // 1 .국가 추가
// const handleAddCountry = (e) => {
//   e.preventDefault(); // 베이직반 2강 함수와 기본 동작 방지 참고할것

//   const { contry, gold, silver, bronze } = medalFormList;
//   if (!contry) {
//     alert("등록할 국가를 입력하십시오.");
//     return;
//   }

//   const newCountry = {
//     id: new Date().getTime(), // React입문 2-14강의 참고할것
//     nation: country,
//     gold: Number(gold),
//     silver: Number(silver),
//     bronze: Number(bronze),
//   };
//   const sortedContry = [...contryNames, newCountry].sort(
//     (a, b) => b.gold - a.gold
//   );
// };

// const existCountry = contryNames.find(function (listCountry) {
//   return listCountry.name === country;
// });

// if (existCountry) {
//   alert("이미 등록된 국가입니다.");
// } else {
//   setCountries(sortedCountry);
//   alert(`${newCountry.name}이 등록되었습니다.`);
// }
// init();

// // 2. 해당 국가 삭제
// const handleDeleteCountry = (id) => {
//   const deletedCountry = contryNames.filter((country) => country.id !== id);
//   if (window.confirm("해당국가를 삭제하시겠습니까?")) {
//     setCountries(deletedCountry);
//     return;
//   }
// };

// // 3. 업데이트
// const handleUpdateCountry = (e) => {
//   e.preventDefault();

//   // find
//   const targetCountry = contryNames.find(function (country) {
//     return country.name === medalFormList.country;
//   });
//   if (!targetCountry) {
//     alert("일치하는 국가가 없습니다!");
//     init();
//     return;
//   }

//   const newCountries = contryNames.map(function (country) {
//     if (country.name === targetCountry.name) {
//       return {
//         ...contryNames,
//         gold: medalFormList.gold,
//         silver: medalFormList.silver,
//         bronze: medalFormList.bronze,
//       };
//     } else {
//       return country;
//     }
//   });
//   setCountries(newCountries);
//   alert(`${targetCountry.name}의 메달 개수가 변경되었습니다!`);
//   init();
// };

// input 초기화
// const init = () => {
//   setmedalFormList({
//     country: "",
//     gold: 0,
//     silver: 0,
//     bronze: 0,
//   });
// };
