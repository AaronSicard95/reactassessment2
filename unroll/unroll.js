function unroll(squareArray) {
    for(let i=0;i<squareArray.length;i++){
        if(squareArray[i].length != squareArray.length){
            return "Not a valid array. Must Be Square";
        }
    }
    let newAr = [];
    for(let i = 0; i<squareArray.length/2;i++){
        newAr = [...newAr,...squareArray[i].slice(i,squareArray.length-i)];
        if(squareArray[i].slice(i,squareArray.length-i).length==1){
            return newAr;
        }
        for(let it = i+1;it<squareArray.length-1-i;it++){
            newAr = [...newAr,squareArray[it][squareArray.length-1-i]];
        }
        for(let it = i;it<squareArray.length-i;it++){
            newAr = [...newAr, squareArray[squareArray.length-1-i][squareArray.length-1-it]];
        }
        for(let it = squareArray.length-1-(i+1);it>=i+1;it--){
            newAr = [...newAr, squareArray[it][i]];
        }
    }
    return newAr;
}
module.exports = unroll;
