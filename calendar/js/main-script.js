$(document).ready(function() {
	$('.form__text').datepicker( {
		firstDay: 1,
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		dateFormat: "dd.mm.yy",
		showOtherMonths: true,
		selectOtherMonths: true,
	});
	
});