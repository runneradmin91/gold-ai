(function(){
  const clock = document.getElementById('clock');
  function updateClock(){clock.textContent=new Intl.DateTimeFormat('ar-IQ',{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(new Date());}
  updateClock(); setInterval(updateClock,1000);
  // TradingView chart is an external chart embed. Its feed and delay depend on the provider/broker.
  function loadChart(){
    if(!window.TradingView){document.getElementById('tradingview_chart').innerHTML='<div class="chart-fallback">تعذر تحميل مخطط TradingView. تحقق من اتصال الإنترنت.</div>';return;}
    new TradingView.widget({autosize:true,symbol:'OANDA:XAUUSD',interval:'15',timezone:'Etc/UTC',theme:'dark',style:'1',locale:'ar_AE',enable_publishing:false,hide_top_toolbar:false,hide_legend:false,save_image:false,container_id:'tradingview_chart',backgroundColor:'#111720',gridColor:'#202936',withdateranges:true,allow_symbol_change:true,details:false,hotlist:false,calendar:false,studies:['RSI@tv-basicstudies','MACD@tv-basicstudies']});
  }
  loadChart();
  const capital=document.getElementById('capital'),pct=document.getElementById('riskPct'),distance=document.getElementById('stopDistance');
  function calc(){const c=Number(capital.value),p=Number(pct.value),d=Number(distance.value);const out=document.getElementById('riskResult');if(!Number.isFinite(c)||!Number.isFinite(p)||!Number.isFinite(d)||c<=0||p<=0||p>5||d<=0){out.textContent='تحقق من القيم';return;}out.textContent=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(c*p/100);}
  document.getElementById('calcBtn').addEventListener('click',calc);[capital,pct,distance].forEach(x=>x.addEventListener('input',calc));calc();
})();
