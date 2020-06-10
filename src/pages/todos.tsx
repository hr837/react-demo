import React from "react";
import styled from "styled-components";
import AddTodo from "../components/todos/add-todo";
import TodoList from "../components/todos/todo-list";
import { TodoInfo } from "../store/types/todo";
import { connect } from "react-redux";
import { addTodo } from "../store/actions/todo.action";
import { bindActionCreators } from "redux";

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
};

class Todos extends React.Component<PropsType> {
  public render() {
    return (
      <components.Wrapper>
        <AddTodo onAdd={this.props.addClick} />
        <TodoList list={this.props.list} />
      </components.Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.TodoReducer.todos as TodoInfo[],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addClick: bindActionCreators(addTodo, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
