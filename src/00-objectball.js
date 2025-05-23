function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  function homeTeamName() {
    return gameObject()["home"]["teamName"];
  }
  
  function numPointsScored(playerName) {
    let game = gameObject();
    let player = game.home.players[playerName] || game.away.players[playerName];
    return player ? player.points : null;
  }
  
  function shoeSize(playerName) {
    let game = gameObject();
    let player = game.home.players[playerName] || game.away.players[playerName];
    return player ? player.shoe : null;
  }
  
  function teamColors(teamName) {
    let game = gameObject();
    if (game.home.teamName === teamName) {
      return game.home.colors;
    } else if (game.away.teamName === teamName) {
      return game.away.colors;
    }
    return null;
  }
  
  function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  function playerNumbers(teamName) {
    let game = gameObject();
    let players = teamName === game.home.teamName ? game.home.players : game.away.players;
    return Object.values(players).map(player => player.number);
  }
  
  function playerStats(playerName) {
    let game = gameObject();
    let player = game.home.players[playerName] || game.away.players[playerName];
    return player ? player : null;
  }
  
  function bigShoeRebounds() {
    let game = gameObject();
    let allPlayers = {...game.home.players, ...game.away.players};
    let biggestShoeSize = 0;
    let playerWithBiggestShoe = null;
  
    for (let player in allPlayers) {
      if (allPlayers[player].shoe > biggestShoeSize) {
        biggestShoeSize = allPlayers[player].shoe;
        playerWithBiggestShoe = player;
      }
    }
    return playerWithBiggestShoe ? allPlayers[playerWithBiggestShoe].rebounds : null;
  }
  
  function mostPointsScored() {
    let game = gameObject();
    let allPlayers = {...game.home.players, ...game.away.players};
    let maxPoints = 0;
    let playerWithMostPoints = null;
  
    for (let player in allPlayers) {
      if (allPlayers[player].points > maxPoints) {
        maxPoints = allPlayers[player].points;
        playerWithMostPoints = player;
      }
    }
    return playerWithMostPoints;
  }
  
  function winningTeam() {
    let game = gameObject();
    let homePoints = Object.values(game.home.players).reduce((sum, player) => sum + player.points, 0);
    let awayPoints = Object.values(game.away.players).reduce((sum, player) => sum + player.points, 0);
  
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
  }
  
  function playerWithLongestName() {
    let game = gameObject();
    let allPlayers = {...game.home.players, ...game.away.players};
    let longestName = "";
    
    for (let player in allPlayers) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
    return longestName;
  }
  
  function doesLongNameStealATon() {
    let game = gameObject();
    let allPlayers = {...game.home.players, ...game.away.players};
    let longestName = playerWithLongestName();
    let mostSteals = 0;
    let playerWithMostSteals = null;
  
    for (let player in allPlayers) {
      if (allPlayers[player].steals > mostSteals) {
        mostSteals = allPlayers[player].steals;
        playerWithMostSteals = player;
      }
    }
  
    return longestName === playerWithMostSteals;
  }
  
  
  console.log(homeTeamName());  
  console.log(numPointsScored("Alan Anderson"));  
  console.log(shoeSize("Reggie Evans"));  
  console.log(teamColors("Charlotte Hornets"));  
  console.log(teamNames());  
  console.log(playerNumbers("Brooklyn Nets")); 
  console.log(playerStats("Jason Terry"));
  console.log(bigShoeRebounds());  
  console.log(mostPointsScored());  
  console.log(winningTeam());  
  console.log(playerWithLongestName());  
  console.log(doesLongNameStealATon());  
  