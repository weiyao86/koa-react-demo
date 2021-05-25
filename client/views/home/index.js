import { Link, Route } from 'dva/router';
import TweenOne from 'rc-tween-one';
import { Button, Progress } from 'antd';
import React from 'react';
import HtmlToPdf from '@/components/html-to-pdf';
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

  timeTotal = 5 * 1000;
  calcCount = 0;
  timer = null;

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

  doneByTime({ next, totalTime, percent, cb }) {
    let startLoop = +new Date();
    let count = 0;
    let delay = 16.733;
    let prev = 0;

    let begin = () => {
      let now = +new Date();
      let sub = now - startLoop;
      sub >= totalTime && (sub = totalTime);
      let cur = sub / totalTime;

      let percentByms = percent * cur;
      this.calcCount += percentByms-prev;
      this.setState({ current: this.calcCount });

      if (cur < 1) {
        let nextTime = delay - (now - (startLoop + count * delay));
        if (nextTime < 0) {
          nextTime = 0;
        }
        this.timer = setTimeout(begin, Math.min(delay, nextTime));
      } else {
        clearTimeout(this.timer);
        typeof cb == 'function' && cb(`进度条值:${percent}--总进度:${this.calcCount}---次数:${count}---块时间:${totalTime}`);
        next();
      }
      
      prev = percentByms;
      count++;
    };
    begin();
  }

  onStart = () => {
    let self = this;
    this.calcCount = 0;
    let random = this.setRandom();

    clearTimeout(this.timer);
    queue.clear();
    random.forEach((curPercent, idx) => {
      let curTime = (curPercent / 100) * this.timeTotal;
      queue.add(function (next) {
        
        console.log(`当前步骤=>${idx + 1}`);

        self.doneByTime({
          next,
          totalTime: curTime,
          percent: curPercent,
          cb: (msg) => {
            console.log(msg + `---步骤${idx + 1}`);
            if (queue.getQueue().length == 0) {
              console.timeEnd('time');
              self.setState({ current: 100 });
            }
          },
        });
      });
    });

    console.time('time');
    queue.trigger();
  };

  componentDidMount(){
    
  }

  render() {
    const { current } = this.state;
    return (
      <>
        <h2 className="wrap">Home</h2>
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
        <HtmlToPdf></HtmlToPdf>
      </>
    );
  }
}
export default Class;
