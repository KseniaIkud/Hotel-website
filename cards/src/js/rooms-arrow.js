const rooms = document.querySelectorAll('.room-card');
rooms.forEach(room=> {
    room.addEventListener('click', 
    function() {
        let arrows = this.querySelector('.room-card__arrows');
        arrows.classList.toggle('hidden');
    })
} );