import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoAction from '../../Action/TodoAction';
import Input from "../Templates/input";

// trim 函数
let trim = (str) => {
  return typeof str === 'string' ? str.replace(/^\s+|\s+$/g, "") : "";
};

class InputContainer extends Component {

  render() {
    const {
      createItem
    } = this.props;
    
    return (
      <Input 
        type='text' 
        style={{width:200,height:30}} 
        placeholder="please input here to add ..." 
        autoFocus={true} 
        onKeyDown={(e)=>{
          var val = e.target.value;
          var _val = trim(val);
          // 正常新增
          if(e.keyCode === 13 && _val) {
            createItem(e.target.value);
            e.target.value = ""; // 清空原值
          }

          // 空值回车的处理
          if(e.keyCode === 13 && !_val) {
            e.target.value = ""; // 清空原值
          }
        }}
      />
    )
  }

}

export default connect(
  undefined,
  {
    createItem:TodoAction.createItem
  }
)(InputContainer);
