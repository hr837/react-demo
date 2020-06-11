import React from "react";
import styled from "styled-components";
import AddTodo from "../components/todos/add-todo";
import TodoList from "../components/todos/todo-list";
import { TodoInfo } from "../store/todo/type";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../store/todo/actions";
import { bindActionCreators } from "redux";
import { AppState } from "../store";

const components = {
  Wrapper: styled.section`
    width: 500px;
    padding-top: 100px;
    margin: 0 auto;
  `,
};

type PropsType = {
  addClick: (text: string) => void;
  list: TodoInfo[];
  onItemClick: (index: number) => void;
};

class Todos extends React.Component<PropsType> {
  public render() {
    return (
      <components.Wrapper>
        <AddTodo onAdd={this.props.addClick} />
        <TodoList list={this.props.list} onItemClick={this.props.onItemClick} />
      </components.Wrapper>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    list: state.todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addClick: bindActionCreators(addTodo, dispatch),
    onItemClick: bindActionCreators(toggleTodo, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
