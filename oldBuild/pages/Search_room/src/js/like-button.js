let likes = document.querySelectorAll('.like-button');
for (let like of likes) {
    like.onclick = function () {
        const count = this.querySelector('.like-button__counter');
        this.classList.toggle('like-button__active');
        this.classList.contains("like-button__active") ? count.value++ : count.value--
    }
}