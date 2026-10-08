/* EPG Global ONE: раскрывающиеся разделы меню */
(function(){
  function init(){
    var items=[].slice.call(document.querySelectorAll('.menu .mi'));
    if(!items.length)return;
    function closeAll(except){items.forEach(function(m){if(m!==except){m.classList.remove('open');var b=m.querySelector('.mt');if(b)b.setAttribute('aria-expanded','false');}});}
    items.forEach(function(m){
      var b=m.querySelector('.mt');if(!b)return;
      b.addEventListener('click',function(e){
        e.stopPropagation();
        var open=!m.classList.contains('open');
        closeAll(m);
        m.classList.toggle('open',open);
        b.setAttribute('aria-expanded',open?'true':'false');
      });
      m.querySelectorAll('.sub a').forEach(function(a){a.addEventListener('click',function(){closeAll();});});
    });
    document.addEventListener('click',function(e){if(!e.target.closest||!e.target.closest('.menu .mi'))closeAll();});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')closeAll();});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
