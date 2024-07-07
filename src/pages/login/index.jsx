import { history } from '@umijs/max';
import { Button, Card, Form, Input } from 'antd';
import React from 'react';

const cardStyle = {
  width: '500px',
};
export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  handlerFinish = (e) => {
    const { userName, passWord } = e;
    if (userName === '123' && passWord === '123') {
      localStorage.setItem('loginStatus', 200);
      history.push('/home');
    }
  };
  render() {
    return (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Card size="small" style={{ width: '500px' }} title="登录">
            <Form onFinish={(e) => this.handlerFinish(e)}>
              <Form.Item
                label="用户名"
                name="userName"
                required={[{ required: true, message: '请输入用户名' }]}
              >
                <Input placeholder="请输入用户名"></Input>
              </Form.Item>
              <Form.Item
                label="密码"
                name="passWord"
                required={[{ required: true, message: '请输入密码' }]}
              >
                <Input placeholder="密码"></Input>
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 10 }}>
                <Button type="primary" htmlType="submit">
                  确认
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </>
    );
  }
}
