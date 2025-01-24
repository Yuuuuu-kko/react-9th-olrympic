import { useState } from "react";
import MedalLists from "./components/MedalList";
import TableLists from "./components/TableLists";

const App = () => {
  const [renewState, setReNewState] = useState([]);

  return (
    <div className="body">
      <MedalLists setReNewState={setReNewState} renewState={renewState} />
      <TableLists renewState={renewState} setReNewState={setReNewState} />
    </div>
  );
};

export default App;
