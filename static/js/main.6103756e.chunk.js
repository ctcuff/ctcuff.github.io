(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/lightbulb.963c089e.png"},33:function(e,t,a){e.exports=a.p+"static/media/email.ca821b14.svg"},34:function(e,t,a){e.exports=a.p+"static/media/github.76d344f0.svg"},35:function(e,t,a){e.exports=a.p+"static/media/linked-in.1fe3be0e.svg"},36:function(e,t,a){e.exports=a.p+"static/media/resume.27c242bb.svg"},37:function(e,t,a){e.exports=a(65)},51:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e){e.exports=[{title:"Tweet-Tracker",description:"A website to track the occurrences of a given keyword on Twitter in real time. This project was built using Python (Flask) as a backend, and React.js and Javascript in the frontend.",websiteLink:"https://tweeter-tracker.herokuapp.com/",codeRepo:"https://github.com/ctcuff/Tweet-Tracker"},{title:"UCFParking",description:"This is an API and website that tracks how full each parking garage is. Every hour, a scrapper scraps UCF's parking site and saves it to an online database. The backend was created using Python (Flask, again) and the frontend, JavaScript.",websiteLink:"https://ucfparking.herokuapp.com/",codeRepo:"https://github.com/ctcuff/UCFParking-Web"},{title:"MotionPy",description:"A motion detection system using a Raspberry Pi 3, camera module, breadboard, some paper clips and a top-of-the-line cardboard box. A Python server (surprise surprise, it's Flask again) running on the Raspberry Pi sends an Android app, written in Java and Kotlin, a notification and a picture when movement is detected. Images are saved online via Firebase.",websiteLink:null,codeRepo:"https://github.com/ctcuff/MotionPy"}]},62:function(e,t,a){},63:function(e,t,a){e.exports=a.p+"static/media/resume.47122fd7.pdf"},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(17),o=a.n(r),c=a(14),l=a(32),s=a.n(l),m=a(15),d=a.n(m),u=a(10),f=a.n(u),h=a(3);a(51);function p(e){return i.a.createElement("span",{className:"AnimatedSpan"},e.children)}a(52);function b(){var e=function(e){var t=e.currentTarget.getAttribute("href");e.preventDefault(),h.scroller.scrollTo(t,{duration:2e3,smooth:"easeInOutQuad"})};return i.a.createElement("div",{className:"Profile_container"},i.a.createElement(d.a,{className:"Profile_row Profile_image-header"},i.a.createElement(f.a,{className:"Profile_col"},i.a.createElement("div",{style:{padding:16}},i.a.createElement(s.a,{width:c.isMobile?150:200,src:"https://avatars2.githubusercontent.com/u/7400747?v=4",className:"shadow Profile_image",alt:"Profile image",roundedCircle:!0}),i.a.createElement("h1",{className:"display-4 text-muted"},"Cameron Cuff")))),i.a.createElement(d.a,{style:{flex:4},className:"Profile_row"},i.a.createElement(f.a,{className:"Profile_col Profile_col-about"},i.a.createElement("a",{href:"About",className:"display-4 text-muted",onClick:e},i.a.createElement(p,null,"About"))),i.a.createElement(f.a,{className:"Profile_col Profile_col-projects"},i.a.createElement("a",{href:"Projects",className:"display-4 text-muted",onClick:e},i.a.createElement(p,null,"Projects"))),i.a.createElement(f.a,{className:"Profile_col Profile_col-contact"},i.a.createElement("a",{href:"Contact",className:"display-4 text-muted",onClick:e},i.a.createElement(p,null,"Contact")))))}var v=a(4),E=a(5),g=a(7),w=a(6),y=a(8),k=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(g.a)(this,Object(w.a)(t).call(this,e))).child=void 0,a.state={visible:!1,triggered:!1},a.isScrolledIntoView=function(){var e=a.props,t=e.onVisible,n=e.delay,i=e.once;if(!a.state.triggered||!i){var r=a.child.current;if(r){var o=r.offsetTop+r.offsetHeight,c=window.scrollY+window.innerHeight,l=o>window.scrollY&&r.offsetTop<c;a.state.visible!==l&&(a.setState({triggered:!0,visible:l}),setTimeout(function(){return t()},n||0))}}},a.child=i.a.createRef(),a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.isScrolledIntoView)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.isScrolledIntoView)}},{key:"render",value:function(){return i.a.createElement("div",{className:this.props.className,ref:this.child},this.props.children)}}]),t}(n.Component),_=a(25),j=a.n(_),N=(a(54),function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(g.a)(this,Object(w.a)(t).call(this,e))).leftSection=void 0,a.rightSection=void 0,a.state={isMobile:window.innerWidth<=700,animationFinished:!1},a.onWindowResize=function(){a.setState({isMobile:window.innerWidth<=700})},a.onElementVisible=function(){var e=a.leftSection.current,t=a.rightSection.current;e&&t&&(e.classList.add("About_animate-LtoR"),t.classList.add("About_animate-RtoL"),a.setState({animationFinished:!0}))},a.leftSection=i.a.createRef(),a.rightSection=i.a.createRef(),a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onWindowResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onWindowResize)}},{key:"render",value:function(){var e=i.a.createElement("div",{className:"About_container"},i.a.createElement("div",{ref:this.leftSection,style:{flex:1,opacity:this.state.animationFinished?1:0,margin:"16px"}},i.a.createElement("h1",{className:"display-4 text-muted"},"About"),i.a.createElement("p",{className:"text-muted About_p"},"Hey there, my name is Cameron Cuff. I'm a Junior studying Computer Science at the University of Central Florida. I enjoy programming in Java, Python, and Javascript and I'm currently learning Android development, React.js, and a bit of Flask for backend tasks. In my free time, I love to play piano and clarinet.")),i.a.createElement("div",{ref:this.rightSection,style:{flex:1,opacity:this.state.animationFinished?1:0}},i.a.createElement("div",{className:"About_image-wrapper"},i.a.createElement("div",{className:"About_image-spacer"}),i.a.createElement("img",{src:j.a,alt:"Not found",width:"65%"})))),t=i.a.createElement("div",{style:{display:"flex",height:"100vh"}},i.a.createElement("div",{ref:this.leftSection,style:{flex:1}},i.a.createElement("div",{style:{opacity:this.state.animationFinished?1:0,display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",paddingLeft:"5%"}},i.a.createElement("h1",{className:"display-4 text-muted"},"About"),i.a.createElement("p",{className:"text-muted About_p"},"Hey there, my name is Cameron Cuff. I'm a Junior studying Computer Science at the University of Central Florida. I enjoy programming in Java, Python, and Javascript and I'm currently learning Android development, React.js, and a bit of Flask for backend tasks. In my free time, I love to play piano and clarinet."))),i.a.createElement("div",{ref:this.rightSection,style:{flex:1,opacity:this.state.animationFinished?1:0}},i.a.createElement("div",{className:"About_image-wrapper"},i.a.createElement("div",{className:"About_image-spacer"}),i.a.createElement("img",{src:j.a,alt:"Not found",width:"80%"}))));return i.a.createElement(k,{onVisible:this.onElementVisible,delay:500,once:!0},i.a.createElement(h.Element,{name:"About"}),this.state.isMobile?e:t)}}]),t}(n.Component)),P=a(11),C=a.n(P),x=(a(55),a(56)),A=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(g.a)(this,Object(w.a)(t).call(this,e))).cardContainer=void 0,a.header=void 0,a.onVisible=function(){var e=a.header.current;e&&(e.classList.add("Project_header-animation"),setTimeout(function(){var e=a.cardContainer.current;e&&Array.prototype.forEach.call(e.children,function(e,t){setTimeout(function(){return e.classList.add("Project_card-animation")},750*t),e.addEventListener("animationend",function(){e.style.opacity="1",e.classList.remove("Project_card-animation")})})},1550))},a.cardContainer=i.a.createRef(),a.header=i.a.createRef(),a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return i.a.createElement(k,{onVisible:this.onVisible,once:!0},i.a.createElement("div",{className:"Project_container",style:{height:c.isMobile?"auto":"100vh"}},i.a.createElement(h.Element,{name:"Projects"}),i.a.createElement(d.a,{className:"Project_row"},i.a.createElement(f.a,{className:"Project_col"},i.a.createElement("h1",{className:"Project_header display-4 text-muted",ref:this.header},"Projects"))),i.a.createElement(d.a,{style:{flex:6},className:"Project_row"},i.a.createElement("div",{className:"Project_card-container",ref:this.cardContainer},x.map(function(e){return i.a.createElement(C.a,{className:"Project_card",key:e.title},i.a.createElement(C.a.Body,null,i.a.createElement(C.a.Title,null,e.title),i.a.createElement(C.a.Text,null,e.description),null!==e.websiteLink?i.a.createElement(C.a.Link,{href:e.websiteLink,target:"_blank"},"Go to site"):null,i.a.createElement(C.a.Link,{href:e.websiteLink||"",target:"_blank"},"View code")))})))))}}]),t}(n.Component),L=a(33),R=a.n(L),O=a(34),S=a.n(O),T=a(35),W=a.n(T),F=a(36),I=a.n(F),M=(a(62),a(63)),V=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(g.a)(this,Object(w.a)(t).call(this,e))).imgWrapper=void 0,a.state={isMobile:window.innerWidth<=600},a.onWindowResize=function(){a.setState({isMobile:window.innerWidth<=600})},a.onVisible=function(){var e=a.imgWrapper.current;if(e){var t=a.state.isMobile?["m-slide-in-right","m-slide-in-down","m-slide-in-up","m-slide-in-left"]:["slide-in-right","slide-in-down","slide-in-up","slide-in-left"],n=e.children;t.forEach(function(e,t){n[t].firstChild.classList.add(e)})}},a.imgWrapper=i.a.createRef(),a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onWindowResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onWindowResize)}},{key:"render",value:function(){return i.a.createElement("div",{className:"Contact_container"},i.a.createElement(h.Element,{name:"Contact"}),i.a.createElement(k,{className:"Contact_image-container",onVisible:this.onVisible,delay:250,once:!0},i.a.createElement("div",{ref:this.imgWrapper},i.a.createElement("a",{target:"_blank",href:"https://github.com/ctcuff",rel:"noopener noreferrer"},i.a.createElement("img",{src:S.a,className:"Contact_img",alt:"GitHub",title:"GitHub"})),i.a.createElement("a",{href:"mailto:dev.ctcuff@gmail.com",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:R.a,className:"Contact_img",alt:"Email",title:"Email"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/cameron-cuff-126405161/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:W.a,className:"Contact_img",alt:"linkedin",title:"linkedin"})),i.a.createElement("a",{href:M,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:I.a,className:"Contact_img",alt:"Resume",title:"Resume"})))))}}]),t}(n.Component);a(64);function J(){var e=c.isMobile?"15vh":"32px";return i.a.createElement("div",{style:{marginTop:e,marginBottom:e}})}o.a.render(i.a.createElement(function(){return i.a.createElement("div",null,i.a.createElement(b,null),i.a.createElement(J,null),i.a.createElement(N,null),i.a.createElement(J,null),i.a.createElement(A,null),i.a.createElement(J,null),i.a.createElement(V,null))},null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.6103756e.chunk.js.map