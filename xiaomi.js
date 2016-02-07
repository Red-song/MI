$(function(){

var imgs=$(".banner-image img");
var btn=$(".banner-right-li");
var t=setInterval(function(){demo("r")},2000);
var index=0;
function demo(type){
	if(type=="r"){
			index++;
			if(index>=imgs.length){
				index=0;
			}
		}else if(type=="l"){
			index--;
			if(index<=-1){
				index=imgs.length-1;
			}
		}
	
	imgs.hide();
	btn.css({border:"2px solid #9E9381",
background:"#6E5B41"})
	imgs.eq(index).fadeIn();
	btn.eq(index).css({border:"2px solid #6E5B41",
background:"white"})
   
}

imgs.hover(function(){
	clearInterval(t);
},function(){
	 t=setInterval(function(){
		demo("r");
	},2000);
})

$(".left").hover(function(){clearInterval(t);})
$(".right").hover(function(){clearInterval(t);})
$(".left").click(function(){
	
       demo("l");
	})
$(".right").click(function(){
	
       demo("r");
	})

	btn.click(function(){
		clearInterval(t);
		var now=$(this).index();
		//alert(now);
		btn.css({border:"2px solid #9E9381",
background:"#6E5B41"})
        $(this).css({border:"2px solid #6E5B41",
background:"white"});
        imgs.hide();
        imgs.eq(now).fadeIn();
        index=now;
	})

//
   var top2li=$(".top2-li");
   top2li.hover(function(){
      $(this).find("div").stop();
      $(this).find("div").slideDown();
      
    },function(){
      $(this).find("div").stop();
      $(this).find("div").slideUp();
    })
   	
   


   //
  
     var n=setInterval(demo1,1000);
    function demo1(){
     $(".mxdp-bottom").eq(0).delay(2000).animate({marginLeft:-1220},600,function(){
          $(".mxdp-top>.mxdp-top-right1").css("background","url(images/3.png)")
          $(".mxdp-top>.mxdp-top-right2").css("background","url(images/4.png)")}
     ).delay(2000).animate({marginLeft:0},600,function(){ 
          $(".mxdp-top>.mxdp-top-right1").css("background","url(images/5.png)")
          $(".mxdp-top>.mxdp-top-right2").css("background","url(images/6.png)")}
          
     )
   } 
  

   $(".mxdp-top>.mxdp-top-right2").hover(function(){
    $(".mxdp-bottom").eq(0).stop(true,true);
   clearInterval(n)},function(){
  n=setInterval(demo1,1000);
}).click(function(){
  $(this).css("background","url(images/6.png)")
  $(this).siblings("div").css("background","url(images/5.png)")
  $(".mxdp-bottom").eq(0).animate({marginLeft:0})
})

$(".mxdp-top>.mxdp-top-right1").hover(function(){
  $(".mxdp-bottom").eq(0).stop(true,true);
  clearInterval(n)},function(){
  n=setInterval(demo1,1000);
}).click(function(){
   $(this).css("background","url(images/3.png)")
   $(this).siblings("div").css("background","url(images/4.png)")
  $(".mxdp-bottom").eq(0).animate({marginLeft:-1220})
})
   		 
 
  /*var numb=0;
        function demo2(){
          numb++;
            if(numb>=2){
              numb=0;
            }
          
          if(numb==0){
          $(".mxdp-top>.mxdp-top-right1").css("background","url(images/5.png)")
          $(".mxdp-top>.mxdp-top-right2").css("background","url(images/6.png)")}
          else{
          $(".mxdp-top>.mxdp-top-right1").css("background","url(images/3.png)")
          $(".mxdp-top>.mxdp-top-right2").css("background","url(images/4.png)")}
          

          $(".mxdp-bottom").eq(0).animate({marginLeft:-1220*numb},1000)
        }
        var t2=setInterval(demo2,3000)

$(".mxdp-top>.mxdp-top-right2").hover(function(){clearInterval(t2)},function(){
  t2=setInterval(demo2,3000);
}).click(function(){
  $(this).css("background","url(images/6.png)")
  $(this).siblings("div").css("background","url(images/5.png)")
  $(".mxdp-bottom").eq(0).animate({marginLeft:0})
})

$(".mxdp-top>.mxdp-top-right1").hover(function(){clearInterval(t2)},function(){
  t2=setInterval(demo2,3000);
}).click(function(){
   $(this).css("background","url(images/3.png)")
   $(this).siblings("div").css("background","url(images/4.png)")
  $(".mxdp-bottom").eq(0).animate({marginLeft:-1220})
})*/


//选项卡
$("#dp-ul1>.dp-li").hover(function(){
      var index2=$(this).index();
        $("#dpbox1>.dp-nr-topbox").hide();
        $("#dp-ul1>.dp-li>a").css({borderBottom:"none",
color:"black"})
        $("#dpbox1>.dp-nr-topbox").eq(index2).show();
        $("#dp-ul1>.dp-li>a").eq(index2).css({borderBottom:"2px solid #ff6700",
color:"#FF6700"})
    })
    


$("#dp-ul2>.dp-li").hover(function(){
      var index3=$(this).index();
        $("#dpbox2>.dp-nr-topbox").hide();
        $("#dp-ul2>.dp-li>a").css({borderBottom:"none",
color:"black"})
        $("#dpbox2>.dp-nr-topbox").eq(index3).show();
        $("#dp-ul2>.dp-li>a").eq(index3).css({borderBottom:"2px solid #ff6700",
color:"#FF6700"})
    })
    


$("#dp-ul3>.dp-li").hover(function(){
      var index4=$(this).index();
        $("#dpbox3>.dp-nr-topbox").hide();
        $("#dp-ul3>.dp-li>a").css({borderBottom:"none",
color:"black"})
        $("#dpbox3>.dp-nr-topbox").eq(index4).show();
        $("#dp-ul3>.dp-li>a").eq(index4).css({borderBottom:"2px solid #ff6700",
color:"#FF6700"})
    })
   

//eare
$(".znyj-nr-right").hover(function(){
    $(this).find(".eare").stop();
    $(this).find(".eare").animate({height:90,opacity:1},300)
  },function(){
    $(this).find(".eare").stop();
    $(this).find(".eare").animate({height:0,opacity:0},300)
  })
	

  

//为你推荐

var num=0;
$(".body-bottom-top>div").click(function(){
    var index5=$(this).index();
    //alert(index5)
      if(index5==1){
           num++;
           if(num>=2){
            num=2
            $(this).css("background","url(images/3.png)")
            $(this).siblings("div").css("background","url(images/4.png)")
           }
      }else{
        num--;
        if(num<=0){
          num=0;
          $(this).css("background","url(images/6.png)")
          $(this).siblings("div").css("background","url(images/5.png)")
        }
      }
      $(".wntj").animate({left:-1234*num})
  })
	
	


//热评产品
  $(".rp-tp").hover(function(){
      $(this).find("p").animate({opacity:0.8},50,function(){
        $(this).animate({opacity:1},50)
      })

    })
  	
  

//内容
$("#nr-tpbox1").hover(function(){
	$(".nr-tpbox>span").css("display","block")
},function(){
	$(".nr-tpbox>span").css("display","none")
})



var val=0;

$("#nr-tpbox1>span").click(function(){
    var index6=$(this).index();
    //alert(index6)
      if(index6==3){
           val++;
           if(val>=4){
            val=3
           }
      }else{
        val--;
        if(val<0){
          val=0;
        }
      }
      $("#nr-tpbox1 .nr-li").css({border:"none",
background:"#ccc"})
      $("#nr-tpbox1 .nr-li").eq(val).css({border:"1px solid #FF6700",
background:"white"})
      $("#nr-tpbig1").animate({left:-296*val})
  })
	
	



$("#nr-tpbox1 .nr-li").click(function(){
    var index7=$(this).index();
    //alert(index7)
    $("#nr-tpbox1 .nr-li").css({border:"none",
background:"#ccc"});
    $(this).css({border:"1px solid #FF6700",
background:"white"});
        $("#nr-tpbig1").animate({left:-296*index7});
        val=index7;

  })


       



//视频

$(".sp-sp-tp").hover(function(){
  $(this).find(".sp-icon").css({background:"red url(images/icon.png)",
border:"2px solid #FF6700"})
},function(){
  $(this).find(".sp-icon").css({background:"#555555 url(images/icon.png)",
border:"2px solid white"})
})
  

//foot

$(".foot-right3").hover(function(){
  $(this).css("background","#ff6700");
  $(this).find("a").css("color","white")
},function(){
  $(this).css("background","white");
  $(this).find("a").css("color","#ff6700")
})




})