/* EPG Global ONE: поведение страницы */
/* отправка заявок: письмо уходит через /api/zayavka */
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
    .then(function(r){return r.json().catch(function(){return {};}).then(function(j){if(r.ok&&j.ok)done();else throw 0;});})
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
        var data={kind:'pilot',lang:(document.documentElement.lang||'ru').slice(0,2),page:location.pathname};
        new FormData(f).forEach(function(v,k){data[k]=v;});
        try{fetch('/api/zayavka',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data),keepalive:true}).then(go,go);}catch(e){go();}
        setTimeout(go,2500);
        return;
      }
      epgSend(f,'full',show);
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
