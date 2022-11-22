const fetchData = require("./async.js")

describe("scenario 1", ()=>{
	it("should return correct todo", ()=>{
		const todo = fetchData(1).then(todo=>{
			expect(todo.id).toBe(1);
		});
	})
})