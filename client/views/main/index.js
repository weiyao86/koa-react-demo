import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import {GlobalContext} from '@/components/globalContext';
import './style.less';

//自定义指令
const withTest = props => WrapCmp => {
  console.log('p', props)
  return class extends React.Component {
    render() {
      return <div>test {props}<WrapCmp></WrapCmp></div>
    }
  }
}

@withTest
class Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      star: false,
    };

    //监听地址变化
    // this.unlisten = this.props.history.listen((location, action) => {
    //   if (location.pathname !== this.state.location.pathname) {
    //     this.setState({defaultSelectKeys: [location.pathname], location});
    //   }
    // });
  }

  handleStar = () => {
    this.setState((state) => {
      return {
        star: !state.star,
      };
    });
  };
  //Context 使用
  static contextType  = GlobalContext;
  componentDidMount() {
    console.log(this.context, 'context');

    ReactDOM.createPortal(<div>test portal</div>,document.body);
    setTimeout(() => {
      this.props.history.push({ search: `{name:'jack',age:20}` });
    }, 2000);
  }

  render() {
    const { star } = this.state;
    console.log(this.props.location);

    return (
      <>
        <p onClick={this.handleStar.bind(null, star)}>start</p>
        main
        <div className='star'>⭐</div>
      </>
    );
  }
}
export default Class;
