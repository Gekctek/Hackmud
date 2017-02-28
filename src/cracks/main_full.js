function main (context, args){
    var target = args.t;
    var attempt = {};
    var response = target.call(attempt);

   
   var i = 0;
    while(true){
        args.a = attempt;
        if (response.includes("`NEZ_")) {
            response = #s.gekctek.ez(args);
        }
        else if(response.includes("`Nc00")) {
            response = #s.gekctek.c00(args);
        }
        else {
            return {'a':attempt, 'r':response};
        }
        attempt = response.a;
        response = response.r;
    }
}
