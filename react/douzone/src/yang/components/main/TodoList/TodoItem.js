import * as React from 'react';

import {Checkbox, List} from 'antd';

function TodoItem(props) {
  if(props.done === undefined){
    console.log(props.item.done);
    props.item.done = false;
  }


  const onToggle = () => {
    const toggleValue = !props.done;
    props.setListData ({
      done: toggleValue,
    });
  }

    return (
      <List.Item className={props.done !== undefined ? '' : 'checkedList'}>
        <Checkbox
          onClick={()=>onToggle}
        />
        <p style={{marginBottom: '0px', marginLeft: '15px'}}>
          <span className={props.done !== undefined ? '' : 'strikethrough'}>
            {props.text}
          </span>
        </p>
      </List.Item>
    );
}
export default TodoItem;
