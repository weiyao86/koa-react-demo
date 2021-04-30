import { Link, Route } from 'dva/router';
import TweenOne from 'rc-tween-one';
import { Button, Progress } from 'antd';
import React from 'react';
import './style.less';

let TweenOneGroup = TweenOne.TweenOneGroup;

class Fun extends React.Component {
  render() {
    return <div>test</div>;
  }
}

const queue = (function () {
  let pending = [];

  function next(p) {
    let fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }

  return {
    add: function (fn) {
      if (typeof fn === 'function') pending.push(fn);
    },

    getQueue: function () {
      return pending;
    },

    clear: function () {
      pending.length = 0;
    },

    trigger: function () {
      next();
    },
  };
})();

class Class extends React.Component {
  state = {
    star: false,
    current: 0,
  };

  timeTotal = 10 * 1000;
  calcCount = 0;

  setRandom(size = 10, sum = 100) {
    let csize = size - 1;
    let csum = sum;
    let arr = [];
    while (csize--) {
      let rad = Math.ceil(Math.random() * (csum / 2));
      arr.push(rad);
      csum -= rad;
    }
    arr.push(csum);
    return arr;
  }

  doneByTime({next, totalTime, percent,cb}) {
    let startLoop = +new Date();
    let timer = null;
    let count = 0;
    let delay = 16.733;
   
    let percentByms=percent*delay/totalTime;
    let begin = () => {
      let now = +new Date();
      let sub = now - startLoop;
      sub >= totalTime && (sub = totalTime);
      let cur = sub / totalTime;
     
      this.calcCount += percentByms;

      this.setState({ current: this.calcCount });

      if (cur < 1) {
        let nextTime = delay - (now - (startLoop + count * delay));
        if (nextTime < 0) {
          nextTime = 0;
        }
        timer = setTimeout(begin, Math.min(delay, nextTime));
      } else {
        clearTimeout(timer);
        typeof cb=="function" && cb(`进度:${percent}--总进度:${this.calcCount}---次数:${count}---块时间:${totalTime}`);
        next();
        
      }
      count++;
    };
    begin();
  }

  onStart = () => {
    let self = this;
    this.calcCount = 0;
    let random = this.setRandom();

    random.forEach((curPercent, idx) => {
      let curTime = (curPercent / 100) * this.timeTotal;
      queue.add(function (next) {
        console.log(`当前步骤=>${idx+1}`);
        self.doneByTime({next, totalTime:curTime, percent:curPercent,cb:(msg)=>{
          console.log(msg+`---步骤${idx+1}`);
          if(queue.getQueue().length==0){
            console.timeEnd('time');
          }
        }});
      });
    });
    
    console.time('time');
    queue.trigger();
  };

  render() {
    const { current } = this.state;
    return (
      <>
        <h2>Home</h2>
        <TweenOne
          animation={{ x: 50 }}
          onChange={(e) => {
            // console.log(e);
          }}
        >
          <Button onClick={() => this.onStart()}>Demo</Button>
        </TweenOne>
        <Progress
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
          percent={current}
        />
      </>
    );
  }
}
export default Class;
