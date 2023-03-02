function twoSum(nums: number[], target: number): number[] {
    const map = {} as any
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index]
        //calculamos complemento
        const complement = target - element
        if (map[complement] !== undefined) {
            return [map[complement], index]
        } else {
            map[element] = index
        }
    }
    return []
}

const nums = [3,2,4]
const target = 6

const res = twoSum(nums, target)
console.log('RESULTADO BOLUDIN MARICON => ', res)