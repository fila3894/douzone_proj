import React from "react";

import {
    AppstoreOutlined,
    CalendarOutlined,
    DashboardOutlined,
    FileTextOutlined,
    FormOutlined,
    LayoutOutlined,
    LineChartOutlined,
    MenuOutlined,
    ProfileOutlined,
    SwitcherOutlined,
    TableOutlined,
} from '@ant-design/icons';

import { Menu } from "antd";
import {Link} from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";

const Menus_backup = () => {
    return (
        <div>
            {/* 사이드바 열과 닫는 아이콘 ( 아래 2개 ) */}
            {/*<Icon
                className="trigger layout-trigger header-toggle"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
            />

            <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
            />*/}
            <div className="logo"/>
            <Menu theme="light" defaultSelectedKeys={[1]}
                  mode="horizontal">
                <Menu.Item key="1">
                    <Link to="/dashboard">
                        <div className>
                            <DashboardOutlined />
                            <span> Dashboard </span>
                        </div>
                    </Link>
                </Menu.Item>

                <SubMenu key="2"
                         style={{margin : "0 0 100 100"}}
                         title={
                             <span>
                      <LayoutOutlined />
                      <span>Layout</span>
                  </span>
                         }
                >
                    <Menu.Item key="sub2.1">
                        <Link to="/layout/grid"><span>Grid</span></Link>
                    </Menu.Item>
                    <Menu.Item key="sub2.2">
                        <Link to="/layout/gridLayout"><span>Layout</span></Link>
                    </Menu.Item>
                </SubMenu>

                <SubMenu key="3"
                         title={
                             <span>
                    <FormOutlined />
                    <span>Form</span>
                </span>
                         }
                >
                    <Menu.Item key="3.1">
                        <Link to="/form/form-elements">Form Elements</Link>
                    </Menu.Item>
                    <Menu.Item key="3.2">
                        <Link to="/form/form-components">Form Components</Link>
                    </Menu.Item>
                    <Menu.Item key="3.3">
                        <Link to="/form/form-controls">Form Controls</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu
                    key="4"
                    title={
                        <span>
                    <MenuOutlined />
                    <span>Navigation</span>
                </span>
                    }
                >
                    <Menu.Item key="4.1">
                        <Link to="/navigation/affix">Affix / Breadcrumbs</Link>
                    </Menu.Item>
                    <Menu.Item key="4.2">
                        <Link to="/navigation/dropdown">Dropdown</Link>
                    </Menu.Item>
                    <Menu.Item key="4.4">
                        <Link to="/navigation/menu">Menu</Link>
                    </Menu.Item>
                    <Menu.Item key="4.5">
                        <Link to="/navigation/pagination">Pagination</Link>
                    </Menu.Item>
                    <Menu.Item key="4.6">
                        <Link to="/navigation/pageheader">Pageheader</Link>
                    </Menu.Item>
                    <Menu.Item key="4.7">
                        <Link to="/navigation/steps">Steps</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu
                    key="5"
                    title={
                        <span>
                    <AppstoreOutlined />
                    <span>Components</span>
                </span>
                    }
                >
                    <Menu.Item key="5.1">
                        <Link to="/components/buttons">
                            Buttons</Link>
                    </Menu.Item>
                    <Menu.Item key="5.2">
                        <Link to="/components/typography">
                            Typography</Link>
                    </Menu.Item>
                </SubMenu>

                <Menu.Item key="5">
                    <Link to="calendar">

                        <CalendarOutlined />
                        Calendar

                    </Link>
                </Menu.Item>

                <SubMenu
                    key="6"
                    title={
                        <span>
                      <CalendarOutlined />
                      <span>Calendar</span>
                  </span>
                    }
                >
                    <Menu.Item key="6.1">
                        <Link to="/calendar/basic-calendar">Basic Calendar</Link>
                    </Menu.Item>
                    <Menu.Item key="6.2">
                        <Link to="/calendar/notice-calendar">Notice Calendar</Link>
                    </Menu.Item>
                    <Menu.Item key="6.3">
                        <Link to="/calendar/selectable-calendar">Selectable Calendar</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu
                    key="7"
                    title={
                        <span>
                      <TableOutlined />
                      <span>Datadisplay </span>
                  </span>
                    }
                >
                    <Menu.Item key="7.1">
                        <Link to="/data-display/list">
                            List </Link>
                    </Menu.Item>
                    <Menu.Item key="7.2">
                        <Link to="/data-display/tooltip-popover">
                            Tooltips/Popovers </Link>
                    </Menu.Item>
                    <Menu.Item key="7.3">
                        <Link to="/data-display/carousel">
                            Carousel</Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="8">
                    <Link to="/charts">
                        <div><LineChartOutlined /><span>Charts</span></div>
                    </Link>
                </Menu.Item>
                <Menu.Item key="9">
                    <Link to="/profile">
                        <div><ProfileOutlined /><span>Profile</span></div>
                    </Link>
                </Menu.Item>
                <Menu.Item key="10">
                    <Link to="/table">
                        <div><TableOutlined /><span>Table</span></div>
                    </Link>
                </Menu.Item>
                <Menu.Item key="11">
                    <Link to="/language-switcher">
                        <div><SwitcherOutlined /><span>Language Switcher</span></div>
                    </Link>
                </Menu.Item>
                <Menu.Item key="12">

                    <Link to="/docs">
                        <div><FileTextOutlined /><span>docs </span></div>
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    );
}
export default Menus_backup