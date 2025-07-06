// let Btn = document.getElementById('addTask');
// let input = document.getElementById('inputBox');
// let container = document.querySelector('TaskList') ;

// Btn.addEventListener("click", function () {
//     let inputText = input.value.trim() ;

//     let newTask = document.createElement('div');
//     newTask.innerHTML = `
//         <span> `${ input.Text } `</span>
//         <button class="complete-btn"><i class="fa-solid fa-square-check"></i></button>
//         <button class="delete-btn"><i class="fa-solid fa-dumpster"></i></button>
//      `;

//      container.appendChild(newTask);
//      input.value = "" ; // empty the bar 

//      let deleteBtn = document.querySelector('.fa-dumpster') ;
//      let checkBtn = document.querySelector('.fa-square-check') ;
    
//      deleteBtn.addEventListener("click", function(){
//         newTask.remove() ;
//      }) 

//      checkBtn.addEventListener("click", function(){
//         let Text = document.querySelector('span') ;
//         Text.style.textDecoration = "line-through" ;
//      })
// })