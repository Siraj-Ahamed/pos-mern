import React, { useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    LogoutOutlined,
    HomeOutlined,
    CopyOutlined,
    UnorderedListOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const DefaultLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                style={{
                    overflow: "auto",
                    height: "100vh",
                    position: "fixed",
                    left: 0,
                }}
            >
                {/* <div className="demo-logo-vertical" /> */}
                <div className="logo">
                    <h1 className="text-center text-light font-weight-bold mt-4">
                        POS
                    </h1>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={window.location.pathname}
                    // items={[
                    //     {
                    //         key: "1",
                    //         icon: <UserOutlined />,
                    //         label: "nav 1",
                    //     },
                    //     {
                    //         key: "2",
                    //         icon: <VideoCameraOutlined />,
                    //         label: "nav 2",
                    //     },
                    //     {
                    //         key: "3",
                    //         icon: <UploadOutlined />,
                    //         label: "nav 3",
                    //     },
                    // ]}
                >
                    <Menu.Item key="/" icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>

                    <Menu.Item key="/bills" icon={<CopyOutlined />}>
                        <Link to="/bills">Bills</Link>
                    </Menu.Item>

                    <Menu.Item key="/items" icon={<UnorderedListOutlined />}>
                        <Link to="/items">Items</Link>
                    </Menu.Item>

                    <Menu.Item key="/customers" icon={<UserOutlined />}>
                        <Link to="/customers">Customers</Link>
                    </Menu.Item>

                    {/* cart is here */}
                    <Menu.Item key="/cart" icon={<ShoppingCartOutlined />}>
                        <Link to="/cart">Cart 0</Link>
                    </Menu.Item>

                    <Menu.Item key="/logout" icon={<LogoutOutlined />}>
                        <Link>Logout</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout
                className="site-layout"
                style={{ marginLeft: collapsed ? 80 : 200 }}
            >
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        position: "fixed",
                        zIndex: 1,
                        width: "100%",
                    }}
                >
                    <Button
                        type="text"
                        icon={
                            collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )
                        }
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: "16px",
                            width: 64,
                            height: 64,
                        }}
                    />
                    {/* <div className="cart-item">
                        <p>0</p>
                          <ShoppingCartOutlined />
                    </div> */}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        // margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        marginTop: 64,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};
export default DefaultLayout;
