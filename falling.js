const imageUrls = [
    "https://cdn-icons-png.flaticon.com/512/77/77305.png",
    "https://cdn-icons-png.flaticon.com/512/3364/3364800.png",
    "https://cdn-icons-png.flaticon.com/512/5787/5787016.png",
    "https://cdn-icons-png.flaticon.com/512/1057/1057356.png"
  ];
  
  const box = document.getElementById("image");
  let stopAnimation;

    $("#startgame").click(function () {   
        $("#overlay-container").empty();
        function animateImage() {
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        const randomImageUrl = imageUrls[randomIndex];
        const randomX = Math.floor(Math.random() * (window.innerWidth - 50));
    
        const image = $('<img>').attr({
            'src': `${randomImageUrl}`,
            'class': 'falling-image'
        }).css({
            'top': '0px',
            'left': `${randomX}px`
        });
    
        $('#item-container').append(image);
    
            const intervalId = setInterval(function() {
            const currentPosition = parseInt(image.css('top'));
            const newTop = currentPosition + 10;
            const newLeft = parseInt(image.css('left'));
            image.css({
            'top': `${newTop}px`,
            'left': `${newLeft}px`
            });
    
            if (newTop >= window.innerHeight) {
            clearInterval(intervalId);
            image.remove();
            clearInterval(stopAnimation);
            $(".falling-image").css("position", "fixed");
            $('.falling-image').css({'top': `0`,'left': `0`});
            $('.falling-image').remove()
            $("#overlay-container").empty().append('<div id="overlay" class="overlay"></div> <div id="retry-container"><p>Game over! You missed a item</p><br> <br><a onclick="retry()" id="retry">Retry Game</a></div>');
            
            } else if (newTop + image.height() >= box.offsetTop && newLeft + image.width() >= box.offsetLeft && newLeft <= box.offsetLeft + box.offsetWidth) {
            clearInterval(intervalId);
            image.remove();
            scoreCount();
            }
           
            else if (score === 20) {
                clearInterval(intervalId);
                image.remove();
                clearInterval(stopAnimation);
                $(".falling-image").css("position", "fixed");
                $('.falling-image').css({'top': `0`,'left': `0`});
                $('.falling-image').remove()
                $("#overlay-container").empty().append(`<div id="overlay" class="overlay"></div> <div id="retry-container"><p>Good job! You've won</p><br> <br><a onclick="retry()" id="retry">Play Again</a></div>`);
            }
        }, 50);
        }

        stopAnimation = setInterval(animateImage, 1000);
  });

  function retry(){
    location.reload();
    }


  