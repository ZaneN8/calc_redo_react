import React from "react";

class Output extends React.Component {
  render(answerProp) {
    const { answer } = this.props;
    return <div>{answer}</div>;
  }
}

export default Output;
