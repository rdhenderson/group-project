var wln=wln||"";(function(){function n(n){n.style.display="none";n.setAttribute("aria-hidden","true")}function t(n){n.style.display="inline-block";n.setAttribute("aria-hidden","false")}if(sj_evt&&Identity){var i=function(i){var f=_ge("id_n"),u=_ge("id_p"),e=_ge("id_s"),o=_ge("id_a"),s=_ge("id_f"),r=i?i.displayName:wln,h=i?i.img:null,c=i?i.idp:null;f&&e&&o&&r?(u&&h&&(u.title=r,u.src=h,t(u)),r.length>10&&(r=r.substring(0,10).replace(/\s+$/,"")+"…"),s&&s.innerText&&s.innerText.length>0&&(r=s.innerText.replace("{0}",r)),f.textContent=r,f.innerText=r,t(f),n(e),n(o),c=="WL"&&u&&(u.style.className+=" sw_spd")):f&&e&&o&&(n(f),u&&n(u),t(e),t(o))};sj_evt.bind("wl:auth",function(){i(Identity.wlProfile())},1);sj_evt.bind("aad:signedout",function(){i({displayName:null,img:null,idp:"orgid"})},1);sj_evt.bind("aad:signedin",function(n){var t,r;n&&n.length>=2&&(t=n[1],t&&t.displayName&&t.uniqueName&&(r={displayName:t.displayName,img:"/orgid/thumbnailPhoto?user="+encodeURIComponent(t.uniqueName),idp:"orgid"},i(r)))},1)}})()