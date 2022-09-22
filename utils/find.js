function find(arr,callback){
    for(let i=0;a < arr.length;i++){
        if(callback(arr[i])){
            return arr[i];
        }
    }
}
