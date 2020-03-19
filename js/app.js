var valueSpan, slider;
	$(function() {
		slider = $("#slider");
		valueSpan = $("#span");
		// 方法子啊api中查找
		slider.slider({
			slide: function(event, ui) {
				valueSpan.text(slider.slider("option", "value"));
			}
		});
	});
