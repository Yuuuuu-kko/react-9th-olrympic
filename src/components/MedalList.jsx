import { useState } from "react";

// 국가별 메달 리스트
const MedalLists = (props) => {
  const [setReNewState, renewState] = props;
  const [renew, setRenew] = useState({
    id: crypto.randomUUID(), // 초기 값 정의 // 베이직반 2강 참고할것
    contry: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  // 인풋 핸들러
  const handleCountry = (e) =>
    setRenew({ ...renew, ["addCountry"]: e.target.value });

  const handleGold = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setRenew({ ...renew, gold: value });
    }
  };
  const handleSilver = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setRenew({ ...renew, silver: value });
    }
  };
  const handleBronze = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setRenew({ ...renew, bronze: value });
    }
  };

  // 폼 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    // 중복 검사
    const isCountyExist = renewState.some(
      (i) => i.addCountry === renew.addCountry
    );

    if (isCountyExist) {
      alert("이미 등록된 국가입니다.");
    } else {
      setReNewState([renew, ...renewState.sort((a, b) => b.gold - a.gold)]);
    }
    // 초기화
    renew({
      id: crypto.randomUUID(),
      contry: "",
      gold: 0,
      silver: 0,
      bronze: 0,
    });
  };

  const handleUpdate = () => {
    // 유효성 검사 _ 빈값
    if (!renew.addCountry || !renew.gold || !renew.silver || !renew.bronze) {
      alert("모든 입력 필드를 채워주세요!");
      return;
    }

    // 유효성 검사 _ 중복값 존재하는지 찾기 (같은 로직 사용)
    const isCountryExist = currentState.some(
      (i) => i.addCountry === renew.addCountry
    );
    // 존재하지 않는 국가일 경우, 알림
    if (!isCountryExist) {
      alert("존재하지 않는 국가입니다.");
    }

    // 새로 입력한 값을 map으로 다시 뿌려주기
    setCurrentState((prevState) =>
      prevState.map((i) => {
        if (i.addCountry === renew.addCountry) {
          return {
            ...i,
            gold: renew.gold,
            silver: renew.silver,
            bronze: renew.bronze,
          };
        } else {
          return i;
        }
      })
    );

    // 데이터 초기화
    setData({
      id: crypto.randomUUID(),
      addCountry: "",
      gold: "",
      silver: "",
      bronze: "",
    });
  };

  return (
    <div>
      <div>
        <h1>2024 제33회 파리 올림픽 </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-style">
          <label className="label-style" htmlFor="name">
            국가명
          </label>
          <input
            onChange={handleCountry}
            value={data.addCountry}
            id="name"
            className="input-style"
            type="text"
            placeholder="국가명을 입력해주세요"
          />

          <label className="label-style" htmlFor="gold">
            금메달
          </label>
          <input
            onChange={handleGold}
            value={data.gold}
            id="gold"
            className="input-style"
            type="number"
            placeholder="금메달 수량 입력"
          />

          <label className="label-style" htmlFor="silver">
            은메달
          </label>
          <input
            onChange={handleSilver}
            value={data.silver}
            id="silver"
            className="input-style"
            type="number"
            placeholder="은메달 수량 입력"
          />

          <label className="label-style" htmlFor="bronze">
            동메달
          </label>
          <input
            onChange={handleBronze}
            value={data.bronze}
            id="bronze"
            className="input-style"
            type="number"
            placeholder="동메달 수량 입력"
          />

          <div>
            <button type="submit" className="button-style-yellow">
              국가 추가
            </button>
            <button
              onClick={handleUpdate}
              type="button"
              className="button-style-yellow"
            >
              업데이트
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MedalLists;
