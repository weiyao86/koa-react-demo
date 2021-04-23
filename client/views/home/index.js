import {Link,Route} from 'dva/router'
import Graphin, { Behaviors } from '@antv/graphin';
import './style.less';
class Class extends React.Component {
  state  = {
    star: false
  }

  handleStar=()=>{

    this.setState((state)=>{
      return {
        star:!state.star
      }
    });
  }

  render() {
    const {star} = this.state;
    return (
      <>
        
      </>
    )
  }
}
export default Class;