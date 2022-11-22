const {fetchData} = require("./swapi-getter.js");

describe("swapiGetter", ()=>{
	it("should return a name", async ()=>{
		const result = await fetchData(1);
		expect(result).toBe("Luke Skywalker");
	})
})