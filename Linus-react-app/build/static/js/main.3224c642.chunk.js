(this["webpackJsonpLinus-react-app"]=this["webpackJsonpLinus-react-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(7),s=a.n(l),o=(a(13),a(1)),c=a(2),r=a(4),p=a(3),u=a(5),d=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("p",{onClick:this.props.CallbackHome,style:{cursor:"pointer"}},"Home"),i.a.createElement("p",{style:{textAlign:"center"}},"Package Name: ",this.props.Data.packageName),i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("p",{style:{display:"inline-block"}},"Dependencies: "),this.props.Data.depends.map((function(t,a){return t.includes("|")?t.split("|").map((function(t){return console.log(e.props.AllPackageNames),console.log(t),e.props.AllPackageNames.includes(t.trim())?i.a.createElement("p",{Index:e.props.AllPackageNames.indexOf(t.trim()),style:{display:"inline-block",padding:"10px",color:"blue",cursor:"pointer"},onClick:e.props.CallbackNext}," ",t," "):i.a.createElement("p",{style:{display:"inline-block",padding:"10px"}}," ",t," ")})):e.props.AllPackageNames.includes(t)?i.a.createElement("p",{Index:e.props.AllPackageNames.indexOf(t),style:{display:"inline-block",padding:"10px",color:"blue",cursor:"pointer"},onClick:e.props.CallbackNext}," ",t," "):i.a.createElement("p",{style:{display:"inline-block",padding:"10px"}}," ",t," ")}))),i.a.createElement("p",{style:{textAlign:"center"}},this.props.Data.description))}}]),t}(n.Component),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(p.a)(t).call(this,e))).state={data:"",index:"",show:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/file").then((function(e){return e.json()})).then((function(t){var a=t.map((function(e){return e.packageName.trim()}));console.log(t),e.setState({data:t,packageNames:a},(function(){console.log(e.state)}))}))}},{key:"hideorshow",value:function(e){this.setState({index:parseInt(e.target.attributes.index.value),show:!0})}},{key:"callbackHome",value:function(){this.setState({show:!1})}},{key:"callbackNext",value:function(e){console.log(parseInt(e.target.attributes.index.value)),this.setState({index:parseInt(e.target.attributes.index.value)})}},{key:"render",value:function(){var e=this;return""!==this.state.data&&!1===this.state.show?i.a.createElement("div",null,this.state.data.map((function(t,a){return i.a.createElement("p",{index:a,onClick:e.hideorshow.bind(e),style:{color:"blue",cursor:"pointer",textAlign:"center"}}," ",t.packageName)}))):""!==this.state.data&&this.state.show?i.a.createElement(d,{AllPackageNames:this.state.packageNames,CallbackHome:this.callbackHome.bind(this),CallbackNext:this.callbackNext.bind(this),Data:this.state.data[this.state.index]}):i.a.createElement("p",null,"Waiting for data")}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.3224c642.chunk.js.map