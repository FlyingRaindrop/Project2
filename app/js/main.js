var Module = (function(){

	var _insertValues = function($this){
		var containerLower = $this.siblings('.accordion__item_lower-price'),
				containerUpper = $this.siblings('.accordion__item_upper-price'),
				from = containerLower.find('#lowerPrice'),
				to = containerUpper.find('#upperPrice');
				var values =$this.slider('option', 'values');
				from.val(values[0]);
				to.val(values[1]);
	}

//==========Select=============
	var _select = function(){
		$('.select__toggle').toggle(
			function(e){
				e.preventDefault();
				var selectList = $('.select__list');
				selectList.show();
				$('.select__toggle').addClass('select__toggle2');
				var selectItem = $('.select__item');
	      for(var i=0; i<selectItem.length; i++){
	      	$(selectItem[i]).on('click', function(e){
	        	var textList = $(this).text();
	        		$('.select__name').html(textList);
	        });
				}
			},
			function(e){
				e.preventDefault();
				var selectList = $('.select__list');
				selectList.hide();
				$('.select__toggle').removeClass('select__toggle2');
			}
		);
	};
//==========End Select=============

//===========Accordion=============
	var _accordion = function(){
		$('.sidebar__name').toggle(
			function(e){
				var contentAccor = $('.sidebar__content');
				e.preventDefault();
				$(e.target).next(contentAccor).hide();
				$(e.target).addClass('sidebar__name2');
			},
			function(e){
				e.preventDefault();
				var contentAccor = $('.sidebar__content');
				$(e.target).next(contentAccor).show();
				$(e.target).removeClass('sidebar__name2');
			}
		);
	};
//===========End Accordion==========

// ==========Сhange of products display ========
	var _view = function(){
		var table = $('.catalog-view__link_table'),
				grid = $('.catalog-view__link_grid'),
				list = $('.catalog-view__link_list'),
				products = $('.products'),
				productsGrid = 'products_grid',
				productsList = 'products_list-view';

		table.on('click', function(e){
			e.preventDefault();
			table.addClass('table');
			grid.removeClass('grid');
			list.removeClass('list');
			products.removeClass(productsGrid);
			products.removeClass(productsList);
		});
		grid.on('click', function(e){
			e.preventDefault();
			grid.addClass('grid');
			table.removeClass('table');
			list.removeClass('list');
			products.removeClass(productsList);
			products.addClass(productsGrid);
		});
		list.on('click', function(e){
			e.preventDefault();
			list.addClass('list');
			table.removeClass('table');
			grid.removeClass('grid');
			products.removeClass(productsGrid);
			products.addClass(productsList);
		});
	};
// ==========End of change of products display ========

//============Slide show=============
	var _slideShow = function(){
		$('.products__small-image').on('click', function(e){
			e.preventDefault();
			var $this = $(this);
			var small = $('.products__small-image');
			for(var i=0; i<small.length; i++){
				if(small!=$this){
					$('.products__small-image').closest('.image__item').removeClass('productsHover');
				}
			}
			var smallImgAttr = $this.attr('src');
			var bigImage = $this.closest('.products__image').find('.products__main-image');
			bigImage.attr('src', smallImgAttr);
			$this.closest('.image__item').addClass('productsHover');
		});
	};
//============End of slide show===========

//===========Checkboxes reset=============
	var _checkboxesReset = function(){
		$('.accordion__reset').on('click', function(e){
			e.preventDefault();
			$(this).closest('.accordion__list').find('input:checkbox').removeAttr('checked');
		});
	};
//==========End of checkboxes reset=======

	return{
		init: function() {
			$( "#slider" ).each(function(){
			var $this = $(this),
					min = parseInt($this.data('min')),
					max = parseInt($this.data('max'));
				 $( "#slider" ).slider({
			    	range: true,
			    	min: min,
			    	max: max,
			    	values: [min, max],
			    	slide: function(){
			    		_insertValues($this);
			    		console.log("hello2");
			    	},
			    	create: function(){
			    		_insertValues($this);
			    	}
   	 			});
			});		
		_select();
		_accordion();
		_view();
		_slideShow();
		_checkboxesReset();
		}
	}
}());

$(document).ready(function(){
		Module.init();
});


