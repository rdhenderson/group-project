(function(){function g(n){return parseFloat((_w.getComputedStyle?_w.getComputedStyle(n):n.currentStyle).width)}var l="results_container",t="sb_shr sw_conv",a="sb_shr sw_conva",v={"ans2 ans_n2 ans_msnO":1},i={"sb_h3 cttl":1},r="sb_ltw",y="sb_ans",n=[],u=!!_G.SPSA,f=u?{ansC:1,results:1,sa_bop:1}:{results:1},e=!1,o=20,p=-28,w=function(){if(typeof _d.querySelector!="undefined"){var n=".sb_shr{left:"+p+o+"px;width:0;float:right;margin-left:5px}.sb_ltw{margin:0 0 0 -55px;clear:both;float:left;display:block;width:50px}.pi_tc{float:right;}";sj_ic(n);sj_evt.bind("sp.enter_conv",d,1);sj_evt.bind("sp.leave_conv",h,1);sj_evt.bind("sp.submit_conv",h)}},b=function(){var u,o,i,n,s,r,t,h;if(!e){for(u=_ge(l),o=u?u.childNodes:[],i=0;i<o.length;i++)if(n=o[i],n.id&&f[n.id]||n.className&&f[n.className])for(s=n?n.childNodes:[],r=0;r<s.length;r++)for(t=s[r].firstChild;t;)h=t.nodeType,h!==3&&h!==8&&k(t),t=t.nextSibling;e=!0}},k=function(n){var i=n.className,t;if(i&&i.indexOf(y)>-1){if(u)for(t=n.firstChild.firstChild;t;)t.nodeName.toLowerCase()==="div"&&s(t),t=t.nextSibling}else s(n)},s=function(u){var h,e,s,c,o,f;u&&(h=u.className,e=i[h]?u:u.querySelector("h3"),e=e?e:u.querySelector("h2"),e&&!v[h]&&(s=e?e.querySelector("a"):null,s&&(c=i[h]?e.parentNode:e.parentNode.parentNode,o=u.querySelector("."+r),o||(o=sj_ce("div",0,r),c.insertBefore(o,c.firstChild)),f=sj_ce("a",0,t),f.href="#",f.title="Add this link to your comment",f.spLink=s.href,f.spTitle=s.innerText||s.textContent,f.spID=n.length,f.onclick=function(n){return this&&sj_evt.fire("sp.conv_addlink",{id:this.spID,url:this.spLink,title:this.spTitle}),sj_pd(n),!1},f.onmousedown=function(){this&&(this.className=a)},f.onmouseup=function(){this&&(this.className=t)},o.insertBefore(f,o.firstChild),n.push(f))))},d=function(){b();c(!0)},h=function(){c(!1)},nt=function(n,t,i){function h(n,t){n.style.width=Math.round(f+s*t)+"px"}function c(){n[u]===r&&delete n[u]}var r,f,e,s,u="animator";((r=n[u])&&r.stop(),isNaN(f=g(n)))||(e=i/25,s=((t?o:0)-f)/e,n[u]=r=new sj_anim(h),r.init(n,0,e,1,c))},c=function(t){var r=0,f=150,e=33,i,u=function(){i&&sb_ct(i);nt(n[r],t,f);++r<n.length&&(i=sb_st(u,e))};n.length>0&&u()};w()})()