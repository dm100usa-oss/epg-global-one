/* EPG Global ONE: поведение страницы */
/* отправка заявок: письмо уходит через /api/zayavka */
/* заявка отправлена: отметка для Google Аналитики */
function epgLead(kind){try{if(window.gtag)gtag('event','generate_lead',{form_type:kind});}catch(e){}}
function epgSend(form,kind,done){
  var lg=(document.documentElement.lang||'ru').slice(0,2);
  var err={ru:'Не удалось отправить заявку. Напишите нам на epg.global.one@gmail.com.',en:'Your request could not be sent. Please email us at epg.global.one@gmail.com.',es:'No se pudo enviar la solicitud. Escríbanos a epg.global.one@gmail.com.'}[lg]||'';
  if(!form.querySelector('[name=company_website]')){
    var hp=document.createElement('input');hp.type='text';hp.name='company_website';hp.tabIndex=-1;hp.autocomplete='off';
    hp.setAttribute('aria-hidden','true');hp.style.cssText='position:absolute;left:-9999px;width:1px;height:1px;opacity:0';
    form.appendChild(hp);
  }
  var data={kind:kind,lang:lg,page:location.pathname};
  new FormData(form).forEach(function(v,k){data[k]=v;});
  var btn=form.querySelector('button[type=submit],button:not([type])');if(btn)btn.disabled=true;
  if(window.EPG_PREVIEW){done();return;}
  fetch('/api/zayavka',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)})
    .then(function(r){return r.json().catch(function(){return {};}).then(function(j){if(r.ok&&j.ok){epgLead(kind);done();}else throw 0;});})
    .catch(function(){if(btn)btn.disabled=false;alert(err);});
}
(function(){
var f=document.getElementById('f');
if(f){f.addEventListener('submit',function(e){
  e.preventDefault();
  if(!this.checkValidity()){this.reportValidity();return;}
  var form=this,kind=form.querySelector('[name=need]')?'partner':'request';
  epgSend(form,kind,function(){
    form.style.display='none';
    var t=document.getElementById('thanks');if(t)t.style.display='block';
  });
});}
})();
(function(){
  var calm=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(calm)return;

  /* цифры: каждая прокручивается в своем окошке, первыми останавливаются единицы */
  var boxes=document.querySelectorAll('.stats b');
  var built=[];
  boxes.forEach(function(b){
    var text=b.textContent;
    var chars=text.split('');
    var digits=[];
    var html='<span class="sr">'+text+'</span><span class="odo" aria-hidden="true">';
    chars.forEach(function(c){
      if(/[0-9]/.test(c)){
        var strip='';
        for(var k=0;k<40;k++)strip+='<span>'+(k%10)+'</span>';
        html+='<span class="dg"><span class="strip" data-d="'+c+'">'+strip+'</span></span>';
      }else{
        html+='<span class="st'+(c==='+'?' pl':'')+'">'+(c===' '||c==='\u00a0'?'&nbsp;':c)+'</span>';
      }
    });
    html+='</span>';
    b.innerHTML=html;
    built.push(b);
  });
  function roll(b){
    var strips=[].slice.call(b.querySelectorAll('.strip')).reverse();
    strips.forEach(function(st,i){
      var d=+st.getAttribute('data-d');
      var cycles=Math.max(1,3-i);
      var dur=1.3+i*0.4;
      st.style.transition='transform '+dur+'s cubic-bezier(.15,.75,.25,1)';
      st.style.transform='translateY(-'+((cycles*10+d)*1.1)+'em)';
    });
  }
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(e.isIntersecting){var t=e.target;setTimeout(function(){roll(t)},250);io.unobserve(t);}
      });
    },{threshold:.6});
    built.forEach(function(b){io.observe(b)});
  }else{built.forEach(roll);}

  /* флаги: мягкая волна по ткани, каждый в своем ритме */
  var N=14;
  var box=document.querySelector('.countries');
  document.querySelectorAll('.countries li img').forEach(function(img){
    var wrap=document.createElement('span');
    wrap.className='fl';
    wrap.setAttribute('role','img');
    wrap.setAttribute('aria-label',img.alt);
    img.setAttribute('aria-hidden','true');
    img.parentNode.insertBefore(wrap,img);
    wrap.appendChild(img);
    var cl=document.createElement('span');
    cl.className='cl';
    var dur=1.5+Math.random()*0.6;
    var off=Math.random()*dur*2;
    for(var i=0;i<N;i++){
      var s=document.createElement('i');
      var t=i/(N-1);
      s.style.backgroundImage='url("'+img.src+'")';
      s.style.setProperty('--a',(0.6+t*3.4).toFixed(2)+'%');
      s.style.setProperty('--s',(0.02+t*0.07).toFixed(3));
      s.style.setProperty('--d',dur.toFixed(2)+'s');
      var dl=-(off+(N-i)*0.13);
      s.style.setProperty('--dl',dl.toFixed(2)+'s');
      s.style.setProperty('--dl2',(dl-dur/2).toFixed(2)+'s');
      s.style.setProperty('--dl3',(dl-dur*1.5).toFixed(2)+'s');
      s.style.setProperty('--h',(0.03+t*0.09).toFixed(3));
      if(i===0){s.style.borderRadius='2px 0 0 2px'}
      if(i===N-1){s.style.borderRadius='0 2px 2px 0'}
      cl.appendChild(s);
    }
    wrap.appendChild(cl);
    var fit=function(){
      var w=wrap.clientWidth,h=wrap.clientHeight;if(!w)return;
      var kids=cl.children;
      for(var j=0;j<kids.length;j++){
        var l=Math.floor(j*w/N),r=(j===N-1)?w:Math.floor((j+1)*w/N)+2;
        var k=kids[j];
        k.style.left=l+'px';k.style.width=(r-l)+'px';
        k.style.backgroundSize=w+'px '+h+'px';
        k.style.backgroundPosition=(-l)+'px 0';
      }
    };
    fit();
    if('ResizeObserver' in window){new ResizeObserver(fit).observe(wrap);}else{window.addEventListener('resize',fit);}
  });
  if(box&&'IntersectionObserver' in window){
    new IntersectionObserver(function(es){
      es.forEach(function(e){box.classList.toggle('paused',!e.isIntersecting)});
    }).observe(box);
  }
})();
(function(){
  document.querySelectorAll('[data-open]').forEach(function(b){
    b.addEventListener('click',function(){var d=document.getElementById(b.getAttribute('data-open'));if(d&&d.showModal)d.showModal();});
  });
  document.querySelectorAll('dialog.dlg').forEach(function(d){
    d.querySelector('.x').addEventListener('click',function(){d.close();});
    d.addEventListener('click',function(e){if(e.target===d)d.close();});
    var f=d.querySelector('form');
    f.addEventListener('submit',function(e){
      e.preventDefault();
      if(!f.checkValidity()){f.reportValidity();return;}
      var show=function(){f.style.display='none';d.querySelector('.ok').style.display='block';};
      if(f.hasAttribute('data-pay')){
        /* пилот: сначала письмо с данными заявки, затем страница оплаты Stripe с уже вписанной почтой */
        var em=(f.querySelector('[name=email]')||{}).value||'';
        var went=false,go=function(){if(went)return;went=true;show();location.href='https://buy.stripe.com/8x2dR8eiHdLq7IleK7ak000'+(em?'?prefilled_email='+encodeURIComponent(em):'');};
        if(window.EPG_PREVIEW){show();return;}
        epgLead('pilot');
        var data={kind:'pilot',lang:(document.documentElement.lang||'ru').slice(0,2),page:location.pathname};
        new FormData(f).forEach(function(v,k){data[k]=v;});
        try{fetch('/api/zayavka',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data),keepalive:true}).then(go,go);}catch(e){go();}
        setTimeout(go,2500);
        return;
      }
      epgSend(f,f.getAttribute('data-kind')||'full',show);
    });
  });
})();

/* образцы: открыть крупно */
(function(){
  document.querySelectorAll('[data-obr]').forEach(function(b){
    b.addEventListener('click',function(){var d=document.getElementById('obr-dlg-'+b.getAttribute('data-obr'));if(d&&d.showModal)d.showModal();});
  });
  document.querySelectorAll('dialog.obr-dlg').forEach(function(d){
    d.querySelector('.x').addEventListener('click',function(){d.close();});
    d.addEventListener('click',function(e){if(e.target===d)d.close();});
  });
})();

/* калькулятор стоимости */
(function(){
  var box=document.getElementById('calc');if(!box)return;
  var pages=document.getElementById('c-pages'),out=document.getElementById('c-total');
  var lg=(document.documentElement.lang||'ru').slice(0,2);
  function fmt(n){var s=String(Math.round(n));if(lg==='en')return '$'+s.replace(/\B(?=(\d{3})+(?!\d))/g,',');if(lg==='es')return 'USD\u00a0'+(s.length>4?s.replace(/\B(?=(\d{3})+(?!\d))/g,'\u00a0'):s);return s.replace(/\B(?=(\d{3})+(?!\d))/g,'\u00a0')+'\u00a0$';}
  function calc(){
    var n=Math.max(0,parseInt(pages.value,10)||0),base=n*20,sum=base;
    box.querySelectorAll('input[type=checkbox]:checked').forEach(function(c){
      if(c.dataset.pct)sum+=base*(+c.dataset.pct)/100;
      if(c.dataset.add)sum+=+c.dataset.add;
    });
    out.textContent=fmt(sum);
  }
  box.addEventListener('input',calc);box.addEventListener('change',calc);calc();
})();

/* калькулятор стоимости, новая версия (страница цен) */
(function(){
  var box=document.getElementById('calc2');if(!box)return;
  var $=function(s){return box.querySelector(s)};
  var T={
    ru:{fmt:function(n){return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g,' ')+' $';},pilot:'Пилотная проверка',key:'Ключевые страницы сайта',full:'Проверка всего сайта, {n} стр.',ver:' × {n} версии',tr10:'Перевод 10 отзывов',tr50:'Перевод 50 отзывов',comp:'Сравнение с конкурентами',re:'Повторная проверка',edit:'Редактура текста, {n} стр.',sub:'Подписка',month:' в месяц',empty:'Выберите проверку или услуги'},
    en:{fmt:function(n){return '$'+String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g,',');},pilot:'Pilot Audit',key:'Key Pages Audit',full:'Full Website Audit, {n} pages',ver:' × {n} versions',tr10:'Translation of 10 customer reviews',tr50:'Translation of 50 customer reviews',comp:'Competitor comparison',re:'Follow-up audit',edit:'Text editing, {n} pages',sub:'Subscription',month:' per month',empty:'Choose an audit or services'},
    es:{fmt:function(n){var s=String(Math.round(n));return 'USD\u00a0'+(s.length>4?s.replace(/\B(?=(\d{3})+(?!\d))/g,'\u00a0'):s);},pilot:'Auditoría piloto',key:'Auditoría de páginas clave',full:'Auditoría de todo el sitio, {n} páginas',ver:' × {n} versiones',tr10:'Traducción de 10 reseñas',tr50:'Traducción de 50 reseñas',comp:'Comparación con la competencia',re:'Auditoría de seguimiento',edit:'Edición de textos, {n} páginas',sub:'Suscripción',month:' al mes',empty:'Elija una auditoría o servicios'}
  };
  var L=T[box.getAttribute('data-lang')]||T.ru, fmt=L.fmt;
  function val(name){var r=box.querySelector('input[name="'+name+'"]:checked');return r?r.value:'';}
  function num(id,min){var v=parseInt(document.getElementById(id).value,10);return isNaN(v)||v<min?min:v;}
  var ADD={tr10:100,tr50:400,comp:250};
  var BASE={pilot:180,key:700};
  function calc(){
    var base=val('c2-base'),lang=+val('c2-lang')||1,sub=+val('c2-sub')||0,lines=[],once=0,check=0;
    box.querySelectorAll('[data-for]').forEach(function(e){e.hidden=e.getAttribute('data-for')!==base;});
    var hasCheck=base!=='none';
    box.querySelectorAll('[data-need-check]').forEach(function(e){e.classList.toggle('off',!hasCheck);});
    if(base==='full'){var pg=num('c2-pages',1);check=pg*20;lines.push([L.full.replace('{n}',pg),check]);}
    else if(BASE[base]){check=BASE[base];lines.push([L[base],check]);}
    if(hasCheck&&lang>1){lines[0][0]+=L.ver.replace('{n}',lang);check*=lang;lines[0][1]=check;}
    once+=check;
    var re=$('[data-k="re"]');re.disabled=!hasCheck;if(!hasCheck)re.checked=false;
    box.querySelectorAll('.c2-add input[type=checkbox]').forEach(function(c){
      var k=c.getAttribute('data-k');if(!c.checked)return;
      if(ADD[k]){lines.push([L[k],ADD[k]]);once+=ADD[k];}
      if(k==='re'){var r=Math.round(check*0.3);lines.push([L.re,r]);once+=r;}
      if(k==='edit'){var ep=num('c2-edit',1),e=ep*25;lines.push([L.edit.replace('{n}',ep),e]);once+=e;}
    });
    var ed=$('[data-for-k="edit"]');ed.hidden=!$('[data-k="edit"]').checked;
    var ul=document.getElementById('c2-lines');
    ul.innerHTML=lines.length?lines.map(function(l){return '<li><span>'+l[0]+'</span><b>'+fmt(l[1])+'</b></li>'}).join(''):'<li class="c2-empty">'+L.empty+'</li>';
    if(sub){ul.innerHTML+='<li><span>'+L.sub+'</span><b>'+fmt(sub)+L.month+'</b></li>';}
    document.getElementById('c2-once').textContent=fmt(once);
    document.getElementById('c2-mrow').hidden=!sub;
    document.getElementById('c2-month').textContent=fmt(sub);
  }
  box.addEventListener('click',function(e){var b=e.target.closest('.stepper button');if(!b)return;var inp=document.getElementById(b.getAttribute('data-t'));var v=(parseInt(inp.value,10)||0)+(+b.getAttribute('data-d'));inp.value=Math.max(1,v);calc();});
  box.addEventListener('input',calc);box.addEventListener('change',calc);calc();
})();
