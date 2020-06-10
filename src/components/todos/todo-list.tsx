import React from "react";
import styled from "styled-components";
import { TodoInfo } from "../../store/types/todo";
import { Empty } from "antd";

type PropsType = {
  list: TodoInfo[];
};

const component = {
  Wrapper: styled.section`
    margin-top: 10px;
    border: solid 1px #ccc;
    border-radius: 8px;
    max-height: 500px;
    overflow-y: auto;
    .ant-empty {
      margin: 50px 0;
    }
  `,
  ListItem: styled.div`
    text-align: left;
    padding: 10px 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    &:not(:last-child) {
      border-bottom: 1px solid #ccc;
    }
    &:hover {
      background: #f8f8f8;
    }
  `,
};

export default class TodoList extends React.Component<PropsType> {
  static defaultProps: { list: [] };

  public render() {
    if (!this.props.list.length) {
      return (
        <component.Wrapper>
          <Empty />
        </component.Wrapper>
      );
    }

    return (
      <component.Wrapper>
        {this.props.list.map((item, index) => (
          <component.ListItem key={index}>{item.text}</component.ListItem>
        ))}
      </component.Wrapper>
    );
  }
}
