function findCount(s) {
    let res = '';
    let c = 1;
    for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
    c++;
    } else {
    res += s[i] + c;
    c = 1;
    }
    }
    return res;
    }
    let str = 'aabbaaaccbb';
    let ans = findCount(str);
    console.log(ans);


    ///dflldsfjlkjlkjlksdjlkjflsjdflksjaljdlkjslkfjslkdjl