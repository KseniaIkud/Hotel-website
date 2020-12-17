import './images/expand.svg'

import 'air-datepicker'

const datepicker = $('.js-date__input').datepicker().data('datepicker')
$('.js-date__input').datepicker({
    range: true,
    multipleDatesSeparator: '-',
    minDate: new Date(),
    onSelect: function(fd, d) {
        if (!d) return
        $('.js-date__input').val(fd.split("-")[0]);
        $('.js-date__input_right').val(fd.split("-")[1]);
    },
})
$('.js-date__input_right').on('click', function() {
    datepicker.show()
})


// $('.js-date__input_right').datepicker({
//     range: true,
//     multipleDatesSeparator: '-',
//     onSelect: function(fd, d) {
//         $('.js-date__input').val(fd.split("-")[0]);
//         $('.js-date__input_right').val(fd.split("-")[1]);
//     },
// })