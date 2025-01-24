const TableLists = (props) => {
  const { renewState, setReNewState } = props;

  const DeleteBtn = (countryName) => {
    const updatedState = renewState.filter(
      (item) => item.addCountry !== countryName
    );
    setReNewState(updatedState);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>액션</th>
          </tr>
        </thead>

        <tbody>
          {renewState.map((renewState) => {
            return (
              <tr key={renewState.id}>
                <td>{renewState.addCountry}</td>
                <td>{renewState.gold}</td>
                <td>{renewState.silver}</td>
                <td>{renewState.bronze}</td>
                <td>
                  <button onClick={() => DeleteBtn(renewState.addCountry)}>
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
