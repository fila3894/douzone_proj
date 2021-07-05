import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/global.scss';
import {Card, Row, Col} from 'antd';

import './index.scss';
import App from './App';
import Login from './pages/login';
import Register from './pages/register';

import SaleLayout from './yang/sale';
import SaleDetail from './yang/saleDetail';
import ReceiveList from './yang/receiveList';
import Main from './yang/main';
import RevenueGraph from './yang/revenueGraph'
// import Grid from './pages/layout/grid';
// import GridLayout from './pages/layout/gridLayout';
// import FormElements from './pages/form/form-elements';
// import FormControls from './pages/form/form-controls';
// import FormComponents from './pages/form/form-components';
// import Affix from './pages/navigation/affix';
// import Dropdown from './pages/navigation/dropdown';
// import Menu from './pages/navigation/menu';
// import Pagination from './pages/navigation/pagination';
// import PageHeader from './pages/navigation/pageheader';
// import Steps from './pages/navigation/steps';
// import Buttons from './pages/components/buttons';
// import Typography from './pages/components/typography';
// import BasicCalendar from './pages/calendar/basic-calendar';
// import NoticeCalendar from './pages/calendar/notice-calendar';
// import SelectableCalendar from './pages/calendar/selectable-calendar';
// import List from './pages/data-display/list';
// import Tooltip from './pages/data-display/tooltip-popover';
// import Carousel from './pages/data-display/carousel';
// import Charts from './pages/charts';
// import Profile from './pages/profile';
// import Table from './pages/table';
// import LanguageSwitcher from './pages/language-switcher';
// import Docs from './pages/docs';

import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';
  const NoMatchPage = () => {
    return (
      <Row style={{marginTop: '20%'}}>
        <Col xs={{span: 12, offset: 6}}>

          <Card>
            <div className="card-body">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <h2>Page not found</h2>
                <Link to="/dashboard">back to dashboard</Link>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    );
  };

  const routing = (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Main}/>
        <Route exact path="/dashboard/sale" component={SaleLayout} />
        <Route exact path="/dashboard/sale/detail" component={SaleDetail} />
        <Route exact path="/dashboard/receiveList" component={ReceiveList} />
        <Route exact path="/dashboard/statistics" component={RevenueGraph} />
        <Route path="*" component={NoMatchPage} />
    </Switch>
    </Router>
  );
  ReactDOM.render (routing, document.getElementById ('root'));
