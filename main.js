const buyChocolate = () => {
    const chocolateObject = {
        type: "Milk chocolate"
    }
    return chocolateObject
}

let candy = buyChocolate()

let chocolate = buyChocolate()
console.log(chocolate)

const addFlavoring = (candy) => {
    candy.flavor = "Mint"

    return candy
}

candy = addFlavoring(candy)

chocolate = addFlavoring(chocolate)
console.log(chocolate)

const makeBarkMixture = (candy) => {
    if (candy.flavor === "Mint"){
        candy.mixed = true
    } else {
        candy.mixed = false
    }
    return candy
}

candy = makeBarkMixture(candy)

chocolate = makeBarkMixture(chocolate)
console.log(chocolate)

const bakeCandy = (candy) => {
    if (candy.mixed === true) {
        candy.baked = true
    } else { 
        candy.baked = false
    }
    return candy
}

candy = bakeCandy(candy)

chocolate = bakeCandy(chocolate)
console.log(chocolate)

let candyStrings = []
const breakBark = (candy) => {
    if (candy.baked === true) {
       candyStrings = ["Mint Chocolate Bark Piece.", 
                            "Mint Chocolate Bark Piece.",
                            "Mint Chocolate Bark Piece.",
                            "Mint Chocolate Bark Piece.",
                            "Mint Chocolate Bark Piece.",
                            "Mint Chocolate Bark Piece."
                            ]
    }
    return candyStrings
}

candyStrings = breakBark(candy)
chocolate = breakBark(chocolate)
console.log(chocolate)
