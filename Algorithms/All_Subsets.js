// function findSubsets(arr) {
//     let subsets = [[]];
//     for (let element of arr) {
//         let newSubsets = [];
//         for (let subset of subsets) {
//             newSubsets.push([...subset, element]);
//         }
//         subsets = [...subsets, ...newSubsets];
//     }
//     return subsets;
// }




function findSubsets(arr)
{
    let ans = [[]]
    for(ele of arr)
    {
        let temp = []
        for(let ss of ans)
        {
            temp.push([...ss, ele]);
        }
        ans = [...ans, ...temp];
    }
    return ans;
}

module.exports = findSubsets;
