import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout,theme } from 'antd';
import React from 'react';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import '../../layout/Footer.css'
// import { Image } from 'antd';
// import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
// import { Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items3 = [
  {
    icon: React.createElement(UserOutlined),
    label: `Projetos`,
    children: [
      {
        label: `Casamento Naleo`
      },
      {
        label: `Casamento Naleo`
      },
    ]

  },
  {
    icon: React.createElement(LaptopOutlined),
    label: `Projetos`,
    children: new Array(2).fill(null).map((j) => {
      return {
        label: `Casamento Naleo`
      };
    }),
  },
  {
    icon: React.createElement(NotificationOutlined),
    label: `Projetos`,
    children: new Array(2).fill(null).map((j) => {
      return {
        label: `Casamento Naleo`
      };
    }),
  }
];


const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon) => {
  return {
    icon: React.createElement(icon),
    label: `Projetos`,
    children: new Array(2).fill(null).map((j) => {
      return {
        label: `Casamento Naleo`
      };
    }),
  };
});

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

// const items = [
//   getItem('Navigation One', 'sub1', <MailOutlined />, [
//     getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
//     getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
//   ]),
//   getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
//     getItem('Option 5', '5'),
//     getItem('Option 6', '6'),
//     getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
//   ]),
//   {
//     type: 'divider',
//   },
//   getItem('Navigation Three', 'sub4', <SettingOutlined />, [
//     getItem('Option 9', '9'),
//     getItem('Option 10', '10'),
//     getItem('Option 11', '11'),
//     getItem('Option 12', '12'),
//   ]),
//   getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
// ];

const Home = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          justifyContent : 'center',
          height: 'auto'
        }}
      >
    
        <div className="demo-logo" />
        <h1>PortfoLeo</h1>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              style={{
                height: '100%',
              }}
              items={items2}
            />
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              minHeight: '100vh',
            }}
          >
            <Image
                width={200}
                src="https://casamento-naleo.vercel.app/static/media/logonaleo.96b148b78a574349e743.jpg"
            />
          </Content>
        </Layout>
      </Content>
      <Footer className='footer'
      >
        <ul className='social_list'>
            <li><FaFacebook /></li>
                <a href='https://www.instagram.com/leo_dotta26'
                target="_blank"
                body="hello world"
                rel="noopener noreferrer">
                <li><FaInstagram /></li>
                </a>
                <li><FaLinkedin /></li>
        </ul>
        <p className='copy_right'><span>PortfoLeo</span> &copy; 2023</p>      </Footer>
    </Layout>
  )

export default Home;




