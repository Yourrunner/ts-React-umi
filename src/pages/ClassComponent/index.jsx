import { Outlet } from '@umijs/max';
import { Table } from 'antd';
import React from 'react';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      tagList: [],
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
          render: (text, row, index) => {
            return (
              <span>
                {text}
                {console.log(this.state.dataSource, this.state.tagList)}
              </span>
            );
          },
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
      ],
    };
  }

  componentDidMount() {
    this.fetTagList();
    this.fetchList();
  }

  fetchList = () => {
    fetch('/api/testOne', { method: 'GET' })
      .then((res) => res.json())
      .then((res) => this.setState({ dataSource: res.data }));
  };

  fetTagList = () => {
    fetch('/api/testTwo', { method: 'GET' })
      .then((res) => res.json())
      .then((res) => this.setState({ tagList: res.data }));
  };

  render() {
    return (
      <>
        <Table
          columns={this.state.columns}
          dataSource={this.state.dataSource}
        />
        <Outlet></Outlet>
      </>
    );
  }
}
