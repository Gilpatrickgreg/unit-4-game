$(document).ready(function(){

    $("#buttonReset").hide();

    var blueStone = 0;
    var redStone = 0;
    var yellowStone = 0;
    var greenStone = 0;
    var yourPoints = 0;
    var matchPoints = 0;
    var wins = 0;
    var losses = 0;
      //Finds random number to match//
     function givenScore(){
        matchPoints = Math.floor((Math.random() * 101) + 19);
        $("#scoreToMeet").text(matchPoints);
       console.log(matchPoints);
    };
              //Creates random number when gem is clicked//
                $("#blueGem").click(function(){
                    if (!blueStone) { 
                        blueStone = Math.floor((Math.random() * 11) + 1);
                    } 
                    yourPoints = yourPoints + blueStone;
                    $("#yourPoints").text(yourPoints);
                    scoreKeeper();
                    console.log(blueStone);
                });

                $("#redGem").click( function(){
                    if (!redStone) {
                        redStone = Math.floor((Math.random () * 11) + 1);
                        }
                        
                    yourPoints = yourPoints + redStone;
                    $("#yourPoints").text(yourPoints);
                    scoreKeeper();
                    console.log(redStone);
                });

                $("#yellowGem").click(function(){
                    if (!yellowStone) {
                        yellowStone = Math.floor((Math.random () * 11) + 1);
                        } 

                    yourPoints = yourPoints + yellowStone;
                    $("#yourPoints").text(yourPoints);
                    scoreKeeper();
                    console.log(yellowStone);
                });

                $("#greenGem").click(function(){
                    if (!greenStone) {
                     greenStone = Math.floor((Math.random () * 11) + 1);
                    }

                    yourPoints = yourPoints + greenStone;
                    $("#yourPoints").text(yourPoints);
                    scoreKeeper();
                    console.log(greenStone);
                    
                });
                //logic for wins and losses//
                function scoreKeeper() {
                    if (yourPoints > matchPoints){
                    losses++;
                    $("#losses").html('losses: ' + losses);
                    $("#buttonReset").show();
                    $("#gemRow").hide();
                    playAgain();
                    }

                    if (yourPoints == matchPoints) {
                        wins++;
                        $("#wins").html('Wins: ' + wins);
                        $("#buttonReset").show();
                        $("#gemRow").hide();
                        playAgain();
                    };
                   

                };
                 //Resest game score and stones//
           
                function playAgain() {
                    $("#buttonReset").click(function(){
                        matchPoints = 0;
                        yourPoints = 0;
                        blueStone = 0;
                        redStone = 0;
                        yellowStone = 0;
                        greenStone = 0;
                        givenScore();
                        $("#buttonReset").hide();
                        $("#gemRow").show();
                        $("#yourPoints").text(yourPoints);
                    });
                }
                  //Resets app on refresh or when page is loaded//
                    givenScore();
                
            });
                