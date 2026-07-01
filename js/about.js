$(document).ready(function() {
    setTimeout(function() {
      $(".js-num").each(function() {
        const patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
        const time = 1000;
        let result = [...patt.exec($(this).text())];
        let fresh = true;
        let ticks;
  
        result.shift();
        result = result.filter(res => res != null);
  
        $(this).css('opacity', '1');
  
        $(this).empty();
  
        for (let res of result) {
          if (isNaN(res)) {
            $(this).append(`<span>${res}</span>`);
          } else {
            for (let i = 0; i < res.length; i++) {
              $(this).append(
                `<span data-value="${res[i]}">
                  <span>&ndash;</span>
                  ${Array(parseInt(res[i]) + 1)
                    .join(0)
                    .split(0)
                    .map((x, j) => `<span>${j}</span>`)
                    .join("")}
                </span>`
              );
            }
          }
        }
  
        ticks = $(this).find("span[data-value]");
  
        let activate = () => {
          let top = $(this).offset().top;
          let offset = $(window).height() * 0.8;
  
          setTimeout(() => {
            fresh = false;
          }, time);
  
          if (top < offset) {
            setTimeout(() => {
              ticks.each(function() {
                let dist = parseInt($(this).attr("data-value")) + 1;
                $(this).css("transform", `translateY(-${dist * 100}%)`);
              });
            }, fresh ? time : 0);
          }
        };
        activate();
      });
    }, 1000);

    setTimeout(function() {
      $(".s1 .wrap .box:nth-child(2)").addClass("sel");
    }, 2000); 

    setTimeout(function() {
      $(".s1 .wrap .box").addClass("active");
    }, 4200); 

    setTimeout(function() {
      $(".s1 .wrap .box p, .s1 .wrap .box .bw").addClass("active");
    }, 5000); 
});


$(document).ready(function() {
	$('.s5 > div').hover(
        function () {
            $(this).addClass('sel');
        },
        function () {
            $(this).removeClass('sel');
        }
    );
});

// Carousel
$(document).on("css_ready",function(a) {
    $(document).ready(function() {
        $('.history-slider').slick({
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            // variableWidth: true,
            speed: 1000,
            arrows: true,
            prevArrow: $('.arrow-prev'),
            nextArrow: $('.arrow-next'),
            responsive: [
                {
                  breakpoint: 1100,
                  settings: {
                    slidesToShow: 2
                    // variableWidth: false
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1
                    // variableWidth: false
                  }
                }
            ]
        });
    });
});
