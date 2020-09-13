const enhancer = require('./enhancer.js');
// test away!

it("Has been repaired", () => { 
    expect(enhancer.repair({
        name: "Shoe",
        durability: 75,
        enhancement: 18,
    }))
    .toEqual({
        name: "Shoe",
        durability: 100,
        enhancement: 18,
    })
})

it("Has been succeeded", () => { 
    expect(enhancer.success({
        name: "Shoe",
        durability: 75,
        enhancement: 18,
    }))
    .toEqual({
        name: "Shoe",
        durability: 75,
        enhancement: 19,
    })
})

it("Has been failed", () => { 
    expect(enhancer.fail({
        name: "Shoe",
        durability: 75,
        enhancement: 18,
    }))
    .toEqual({
        name: "Shoe",
        durability: 65,
        enhancement: 17,
    })
})