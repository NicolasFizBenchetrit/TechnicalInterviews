//input: string 
//output: [palabra: nºapariciones]

//ejemplo: "hola hola bienvenidos" => {"Hola": 2{}, {"bienvenidos": 1}


function countWords(input: string): any {
    const regularExpression = /\s+/
    const words = input.split(regularExpression)
    let res = {} as any
    words.forEach(word => {
        res[word] != undefined ?
            res[word] = res[word] + 1 :
            res[word] = 1
    })
    return res
}

const input: string = "hola hola bienvenidos"
console.log(input)
const output = countWords(input)
console.log(output)
