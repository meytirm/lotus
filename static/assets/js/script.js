$('.one-time').slick({
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                adaptiveHeight: true,
                prevArrow: '<i class="ion-chevron-left"></i>',
                nextArrow: '<i class="ion-chevron-right"></i>'
            });
            $('.sidebar1').slick({
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                adaptiveHeight: true,
                prevArrow: '<i class="ion-chevron-left"></i>',
                nextArrow: '<i class="ion-chevron-right"></i>'
                
            });
            $('.sidebar2').slick({
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                adaptiveHeight: true,
                prevArrow: '<i class="ion-chevron-left"></i>',
                nextArrow: '<i class="ion-chevron-right"></i>',
                 responsive: [{
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 2,
                    infinite: true
                    }
                    
                    }, {
                    
                    breakpoint: 450,
                    settings: {
                    slidesToShow: 1,
                    }
                    
                    }]
                
            });
            $('.customers').slick({
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                adaptiveHeight: true, 
                arrows: false,
                dots: true          
            });
            $('.tab-slider').slick({
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                adaptiveHeight: true,
                prevArrow: '<i class="ion-chevron-left"></i>',
                nextArrow: '<i class="ion-chevron-right"></i>',
                slidesToShow: 4,
                slidesToScroll: 1,
                  responsive: [{
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 4,
                    infinite: true
                    }
                    
                    }, {
                    
                    breakpoint: 651,
                    settings: {
                    slidesToShow: 2,
                    dots: true
                    }
                    
                    },
                    {
                    
                    breakpoint: 500,
                    settings: {
                    slidesToShow: 1,
                    dots: true
                    }
                    
                    }]     
                    });
            $('.thumbnail-slider').slick({
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                adaptiveHeight: true,
                prevArrow: '<i class="ion-chevron-left"></i>',
                nextArrow: '<i class="ion-chevron-right"></i>',
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 2,
                    infinite: true
                    }
                    
                    }, {
                    
                    breakpoint: 350,
                    settings: {
                    slidesToShow: 1,
                    }
                    
                    }] 
            });
            $('.last-blog').slick({
                infinite: true,
                speed: 300,
                slidesToShow: 2,
                adaptiveHeight: true,
                prevArrow: '<i class="ion-chevron-left"></i>',
                nextArrow: '<i class="ion-chevron-right"></i>',
                responsive: [{
                    breakpoint: 500,
                    settings: {
                    slidesToShow: 1,
                    infinite: true
                    }
                    
                    }] 

            });
            $('.brands').slick({
                infinite: true,
                speed: 300,
                slidesToShow: 6,
                adaptiveHeight: true, 
                arrows: false,   
                 responsive: [{
                    breakpoint: 786,
                    settings: {
                    slidesToShow: 3,
                    infinite: true
                    }
                    
                    }, {
                    
                    breakpoint: 450,
                    settings: {
                    slidesToShow: 2,
                    dots: true
                    }
                    
                    }]     
            });