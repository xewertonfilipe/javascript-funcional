function ordenar(array) {
    return [...array].sort()
}

// const nums = Object.freeze([3, 1, 7, 9, 4, 6])
const nums = [3, 1, 7, 9, 4, 6]
nums[0] = 1000
nums.sort((a, b) => a - b)
const numsOrdenados = ordenar(nums)
console.log(nums, numsOrdenados)