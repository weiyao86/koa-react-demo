import {CSSTransition} from 'react-transition-group'

import './style.less';


class Class extends React.Component {

  constructor(props){
    super(props);
    this.state  = {
      star: false
    }
  
    //监听地址变化 
    // this.unlisten = this.props.history.listen((location, action) => {
    //   if (location.pathname !== this.state.location.pathname) {
    //     this.setState({defaultSelectKeys: [location.pathname], location});
    //   }
    // });
  }
  
  handleStar=()=>{
    this.setState((state)=>{
      return {
        star:!state.star
      }
    });
  }

  componentDidMount(){
    setTimeout(()=>{
      lthis.props.history.push({search:`{name:'jack',age:20}`});
    },2000)

    this.props.history.listen=
  }

  render() {
    const {star} = this.state;
    console.log(this.props.location)
   
    return (
      <>
    <p onClick={this.handleStar.bind(null, star)}>start</p>
    main
   
      <div className="star">⭐</div>
    </>
    )
  }
}
export default Class;