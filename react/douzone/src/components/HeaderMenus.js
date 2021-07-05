import * as React from 'react';
import logo from '../static/images/logo.png';
import avatar from '../static/images/flat-avatar.png';
import 'antd/dist/antd.css';

import {Link} from 'react-router-dom';

import {Avatar, Input, Menu} from 'antd';
import {
    BarsOutlined,
    BuildOutlined,
    DatabaseOutlined,
    DollarOutlined,
    EditOutlined,
    ExceptionOutlined,
    LineChartOutlined,
    ProfileOutlined,
    ShopOutlined,
    SnippetsOutlined,
    SolutionOutlined,
    TagsOutlined,
    WhatsAppOutlined
} from "@ant-design/icons";

const {SubMenu} = Menu;
const Search = Input.Search;


const headerMenuStyle = {
    padding: "5px 5px 5px 5px", // 상우하좌
    fontSize: "20px",
    display: "inline-block",
    height: "80px",
    width: "130px",
    textAlign: "center"
}

const subMenuStyle = {
    fontSize: "15px",
    color: "#1890ff",
}


class HeaderMenus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'search',
            rtl: true,
        };
        // this.sidebarToggle = this.sidebarToggle.bind(this);
    }

    // sidebarToggle() {
    //     this.setState({
    //         rtl: !this.state.rtl,
    //     });
    //     let body = document.body;
    //     body.classList.toggle('rtl');
    // }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        // const classBox = `primaryBg box`;
        return (
            <Menu
                mode="horizontal"
                theme="light"
                className="d-flex align-items-center custom-navigation"
                defaultSelectedKeys={"0"}
            >

                <Menu.Item key="0" className="brand-logo" style={headerMenuStyle}>
                    <Link to="/dashboard">
                        <img src={logo} className="m-x-4" alt={"logo"}/>
                        <span>메인</span>
                    </Link>
                </Menu.Item>

                <SubMenu key="1" style={headerMenuStyle}
                         title="조제">
                    <Menu.Item key="1-1" style={subMenuStyle}>
                        <Link to="/dashboard">
                            <SnippetsOutlined/>
                            처방전
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="1-2" style={subMenuStyle}>
                        <Link to="/dashboard">
                            <ExceptionOutlined/>
                            복약지도
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="2" style={headerMenuStyle}
                         title="판매">
                    <Menu.Item key="2-1" style={subMenuStyle}>
                        <Link to="/dashboard/sale">
                            <DollarOutlined/>
                            판매하기
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2-2" style={subMenuStyle}>
                        <Link to="/dashboard/sale/detail">
                            <ProfileOutlined/>
                            판매내역
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="3" style={headerMenuStyle}
                         title="입고">
                    <Menu.Item key="3-1" style={subMenuStyle}>
                        <Link to="/dashboard">
                            <TagsOutlined/>
                            입고등록
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3-2" style={subMenuStyle}>
                        <Link to="/dashboard/receiveList">
                            <ProfileOutlined/>
                            입고내역
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="4" style={headerMenuStyle}
                         title="상품">
                    <Menu.Item key="4-1" style={subMenuStyle}>
                        <Link to="/dashboard">
                            <DatabaseOutlined/>
                            상품내역
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4-2" style={subMenuStyle}>
                        <Link to="/dashboard">
                            <EditOutlined/>
                            상품정보수정
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="5" style={headerMenuStyle}
                         title="재고">
                    <Menu.Item key="5-1" style={subMenuStyle}>
                        <Link to="/dashboard">
                            <BuildOutlined/>
                            재고조회
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="6" style={headerMenuStyle}
                         title="거래처">
                    <Menu.Item key="6-1" style={subMenuStyle}>
                        <Link to="/dashboard">
                            <ShopOutlined/>
                            거래처 관리
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="6-2" style={subMenuStyle}>
                        <Link to="/dashboard">
                            <SolutionOutlined/>
                            거래내역
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="7" style={headerMenuStyle}
                         title="통계">
                    <Menu.Item key="7-1" style={subMenuStyle}>
                        <Link to="/dashboard/statistics">
                            <LineChartOutlined/>
                            매출 그래프
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="7-2" style={subMenuStyle}>
                        <Link to="/dashboard">
                            <BarsOutlined/>
                            매출현황
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="7-3" style={subMenuStyle}>
                        <Link to="/dashboard">
                            <ProfileOutlined/>
                            상품매출집계
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="8" style={headerMenuStyle}>
                    <Link to="/dashboard">
                        <WhatsAppOutlined/>
                        문의하기
                    </Link>
                </Menu.Item>

                <Menu.Item key="search" className="custom-search auto">
                    <Search onSearch={value => console.log(value)}/>
                </Menu.Item>

                {/*<Menu.Item key="sidebar-toggle" onClick={this.sidebarToggle}>
          <span>LTR/RTR</span>
        </Menu.Item>*/}

                {/* <SubMenu
          title={
            <span className="submenu-title-wrapper">
              Language{' '}
            </span>
          }
          className="custom-dropdown language-list"
        >
          <Menu.Item key="setting:1">English</Menu.Item>
          <Menu.Item key="setting:2">Dutch</Menu.Item>
          <Menu.Item key="setting:3">Hindi</Menu.Item>
          <Menu.Item key="setting:4">Urdu</Menu.Item>
        </SubMenu> */}

                <SubMenu
                    key="profile"
                    title={
                        <span>
              <Avatar size={24} src={avatar}/>
              <span style={{fontSize: 20, marginLeft: 10, textAlign: "right"}}> Profile</span>
            </span>
                    }
                    className=""
                    style={{marginRight: "50px"}}
                >
                    <Menu.Item key="profile-view">
                        <Link to="/profile">Profile</Link>
                    </Menu.Item>
                    <Menu.Item key="logout"><Link to="/">Logout</Link></Menu.Item>
                </SubMenu>

            </Menu>


        );
    }
}

export default HeaderMenus;
