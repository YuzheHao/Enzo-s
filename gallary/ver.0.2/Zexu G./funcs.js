function check(num)
{
	if(num==1)
	{	
		ans = document.getElementById("ans1").value
		if(!ans.localeCompare("一样多"))
		{
			document.getElementById("present").style.display="block"
			document.getElementById("q2").style.display="block"
		}
	}
	if(num==2)
	{				
		ans = document.getElementById("ans2").value
		if(!ans.localeCompare("愚者"))
		{
			document.getElementById("q3").style.display="block"
			made(1)
		}
	}
	if(num==3)
	{				
		ans = document.getElementById("ans3").value
		if(!ans.localeCompare("13"))
		{
			made(2)
			document.getElementById("q3").innerHTML="么么生日快乐呀！！！！"

		}
	}
}
function made(num)
{
	if(num==1)
	{
		document.getElementById("item1").style.display="block"
		document.getElementById("item2").style.display="block"
		document.getElementById("name").innerHTML="大贤者的魔法牌<br><绝品>"
		document.getElementById("name").style.color="#C15AEA"
		document.getElementById("elem4").innerHTML="▹ 重量: <纸级><br>▹ 攻击力: 80<br>▹ 攻击速度: 80 <br>▹ 攻击范围: 280</p>"
		document.getElementById("descript").innerHTML="曾经属于某位大贤者的可以窥视命运的魔法牌，据说注入魔力之后会听到还会这些卡片的笑声。在悠长的岁月里，那些试图使用这副卡片预知未来的人多的如同天上的繁星，但其中却没有一人能成为它的主人。"
	}
	if(num==2)
	{
		document.getElementById("stars").style.display="block"
		document.getElementById("name").className = "shining"
		document.getElementById("name").style.color= "#FFD700"

		document.getElementById("name").innerHTML="<b>命运·铜卡</b><br><神铸>"

		document.getElementById("type").innerHTML="魔法书"	
		document.getElementById("elem4").innerHTML="▹ 重量: <纸级><br>▹ 攻击力: 80 <en> +80</en><br>▹ 攻击速度: 80 <en>+40</en><br>▹ 攻击范围: 280 <en>+40</en></p>"
		document.getElementById("curve").innerHTML="太多的人只是渴求一个现成的答案，他们只会成为命运的代价，而不会成为命运的主人。<br> ——— Zex. G."
		document.getElementById("item1").innerHTML="☍ <b>心眼·贰</b>: 进一步增加攻击速度；攻击造成攻击力450%的法术伤害。</p>"	
		document.getElementById("item2").innerHTML="▸ <b>灵视·贰</b>: 立即赋予自己一个持续90秒的“灵视”状态，在该状态下以自己为中心半径25m范围内的所有友方单位获得“附灵”状态，会心一击率提升50个百分点，而且每次会心一击会额外积累5个百分点的会心一击率，积累上限为120%；每次非会心一击会使“附灵”恢复到最初的状态。"	
		document.getElementById("descript").innerHTML="拥有始源巨人之名“铜卡”的命运之牌，蕴藏着世界的秘密的同时它们也能被用来搅动空间、撕开魔法裂缝。向每张牌注入正确波动的魔力后，寄宿于牌中的幻灵会现身解答关于命运的谜题。但是“命运”又是什么呢？这也是每个幻灵希望使用者回答的问题。"
	
		document.getElementById("item3").style.display="block"
		document.getElementById("item4").style.display="block"
	}
}


