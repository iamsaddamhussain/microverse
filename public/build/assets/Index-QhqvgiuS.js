import{k as ot,l as ut,T as ct,m as vt,o as N,f as U,b as g,t as et,u as S,g as nt,c as dt,w as P,a as A,d as rt,e as lt,i as ft,p as ht,F as at,Z as yt,q as Mt}from"./app-Y9UwjI28.js";import{a as wt,b as xt,_ as _t}from"./AuthenticatedLayout-btLuvNzr.js";import{_ as mt}from"./InputError-SzIaGfyR.js";import{P as $t}from"./PrimaryButton-MoZEzNiZ.js";import"./ApplicationLogo-0uvulKF7.js";import"./_plugin-vue_export-helper-x3n3nnut.js";var gt={exports:{}};(function(M,j){(function(h,l){M.exports=l()})(ot,function(){var h=1e3,l=6e4,p=36e5,f="millisecond",w="second",C="minute",Y="hour",c="day",b="week",v="month",E="quarter",O="year",T="date",L="Invalid Date",Z=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,J=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(n){var r=["th","st","nd","rd"],t=n%100;return"["+n+(r[(t-20)%10]||r[t]||r[0])+"]"}},G=function(n,r,t){var s=String(n);return!s||s.length>=r?n:""+Array(r+1-s.length).join(t)+n},B={s:G,z:function(n){var r=-n.utcOffset(),t=Math.abs(r),s=Math.floor(t/60),e=t%60;return(r<=0?"+":"-")+G(s,2,"0")+":"+G(e,2,"0")},m:function n(r,t){if(r.date()<t.date())return-n(t,r);var s=12*(t.year()-r.year())+(t.month()-r.month()),e=r.clone().add(s,v),a=t-e<0,i=r.clone().add(s+(a?-1:1),v);return+(-(s+(t-e)/(a?e-i:i-e))||0)},a:function(n){return n<0?Math.ceil(n)||0:Math.floor(n)},p:function(n){return{M:v,y:O,w:b,d:c,D:T,h:Y,m:C,s:w,ms:f,Q:E}[n]||String(n||"").toLowerCase().replace(/s$/,"")},u:function(n){return n===void 0}},x="en",_={};_[x]=q;var F="$isDayjsObject",W=function(n){return n instanceof X||!(!n||!n[F])},R=function n(r,t,s){var e;if(!r)return x;if(typeof r=="string"){var a=r.toLowerCase();_[a]&&(e=a),t&&(_[a]=t,e=a);var i=r.split("-");if(!e&&i.length>1)return n(i[0])}else{var u=r.name;_[u]=r,e=u}return!s&&e&&(x=e),e||!s&&x},m=function(n,r){if(W(n))return n.clone();var t=typeof r=="object"?r:{};return t.date=n,t.args=arguments,new X(t)},o=B;o.l=R,o.i=W,o.w=function(n,r){return m(n,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var X=function(){function n(t){this.$L=R(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[F]=!0}var r=n.prototype;return r.parse=function(t){this.$d=function(s){var e=s.date,a=s.utc;if(e===null)return new Date(NaN);if(o.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var i=e.match(Z);if(i){var u=i[2]-1||0,d=(i[7]||"0").substring(0,3);return a?new Date(Date.UTC(i[1],u,i[3]||1,i[4]||0,i[5]||0,i[6]||0,d)):new Date(i[1],u,i[3]||1,i[4]||0,i[5]||0,i[6]||0,d)}}return new Date(e)}(t),this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return o},r.isValid=function(){return this.$d.toString()!==L},r.isSame=function(t,s){var e=m(t);return this.startOf(s)<=e&&e<=this.endOf(s)},r.isAfter=function(t,s){return m(t)<this.startOf(s)},r.isBefore=function(t,s){return this.endOf(s)<m(t)},r.$g=function(t,s,e){return o.u(t)?this[s]:this.set(e,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,s){var e=this,a=!!o.u(s)||s,i=o.p(t),u=function(z,D){var H=o.w(e.$u?Date.UTC(e.$y,D,z):new Date(e.$y,D,z),e);return a?H:H.endOf(c)},d=function(z,D){return o.w(e.toDate()[z].apply(e.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(D)),e)},$=this.$W,y=this.$M,k=this.$D,I="set"+(this.$u?"UTC":"");switch(i){case O:return a?u(1,0):u(31,11);case v:return a?u(1,y):u(0,y+1);case b:var V=this.$locale().weekStart||0,Q=($<V?$+7:$)-V;return u(a?k-Q:k+(6-Q),y);case c:case T:return d(I+"Hours",0);case Y:return d(I+"Minutes",1);case C:return d(I+"Seconds",2);case w:return d(I+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,s){var e,a=o.p(t),i="set"+(this.$u?"UTC":""),u=(e={},e[c]=i+"Date",e[T]=i+"Date",e[v]=i+"Month",e[O]=i+"FullYear",e[Y]=i+"Hours",e[C]=i+"Minutes",e[w]=i+"Seconds",e[f]=i+"Milliseconds",e)[a],d=a===c?this.$D+(s-this.$W):s;if(a===v||a===O){var $=this.clone().set(T,1);$.$d[u](d),$.init(),this.$d=$.set(T,Math.min(this.$D,$.daysInMonth())).$d}else u&&this.$d[u](d);return this.init(),this},r.set=function(t,s){return this.clone().$set(t,s)},r.get=function(t){return this[o.p(t)]()},r.add=function(t,s){var e,a=this;t=Number(t);var i=o.p(s),u=function(y){var k=m(a);return o.w(k.date(k.date()+Math.round(y*t)),a)};if(i===v)return this.set(v,this.$M+t);if(i===O)return this.set(O,this.$y+t);if(i===c)return u(1);if(i===b)return u(7);var d=(e={},e[C]=l,e[Y]=p,e[w]=h,e)[i]||1,$=this.$d.getTime()+t*d;return o.w($,this)},r.subtract=function(t,s){return this.add(-1*t,s)},r.format=function(t){var s=this,e=this.$locale();if(!this.isValid())return e.invalidDate||L;var a=t||"YYYY-MM-DDTHH:mm:ssZ",i=o.z(this),u=this.$H,d=this.$m,$=this.$M,y=e.weekdays,k=e.months,I=e.meridiem,V=function(D,H,K,tt){return D&&(D[H]||D(s,a))||K[H].slice(0,tt)},Q=function(D){return o.s(u%12||12,D,"0")},z=I||function(D,H,K){var tt=D<12?"AM":"PM";return K?tt.toLowerCase():tt};return a.replace(J,function(D,H){return H||function(K){switch(K){case"YY":return String(s.$y).slice(-2);case"YYYY":return o.s(s.$y,4,"0");case"M":return $+1;case"MM":return o.s($+1,2,"0");case"MMM":return V(e.monthsShort,$,k,3);case"MMMM":return V(k,$);case"D":return s.$D;case"DD":return o.s(s.$D,2,"0");case"d":return String(s.$W);case"dd":return V(e.weekdaysMin,s.$W,y,2);case"ddd":return V(e.weekdaysShort,s.$W,y,3);case"dddd":return y[s.$W];case"H":return String(u);case"HH":return o.s(u,2,"0");case"h":return Q(1);case"hh":return Q(2);case"a":return z(u,d,!0);case"A":return z(u,d,!1);case"m":return String(d);case"mm":return o.s(d,2,"0");case"s":return String(s.$s);case"ss":return o.s(s.$s,2,"0");case"SSS":return o.s(s.$ms,3,"0");case"Z":return i}return null}(D)||i.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,s,e){var a,i=this,u=o.p(s),d=m(t),$=(d.utcOffset()-this.utcOffset())*l,y=this-d,k=function(){return o.m(i,d)};switch(u){case O:a=k()/12;break;case v:a=k();break;case E:a=k()/3;break;case b:a=(y-$)/6048e5;break;case c:a=(y-$)/864e5;break;case Y:a=y/p;break;case C:a=y/l;break;case w:a=y/h;break;default:a=y}return e?a:o.a(a)},r.daysInMonth=function(){return this.endOf(v).$D},r.$locale=function(){return _[this.$L]},r.locale=function(t,s){if(!t)return this.$L;var e=this.clone(),a=R(t,s,!0);return a&&(e.$L=a),e},r.clone=function(){return o.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},n}(),st=X.prototype;return m.prototype=st,[["$ms",f],["$s",w],["$m",C],["$H",Y],["$W",c],["$M",v],["$y",O],["$D",T]].forEach(function(n){st[n[1]]=function(r){return this.$g(r,n[0],n[1])}}),m.extend=function(n,r){return n.$i||(n(r,X,m),n.$i=!0),m},m.locale=R,m.isDayjs=W,m.unix=function(n){return m(1e3*n)},m.en=_[x],m.Ls=_,m.p={},m})})(gt);var Dt=gt.exports;const it=ut(Dt);var pt={exports:{}};(function(M,j){(function(h,l){M.exports=l()})(ot,function(){return function(h,l,p){h=h||{};var f=l.prototype,w={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function C(c,b,v,E){return f.fromToBase(c,b,v,E)}p.en.relativeTime=w,f.fromToBase=function(c,b,v,E,O){for(var T,L,Z,J=v.$locale().relativeTime||w,q=h.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],G=q.length,B=0;B<G;B+=1){var x=q[B];x.d&&(T=E?p(c).diff(v,x.d,!0):v.diff(c,x.d,!0));var _=(h.rounding||Math.round)(Math.abs(T));if(Z=T>0,_<=x.r||!x.r){_<=1&&B>0&&(x=q[B-1]);var F=J[x.l];O&&(_=O(""+_)),L=typeof F=="string"?F.replace("%d",_):F(_,b,x.l,Z);break}}if(b)return L;var W=Z?J.future:J.past;return typeof W=="function"?W(L):W.replace("%s",L)},f.to=function(c,b){return C(c,b,this,!0)},f.from=function(c,b){return C(c,b,this)};var Y=function(c){return c.$u?p.utc():p()};f.toNow=function(c){return this.to(Y(this),c)},f.fromNow=function(c){return this.from(Y(this),c)}}})})(pt);var bt=pt.exports;const St=ut(bt),kt={class:"p-6 flex space-x-2"},Ot=g("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-gray-600 -scale-x-100",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})],-1),Tt={class:"flex-1"},Ct={class:"flex justify-between items-center"},Yt={class:"text-grey-800"},jt={class:"ml-2 text-sm text-grey-600"},Ht={key:0,class:"text-sm text-grey-600"},Nt=g("button",null,[g("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor"},[g("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})])],-1),Lt={class:"space-x-2"},Bt={key:1,class:"mt-4 text-lg text-gray-900"},Wt={__name:"Post",props:["post"],setup(M){it.extend(St);const h=ct({message:M.post.message}),l=vt(!1);return(p,f)=>(N(),U("div",kt,[Ot,g("div",Tt,[g("div",Ct,[g("div",null,[g("span",Yt,et(M.post.user.name),1),g("small",jt,et(S(it)(M.post.created_at).fromNow()),1),M.post.created_at!=M.post.updated_at?(N(),U("small",Ht,"· edited")):nt("",!0)]),M.post.user.id===p.$page.props.auth.user.id?(N(),dt(xt,{key:0},{trigger:P(()=>[Nt]),content:P(()=>[g("button",{class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out",onClick:f[0]||(f[0]=w=>l.value=!0)}," Edit "),A(wt,{as:"button",href:p.route("post.destroy",M.post.id),method:"delete"},{default:P(()=>[rt(" Delete ")]),_:1},8,["href"])]),_:1})):nt("",!0)]),l.value?(N(),U("form",{key:0,onSubmit:f[3]||(f[3]=lt(w=>S(h).put(p.route("post.update",M.post.id),{onSuccess:()=>l.value=!1}),["prevent"]))},[ft(g("textarea",{"onUpdate:modelValue":f[1]||(f[1]=w=>S(h).message=w),class:"mt-4 w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"},null,512),[[ht,S(h).message]]),A(mt,{message:S(h).errors.message,class:"mt-2"},null,8,["message"]),g("div",Lt,[A($t,{class:"mt-4"},{default:P(()=>[rt("Save")]),_:1}),g("button",{class:"mt-4",onClick:f[2]||(f[2]=w=>{l.value=!1,S(h).reset(),S(h).clearErrors()})}," Cancel ")])],32)):(N(),U("p",Bt,et(M.post.message),1))])]))}},Vt={class:"max-w-2xl mx-auto p-4 sm:p-6 lg:p-8"},zt={class:"mt-6 bg-white shadow-sm rounded-lg divide-y"},Zt={__name:"Index",props:["posts"],setup(M){const j=ct({message:""});return(h,l)=>(N(),U(at,null,[A(S(yt),{title:"Post"}),A(_t,null,{default:P(()=>[g("div",Vt,[g("form",{onSubmit:l[1]||(l[1]=lt(p=>S(j).post(h.route("post.store"),{onSuccess:()=>S(j).reset()}),["prevent"]))},[ft(g("textarea",{"onUpdate:modelValue":l[0]||(l[0]=p=>S(j).message=p),placeholder:"What's on your mind!",class:"block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"},null,512),[[ht,S(j).message]]),A(mt,{message:S(j).errors.message,class:"mt-2"},null,8,["message"]),A($t,{class:"mt-4"},{default:P(()=>[rt("Post")]),_:1})],32),g("div",zt,[(N(!0),U(at,null,Mt(M.posts,p=>(N(),dt(Wt,{key:p.id,post:p},null,8,["post"]))),128))])])]),_:1})],64))}};export{Zt as default};