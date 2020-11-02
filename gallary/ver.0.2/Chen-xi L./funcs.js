function check(num)
{
	if(num==1)
	{	
		ans = document.getElementById("ans1").value
		if(!ans.localeCompare("1997/01/16"))
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
		if(!ans.localeCompare("AIR"))
		{
			made(2)
			document.getElementById("q3").innerHTML="Happy Birthday! (though a little late)"

		}
	}
}
function made(num)
{
	if(num==1)
	{
		document.getElementById("stars").style.display="block"
		document.getElementById("item1").style.display="block"
		document.getElementById("item2").style.display="block"
		document.getElementById("name").innerHTML="引风的大弓<br><绝品>"
		document.getElementById("name").style.color="#C15AEA"
		document.getElementById("elem4").innerHTML="▹ 重量: <重剑级><br>▹ 攻击力: 579<en> +128</en><br>▹ 攻击速度: 448 <en>+50</en><br>▹ 攻击范围: 432 <en>+52</en></p>	"
		document.getElementById("descript").innerHTML="一把能将注入弓弦的魔力拟态成利箭射出的魔法弓。风象的猎人光是握着这把弓就可以感知到周围的风声和魔力流动，集中精神汇聚魔力射出的一箭甚至可以攻破城墙。"
	}
	if(num==2)
	{
		document.getElementById("name").className = "shining"
		document.getElementById("name").style.color="#FF7800"
		document.getElementById("item3").style.display="block"
		document.getElementById("item4").style.display="block"
		document.getElementById("name").innerHTML="<b>黎明晨曦·巨鸟席兹</b><br><传奇>"
		document.getElementById("elem4").innerHTML="▹ 重量: <重剑级><br>▹ 攻击力: 609<en> +128</en><br>▹ 攻击速度: 548 <en>+50</en><br>▹ 攻击范围: 572 <en>+52</en></p>	"
		document.getElementById("curve").innerHTML="吾、为星辰、为茫月、为苍穹、为自由之风"
		document.getElementById("item1").innerHTML="☍ <b>风语·贰</b>: 攻击造成130%的魔法伤害；收到伤害的敌方有50%的概率收到一次100%的物理伤害"	
		document.getElementById("descript").innerHTML="传说是由魔兽·巨鸟希兹化作的威力无比的魔法弓。将它握在手里的时候自己就像化作了风神一般，可以肆意的将周围的风化作巨斧、大剑、重锤等武器、狂风暴雨般地袭向敌人。据说达到“天神一心”境界的猎人可以用这把弓射出星辰，贯穿黑夜、划破黎明。"
	}
}


