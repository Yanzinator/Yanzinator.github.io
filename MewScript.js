function odds(odds) {
    return (odds >= Math.floor(Math.random() * 11));
}

function Mew() {
    var mew = "";
    if (odds(7)){
        if (odds(8)) {
            mew += "M"
        } else {
            mew += "m"
        }

        while(odds(2)) {
            mew += "m"
        }

        mew += "e"

        while(odds(6)){
            mew += "e"
        }

        mew += "w"

        while(odds(9)){
            mew += "w"
        }

        while(odds(4)){
            mew += "!"
        }

        while(odds(2)) {
            mew += "~"
        }

    }
    else {

        mew += "M"

        while(odds(2)) {
            mew += "M"
        }

        mew += "E"

        while(odds(6)){
            mew += "E"
        }

        mew += "W"

        while(odds(9)){
            mew += "W"
        }

        while(odds(7)){
            mew += "!"
        }

        while(odds(2)) {
            mew += "~"
        }

    }
    document.getElementById("ArtificialMew").innerHTML = mew;
    return mew;
}
