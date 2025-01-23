import { useState } from "react";
import "./App.css";
import MedalLists from "./components/MedalList";

const App = () => {
  const [contryNames, setContryNames] = useState([]); // 얘 따로 컴포넌트로 만들어서 아래 list에 {} 만 삽입? 나머지 메달들은 저기서 로직?
  const [medalFormList, setmedalFormList] = useState({
    contry: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  return (
    <div className="container">
      <div>
        <h1>2024 파리 올림픽</h1>
        <form class="input-group">
          <div class="input-field">
            <label>국가명</label>
            <input type="text" placeholder="국가 입력" />
          </div>
          <div class="input-field">
            <label>금메달</label>
            <input type="number" placeholder="0" value="0" />
          </div>
          <div class="input-field">
            <label>은메달</label>
            <input type="number" placeholder="0" value="0" />
          </div>
          <div class="input-field">
            <label>동메달</label>
            <input type="number" placeholder="0" value="0" />
          </div>
          <div class="button-group">
            <button>국가 추가</button>
            <button>업데이트</button>
          </div>
        </form>
        <div>{/*메달 리스트*/}</div>
      </div>
    </div>
  );
};

export default App;
