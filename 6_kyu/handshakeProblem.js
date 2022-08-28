//===== Description

//Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

// Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.

// However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

// Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).

//===== My solution

function getParticipants(handshakes) {
    if (handshakes == 0) return 1;
    for (let i = 0; i >= 0; i++) {
        if (((i * (i - 1)) / 2) >= handshakes) return i;
    };
}

getParticipants(0) // 0
getParticipants(7) // 5
getParticipants(6) // 4