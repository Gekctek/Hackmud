function main (context, args){
    var target = args.t;
    var attempt = args.a;
    var colors = ["purple","blue","cyan","green","lime","yellow","orange","red"];

    var response = target.call(attempt);
    function check_next(a) {
        response = target.call(a)
        if (response.includes("is missing") || response.includes("Denied") || response.includes("terminated.")) {
            return true
        }
    }
    var c00 = "c00";
    var end = "` ";
    var triad = "_triad_"
    var i = 0;
    if(response.includes(c00 + 1 + end)) {
         do  {
            attempt[c00 + 1] = colors[i++];
        } while(!check_next(attempt));
        
        i = 0;
        do {
            attempt["color_digit"] = i++;
        } while (!check_next(attempt));
    } else if (response.includes(c00 + 2 + end)) {
        do {
            attempt[c00+2] = colors[i];
            attempt[c00+2+"_complement"] = colors[(i+++4)%8];
        } while(!check_next(attempt));
    } else if (response.includes(c00 + 3 + end)) {
        do {
            attempt[c00 + 3] = colors[i];
            attempt[c00 + 3 + triad + 1] = colors[(i+3)%8];
            attempt[c00 + 3 + triad + 2] = colors[(i+++5)%8];
        } while (!check_next(attempt));
    } 
    return {'a':attempt, 'r':response};
}