//Q: str = "baccad" ans = 'bccd'.
// Skipping 'a'.

var skip = function(p, up){
    if(up == ""){
        console.log(p);
        return;
    }

    var ch = up.charAt(0);

    if(ch == 'a'){
        skip(p, up.substring(1, up.length));
    }else {
        skip(p + ch, up.substring(1, up.length));
    }

}


var skip2 = function(up){
    if(up == ""){
        return "";
    }

    var ch = up.charAt(0);

    if(ch == 'a'){
        return skip(up.substring(1, up.length));
    }else {
        return up + skip(up.substring(1, up.length));
    }

}

console.log(skip("", "baccavbkjdskjdah"));
console.log(skip2("baccavbkjdskjdah"));