import { useParams } from '@umijs/max';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
const App = () => {
  const [dataSource, setDataSource] = useState([]);
  const [tagList, setTagList] = useState([]);
  const params = useParams();
  const columns = [
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
            {console.log(dataSource, tagList)}
          </span>
        );
      },
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  useEffect(() => {
    fetchList();
    fetTagList();
  }, []);

  const fetchList = () => {
    fetch('/api/testOne', { method: 'GET' })
      .then((res) => res.json())
      .then((res) => setDataSource(res.data));
  };

  const fetTagList = () => {
    fetch('/api/testTwo', { method: 'GET' })
      .then((res) => res.json())
      .then((res) => setTagList(res.data));
  };

  return (
    <>
      <Table columns={columns} dataSource={dataSource} />
      {console.log(params)}
      <div>{params?.test}</div>
    </>
  );
};

export default App;
