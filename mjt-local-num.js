/**	
* Angularjs filter for Local (Hindu Arabic) Number system
* @auther MJT
* @version 1.0.0
*/
(function () {
	angular.module('mjtLocalNum',[])
	.filter('localnum',LocalNum);

	LocalNum.$inject = ['$filter'];
	function LocalNum($filter) {
		return function (data) {
			if (!data) return;
			console.log(data);
			var num;
			if (typeof data == 'string') {
				console.log("data is string ",data);
				num = parseInt(data);
				// return data;
			} else {
				num = data;
			}

			if (isNaN(num)) return "NaN";

			var textNum = "";
			var count = 0;
			while ( num > 0) {
				if (count==0) {
					textNum = zeros(num%1000,3)+textNum;
					num = Math.floor(num/1000);
					count++;
				} else {
					var mod = num%100
					num = Math.floor(num/100);

					if (num > 0) {
						textNum = zeros(mod,2)+","+textNum;
					} else {
						textNum = mod+","+textNum;
					}
				}
			}

			return textNum;

			function zeros (num,pos) {
				var len = num.toString().length;
				var counter = pos-len;
				console.log("length",len,pos);
				var zero = "";
				for (var i = 0; i < counter; i++) {
					zero+="0";
				}
				return zero+num;
			}


			
		}
	}
})()