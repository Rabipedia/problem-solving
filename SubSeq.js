var subseq = function(p, up){
    if(up == ""){
        console.log(p);
        return;
    }

    var ch = up.charAt(0);

    subseq(p + ch, up.substring(1, up.length));
    subseq(p , up.substring(1, up.length));
}

console.log(subseq("", "abc"));