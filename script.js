 var names=["Yaakov","John","Jen","Jason","paul","Frank","larry","Paula","Laura","Jim"];
 for(var name in names){
 	 var word=(names[name]).charAt(0).toLowerCase();
 	 // console.log(word)
 	 if(word==="j"){
 	 	saybye(names[name]);
 	 }
 	 else{
 	 	sayhello(names[name]);
 	 }
 }
