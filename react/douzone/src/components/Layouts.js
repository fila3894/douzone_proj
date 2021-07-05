import React, {Component, PropTypes, useState} from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import HeaderMenus from './HeaderMenus';
import { Layout, Menu } from 'antd';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from "@ant-design/icons";
import Menus_backup from "./Menus_backup";

const {SubMenu} = Menu;
const {Header, Sider, Content} = Layout;

class Layouts extends React.Component {
    state = {
        collapsed: true,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4', 'sub5', 'sub3', 'sub6'];

    state = {
        openKeys: '',
        collapsed: true,
    };

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({openKeys});
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        // const classname = (this.props, "classname", " ");
        return (
            <Layout>

                    <Header className="headerTop">

                        <HeaderMenus />


                        {/*<Menus_backup />*/}

                    </Header>
                    <Content
                        style={{
                            padding: 24,
                            minHeight: "100%",
                            marginTop: 70,
                        }}
                        /*className={this.state.collapsed ? "collapsed mainContnet " : "mainContnet"}*/
                    >

                        {this.props.children}
                    </Content>
                </Layout>
            /*</Layout>*/


        );
    }
}

export default Layouts;