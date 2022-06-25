const { expect } = require("chai");

const carService = require("./Demo/exam/03/03. Car service_Resources")

describe("exam tests", () => {
    describe("Is it expensive tests", () => {
        it("is expensive", () => {
            expect(carService.isItExpensive("Engine")).to.equal("The issue with the car is more severe and it will cost more money")
            expect(carService.isItExpensive("Transmission")).to.equal("The issue with the car is more severe and it will cost more money")
        })
        it("is not that expensive", () => {
            expect(carService.isItExpensive("")).to.equal("The overall price will be a bit cheaper");
        })
    })
    
    describe("discount check", () => {

        it("error", () => {
            expect(() => carService.discount(1,"a")).to.throw("Invalid input");
            expect(() => carService.discount("a","a")).to.throw("Invalid input");
            expect(() => carService.discount("a",1)).to.throw("Invalid input");
            expect(() => carService.discount(1,{})).to.throw("Invalid input");
            expect(() => carService.discount(1,[])).to.throw("Invalid input");
            expect(() => carService.discount([],1)).to.throw("Invalid input");
            expect(() => carService.discount({},1)).to.throw("Invalid input");
        })

        it("small discount", () => {
            expect(carService.discount(5,5)).to.equal("Discount applied! You saved 0.75$");
            expect(carService.discount(3,15)).to.equal("Discount applied! You saved 2.25$");
            expect(carService.discount(7,15)).to.equal("Discount applied! You saved 2.25$");
        }) 
        it("big discount", ()=> {
            expect(carService.discount(15,5)).to.equal("Discount applied! You saved 1.5$");
            expect(carService.discount(8,15)).to.equal("Discount applied! You saved 4.5$");
        })
        it("no discount", () => {
            expect(carService.discount(2,5)).to.equal("You cannot apply a discount");
            expect(carService.discount(1,5)).to.equal("You cannot apply a discount");
        })
    })

    describe("parts to buy", () => {
        it("calculates expenses",() => {
            expect(carService.partsToBuy([],[])).to.equal(0)
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],["blowoff valve", "injectors"])).to.equal(145)
        })
        it("throws error not array", () => {
            expect(() => carService.partsToBuy([],2)).to.throw("Invalid input")
            expect(() => carService.partsToBuy(2,2)).to.throw("Invalid input")
            expect(() => carService.partsToBuy(2,[])).to.throw("Invalid input")
            expect(() => carService.partsToBuy([],{})).to.throw("Invalid input")
            expect(() => carService.partsToBuy({},[])).to.throw("Invalid input")
            expect(() => carService.partsToBuy([],"a")).to.throw("Invalid input")
            expect(() => carService.partsToBuy("a","a")).to.throw("Invalid input")
            expect(() => carService.partsToBuy("a",[])).to.throw("Invalid input")
        })
    })
})


