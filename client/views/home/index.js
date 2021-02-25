import {CSSTransition} from 'react-transition-group'
import {Link,Route} from 'dva/router'
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
    <p onClick={this.handleStar.bind(null, star)}>start</p>
    <Link to="/main">redirect Home</Link>
    <div className="star">⭐HOME</div>
    <Link to="/dashboard">redirect dashboard</Link>
    <div className="test"> test</div>
    <div className="wrap">wrap</div>
    </>
    )
  }
}
export default Class;