$(document).ready(function() {
	$('.datepicker').datepicker( {
		firstDay: 1,
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		dateFormat: "dd.mm.yy",
		showOtherMonths: true,
		selectOtherMonths: true,
		showOn: "both",
		buttonImage: "../img/arrow.svg",
		buttonImageOnly: true,
		onSelect: function() {
			$(this).datepicker("refresh");
			datepicker("show");

		}
	});
	
});