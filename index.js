!function(){function t(t){var e={val:t},n=t.split(/\s+in\s+/);return n[1]&&(e.val="{ "+n[1],n=n[0].slice(1).trim().split(/,\s*/),e.key=n[0],e.pos=n[1]),e}function e(e,n,r){c(e,"each");var i,a=e.outerHTML,s=e.previousSibling,u=e.parentNode,f=[],l=[];r=t(r),n.one("update",function(){u.removeChild(e)}).one("mount",function(){d(u)||(u=n.root)}).on("update",function(){var t=m(r.val,n);if(t){if(!Array.isArray(t)){var e=JSON.stringify(t);if(e==i)return;i=e,l.map(function(t){t.unmount()}),l=f=[],t=Object.keys(t).map(function(e){var n={};return n[r.key]=e,n[r.pos]=t[e],n})}h(f,t).map(function(t){var e=f.indexOf(t),n=l[e];n&&(n.unmount(),f.splice(e,1),l.splice(e,1))});var c=u.childNodes,p=Array.prototype.indexOf.call(c,s);h(t,f).map(function(e){var s=t.indexOf(e);if(!i&&r.key){var f={};f[r.key]=e,f[r.pos]=s,e=f}var h=new o({tmpl:a},{before:c[p+1+s],parent:n,root:u,loop:!0,item:e});l.splice(s,0,h)}),f=t.slice()}})}function n(t,e){p(t,function(t){1==t.nodeType&&u(t.attributes,function(n){/^(name|id)$/.test(n.name)&&(e[n.value]=t)})})}function r(t,n,r){function i(t,e,n){if(m(e)||n){var o={dom:t,expr:e};r.push(f(o,n||{}))}}p(t,function(t){var r=t.nodeType;if(3==r&&"STYLE"!=t.parentNode.tagName&&i(t,t.nodeValue),1==r){var a=t.getAttribute("each");if(a)return e(t,n,a),!1;var s=v[t.tagName.toLowerCase()];return s?(s=new o(s,{root:t,parent:n}),!1):void u(t.attributes,function(e){var n=e.name,r=e.value,o=n.split("__")[1];return i(t,r,{attr:o||n,bool:o}),o?(c(t,n),!1):void 0})}})}function o(t,e){function o(){Object.keys(h).map(function(t){w[t]=m(h[t],y||a)})}function i(){for(;S.firstChild;)v?(x=S.firstChild,b.insertBefore(S.firstChild,e.before||null)):b.appendChild(S.firstChild);d(b)||(a.root=b=y.root),a.trigger("mount"),y&&y.on("update",a.update).one("unmount",a.unmount)}var a=g.observable(this),p=[],h={},y=e.parent,v=e.loop,b=e.root,w=e.opts,j=e.item;if(v||!b.riot){b.riot=1,w=w||{},f(this,{parent:y,root:b,opts:w,children:[]}),f(this,j),u(b.attributes,function(t){var e=t.name,n=t.value;return h[e]=n,n.indexOf("{")>=0?(c(b,e),!1):void 0}),o(),y&&y.children.push(this);var x,S=l(t.tmpl);n(S,this),this.update=function(t){f(a,t),f(a,j),a.trigger("update"),o(),s(p,a,j),a.trigger("updated")},this.unmount=function(){if(v)b.removeChild(x);else{var t=b.parentNode;t&&t.removeChild(b)}if(y){var e=y.children;e.splice(e.indexOf(a),1)}a.trigger("unmount"),y&&y.off("update",a.update),mounted=!1},t.fn&&t.fn.call(this,w),r(S,this,p),this.update(),i()}}function i(t,e,n,r,o){n[t]=function(t){t=t||window.event,t.which=t.which||t.charCode||t.keyCode,t.target=t.target||t.srcElement,t.currentTarget=n,t.item=o,e.call(r,t)!==!0&&(t.preventDefault&&t.preventDefault(),t.returnValue=!1),r.update()}}function a(t,e,n){t&&(t.insertBefore(n,e),t.removeChild(e))}function s(t,e,n){u(t,function(t){var r=t.dom,o=t.attr,s=m(t.expr,e);if(null==s&&(s=""),t.value!==s){if(t.value=s,!o)return r.nodeValue=s;if((!s&&t.bool||/obj|func/.test(typeof s))&&c(r,o),"function"==typeof s)i(o,s,r,e,n);else if("if"==o){c(r,o);var u=t.stub;s?u&&a(u.parentNode,u,r):(u=t.stub=u||document.createTextNode(""),a(r.parentNode,r,u))}else if(/^(show|hide)$/.test(o))c(r,o),"hide"==o&&(s=!s),r.style.display=s?"":"none";else{if(t.bool){if(r[o]=s,!s)return;s=o}r.setAttribute(o,s)}}})}function u(t,e){for(var n=0;n<(t||[]).length;n++)e(t[n],n)===!1&&n--}function c(t,e){t.removeAttribute(e)}function f(t,e){return e&&Object.keys(e).map(function(n){t[n]=e[n]}),t}function l(t){var e=t.trim().slice(1,3).toLowerCase(),n=/td|th/.test(e)?"tr":"tr"==e?"tbody":"div";return el=document.createElement(n),el.stub=!0,el.innerHTML=t,el}function p(t,e){for(t=e(t)===!1?t.nextSibling:t.firstChild;t;)p(t,e),t=t.nextSibling}function h(t,e){return t.filter(function(t){return e.indexOf(t)<0})}function d(t){var e=t.parentNode,n=window.HTMLDocument;return e&&!(n&&e instanceof n)}var g={version:"v2.0.8",settings:{}};g.observable=function(t){t=t||{};var e={};return t.on=function(n,r){return"function"==typeof r&&n.replace(/\S+/g,function(t,n){(e[t]=e[t]||[]).push(r),r.typed=n>0}),t},t.off=function(n,r){if("*"==n)e={};else if(r)for(var o,i=e[n],a=0;o=i&&i[a];++a)o==r&&(i.splice(a,1),a--);else n.replace(/\S+/g,function(t){e[t]=[]});return t},t.one=function(e,n){return n&&(n.one=1),t.on(e,n)},t.trigger=function(n){for(var r,o=[].slice.call(arguments,1),i=e[n]||[],a=0;r=i[a];++a)r.busy||(r.busy=1,r.apply(t,r.typed?[n].concat(o):o),r.one?(i.splice(a,1),a--):i[a]!==r&&a--,r.busy=0);return t},t},function(t,e){function n(){return i.hash.slice(1)}function r(t){return t.split("/")}function o(t){t.type&&(t=n()),t!=s&&(a.trigger.apply(null,["H"].concat(r(t))),s=t)}if(this.top){var i=location,a=t.observable(),s=n(),u=window,c=t.route=function(t){t[0]?(i.hash=t,o(t)):a.on("H",t)};c.exec=function(t){t.apply(null,r(n()))},c.parser=function(t){r=t},u.addEventListener?u.addEventListener(e,o,!1):u.attachEvent("on"+e,o)}}(g,"hashchange");var m=function(){function t(t,n){return n=(t||o.join("")).replace(r(/\\{/),"￰").replace(r(/\\}/),"￱").split(i),new Function("d","return "+(n[0]||n[2]||n[3]?"["+n.map(function(t,n){return n%2?e(t,1):'"'+t.replace(/\n/g,"\\n").replace(/"/g,'\\"')+'"'}).join(",")+'].join("")':e(n[1])).replace(/\uFFF0/g,o[0]).replace(/\uFFF1/g,o[1]))}function e(t,e){return t=t.replace(/\n/g," ").replace(r(/^[{ ]+|[ }]+$|\/\*.+?\*\//g),""),/^\s*[\w-"']+ *:/.test(t)?"["+t.replace(/\W*([\w-]+)\W*:([^,]+)/g,function(t,r,o){return o.replace(/\w[^,|& ]*/g,function(t){return n(t,e)})+'?"'+r+'":"",'})+'].join(" ")':n(t,e)}function n(t,e){return"(function(v){try{v="+(t.replace(s,function(t,e,n){return n?"(d."+n+"===undefined?window."+n+":d."+n+")":t})||"x")+"}finally{return "+(e?'!v&&v!==0?"":v':"v")+"}}).call(d)"}function r(t){return RegExp(t.source.split("{").join("\\"+o[0]).split("}").join("\\"+o[1]),t.global?"g":"")}var o,i,a={},s=/("|').+?[^\\]\1|\.\w*|\w*:|\b(?:(?:new|typeof|in|instanceof) |(?:this|true|false|null|undefined)\b|function *\()|([a-z_]\w*)/gi;return function(e,n){var s=g.settings.brackets||"{ }";return s!=o&&(o=s.split(" "),i=r(/({[\s\S]*?})/)),n?e&&(a[e]=a[e]||t(e))(n):i.test(e)}}(),y=[],v={};g.tag=function(t,e,n){v[t]={name:t,tmpl:e,fn:n}};var b=g.mountTo=function(t,e,n){var r,i=v[e];return i&&(r=new o(i,{root:t,opts:n})),r?(y.push(r),r.on("unmount",function(){y.splice(y.indexOf(r),1)})):void 0};g.mount=function(t,e){"*"==t&&(t=Object.keys(v).join(", "));var n=[];return u(document.querySelectorAll(t),function(t){var r=t.tagName.toLowerCase(),o=b(t,r,e);o&&n.push(o)}),n},g.update=function(){return y.map(function(t){t.update()}),y},"object"==typeof exports?module.exports=g:"function"==typeof define&&define.amd?define(function(){return g}):this.riot=g}(),!function(){"use strict";var t=["html","json","jsonp","script"],e=["connect","delete","get","head","options","patch","post","put","trace"],n=function i(){var t={},e={},n={url:function(t){return s.call(this,"url",t,r.string)},sync:function(t){return s.call(this,"sync",t,r.bool)},cache:function(t){return s.call(this,"cache",t,r.bool)},type:function(t){return s.call(this,"type",t,r.type)},header:function(e,n){return t.headers=t.headers||{},r.string(e),"undefined"!=typeof n?(r.string(n),t.headers[e]=n,this):t.headers[e]},auth:function(e,n){return r.string(e),r.string(n),t.auth={user:e,passwd:n},this},method:function(t){return s.call(this,"method",t,r.method,function(t){return"post"===t.toLowerCase()&&this.header("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),t})},queryString:function(t){return s.call(this,"queryString",t,r.queryString)},data:function(t){return s.call(this,"data",t,r.plainObject)},body:function(t){return s.call(this,"body",t,null,function(t){if("object"==typeof t){if(!(t instanceof FormData)){try{t=JSON.stringify(t)}catch(e){throw new TypeError("Unable to stringify body's content : "+e.name)}this.header("Content-Type","application/json")}}else t+="";return t})},into:function(t){return s.call(this,"into",t,r.selector,function(t){return"string"==typeof t?document.querySelectorAll(t):t instanceof HTMLElement?[t]:void 0})},jsonPaddingName:function(t){return s.call(this,"jsonPaddingName",t,r.string)},jsonPadding:function(t){return s.call(this,"jsonPadding",t,r.func)},on:function(t,n){return"function"==typeof n&&(e[t]=e[t]||[],e[t].push(n)),this},off:function(t){return e[t]=[],this},trigger:function(t,n){var r=this,o=function(t,n){e[t]instanceof Array&&e[t].forEach(function(t){t.call(r,n)})};if("undefined"!=typeof t){t+="";var i=/^([0-9])([0-9x])([0-9x])$/i,a=t.match(i);a&&a.length>3?Object.keys(e).forEach(function(t){var e=t.match(i);!(e&&e.length>3&&a[1]===e[1])||"x"!==e[2]&&a[2]!==e[2]||"x"!==e[3]&&a[3]!==e[3]||o(t,n)}):e[t]&&o(t,n)}return this},go:function(){var e=t.type||(t.into?"html":"json"),n=c();return"function"==typeof a[e]?a[e].call(this,n):void 0}},a={json:function(t){var e=this;a._xhr.call(this,t,function(t){try{t=JSON.parse(t)}catch(n){return e.trigger("error",n),null}return t})},html:function(e){a._xhr.call(this,e,function(e){return t.into&&t.into.length&&t.into.forEach(function(t){t.innerHTML=e}),e})},_xhr:function(e,n){var r,o,i,a=this,s=t.method||"get",c=t.sync!==!0,f=new XMLHttpRequest,l=t.data,p=t.body;if(l&&u()){"string"!=typeof p&&(p="");for(r in l)p+=r+"="+l[r]+"\n\r"}if(i=[s,e,c],t.auth&&(i.push(t.auth.user),i.push(t.auth.passwd)),f.open.apply(f,i),t.headers)for(o in t.headers)f.setRequestHeader(o,t.headers[o]);f.onprogress=function(t){t.lengthComputable&&a.trigger("progress",t.loaded/t.total)},f.onload=function(){var t=f.responseText;this.status>=200&&this.status<300&&("function"==typeof n&&(t=n(t)),a.trigger("success",t)),a.trigger(this.status,t),a.trigger("end",t)},f.onerror=function(t){a.trigger("error",t,arguments)},f.send(p)},jsonp:function(e){var n,r=this,a=document.querySelector("head"),s=t.sync!==!0,u=t.jsonPaddingName||"callback",c=t.jsonPadding||"_padd"+(new Date).getTime()+Math.floor(1e4*Math.random()),f={};if(i[c])throw new Error("Padding "+c+"  already exists. It must be unique.");/^ajajsonp_/.test(c)||(c="ajajsonp_"+c),window[c]=function(t){r.trigger("success",t),a.removeChild(n),window[c]=void 0},f[u]=c,e=o(e,f),n=document.createElement("script"),n.async=s,n.src=e,n.onerror=function(){r.trigger("error",arguments),a.removeChild(n),window[c]=void 0},a.appendChild(n)},script:function(e){var n,r=this,o=document.querySelector("head")||document.querySelector("body"),i=t.sync!==!0;if(!o)throw new Error("Ok, wait a second, you want to load a script, but you don't have at least a head or body tag...");n=document.createElement("script"),n.async=i,n.src=e,n.onerror=function(){r.trigger("error",arguments),o.removeChild(n)},n.onload=function(){r.trigger("success",arguments)},o.appendChild(n)}},s=function(e,n,o,i){if("undefined"!=typeof n){if("function"==typeof o)try{n=o.call(r,n)}catch(a){throw new TypeError("Failed to set "+e+" : "+a.message)}return t[e]="function"==typeof i?i.call(this,n):n,this}return"undefined"===t[e]?null:t[e]},u=function(){return["delete","patch","post","put"].indexOf(t.method)>-1},c=function(){var e=t.url,n="undefined"!=typeof t.cache?!!t.cache:!0,r=t.queryString,i=t.data;return n===!1&&(r+="ajabuster="+(new Date).getTime()),e=o(e,r),i&&!u()&&(e=o(e,i)),e};return n},r={bool:function(t){return!!t},string:function(t){if("string"!=typeof t)throw new TypeError("a string is expected, but "+t+" ["+typeof t+"] given");return t},plainObject:function(t){if("object"!=typeof t||t.constructor!==Object)throw new TypeError("an object is expected, but "+t+"  ["+typeof t+"] given");return t},type:function(e){if(e=this.string(e),t.indexOf(e.toLowerCase())<0)throw new TypeError("a type in ["+t.join(", ")+"] is expected, but "+e+" given");return e.toLowerCase()},method:function(t){if(t=this.string(t),e.indexOf(t.toLowerCase())<0)throw new TypeError("a method in ["+e.join(", ")+"] is expected, but "+t+" given");return t.toLowerCase()},queryString:function(t){var e={};return"string"==typeof t?t.replace("?","").split("&").forEach(function(t){var n=t.split("=");2===n.length&&(e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]))}):e=t,this.plainObject(e)},selector:function(t){if("string"!=typeof t&&!(t instanceof HTMLElement))throw new TypeError("a selector or an HTMLElement is expected, "+t+" ["+typeof t+"] given");return t},func:function(t){if(t=this.string(t),!/^([a-zA-Z_])([a-zA-Z0-9_\-])+$/.test(t))throw new TypeError("a valid function name is expected, "+t+" ["+typeof t+"] given");return t}},o=function(t,e){var n;if(t=t||"",e){-1===t.indexOf("?")&&(t+="?");for(n in e)t+="&"+encodeURIComponent(n)+"="+encodeURIComponent(e[n])}return t};"function"==typeof define&&define.amd?define([],function(){return n}):"object"==typeof exports?module.exports=n:window.aja=window.aja||n}(),!function(t){function e(t,n){this.list=t,this.options=n=n||{};var r,o,i,a;for(r=0,a=["sort","includeScore","shouldSort"],o=a.length;o>r;r++)i=a[r],this.options[i]=i in n?n[i]:e.defaultOptions[i];for(r=0,a=["searchFn","sortFn","keys","getFn"],o=a.length;o>r;r++)i=a[r],this.options[i]=n[i]||e.defaultOptions[i]}var n=function(t,e){if(e=e||{},this.options=e,this.options.location=e.location||n.defaultOptions.location,this.options.distance="distance"in e?e.distance:n.defaultOptions.distance,this.options.threshold="threshold"in e?e.threshold:n.defaultOptions.threshold,this.options.maxPatternLength=e.maxPatternLength||n.defaultOptions.maxPatternLength,this.pattern=e.caseSensitive?t:t.toLowerCase(),this.patternLen=t.length,this.patternLen>this.options.maxPatternLength)throw new Error("Pattern length is too long");this.matchmask=1<<this.patternLen-1,this.patternAlphabet=this._calculatePatternAlphabet()};n.defaultOptions={location:0,distance:100,threshold:.6,maxPatternLength:32},n.prototype._calculatePatternAlphabet=function(){var t={},e=0;for(e=0;e<this.patternLen;e++)t[this.pattern.charAt(e)]=0;for(e=0;e<this.patternLen;e++)t[this.pattern.charAt(e)]|=1<<this.pattern.length-e-1;return t},n.prototype._bitapScore=function(t,e){var n=t/this.patternLen,r=Math.abs(this.options.location-e);return this.options.distance?n+r/this.options.distance:r?1:n},n.prototype.search=function(t){if(t=this.options.caseSensitive?t:t.toLowerCase(),this.pattern===t)return{isMatch:!0,score:0};var e,n,r,o,i,a,s,u,c,f=t.length,l=this.options.location,p=this.options.threshold,h=t.indexOf(this.pattern,l),d=this.patternLen+f,g=1,m=[];for(-1!=h&&(p=Math.min(this._bitapScore(0,h),p),h=t.lastIndexOf(this.pattern,l+this.patternLen),-1!=h&&(p=Math.min(this._bitapScore(0,h),p))),h=-1,e=0;e<this.patternLen;e++){for(r=0,o=d;o>r;)this._bitapScore(e,l+o)<=p?r=o:d=o,o=Math.floor((d-r)/2+r);for(d=o,i=Math.max(1,l-o+1),a=Math.min(l+o,f)+this.patternLen,s=Array(a+2),s[a+1]=(1<<e)-1,n=a;n>=i;n--)if(c=this.patternAlphabet[t.charAt(n-1)],s[n]=0===e?(s[n+1]<<1|1)&c:(s[n+1]<<1|1)&c|((u[n+1]|u[n])<<1|1)|u[n+1],s[n]&this.matchmask&&(g=this._bitapScore(e,n-1),p>=g)){if(p=g,h=n-1,m.push(h),!(h>l))break;i=Math.max(1,2*l-h)}if(this._bitapScore(e+1,l)>p)break;u=s}return{isMatch:h>=0,score:g}};var r=function(t,e,n){var i,a,s;if(e){s=e.indexOf("."),-1!==s?(i=e.slice(0,s),a=e.slice(s+1)):i=e;var u=t[i];if(u)if(a||"string"!=typeof u&&"number"!=typeof u)if(o.isArray(u))for(var c=0,f=u.length;f>c;c++)r(u[c],a,n);else a&&r(u,a,n);else n.push(u)}else n.push(t);return n},o={deepValue:function(t,e){return r(t,e,[])},isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)}};e.defaultOptions={id:null,caseSensitive:!1,includeScore:!1,shouldSort:!0,searchFn:n,sortFn:function(t,e){return t.score-e.score},getFn:o.deepValue,keys:[]},e.prototype.search=function(t){var e,n,r,i,a=new this.options.searchFn(t,this.options),s=this.list,u=s.length,c=this.options,f=this.options.keys,l=f.length,p=[],h={},d=[],g=function(t,e,n){if(void 0!==t&&null!==t)if("string"==typeof t)r=a.search(t),r.isMatch&&(i=h[n],i?i.score=Math.min(i.score,r.score):(h[n]={item:e,score:r.score},p.push(h[n])));else if(o.isArray(t))for(var s=0;s<t.length;s++)g(t[s],e,n)};if("string"==typeof s[0])for(var m=0;u>m;m++)g(s[m],m,m);else for(var m=0;u>m;m++)for(n=s[m],e=0;l>e;e++)g(c.getFn(n,f[e]),n,m);c.shouldSort&&p.sort(c.sortFn);for(var y=c.includeScore?function(t){return p[t]}:function(t){return p[t].item},v=c.id?function(t){p[t].item=c.getFn(p[t].item,c.id)[0]}:function(){},m=0,b=p.length;b>m;m++)v(m),d.push(y(m));return d},"object"==typeof exports?module.exports=e:"function"==typeof define&&define.amd?define(function(){return e}):t.Fuse=e}(this),riot.tag("emojis",'<div id="info" if="{ current }"><p onclick="{ copy }" class="current-container"><span class="emo emoji v-align s_{ current.name.replace(/\\+/, &quot;&quot;) }"></span><input id="currentInput" value=":{ current.name }:" class="v-align"></p><p><span class="tag tag-blue">{ current.unicode }</span><span each="{ key in current.keywords }" onclick="{ parent.tagSearch }" class="tag tag-green">{ key }</span><a href="https://github.com/jgsme/emo/edit/master/src/data/emojis.custom.ja.json"><span class="tag tag-red">Add new one?</span></a></p></div><span each="{ emoji in emojis }" onclick="{ parent.show }" data="{ JSON.stringify(emoji) }" class="emo emo-margin emoji s_{ emoji.name.replace(/\\+/, &quot;&quot;) }"></span>',function(t){this.emojis=[],this.show=function(t){return function(e){return t.current=JSON.parse(e.target.getAttribute("data")),document.body.scrollTop=0}}(this),this.copy=function(){return function(){return document.getElementById("currentInput").select()}}(this),this.tagSearch=t.tagsearch,this.on("update",function(e){return function(){return e.emojis=t.data}}(this))}),riot.tag("finder",'<form onsubmit="return false;" class="pure-form"><input id="in" onkeyup="{ change }" autofocus="autofocus"></form><div class="emojis"><emojis data="{ emojis }" tagsearch="{ tagsearch }"></emojis></div>',function(){var t,e;this.emojis=[],t=e=null,aja().method("get").url("/data/emojis.json").on("success",function(n){return function(r){var o,i;return e=function(){var t,e,n;for(n=[],t=0,e=r.length;e>t;t++)o=r[t],n.push({name:o.name,unicode:o.keywords[o.keywords.length-1],keywords:o.keywords.slice(0,-1)});return n}(),n.update({emojis:e}),t=new Fuse(e,{threshold:.1,distance:800,keys:["name","keywords"]}),i=location.hash.replace(/#/,""),document.getElementById("in").value=i,n.change({target:{value:i}})}}(this)).go(),this.tagsearch=function(t){return function(e){return document.getElementById("in").value=e.target.innerText,t.change({target:{value:e.target.innerText}})}}(this),this.change=function(n){return function(r){var o;return o=r.target.value,n.update({emojis:0===o.length?e:t.search(o)}),location.hash=o}}(this)}),function(){riot.mount("*")}.call(this);