function (context, args){
    var target = args.t;
    var attempt = args.a ? args.a : {};
    var passwords = ["unlock","open","release"];
    var primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,91,101];
    var ez = "EZ_";
    var end = "` ";
    var response = target.call(attempt);
    
    function check_next(a) {
        response = target.call(a);
        if (response.includes("is missing") || response.includes("Denied") || response.includes("terminated.")) {
            return true;
        }
    }

    var i = 0;
    if(response.includes(ez + 21 + end)){
        do {
            attempt[ez + 21] = passwords[i++];
        } while (!check_next(attempt));
    } 
    else if (response.includes(ez + 35 + end)) {
        do {
            attempt[ez + 35] = passwords[i++];
        } while (!check_next(attempt));
        i = 0;
        do {
            attempt["digit"] = i++;
        } while (!check_next(attempt));
    }
    else if (response.includes(ez + 40 + end)){
        do {
            attempt[ez + 40] = passwords[i++];
        } while (!check_next(attempt));
        i = 0;
        do {
            attempt["ez_prime"] = primes[i++];
        } while (!check_next(attempt));
    }
    return {'a':attempt, 'r': response};
}