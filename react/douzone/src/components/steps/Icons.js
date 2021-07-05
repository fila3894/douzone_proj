import * as React from 'react';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';

const {Step} = Steps;

class Icons extends React.Component {
  render () {
    return (
      <Steps>
        <Step status="finish" title="Login" icon={<UserOutlined />} />
        <Step
          status="finish"
          title="Verification"
          icon={<SolutionOutlined />}
        />
        <Step status="process" title="Pay" icon={<LoadingOutlined />} />
        <Step status="wait" title="Done" icon={<SmileOutlined />} />
      </Steps>
    );
  }
}

export default Icons;
