let Questions = document.querySelectorAll('.item');
// let Answers = document.querySelectorAll('.answer');

for (let i = 0; i < Questions.length; i++) {
    Questions[i].addEventListener("click", function () {
        let Answer = this.querySelector('.answer') ;
        Answer.classList.toggle('active');
        this.classList.toggle('active'); // ✅ add active to .item
    })
}




