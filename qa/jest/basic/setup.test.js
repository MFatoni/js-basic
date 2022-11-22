let animals = []

beforeAll(()=>{
	animals = ['elephant', 'zebra']
})

afterAll(()=>{
	animals = ['elephant', 'zebra']
})


describe("animal arrays",()=>{
	beforeEach(()=>{
		animals = ['elephant', 'zebra']
	})

	afterEach(()=>{
		animals = ['elephant', 'zebra']
	})
	it("should add animal to end of array",()=>{
		animals.push("aligator");
		expect(animals[animals.length-1]).toBe("aligator");
	})
	it("should add animal to beginning of array",()=>{
		animals.unshift("monkey");
		expect(animals[0]).toBe("monkey")
	})
	it("should have initial length of 2",()=>{
		expect(animals.length).toBe(2)
	})
})