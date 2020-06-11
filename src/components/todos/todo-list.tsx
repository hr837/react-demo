import React from "react";
import styled from "styled-components";
import { TodoInfo } from "../../store/todo/type";
import { Empty, List } from "antd";

type PropsType = {
  list: TodoInfo[];
  onItemClick: (index: number) => void;
};

const component = {
  Wrapper: styled.section`
    margin-top: 10px;
    max-height: 500px;
    overflow-y: auto;

    .ant-list-items {
      .ant-list-item {
        &:hover {
          background: #f8f8f8;
        }
        &.completed {
          text-decoration-line: line-through;
        }
      }
    }
  `,
};

export default class TodoList extends React.Component<PropsType> {
  static defaultProps: { list: [] };

  public render() {
    return (
      <component.Wrapper>
        <List
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item
              className={item.completed ? "completed" : ""}
              onClick={this.props.onItemClick.bind(this, index)}
            >
              {item.text}
            </List.Item>
          )}
        ></List>
      </component.Wrapper>
    );
  }
}
