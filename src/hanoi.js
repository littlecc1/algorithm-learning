import React, { Component } from 'react';
import './App.css';
import echarts from 'echarts';
import {InputNumber,Icon,Button} from 'antd';
import 'antd/dist/antd.css';
import './index.css';

class Inputhanoi extends Component {
  constructor(props) {
  super(props);

  this.state = {total: 15,value:4,myChartY:{},myChartZ:{},dataX: { //标准参数
      title: 'hanoiX',
      legend: ['', ''],
      barWidth:30,
      yAxis: ['','','',''],
      xAxis: [
        [ -40,-30,-20,-10],
        [ 40,30,20,10]
      ],
      color: ['#5e94dd', '#5e94dd'],
    },myChartX:{},dataY: { //标准参数
      title: 'hanoiY',
      legend: ['', ''],
      barWidth:30,
      yAxis: ['','','',''],
      xAxis: [
        [0],
        [0]
      ],
      color: ['#5e94dd', '#5e94dd'],
    },dataZ: { //标准参数
      title: 'hanoiZ',
      legend: ['', ''],
      barWidth:30,
      yAxis: ['','','',''],
      xAxis: [
        [0],
        [0]
      ],
      color: ['#5e94dd', '#5e94dd'],
    },changeData:[]};
  this.getNumber = this.getNumber.bind(this);
  this.hanoiRun = this.hanoiRun.bind(this);
  this.hanoi = this.hanoi.bind(this);
  this.deleteNumber = this.deleteNumber.bind(this);
  this.addNumber = this.addNumber.bind(this);
  // this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    let dataX = this.state.dataX;
    let dataY = this.state.dataY;
    let dataZ = this.state.dataZ;
    const myChartX = echarts.init(document.getElementById('hanoiX'));
    this.setState({
      myChartX:myChartX.setOption({
        backgroundColor:'#fff',
        title: {
          text: dataX.title,
          left: 180,
          top: 12
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: false // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function(params) {
            var time = '';
            var str = '';
            for (var i of params) {
              time = i.name.replace(/\n/g, '') + '<br/>';
              if (i.data=== 'null' || i.data === null) {
                str += i.seriesName + '：无数据' + '<br/>'
              } else {
                str += i.seriesName + '：' + Math.abs(i.data) + '<br/>'
              }
            }
            return time + str;
          },
        },
        legend: {
          top: 12,
          itemGap: 10,
          itemWidth: 10,
          itemHeight: 10,
          data: dataX.legend
        },
        color: dataX.color,
        grid: {
          x: 50,
          x2: 30,
          y2: 5,
          containLabel: true
        },
        xAxis: {
          show: false
        },
        yAxis: [{
          type: 'category',

          axisLine: {
            show: true
          },
          axisTick: {
            show: false
          },
          data: dataX.yAxis
        }],
        series: [{
          name: dataX.legend[0],
          type: 'bar',
          barWidth: dataX.barWidth||12,
          stack: '总量',
          label: {
            normal: {
              show: false,
              position: 'left',
              color: '#687284',
              fontSize: '10',
              formatter: function(params) {
                return params.dataX * -1;
              }
            },

          },
          data: dataX.xAxis[0]
        },
          {
            name: dataX.legend[1],
            type: 'bar',
            barWidth: dataX.barWidth||12,
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'right',
                color: '#687284',
                fontSize: '10',
              }
            },
            data: dataX.xAxis[1]
          },
        ]
      })
    });
    console.log(this.state.myChartX);
    const myChartY = echarts.init(document.getElementById('hanoiY'));
    this.setState({
      myChartY:myChartY.setOption({
        backgroundColor:'#fff',
        title: {
          text: dataY.title,
          left: 80,
          top: 12
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: false // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function(params) {
            var time = '';
            var str = '';
            for (var i of params) {
              time = i.name.replace(/\n/g, '') + '<br/>';
              if (i.data === 'null' || i.data === null) {
                str += i.seriesName + '：无数据' + '<br/>'
              } else {
                str += i.seriesName + '：' + Math.abs(i.data) + '<br/>'
              }
            }
            return time + str;
          },
        },
        legend: {
          top: 12,
          itemGap: 10,
          itemWidth: 10,
          itemHeight: 10,
          data: dataY.legend
        },
        color: dataY.color,
        grid: {
          x: 50,
          x2: 30,
          y2: 5,
          containLabel: true
        },
        xAxis: {
          show: false
        },
        yAxis: [{
          type: 'category',

          axisLine: {
            show: true
          },
          axisTick: {
            show: false
          },
          data: dataY.yAxis
        }],
        series: [{
          name: dataY.legend[0],
          type: 'bar',
          barWidth: dataY.barWidth||12,
          stack: '总量',
          label: {
            normal: {
              show: false,
              position: 'left',
              color: '#687284',
              fontSize: '10',
              formatter: function(params) {
                return params.dataY * -1;
              }
            },

          },
          data: dataY.xAxis[0]
        },
          {
            name: dataY.legend[1],
            type: 'bar',
            barWidth: dataY.barWidth||12,
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'right',
                color: '#687284',
                fontSize: '10',
              }
            },
            data: dataY.xAxis[1]
          },
        ]
      })
    });
    const myChartZ = echarts.init(document.getElementById('hanoiZ'));
    this.setState({
      myChartZ:myChartZ.setOption({
        backgroundColor:'#fff',
        title: {
          text: dataZ.title,
          left: 80,
          top: 12
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: false // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function(params) {
            var time = '';
            var str = '';
            for (var i of params) {
              time = i.name.replace(/\n/g, '') + '<br/>';
              if (i.data === 'null' || i.data === null) {
                str += i.seriesName + '：无数据' + '<br/>'
              } else {
                str += i.seriesName + '：' + Math.abs(i.data) + '<br/>'
              }
            }
            return time + str;
          },
        },
        legend: {
          top: 12,
          itemGap: 10,
          itemWidth: 10,
          itemHeight: 10,
          data: dataZ.legend
        },
        color: dataZ.color,
        grid: {
          x: 50,
          x2: 30,
          y2: 5,
          containLabel: true
        },
        xAxis: {
          show: false
        },
        yAxis: [{
          type: 'category',

          axisLine: {
            show: true
          },
          axisTick: {
            show: false
          },
          data: dataZ.yAxis
        }],
        series: [{
          name: dataZ.legend[0],
          type: 'bar',
          barWidth: dataZ.barWidth||12,
          stack: '总量',
          label: {
            normal: {
              show: false,
              position: 'left',
              color: '#687284',
              fontSize: '10',
              formatter: function(params) {
                return params.dataZ * -1;
              }
            },

          },
          data: dataZ.xAxis[0]
        },
          {
            name: dataZ.legend[1],
            type: 'bar',
            barWidth: dataZ.barWidth||12,
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'right',
                color: '#687284',
                fontSize: '10',
              }
            },
            data: dataZ.xAxis[1]
          },
        ]
      })
    })

  }
  addNumber(hanoi,addData) {
    if(hanoi.xAxis[0][hanoi.xAxis[0].length-1] === 0){
      hanoi.xAxis[0][hanoi.xAxis[0].length-1] = addData[0];
      hanoi.xAxis[1][hanoi.xAxis[1].length-1] = addData[1];
    }else{
      hanoi.xAxis[0][hanoi.xAxis[0].length] = addData[0];
      hanoi.xAxis[1][hanoi.xAxis[1].length] = addData[1];
    }

    let dataX = hanoi;
    if(hanoi.title === 'hanoiX'){
      const myChartX = echarts.init(document.getElementById(hanoi.title));
      this.setState({
        myChartX:myChartX.setOption({
          backgroundColor:'#fff',
          title: {
            text: dataX.title,
            left: 180,
            top: 12
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: false // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function(params) {
              var time = '';
              var str = '';
              for (var i of params) {
                time = i.name.replace(/\n/g, '') + '<br/>';
                if (i.data=== 'null' || i.data === null) {
                  str += i.seriesName + '：无数据' + '<br/>'
                } else {
                  str += i.seriesName + '：' + Math.abs(i.data) + '<br/>'
                }
              }
              return time + str;
            },
          },
          legend: {
            top: 12,
            itemGap: 10,
            itemWidth: 10,
            itemHeight: 10,
            data: dataX.legend
          },
          color: dataX.color,
          grid: {
            x: 50,
            x2: 30,
            y2: 5,
            containLabel: true
          },
          xAxis: {
            show: false
          },
          yAxis: [{
            type: 'category',

            axisLine: {
              show: true
            },
            axisTick: {
              show: false
            },
            data: dataX.yAxis
          }],
          series: [{
            name: dataX.legend[0],
            type: 'bar',
            barWidth: dataX.barWidth||12,
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'left',
                color: '#687284',
                fontSize: '10',
                formatter: function(params) {
                  return params.dataX * -1;
                }
              },

            },
            data: dataX.xAxis[0]
          },
            {
              name: dataX.legend[1],
              type: 'bar',
              barWidth: dataX.barWidth||12,
              stack: '总量',
              label: {
                normal: {
                  show: false,
                  position: 'right',
                  color: '#687284',
                  fontSize: '10',
                }
              },
              data: dataX.xAxis[1]
            },
          ]
        })
      });
    }
    if(hanoi.title === 'hanoiY'){
      const myChartY = echarts.init(document.getElementById(hanoi.title));
      this.setState({
        myChartY:myChartY.setOption({
          backgroundColor:'#fff',
          title: {
            text: dataX.title,
            left: 180,
            top: 12
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: false // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function(params) {
              var time = '';
              var str = '';
              for (var i of params) {
                time = i.name.replace(/\n/g, '') + '<br/>';
                if (i.data=== 'null' || i.data === null) {
                  str += i.seriesName + '：无数据' + '<br/>'
                } else {
                  str += i.seriesName + '：' + Math.abs(i.data) + '<br/>'
                }
              }
              return time + str;
            },
          },
          legend: {
            top: 12,
            itemGap: 10,
            itemWidth: 10,
            itemHeight: 10,
            data: dataX.legend
          },
          color: dataX.color,
          grid: {
            x: 50,
            x2: 30,
            y2: 5,
            containLabel: true
          },
          xAxis: {
            show: false
          },
          yAxis: [{
            type: 'category',

            axisLine: {
              show: true
            },
            axisTick: {
              show: false
            },
            data: dataX.yAxis
          }],
          series: [{
            name: dataX.legend[0],
            type: 'bar',
            barWidth: dataX.barWidth||12,
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'left',
                color: '#687284',
                fontSize: '10',
                formatter: function(params) {
                  return params.dataX * -1;
                }
              },

            },
            data: dataX.xAxis[0]
          },
            {
              name: dataX.legend[1],
              type: 'bar',
              barWidth: dataX.barWidth||12,
              stack: '总量',
              label: {
                normal: {
                  show: false,
                  position: 'right',
                  color: '#687284',
                  fontSize: '10',
                }
              },
              data: dataX.xAxis[1]
            },
          ]
        })
      });
    }
    if(hanoi.title === 'hanoiZ'){
      const myChartZ = echarts.init(document.getElementById(hanoi.title));
      this.setState({
        myChartZ:myChartZ.setOption({
          backgroundColor:'#fff',
          title: {
            text: dataX.title,
            left: 180,
            top: 12
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: false // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function(params) {
              var time = '';
              var str = '';
              for (var i of params) {
                time = i.name.replace(/\n/g, '') + '<br/>';
                if (i.data=== 'null' || i.data === null) {
                  str += i.seriesName + '：无数据' + '<br/>'
                } else {
                  str += i.seriesName + '：' + Math.abs(i.data) + '<br/>'
                }
              }
              return time + str;
            },
          },
          legend: {
            top: 12,
            itemGap: 10,
            itemWidth: 10,
            itemHeight: 10,
            data: dataX.legend
          },
          color: dataX.color,
          grid: {
            x: 50,
            x2: 30,
            y2: 5,
            containLabel: true
          },
          xAxis: {
            show: false
          },
          yAxis: [{
            type: 'category',

            axisLine: {
              show: true
            },
            axisTick: {
              show: false
            },
            data: dataX.yAxis
          }],
          series: [{
            name: dataX.legend[0],
            type: 'bar',
            barWidth: dataX.barWidth||12,
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'left',
                color: '#687284',
                fontSize: '10',
                formatter: function(params) {
                  return params.dataX * -1;
                }
              },

            },
            data: dataX.xAxis[0]
          },
            {
              name: dataX.legend[1],
              type: 'bar',
              barWidth: dataX.barWidth||12,
              stack: '总量',
              label: {
                normal: {
                  show: false,
                  position: 'right',
                  color: '#687284',
                  fontSize: '10',
                }
              },
              data: dataX.xAxis[1]
            },
          ]
        })
      });
    }

  }
  deleteNumber(hanoi) {
    if(hanoi.xAxis[0].length){
      this.state.changeData = [ hanoi.xAxis[0][hanoi.xAxis[0].length-1],hanoi.xAxis[1][hanoi.xAxis[1].length-1]];
      hanoi.xAxis[0].splice(hanoi.xAxis[0].length-1,1);
      hanoi.xAxis[1].splice(hanoi.xAxis[1].length-1,1);
      /*this.state.myChartX.clear;
      this.setState({
        // dataX:hanoi
        dataX:{ //标准参数
          title: 'hanoiX',
          legend: ['', ''],
          barWidth:30,
          yAxis: ['','','',''],
          xAxis: [
            [ -40, -30, -20],
            [ 40, 30, 20]
          ],
          color: ['#5e94dd', '#5e94dd'],
        }
      });*/
      let dataX = hanoi;
      if(hanoi.title === 'hanoiX'){
        const myChartX = echarts.init(document.getElementById(hanoi.title));
        this.setState({
          myChartX:myChartX.setOption({
            backgroundColor:'#fff',
            title: {
              text: dataX.title,
              left: 180,
              top: 12
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: false // 默认为直线，可选为：'line' | 'shadow'
              },
              formatter: function(params) {
                var time = '';
                var str = '';
                for (var i of params) {
                  time = i.name.replace(/\n/g, '') + '<br/>';
                  if (i.data=== 'null' || i.data === null) {
                    str += i.seriesName + '：无数据' + '<br/>'
                  } else {
                    str += i.seriesName + '：' + Math.abs(i.data) + '<br/>'
                  }
                }
                return time + str;
              },
            },
            legend: {
              top: 12,
              itemGap: 10,
              itemWidth: 10,
              itemHeight: 10,
              data: dataX.legend
            },
            color: dataX.color,
            grid: {
              x: 50,
              x2: 30,
              y2: 5,
              containLabel: true
            },
            xAxis: {
              show: false
            },
            yAxis: [{
              type: 'category',

              axisLine: {
                show: true
              },
              axisTick: {
                show: false
              },
              data: dataX.yAxis
            }],
            series: [{
              name: dataX.legend[0],
              type: 'bar',
              barWidth: dataX.barWidth||12,
              stack: '总量',
              label: {
                normal: {
                  show: false,
                  position: 'left',
                  color: '#687284',
                  fontSize: '10',
                  formatter: function(params) {
                    return params.dataX * -1;
                  }
                },

              },
              data: dataX.xAxis[0]
            },
              {
                name: dataX.legend[1],
                type: 'bar',
                barWidth: dataX.barWidth||12,
                stack: '总量',
                label: {
                  normal: {
                    show: false,
                    position: 'right',
                    color: '#687284',
                    fontSize: '10',
                  }
                },
                data: dataX.xAxis[1]
              },
            ]
          })
        });
      }
      if(hanoi.title === 'hanoiY'){
        const myChartY = echarts.init(document.getElementById(hanoi.title));
        this.setState({
          myChartY:myChartY.setOption({
            backgroundColor:'#fff',
            title: {
              text: dataX.title,
              left: 180,
              top: 12
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: false // 默认为直线，可选为：'line' | 'shadow'
              },
              formatter: function(params) {
                var time = '';
                var str = '';
                for (var i of params) {
                  time = i.name.replace(/\n/g, '') + '<br/>';
                  if (i.data=== 'null' || i.data === null) {
                    str += i.seriesName + '：无数据' + '<br/>'
                  } else {
                    str += i.seriesName + '：' + Math.abs(i.data) + '<br/>'
                  }
                }
                return time + str;
              },
            },
            legend: {
              top: 12,
              itemGap: 10,
              itemWidth: 10,
              itemHeight: 10,
              data: dataX.legend
            },
            color: dataX.color,
            grid: {
              x: 50,
              x2: 30,
              y2: 5,
              containLabel: true
            },
            xAxis: {
              show: false
            },
            yAxis: [{
              type: 'category',

              axisLine: {
                show: true
              },
              axisTick: {
                show: false
              },
              data: dataX.yAxis
            }],
            series: [{
              name: dataX.legend[0],
              type: 'bar',
              barWidth: dataX.barWidth||12,
              stack: '总量',
              label: {
                normal: {
                  show: false,
                  position: 'left',
                  color: '#687284',
                  fontSize: '10',
                  formatter: function(params) {
                    return params.dataX * -1;
                  }
                },

              },
              data: dataX.xAxis[0]
            },
              {
                name: dataX.legend[1],
                type: 'bar',
                barWidth: dataX.barWidth||12,
                stack: '总量',
                label: {
                  normal: {
                    show: false,
                    position: 'right',
                    color: '#687284',
                    fontSize: '10',
                  }
                },
                data: dataX.xAxis[1]
              },
            ]
          })
        });
      }
      if(hanoi.title === 'hanoiZ') {
        const myChartZ = echarts.init(document.getElementById(hanoi.title));
        this.setState({
          myChartZ: myChartZ.setOption({
            backgroundColor: '#fff',
            title: {
              text: dataX.title,
              left: 180,
              top: 12
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: false // 默认为直线，可选为：'line' | 'shadow'
              },
              formatter: function (params) {
                var time = '';
                var str = '';
                for (var i of params) {
                  time = i.name.replace(/\n/g, '') + '<br/>';
                  if (i.data === 'null' || i.data === null) {
                    str += i.seriesName + '：无数据' + '<br/>'
                  } else {
                    str += i.seriesName + '：' + Math.abs(i.data) + '<br/>'
                  }
                }
                return time + str;
              },
            },
            legend: {
              top: 12,
              itemGap: 10,
              itemWidth: 10,
              itemHeight: 10,
              data: dataX.legend
            },
            color: dataX.color,
            grid: {
              x: 50,
              x2: 30,
              y2: 5,
              containLabel: true
            },
            xAxis: {
              show: false
            },
            yAxis: [{
              type: 'category',

              axisLine: {
                show: true
              },
              axisTick: {
                show: false
              },
              data: dataX.yAxis
            }],
            series: [{
              name: dataX.legend[0],
              type: 'bar',
              barWidth: dataX.barWidth || 12,
              stack: '总量',
              label: {
                normal: {
                  show: false,
                  position: 'left',
                  color: '#687284',
                  fontSize: '10',
                  formatter: function (params) {
                    return params.dataX * -1;
                  }
                },

              },
              data: dataX.xAxis[0]
            },
              {
                name: dataX.legend[1],
                type: 'bar',
                barWidth: dataX.barWidth || 12,
                stack: '总量',
                label: {
                  normal: {
                    show: false,
                    position: 'right',
                    color: '#687284',
                    fontSize: '10',
                  }
                },
                data: dataX.xAxis[1]
              },
            ]
          })
        });
      }
    }
  }
  getNumber(value) {
    this.setState({
      value: value,
      total: Math.pow(2,value)-1,
    })
  }
  hanoiRun(n,a,b,c){
    if(n === 1){
      // let data =
      switch (a){
        case 'hanoiX':this.deleteNumber(this.state.dataX);break;
        case 'hanoiY':this.deleteNumber(this.state.dataY);break;
        case 'hanoiZ':this.deleteNumber(this.state.dataZ);break;
      }
      switch (c){
        case 'hanoiX':this.addNumber(this.state.dataX,this.state.changeData);break;
        case 'hanoiY':this.addNumber(this.state.dataY,this.state.changeData);break;
        case 'hanoiZ':this.addNumber(this.state.dataZ,this.state.changeData);break;
      }
      // setInterval(alert('从'+a+'移动'+n+'到'+c), 1000);
      alert('从'+a+'移动'+n+'到'+c);
    }else{
      this.hanoiRun(n-1,a,c,b);
      switch (a){
        case 'hanoiX':this.deleteNumber(this.state.dataX);break;
        case 'hanoiY':this.deleteNumber(this.state.dataY);break;
        case 'hanoiZ':this.deleteNumber(this.state.dataZ);break;
      }
      switch (c){
        case 'hanoiX':this.addNumber(this.state.dataX,this.state.changeData);break;
        case 'hanoiY':this.addNumber(this.state.dataY,this.state.changeData);break;
        case 'hanoiZ':this.addNumber(this.state.dataZ,this.state.changeData);break;
      }
      // setInterval(alert('从'+a+'移动'+n+'到'+c), 1000);
      alert('从'+a+'移动'+n+'到'+c);
      this.hanoiRun(n-1,b,a,c);
    }
  }
  hanoi() {
    let n = this.state.value;
    let a = 'hanoiX';
    let b = 'hanoiY';
    let c = 'hanoiZ';
    this.hanoiRun(n,a,b,c);
  }
  render() {
    return (
      <div>
      <div className="App-echarts">
      <div id="hanoiX" style={{width:400,height:400}}></div>
      <div id="hanoiY" style={{width:400,height:400}}></div>
      <div id="hanoiZ" style={{width:400,height:400}}></div>
      </div>
      <div className="App-echarts">
      <div className="App-echarts"><p className="App-p" >请输入N</p><InputNumber min={3} max={10} defaultValue={4} onChange={this.getNumber} /></div>
      <div><p className="App-p">一共执行{this.state.total}步</p></div>
      <div><Button  type="primary" onClick={this.hanoi}>GO</Button></div>
      </div>
    </div>
      )
  }
}

function hanoiTest() {
 return (
   <div>
   <Inputhanoi />
   </div>
 )
}
export default hanoiTest;
