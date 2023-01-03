import React, { Component, createRef } from "react";
import Try from "./Try";
function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arr = [];

  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    arr.push(chosen);
  }
  return arr;
}

export default class NumberBaseBall extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };

  onSubmitClick = (e) => {
    e.preventDefault();

    if (this.state.value === this.state.answer.join("")) {
      this.setState((prevState) => {
        return {
          result: "홈런!",
          tries: [
            ...prevState.tries,
            { try: this.state.value, result: "홈런" },
          ],
        };
      });
      alert("게임 다시 시작한다.");
      this.setState({
        result: "",
        value: "",
        answer: getNumbers(),
        tries: [],
      });
    } else {
      const answerArr = this.state.value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;

      for (let i = 0; i < 4; i++) {
        if (answerArr[i] === this.state.answer[i]) {
          strike++;
        } else if (this.state.answer.includes(answerArr[i])) {
          ball++;
        }
      }

      this.setState((prevState) => {
        return {
          tries: [
            ...prevState.tries,
            {
              try: this.state.value,
              result: `${strike} 스트라이크 ${ball} 볼`,
            },
          ],
        };
      });
      if (this.state.tries.length === 9) {
        this.setState({
          result: `게임 오-바- 정답은 ${this.state.answer.join(",")} 였다.`,
        });
        this.setState({
          value: "",
          answer: getNumbers(),
          tries: [],
        });
        alert("실패");
      }
    }
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitClick}>
          <input
            value={this.state.value}
            maxLength={4}
            onChange={this.onChangeInput}
          />
          <div>try: {this.state.tries.length}</div>
          <ul>
            {this.state.tries.map((v, i) => {
              return <Try key={i + 1} tryInfo={v} />;
            })}
          </ul>
        </form>
      </>
    );
  }
}
