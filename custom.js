let score = 0;
        const scoreText = document.getElementById("score");
        scoreText.textContent = "Score: " + score;

        // let missed = 0;
        // const missedText = document.getElementById("missed");
        // missedText.textContent = "Missed: " + missed;

        scoreCount = () => {
            score++;
            scoreText.textContent = "Score: " + score;
        }
        

        $("#startgame").click(function () { 
        $(document).on("touchmove", function(e) {
            let touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            $("#image").css({left: touch.pageX});

            if (touch.pageX < 0) {
                $("#image").css({left: 0});
            }
            if (touch.pageX > 318) {
                $("#image").css({left: 318});
            }
        });
    });
