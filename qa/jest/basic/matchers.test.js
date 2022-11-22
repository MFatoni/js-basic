const sum = require("./matchers.js");

describe("scenario 1",()=>{
	it("should add 1+2 equal 3 ",()=>{
		const result = sum(1,2);
		expect(result).toBe(3);
	});
	it("object assignment",()=>{
		const obj={};
		expect(obj).toEqual({});
	});
	it("truthy or falsey 1",()=>{
		const n = null;
		expect(n).toBeFalsy();
	});
	it("truthy or falsey 2",()=>{
		const n = null;
		expect(n).not.toBeTruthy();
	});
	it("truthy or falsey 3",()=>{
		const n = null;
		expect(n).toBeNull();
	});
	it("truthy or falsey 4",()=>{
		const n = null;
		expect(n).not.toBeUndefined();
	});
});

describe("scenario 2",()=>{
	if("2+2",()=>{
		const value = 2+2;
		expect(value).toBe(4);
		expect(value).toBeGreaterThanOrEqual(4);
	});
	it("adding floats", ()=>{
		const value = 0.1+0.2;
		expect(value).toBeCloseTo(0.2999);
	})

	it("strings there is no I in team",()=>{
		expect("team").not.toMatch(/I/);
	})

	const shoppingLists =['fatoni'];
	it("array",()=>{
		expect(shoppingLists).toContain("fatoni");
	})
	
	function compileAndroidCode(){
		throw new Error("you are using the wrong JDK");
	}

	it("compiling as expected",()=>{
		expect(()=> compileAndroidCode()).toThrow(
			"you are using the wrong JDK"
		);
	})
});




