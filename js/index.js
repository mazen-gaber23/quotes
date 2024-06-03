var quote1=`<p class="h3 m-5">"Be yourself; everyone else is already taken."</p><p class="h3 m-5"> --Oscar Wilde</p>`;
 var quote2=`<p class="h3 m-5">"So many books, so little time."</p><p class="h3 m-5">--Frank Zappa</p>`;
 var quote3=`<p class="h3 m-5">"A room without books is like a body without a soul."</p><p class="h3 m-5">--Marcus Tullius Cicero</p>`;
 var quote4=`<p class="h3 m-5">"You only live once, but if you do it right, once is enough."</p><p class="h3 m-5">--Mae West</p>`;
 var quote5=`<p class="h3 m-5">"Be the change that you wish to see in the world."</p><p class="h3 m-5">--Mahatma Gandhi</p>`;
 var quotesList=[quote1,quote2,quote3,quote4,quote5];
 var lastIndex=-1;
function displayQuotes(){
     var contain='';
     do{
         var x=Math.random()*4;
     var i=Math.round(x);
    } while(i===lastIndex); 
    lastIndex=i;
        contain+=quotesList[i];  
          document.getElementById('demo').innerHTML=contain;

    }
   
