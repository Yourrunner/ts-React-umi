import { Flex, Spin } from 'antd';
import React from 'react';

export default class App extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <>
        <Flex align="center" gap="middle">
          <Spin size="large" />
        </Flex>
      </>
    );
  }
}
