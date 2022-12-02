const ifElse = a => {
    if (a % 15 == 0){
        return 3;
    } else if (a % 5 == 0 ){
        return 2;
    } else if (a % 3 == 0 ) {
        return 1;
    }
    return -1;
}

console.log(ifElse(1));