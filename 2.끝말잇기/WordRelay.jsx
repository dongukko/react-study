const React = require("react");
const { Component } = React;

//Class Component
// class WordRelay extends Component {
//   state = {
//     word: "고라니",
//     value: "",
//     result: "",
//   };

//   onSubmitForm = (e) => {
//     e.preventDefault();

//     if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
//       this.setState({ result: "딩동댕", word: this.state.value });
//     } else {
//       this.setState({ result: "땡" });
//     }
//   };

//   onChangeInput = (e) => {
//     this.setState({ value: e.target.value });
//   };

//   render() {
//     return (
//       <>
//         <div>{this.state.word}</div>
//         <form onSubmit={this.onSubmitForm}>
//           <input value={this.state.value} onChange={this.onChangeInput} />
//           <button>입력</button>
//         </form>
//         <div>{this.state.result}</div>
//       </>
//     );
//   }
// }

// Function Component
const WordRelay = () => {
  const [word, setWord] = React.useState("커피");
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕");
      setWord(value);
    } else {
      setResult("땡");
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <p>{word}</p>
      <form onSubmit={onSubmitForm}>
        <input value={value} onChange={onChangeInput}></input>
        <button>입력</button>
      </form>
      <p>{result}</p>
    </>
  );
};
module.exports = WordRelay;
