import React from "react";
import styled from "styled-components";
import AddTodo from "./components/add-todo";
import TodoList from "./components/todo-list";
import { TodoInfo } from "@/store/todo/type";
import { connect } from "react-redux";
import { addTodo, toggleTodo, getTodoList } from "@/store/todo/actions";
import { bindActionCreators } from "redux";
import { AppState } from "@/store";
import axios from "axios";

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
  updateTodos: (list: TodoInfo[]) => void;
};

class Todos extends React.Component<PropsType> {
  public componentDidMount() {
    // axios
    //   .get(
    //     "https://www.easy-mock.com/mock/5ee1f4484740ee0b0aafc8ba/example/todos"
    //   )
    //   .then(({ data }) => {
    //     console.log(data.records);
    //     this.props.updateTodos(data.records);
    //   });
  }

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
    updateTodos: bindActionCreators(getTodoList, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
