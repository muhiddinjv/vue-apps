var vue = new Vue({
    el: '#app',
    data: { 
      previous:null,
      current:'',
      operator: null,
      operatorClicked:false,
     },
     methods: {
       clear() {
         this.current = '';
       },
       sign(){
         // New ES6 Ternary operator ----------------
         this.current = this.current.charAt(0) === '-' ?
         this.current.slice(1) : (this.current == 0 ? 
          this.current = 0 : `-${this.current}`); 

        // Good old if-else statement ----------------
        //  if (this.current.charAt(0) === '-'){
        //    this.current = this.current.slice(1);
        //  } else if (this.current == 0) {
        //     this.current = 0;
        //  } else {
        //    this.current = `-${this.current}`;
        //  }
       },
       percent(){
         this.current = `${parseFloat(this.current)/100}`
       },
       append(num){
         if (this.operatorClicked){
           this.current = '';
           this.operatorClicked = false;
          }
          this.current = `${this.current}${num}`;
       },
       dot(){
        if (this.current.indexOf('.') === -1){
          this.append('.');
        }
       },
       setPrevious(){
        this.previous = this.current;
        this.operatorClicked = true;
       },
       plus(){
         this.operator = (a, b) => a + b;
         this.setPrevious();
       },
       minus(){
         this.operator = (a, b) => a - b;
         this.setPrevious();
       },
       divide(){
         this.operator = (a, b) => a / b;
         this.setPrevious();
       },
       times(){
         this.operator = (a, b) => a * b;
         this.setPrevious();
       },
       equal(){
          if (this.current == "NaN"){
            this.previous = null;
          } else {
            this.current = `${this.operator(
              parseFloat(this.current),
              parseFloat(this.previous)
              )}`;
          }
       },
     }
  })

