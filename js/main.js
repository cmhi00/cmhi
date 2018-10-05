$(function(){
  var slide1 = new Swiper('.slide1', {
        loop:true,
        speed: 2000,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
          reverseDirection:true,
        },
        coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
  });
  setTimeout(function(){
    slide2 = new Swiper('.slide2', {
      loop:true,
      speed: 2000,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
    });
  },2000)
  setTimeout(function(){
    slide3 = new Swiper('.slide3', {
        loop:true,
        speed: 2000,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
          reverseDirection:true
        },
    });
  },6000)
  setTimeout(function(){
     slide4 = new Swiper('.slide4', {
        loop:true,
        speed: 2000,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
      });
  },4000);

  var swiper2 = new Swiper('.construction .swiper-container', {
       slidesPerView: 'auto',
       spaceBetween: 10,
       slidesPerGroup: 3,
       loop: true,
       loopFillGroupWithBlank: true,
       pagination: {
         el: '.construction .swiper-pagination',
         clickable: true,
       },
       navigation: {
         nextEl: '.construction .swiper-button-next',
         prevEl: '.construction .swiper-button-prev',
       },
     });

     var swiper3 = new Swiper('.coupon .swiper-container', {
      slidesPerView: 3,
      navigation: {
        nextEl: '.coupon .swiper-button-next',
        prevEl: '.coupon .swiper-button-prev',
      }
    });
//검색================================================================//
  $('.search i').click(function(){
    $('form').toggle();
    if($(this).hasClass('fa-search')){
      $(this).css('color','#3d6889');
      $(this).attr('class','fas fa-times');
    }else{
      $(this).css('color','#000');
      $(this).attr('class','fas fa-search');
    }
  })
//네비게이션바========================================================//
  $('.nav-list').on({
    'mouseenter':function(){
      $('.nav-list ul').stop().slideDown();
    },
    'mouseleave':function(){
      $('.nav-list ul').stop().slideUp();
    },
  })
//시공사례이미지팝업=================================================//
  $('.construction img').click(function(){
    $('#img_popup').show();
    $('.popup-bg').show();
    var img=$(this).attr('src');

    $('#img_popup img').attr('src',img)

  })
  $('#img_popup button').click(function(){
    $('#img_popup').hide();
    $('.popup-bg').hide();
  })
//공지사항==========================================================//
  function move(){
    $('.notice ul li').first().slideUp(function(){
      $(this).appendTo($('.notice ul')).slideDown();
    });
  }

  play=setInterval(move,2000);

  $('.notice ul').on({
    mouseenter:function(){
      clearInterval(play);
    },
    mouseleave:function(){
      play=setInterval(move,2000);
    }
  });
//로그인===========================================================//
  $('.login').click(function(){
    $('.login-form').fadeIn();
    $('.popup-bg').fadeIn();
  })
  $('.fa-times-circle').click(function(){
    $('.login-form').fadeOut();
    $('.popup-bg').fadeOut();
  })
  //아이디, 비밀번호 입력창에 포커스가 발생했을 때
  $('#id, #password').focus(function(){
    //아이콘의 색상 변경
    $(this).prev().addClass('change');
  })

  //아이디, 비밀번호 입력창에 포커스가 발생되지 않았을때
  $('#id, #password').focusout(function(){
    //아이콘의 색상 원상복귀
    $(this).prev().removeClass('change');
  })

  //로그인폼의 로그인버튼을 눌렀을 때(아이디, 비밀번호값의 여부 체크)
  $('#btn-submit').click(function(){
    //아이디와 패스워드의 값을 변수에 저장
    var id=$('#id').val();
    var password=$('#password').val();
    console.log(id,password);

    //기존 메세지가 있다면 삭제
    $('.message').remove();

    //아이디, 비밀번호값 검사하기
    if(id==''){//아이디의 값이 없을 경우
      $('#id').after('<p class="message">아이디를 입력하세요.</p>').focus();
    }else if(password==''){//비밀번호의 값이 없을 경우
      $('#password').after('<p class="message">비밀번호를 입력하세요.</p>').focus();
    }else{//아이디, 비밀번호값이 있는 경우
      $('.popup-bg').fadeOut();
      $('.login').fadeOut();
      //로그인팝업을 숨긴다.
      $('.login-form').fadeOut(
        1000,function(){
          //b요소의 값을 내가 저장한 아이디값으로 변경
          $('.user-info b').text(id);
          //로그인정보를 보여준다.
          $('.user-info').show();
        }
      );
    }
  })
  //로그아웃 버튼을 눌렀을 때
  $('#btn-logout').click(function(){
    $('.user-info').hide();
    $('.login').show();
    //로그인폼에 있는 값 초기화
    $('#id').val('');
    $('#password').val('');
  })

})
