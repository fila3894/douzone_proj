import * as React from 'react';
import TodoItem from './TodoItem';
import { DeleteOutlined } from '@ant-design/icons';
import { Card, Input, Button, List } from 'antd';
import {Scrollbars} from 'react-custom-scrollbars';
import { useState } from 'react';

function TodoList() {
  const [listData, setListData] = useState({
      delete: false,
      todoData: [
        {done: false, text: 'Meeting with Nabindar Singh'},
      ],
    });
  const [todoData, setTodoData] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);
    setTodoData(e.target.value);
  }

  const deleteItem = () => {
    setListData({
      delete:!listData.delete,
    });
    // var elems = document.querySelector(".checkedList");
    var lis = document.querySelectorAll ('.checkedList');
    var li;
    for (var i = 0; (li = lis[i]); i++) {
      li.parentNode.removeChild (li);
    }
  }
  const addItem = () => {
      const newTodoList = {
        done: false,
        text: todoData,
      };
      setListData({
        todoData: newTodoList,
      });
  }
  console.log(listData);
    return (
      <Card
        bordered={false}
        title={<p>Todo </p>}
        extra={
          <DeleteOutlined onClick={()=>deleteItem} style={{fontSize: '16px', color: '#f5222d'}} />
        }
        style={{minHeight: '375px'}}
        bodyStyle={{padding: '0 20px'}}
      >
        <div>
          <div>
            <Scrollbars style={{height: 230}}>

              <List>
                {listData.todoData.map ((item, i) => (
                  <TodoItem key={i} done={item.done} text={item.text} />
                ))}
              </List>
            </Scrollbars>

          </div>
          <form style={{paddingTop: '30px'}}>
            <div>
              <div>
                <div className="d-flex">
                  <Input type="text" placeholder="Add New Item" onChange={onChange}/>
                  <Button
                    onClick={() => addItem}
                    style={{marginLeft: '15px'}}
                  >
                    Add
                  </Button>

                </div>
              </div>
            </div>
          </form>
        </div>
      </Card>
    );
  }
export default TodoList;
