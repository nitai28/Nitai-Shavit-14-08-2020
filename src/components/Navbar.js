import React from 'react';
import {Menu, Layout} from 'antd';
import {NavLink} from "react-router-dom";
import {
    ShoppingCartOutlined,
    ShoppingOutlined
} from '@ant-design/icons';

const {Header} = Layout;

const Navbar = () => {

    return (
        <Layout className="layout">
            <Header>
                <Menu defaultSelectedKeys={["list"]} theme={"dark"}
                      mode="horizontal">
                    <Menu.Item key="list" icon={<ShoppingCartOutlined/>}>
                        <NavLink to="/list">Store</NavLink>
                    </Menu.Item>
                    <Menu.Item key="received" icon={<ShoppingOutlined/>}>
                        <NavLink to="/received">received</NavLink>
                    </Menu.Item>
                </Menu>
            </Header>
        </Layout>
    );
};

export default Navbar;
