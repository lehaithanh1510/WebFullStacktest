const replace = (a,b) => {
    let temp  ;
    temp = b ;
    b=a;
    a=temp;
}
const sortRank = (arr = []) => {
    for (let i=arr.length;i>=0;i--) {
        for (let j=1; j <arr.length ;j++){
            // console.log(arr[j])
            if (arr[j-1].point > arr[j].point) {
                replace(arr[j-1],arr[j])
            }
            if (arr[j-1].point === arr[j].point && arr[j-1].GD < arr[j].GD) replace(arr[j-1],arr[j])

             if (arr[j-1].point === arr[j].point && arr[j-1].GD === arr[j].GD && arr[j-1].name < arr[j].name) {
                replace(arr[j-1],arr[j])
            }

        }
    }
    return arr
}
console.log(sortRank([{
    name:"Arsenal",
    point:99,
    GD:39,
   },
   {
    name:"Chelsea",
    point:75,
    GD:29,
   },
   {
    name:"Liverpool",
    point:75,
    GD:22,
   },
   {
    name:"Manchester United",
    point:99,
    GD:39,
   },
]))