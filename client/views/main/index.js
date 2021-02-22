import {CSSTransition} from 'react-transition-group'
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
   
      <div className="star">⭐</div>
    </>
    )
  }
}
export default Class;