
const getDifferentElement = (arr1 =[], arr2 =[]) => {
    let arr3 = arr1.concat(arr2)
    console.log(arr3)
    for (let i = 0 ;i< arr1.length ; i++) {
        for (let j=0; j<arr2.length ;j++) {
            if (arr2[j] === arr1[i]) {
                if (arr3.indexOf(arr2[j])>=0)
                arr3.splice(arr3.indexOf(arr2[j]),1)
            }
        }
    }
    for (let i = 0 ;i< arr1.length ; i++) {
        for (let j=0; j<arr2.length ;j++) {
            if (arr2[j] === arr1[i]) {
                if (arr3.indexOf(arr2[j])>=0)
                arr3.splice(arr3.indexOf(arr2[j]),1)
            }
        }
    }

    return arr3;
}
console.log(getDifferentElement([1,2,3,4,'a'], [1,2,5,'b','a']))