var thePolitician = function(nombre,color) {
  var politician = {};
    politician.name = nombre;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = color;

  politician.talliedUp = function () {
    this.totalVotes = 0;
      for (var i = 0; i < this.electionResults.length; i++) {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }

  }

  return politician;
}

var josie = thePolitician("Josie Saunders",[132, 17, 11]);

  josie.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];


var james = thePolitician("James Hayes", [245, 141, 136]);

  james.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];


  josie.electionResults[4] = 17;
  james.electionResults[4] = 38;

  josie.electionResults[9] = 1;
  james.electionResults[9] = 28;

  josie.electionResults[43] = 11;
  james.electionResults[43] = 27;

  var setStateResults = function(state) {

    theStates[state].winner = null;

    if (josie.electionResults[state] > james.electionResults[state]) {
      theStates[state].winner = josie;
    } else if (james.electionResults[state] > josie.electionResults[state]) {
      theStates[state].winner = james;
    }

    stateWinner = theStates[state].winner;

    if (stateWinner !== null) {
      theStates[state].rgbColor = stateWinner.partyColor;
    } else {
      theStates[state].rgbColor = [11, 32, 57];
    }

    var countryResults = document.getElementById('countryResults');
    var countryBody = countryResults.children[0].children[0];

        countryBody.children[0].innerText = josie.name;
        countryBody.children[2].innerText = james.name;
        countryBody.children[1].innerText = josie.totalVotes;
        countryBody.children[3].innerText = james.totalVotes;
        countryBody.children[5].innerText = winner;

        var stateResults = document.getElementById('stateResults');
        var headerName = stateResults.children[0].children[0].children[0];
        var headerAbbr = stateResults.children[0].children[0].children[1];

          headerName.innerText = theStates[state].nameFull;
          headerAbbr.innerText = theStates[state].nameAbbrev;

        var stateBody = stateResults.children[1];
        var stateCand1 = stateBody.children[0]; //josie's name and result row
        var stateCand2 = stateBody.children[1]; //james' name and result row
        var stateWinnerName = stateBody.children[2].children[1];

        stateCand1.children[0].innerText = josie.name;
        stateCand2.children[0].innerText = james.name;
        stateCand1.children[1].innerText = josie.electionResults[state];
        stateCand2.children[1].innerText = james.electionResults[state];

              if (theStates[state].winner === null){
                  stateWinnerName.innerText = "DRAW";
              } else {
                  stateWinnerName.innerText = theStates[state].winner.name;
              }

  }


  josie.talliedUp();
  james.talliedUp();

  var winner = " ";

    if (josie.totalVotes < james.totalVotes) {
      winner = james.name;
    } else if (josie.totalVotes > james.totalVotes) {
      winner = josie.name;
    } else {
      winner = "DRAW";
    }
