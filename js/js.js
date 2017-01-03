window.onload=function () {
			var oBm = document.getElementById('bm')
			var oBl = document.getElementById('bl')
			var oBtn1 = document.getElementById('btn1')
			var oBtn2 = document.getElementById('btn2')
			var oText = document.getElementById('txt')
			oBl.onclick = function () {

				oBl.className = 'active'
				oBm.className = ''
			}
			oBm.onclick = function () {
				oBm.className = 'active'
				oBl.className = ''
			}

			oBtn1.onclick = function () {
				if (oText.value > 1) 
					{oText.value = oText.value - 1;} 
				
			}
			oBtn2.onclick = function () {
				oText.value = parseInt(oText.value) + 1;
			}


			var oBg = document.getElementById('bg')
			var oBox = document.getElementById('box')
			var oUl = document.getElementsByTagName('ul')
			var aLi = oBox.getElementsByTagName('li')
			var aBtn = oBox.getElementsByTagName('p')
			var aImg = oBg.getElementsByTagName('img')



		for (var i = 0; i < aLi.length; i++) {
			aLi[i].index = i;
			aLi[i].onclick = function () {
				for (var i = 0; i < aLi.length; i++) {
					aLi[i].className = ''
					aImg[i].style.display = 'none';
				}
				this.className = 'active01'
				aImg[this.index].style.display = 'block';
			}
		}
		
}

		