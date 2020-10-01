
const sortRank = (arr = []) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j > i; j--) {
            if (arr[j - 1].point < arr[j].point) {
                let temp = undefined;
                temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
            else if (arr[j - 1].point === arr[j].point && arr[j-1].GD!== arr[j].GD) {
                if (arr[j].GD < arr[j - 1].GD) {
                    let temp = undefined;
                    temp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;
                }
            }

            else if (arr[j - 1].point === arr[j].point && arr[j - 1].GD === arr[j].GD) {
                console.log(arr[j - 1].name, arr[j].name)
                if (arr[j - 1].name > arr[j].name) {
                    let temp = undefined;
                    temp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    return arr
}
console.log(sortRank(
    [

        {
            name: "Chelsea",
            point: 75,
            GD: 29,
        },
        {
            name: "Liverpool",
            point: 75,
            GD: 22,
        },
        {
            name: "Manchester United",
            point: 99,
            GD: 39,
        },
        {
            name: "Arsenal",
            point: 99,
            GD: 39,
        },
    ]
))