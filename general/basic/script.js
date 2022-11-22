function setUpEvents(){
	a = 0
	b = a++
	console.log(a);
	console.log(b);	

	a = 0
	b = ++a
	console.log(a);
	console.log(b);	
	// The idea is that ++a increments a and returns that value, while a++ returns a's value and then increments a.

	i=0;
	while(++i < 10) console.log(i);

	for(i=0;i<10;i++){
		if(i==2){
			continue
		} else if(i==4){
			break
		}
		console.log(i)
	}

	(function() {  
	    console.log('Hello');  
	}());

	class1 = document.getElementsByClassName("class1")[0];
	class1.innerHTML="test1"
	id1 = document.getElementById("id1");
	id1.textContent="test2"
	id1.setAttribute("class","class1");
	id1.style.backgroundColor="blue";


	var body = document.getElementsByTagName("body")[0]
	var newUl = document.createElement("ul");
	var newLi = document.createElement("li");
	newLi.innerHTML = "test"
	newUl.appendChild(newLi)
	class1.appendChild(newUl);
	body.insertBefore(newLi,id1)
	body.removeChild(newLi)

	id1.onclick=(async()=>{
		id1.classList.add("full")
		 await new Promise(resolve => setTimeout(resolve, 1000));
		id1.classList.remove("full")
	})


	var message =document.getElementById("message");
	function showMessage(){
		message.className = "show";
		changeBackground(0);
	}
	function changeBackground(i){
		let colours = ["red","blue"];
		message.style.backgroundColor = colours[i++]
		if(i == colours.length){
			i=0
		}
		setTimeout(changeBackground,3000, i)
	}
	// var myTimer = setInterval(changeColour,1000)
	// colourChanger.onclick = (()=>{
	// 	clearInterval(myTimer)
	// 	colourChanger.innerHTML = "Timer stopped";
	// })
	setTimeout(showMessage,3000)

	// class User{
// 	constructor(email, name){
// 		this.email = email;
// 		this.name = name;
// 	}
// }

class MyClass {
	// class constructor, equivalent to
	// the function body of a constructor
	constructor(item) {
	  const privateVariable = 'private value'; // Private variable at the constructor scope
	  this.publicVariable = item; // Public property
  
	  this.privilegedMethod = function() {
		// Public Method with access to the constructor scope variables
		console.log(privateVariable);
	  };
	}
  
	// Prototype methods:
	publicMethod() {
	  console.log(this.publicVariable);
	  return this
	}
  
	publicMethod1() {
	  console.log(this.publicVariable);
	  return this
	}
  
	// Static properties shared by all instances
	static staticProperty = 'static value';
  
	static staticMethod() {
	  console.log(this.staticProperty);
	}
  }
  
  // We can add properties to the class prototype
  MyClass.prototype.additionalMethod = function() {
	console.log(this.publicVariable);
  };
  
  var myInstance = new MyClass(1);
  myInstance.publicMethod().publicMethod1();       // "public value"
  myInstance.additionalMethod(); // "public value"
  myInstance.privilegedMethod(); // "private value"
  MyClass.staticMethod();  
  
  class User {
	  constructor(email, name){
		  this.email = email;
		  this.name = name;
		  this.score = 0;
	  }
	  login(){
		  console.log(this.email, 'just logged in');
		  return this;
	  }
	  logout(){
		  console.log(this.email, 'just logged out');
		  return this;
	  }
	  updateScore(){
		  this.score++;
		  console.log(this.email, 'score is now', this.score);
		  return this;
	  }
  }
  
  class Admin extends User {
	  deleteUser(user){
		  users = users.filter(u => {
			  return u.email != user.email
		  });
	  }
  }
  
  var userOne = new User('ryu@ninjas.com', 'Ryu');
  var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
  var admin = new Admin('shaun@ninjas.com', 'Shaun');
  
  var users = [userOne, userTwo, admin];
  
  // admin.deleteUser(userTwo);
  // userTwo.deleteUser(userOne); // won't work
  
  console.log(users);
  
  // function User(email, name){
  //     this.email = email;
  //     this.name = name;
  //     this.online = false;
  // }
  
  // User.prototype.login = function(){
  //     this.online = true;
  //     console.log(this.email, 'has logged in');
  // };
  
  // User.prototype.logout = function(){
  //     this.online = false;
  //     console.log(this.email, 'has logged out');
  // };
  
  // function Admin(...args){
  //     User.apply(this, args);
  // }
  
  // Admin.prototype = Object.create(User.prototype);
  
  // Admin.prototype.deleteUser = function(u){
  //     users = users.filter(user => {
  //         return user.email != u.email;
  //     });
  // };
  
  var userOne = new User('ryu@ninjas.com', 'Ryu');
  var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
  var admin = new Admin('shaun@ninjas.com', 'Shaun');
  
  var users = [userOne, userTwo, admin];
  
  var div = document.querySelectorAll('div');
  Array.from(div).forEach((item)=>{
	console.log(item.nodeType)
	console.log(item.nodeName)
	console.log(item.hasChildNodes())
	console.log(item.parentNode)
	console.log(item.parentElement.parentElement)
	console.log(item.childNodes)
	console.log(item.children)
  })
  var message = document.querySelector('#message')
  console.log(message.nextSibling)
  console.log(message.nextElementSibling)
  console.log(message.previousSibling)
  console.log(message.previousElementSibling)

  class1 = document.querySelector('.class1')
  class1.addEventListener('click',((e)=>{
	// console.log(e.target)
	console.log(e)
  }));
}

// asychronous = ((resource, callback)=>{
// 	const request = new XMLHttpRequest();
// 	request.addEventListener('readystatechange',(()=>{
// 		if(request.readyState === 4 && request.status === 200){
// 			const data = JSON.parse(request.responseText)
// 			callback(undefined, data);
// 		} else {
// 			callback('couldnt get data', request.responseText)
// 		}
// 	}))
// 	request.open('GET', resource);
// 	request.send();
// })

asychronous = ((resource)=>{
	return new Promise((resolve,reject)=>{
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange',(()=>{
			if(request.readyState === 4 && request.status === 200){
				const data = JSON.parse(request.responseText)
				resolve(data)
			} else if(request.readyState === 4) {
				reject(request.status)
			}
		}))
		request.open('GET', resource);
		request.send();
	})
})

window.onload =(async()=>{
	let form = document.forms.myForm;
	form.name.onfocus =(()=>{
		form.name.style.border = "4px solid pink"
	})
	form.onsubmit = ((e)=>{
		e.preventDefault();
		if(form.name.value ==""){
			id1.innerHTML = "empty"
		}
	})
	setUpEvents();

	// asychronous('https://jsonplaceholder.typicode.com/todos', (err, data)=>{
	// 	console.log(err,data)
	// });

	// asychronous('todos.json').then((data)=>{
	// 	console.log(data)
	// 	return asychronous('todos.json');
	// }).then((data)=>{
	// 	console.log(data)
	// 	return asychronous('todos.json');
	// }).then((data)=>{
	// 	console.log(data)
	// 	return asychronous('todos.json');
	// }).catch((e)=>{console.log(e)});

	// fetch('todos.json').then((response)=>{
	// 	// console.log(response.json())
	// 	return(response.json())
	// }).then(data=>{
	// 	console.log(data)
	// }).catch((err)=>{
	// 	console.log(err)
	// })

	const getTodos = async()=>{
		const response = await fetch('todos.json');
		const data = await response.json();
		if(response.status !== 200){
			throw new Error('cannot fetch data')
		}
		return data;
	}

	// getTodos().then(response=>{
	// 	console.log(response)
	// })
	getTodos()
	.then(data=>console.log('resolved:',data))
})

