const axios = require("axios");

const fetchData = async (id) =>{
	const results = await axios.get("https://jsonplaceholder.typicode.com/todos/${id}")
	return results.data
}

const forEach = (items, callback)=>{
	for(let i =0;i<items.length;i++){
		callback(items[i]);
	}
}

it("mock callback",()=>{
	const mockCalledback = jest.fn(x=>42+x);
	forEach([3,4],mockCalledback);
	expect(mockCalledback.mock.calls.length).toBe(2)
	expect(mockCalledback.mock.calls[0][0]).toBe(3)
	expect(mockCalledback.mock.calls[1][0]).toBe(4)
	expect(mockCalledback.mock.results[0].value).toBe(45)
})

it("mock return",()=>{
	const mock = jest.fn();
	mock.mockReturnValueOnce(true).mockReturnValueOnce(false);
	const results = mock();
	const results1 = mock();
	expect(results).toBe(true);
	expect(results1).toBe(false);
})

it("mock axios", async()=>{
	jest.spyOn(axios, "get").mockReturnValueOnce({
		data:{
			id:1,
			todo: "study"
		}
	})
	const results = await fetchData(1);
	expect(results.todo).toBe("study");
})