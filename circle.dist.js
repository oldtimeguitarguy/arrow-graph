var CircleGraph=function(e,t,n,l,s,r,i,a,c){"use strict";var o=(i>a?a:i)-100,d=50,h=.1,m=100,u=.03*o,C=10,p=.02*o,g=p/2,f=o/2-d,v=3/f,y=f-.5*f,L=3/y,S=f/2+y/2,E=3/S,M=["rgb(62, 165, 218)","rgb(137, 194, 82)","rgb(68, 176, 84)","rgb(34, 139, 75)","rgb(24, 99, 59)","rgb(55, 175, 115)","rgb(41, 162, 150)"];return function(s){function i(e){G.classList.add("CircleGraph--zoom"),G.style.width=o+"px",G.style.height=o+"px";for(var t=0,n=c.length;t<n;t++)c[t].style.display=null;e.style.display="block",b.classList.remove("CircleModal--hidden")}function a(){for(var e=0,t=N.node().children.length;e<t;e++)N.node().children[e].classList.remove("CircleSection--selected"),c[e].style.display=null;G.classList.remove("CircleGraph--zoom"),G.style.width=null,G.style.height=null,b.classList.add("CircleModal--hidden")}var c=s.getElementsByClassName("CircleModal__section"),_=l/c.length,G=s.getElementsByClassName("CircleGraph")[0],b=s.getElementsByClassName("CircleModal")[0];s.getElementsByClassName("CircleGraph__title")[0].style.fontSize=u+"px",s.getElementsByClassName("CircleGraph__title")[0].style.maxWidth=1.9*y+"px",s.getElementsByClassName("CircleModal__close-btn")[0].addEventListener("click",function(e){a()});var B={openCircleModal:i,closeCircleModal:a},N=e.select(G).append("svg").attr("class",function(){return setTimeout(function(){G.classList.remove("CircleGraph--hidden")},200),"CircleGraph__svg"}).attr("width",o).attr("height",o).append("g").attr("transform",function(){return"translate("+[f+d,f+d]+")"}),x=N.selectAll("path").data(c).enter().append("g").attr("class","CircleSection CircleSection--hidden").on("mouseenter",function(){this.classList.contains("CircleSection--selected")||this.classList.add("CircleSection--hover")}).on("mouseleave",function(){this.classList.remove("CircleSection--hover")}).on("click",function(e){if(this.classList.remove("CircleSection--hover"),this.classList.contains("CircleSection--selected"))a();else{s.getElementsByClassName("CircleGraph")[0].classList.contains("CircleGraph---zoom")||i(e);for(var t=G.getElementsByClassName("CircleSection"),n=0,l=t.length;n<l;n++)t[n].classList.remove("CircleSection--selected");this.classList.add("CircleSection--selected")}});return x.transition().delay(function(e,t){return t*m}).attr("class","CircleSection"),x.append("path").attr("fill",function(e){return M[~~(r()*M.length)]}).attr("d",function(l,s){var r=_*s,i=_*(s+1),a=(r+h-2*E+(i+h-2*E))/2;l.centroid=[S*n(a),S*t(a)];var c=e.path();return c.moveTo(f*n(r+v),f*t(r+v)),c.arc(0,0,f,r+v,i-v),c.lineTo(S*n(i+h-E),S*t(i+h-E)),c.arc(0,0,y,i-L,r+L,!0),c.lineTo(S*n(r+h+E),S*t(r+h+E)),c.closePath(),c}),x.append("text").attr("class","CircleSection__label").attr("font-size",p).attr("transform",function(e){return"translate("+e.centroid+")"}).selectAll("tspan").data(function(e){for(var t=e.getElementsByClassName("CircleModal__title")[0].textContent.split(" "),n=[t[0]],l=0,s=1,r=t.length;s<r;s++){var i=n[l]+" "+t[s];i.length<=C?n[l]=i:(n[l]=n[l].trim(),n.push(t[s]),l++)}return n}).enter().append("tspan").attr("x",0).attr("y",function(e,t,n){return p*t-(n.length*p+(n.length-1)*g)/2+g*t}).text(function(e){return e}),B}}(d3,Math.sin,Math.cos,2*Math.PI,Math.SQRT2,Math.random,document.documentElement.clientWidth,document.documentElement.clientHeight);document.addEventListener("DOMContentLoaded",function(e){for(var t=document.getElementsByClassName("Circle"),n=0,l=t.length;n<l;n++)new CircleGraph(t[n])});