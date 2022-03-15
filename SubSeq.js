var subseq = function(p, up){
    if(up == ""){
        console.log(p);
        return;
    }

    var ch = up.charAt(0);

    subseq(p + ch, up.substring(1, up.length));
    subseq(p , up.substring(1, up.length));
}


var subseqRet = function(p, up){
    var list = [];

    if(up == ""){
        list.push(p);
        return list;
    }

    var ch = up.charAt(0);

    var left = subseqRet(p + ch, up.substring(1, up.length));
    var right = subseqRet(p, up.substring(1, up.length));
    list = left.concat(right);
    return list;
}

console.log(subseq("", "abc"));
console.log(subseqRet("", "abc"));