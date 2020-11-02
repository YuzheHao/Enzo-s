function check(num)
{
	if(num==1)
	{	
		ans = document.getElementById("ans1").value
		if(!ans.localeCompare("1997/01/19"))
		{
			document.getElementById("present").style.display="block"
			document.getElementById("q2").style.display="block"
		}
	}
	if(num==2)
	{				
		ans = document.getElementById("ans2").value
		if(!ans.localeCompare("一样多"))
		{
			document.getElementById("q3").style.display="block"
			made(1)
		}
	}
	if(num==3)
	{				
		ans = document.getElementById("ans3").value
		if(!ans.localeCompare("ARASHI"))
		{
			made(2)
			document.getElementById("q3").innerHTML="Happy Birthday! (though a little early)"

		}
	}
}
function made(num)
{
	if(num==1)
	{
		document.getElementById("stars").style.display="block"
		document.getElementById("name").innerHTML="唤岚的魔法书<br><非凡>"
		document.getElementById("name").style.color="#00DC7C"
		document.getElementById("elem4").innerHTML="▹ 重量: <纸级><br>▹ 攻击力: 423（法术伤害） <en>+62</en><br>▹ 攻击速度: 96<br>▹ 攻击范围: 412"
		document.getElementById("descript").innerHTML="一本记载了召唤暴风雨的魔法的精美手抄本。与传统的咏唱不同，咒文的书写技巧十分特别，这使得由其召唤而来的暴风雨非但只有极大的物理破坏力，还有着不可忽视的精神冲击力。"
		document.getElementById("item2").style.display="block"
	}
	if(num==2)
	{
		document.getElementById("name").className = "shining";
		document.getElementById("name").innerHTML="礼书·丽娜<br><非凡>"
		document.getElementById("curve").innerHTML="ご誕生日おめでとう〜"
		document.getElementById("descript").innerHTML="一本作为礼物被传递的高贵的精美魔法书，翻页的时候会在空间划出颜色奇幻的星尘。书的前半部分写满了包括唤岚术在内的各式华丽咒文，但后半部分却是意味深长的留白。让人不禁期待受礼者会在上面书写什么样的内容。"
		document.getElementById("item1").style.display="block"
		document.getElementById("item2").innerHTML="▸ <b class='shining'>岚</b>: 在以自己为中心的面积为46,755平方米的范围内召唤一场持续三个小时的暴风雨，对范围内的最多57,000个目标造成30%的法术伤害，并赋予“狂热”印记；当一个目标的“狂热”印记持续2小时以上时，该印记将转化为“追随”，自己随即获得拥有该印记的单位的指挥权</p>"
	}
}


