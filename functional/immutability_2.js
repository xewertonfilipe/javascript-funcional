const nums = [4, 8, 3, 2, 9, 1, 9, 3]

// #3 - Recursividade
function somarArray(array, total = 0) {
    if (array.length === 0) {
        return total
    }
    console.log(array);
    return somarArray(array.slice(1), total + array[0])
}

const total = somarArray(nums)
console.log(total)

// #2 - Reduce
// Função mais funcional e declarativa
// const somar = (a, b) => a + b
// const total = nums.reduce(somar)
// console.log(total)

// #1 - Dados mutáveis
// let total = 0

// for (let i = 0; i < nums.length; i++) {
//     total += nums[i]
// }

// console.log(total)