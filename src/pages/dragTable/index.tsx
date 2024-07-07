/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { RadioChangeEvent, TableProps } from 'antd';
import {
  Button,
  Card,
  Form,
  Input,
  message,
  Modal,
  Radio,
  Table,
  Tag,
} from 'antd';
import React, { useEffect, useState } from 'react';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const options = [
  { label: '普通', value: 1 },
  { label: '可拖拽', value: 2 },
  { label: 'others', value: 3 },
];

interface MyProps {
  name?: string;
  num?: number;
}

const App: React.FC<MyProps> = () => {
  const [dataSource, setDataSource] = useState<[]>([]);
  const [opt, setOpt] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [formRef] = Form.useForm();
  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name',
      render: (text, row, index) => <span>{text ?? '-- --'}</span>,
    },
    {
      title: 'Age',
      key: 'age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      key: 'address',
      dataIndex: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'operation',
      key: 'operation',
      render: (_, row, index) => (
        <>
          <Button
            size="small"
            type="primary"
            style={{ marginRight: '10px' }}
            onClick={() => handlerEdit(row)}
          >
            编辑
          </Button>
          <Button
            size="small"
            type="primary"
            danger
            onClick={() => handlerDelete(row)}
          >
            删除
          </Button>
        </>
      ),
    },
  ];

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = () => {
    fetch('/api/testTwo', { method: 'GET' })
      .then((res) => res.json())
      .then((res) => setDataSource(res.data));
  };

  const handlerSwitchOpt = ({ target: { value } }: RadioChangeEvent) => {
    setOpt(value);
  };

  const handlerAdd = () => {
    setIsEdit(false);
    setIsOpen(true);
    formRef.resetFields();
  };

  const handlerEdit = (row: Object) => {
    setIsEdit(true);
    setIsOpen(true);
    formRef.setFieldsValue(row);
  };

  const handlerDelete = (row: any) => {
    const copy = dataSource;
    const res = copy.filter((item) => (item as any).key !== row.key);
    setDataSource(res as []);
  };

  const handlerClose = () => {
    setIsEdit(false);
    setIsOpen(false);
  };

  const handlerFinish = (e: any) => {
    setIsOpen(false);
    isEdit ? message.success('编辑成功') : message.success('新增成功');
  };

  return (
    <>
      <Card
        title={
          <>
            <Radio.Group
              options={options}
              optionType="button"
              size="large"
              defaultValue={1}
              onChange={(e) => handlerSwitchOpt(e)}
            ></Radio.Group>
          </>
        }
        extra={
          <>
            <Button type="primary" onClick={() => handlerAdd()}>
              新增
            </Button>
          </>
        }
      >
        <Table
          columns={opt === 1 ? columns : []}
          dataSource={opt === 1 ? dataSource : []}
        ></Table>
      </Card>

      <Modal
        open={isOpen}
        footer={null}
        title={isEdit ? '编辑' : '新增'}
        onCancel={() => handlerClose()}
      >
        <Form form={formRef} onFinish={(e) => handlerFinish(e)}>
          <Form.Item
            label="姓名"
            name="name"
            rules={[{ required: true, message: '请输入姓名' }]}
          >
            <Input placeholder="请输入姓名"></Input>
          </Form.Item>
          <Form.Item
            label="年龄"
            name="age"
            rules={[{ required: true, message: '请输入年龄' }]}
          >
            <Input placeholder="请输入年龄"></Input>
          </Form.Item>
          <Form.Item label="地址" name="address">
            <Input placeholder="请输入地址"></Input>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 10 }}>
            <Button htmlType="submit" type="primary">
              确定
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default App;
