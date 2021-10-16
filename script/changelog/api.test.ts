import * as api from "./api"
// @ponicode
describe("api.fetchPR", () => {
    test("0", () => {
        let callFunction: any = () => {
            api.fetchPR("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            api.fetchPR(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            api.fetchPR(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            api.fetchPR(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            api.fetchPR(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            api.fetchPR(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
