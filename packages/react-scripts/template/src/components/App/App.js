import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import SiderMenu from '../SiderMenu';
import Routes from '../../Routes';

const { Sider, Content } = Layout;

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Sider>
          <SiderMenu />
        </Sider>
        <Content>
          <Routes />
        </Content>
      </Layout>
    </BrowserRouter>
  );
}
