import './images/expand.svg'

import 'air-datepicker'


$('.js-date__input').datepicker({
    range: true,
    multipleDatesSeparator: '-',
    onSelect: function(fd, d) {
        if (!d) return
        $('.js-date__input').val(fd.split("-")[0]);
        $('.js-date__input_right').val(fd.split("-")[1]);
    },
})

$('.js-date__input_right').datepicker({
    range: true,
    multipleDatesSeparator: '-',
    onSelect: function(fd, d) {
        $('.js-date__input').val(fd.split("-")[0]);
        $('.js-date__input_right').val(fd.split("-")[1]);
    },
})