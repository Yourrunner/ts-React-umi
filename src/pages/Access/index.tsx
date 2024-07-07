import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
import { Button } from 'antd';
import { Link, history } from 'umi';

const AccessPage: React.FC = () => {
  const access = useAccess();
  return (
    <PageContainer
      ghost
      header={{
        title: '权限示例',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Link to={'/test'}>跳转到测试页面</Link>
        <br />
        <br />
        <Button onClick={() => history.push('/test')}>
          只有 Admin 可以看到这个按钮 (路由跳转测试)
        </Button>
      </Access>
    </PageContainer>
  );
};

export default AccessPage;
