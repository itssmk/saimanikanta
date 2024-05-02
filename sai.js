var i = 0;
var txt1 = "Hi Manuu.....!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < You seems something Special to me.  <<                  As the days goes < you get closer to me....! <<                           I don't know the reason why I always think only about you...!                                                     > Everything about you is always intresting for me...!                     << I am somewhat nervous Because I haven't said these words to anyone and I won't say to anyone in future...!                                                     > I miss you so much that I am dying t meet you....!                    << Now You are the only person  whom I love equally with my parents....!                                                             >I Love you love you love you so muchh<SweetHeart.....! |                  <<<< I will never give up on you till end ...!   ";
var speed = 55;
typeWriter();
function typeWriter() {
    if (i < txt1.length) {
        if (txt1.charAt(i) == "<")
            document.getElementById("text1").innerHTML += "</br>";
        else if (txt1.charAt(i) == ">")
            document.getElementById("text1").innerHTML = "";
        else if (txt1.charAt(i) == "|") {
            $(".bg_heart").css("background-image", "')");
        } else
            document.getElementById("text1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
