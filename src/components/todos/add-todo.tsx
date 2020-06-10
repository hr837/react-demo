import React from "react";
import styled from "styled-components";
import { Input, Button } from "antd";

const component = {
  Wrapper: styled.section`
    display: flex;
    .todo-input {
      width: 80%;
      margin-right: 10px;
    }
  `,
};

type PropsType = {
  /**
   * 点击添加按钮
   */
  onAdd: (text: string) => void;
};

type StateType = {
  inputValue: string;
};

export default class AddTodo extends React.Component<PropsType, StateType> {
  state: StateType = {
    inputValue: "",
  };

  private onBtnClick = () => {
    this.props.onAdd(this.state.inputValue);
    this.setState({
      inputValue: "",
    });
  };

  private onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({
      inputValue: e.currentTarget.value,
    });
  };

  public render() {
    return (
      <component.Wrapper>
        <Input
          className="todo-input"
          value={this.state.inputValue}
          onChange={this.onInputChange}
        />
        <Button type="primary" onClick={this.onBtnClick}>
          添加任务
        </Button>
      </component.Wrapper>
    );
  }
}
