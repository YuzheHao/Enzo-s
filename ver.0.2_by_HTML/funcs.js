function check(num)
{
	if(num==1)
	{	
		ans = document.getElementById("ans1").value
		if(!ans.localeCompare("1"))
		{
			document.getElementById("present").style.display="block"
			document.getElementById("q2").style.display="block"
		}
	}
	if(num==2)
	{				
		ans = document.getElementById("ans2").value
		if(!ans.localeCompare("1"))
		{
			document.getElementById("q3").style.display="block"
			made(1)
		}
	}
	if(num==3)
	{				
		ans = document.getElementById("ans3").value
		if(!ans.localeCompare("1"))
		{
			made(2)
			document.getElementById("q3").innerHTML="生日快乐呀！"

		}
	}
}

function show(num)
{
	if(num==1)
	{	

		document.getElementById("present").style.display="block"
		document.getElementById("q2").style.display="block"
	}
	if(num==2)
	{				
		document.getElementById("q3").style.display="block"
		made(1)
	}
	if(num==3)
	{				
		made(2)
	}
}

function made(num)
{
	if(num==1)
	{
		document.getElementById("item1").style.display="block"
		document.getElementById("item2").style.display="block"
		document.getElementById("name").innerHTML="墨心·龙扇<br><非凡>"
		document.getElementById("name").style.color="#00DC7C"
		document.getElementById("elem4").innerHTML="▹ 重量: <纸级><br>▹ 攻击力: 330<br>▹ 攻击速度: 480 <br>▹ 攻击范围: 189</p>"
		document.getElementById("descript").innerHTML="一把华美的折扇，光是开合就能感觉到魔力的流动。扇面所绘的水墨山间里藏着几条难以被发现的墨龙，据说可以口唤言灵的才子能召出这些墨龙来为己所用。"
	}
	if(num==2)
	{
		document.getElementById("stars").style.display="block"
		document.getElementById("name").className = "shining"
		document.getElementById("name").style.color= "#DC143C"

		document.getElementById("name").innerHTML="<b>风雨江湖</b><br><魔幻>"

		document.getElementById("type").innerHTML="折扇/<en>幻影剑</en>"	
		document.getElementById("elem4").innerHTML="▹ 重量: <纸级/<en>无物理重量</en>><br>▹ 攻击力: 350/<en>810</en><br>▹ 攻击速度: 510/<en>320</en><br>▹ 攻击范围: 210/<en>130</en></p>"
		document.getElementById("curve").innerHTML="风雨一蓑舟，江湖一飘尘。<br>红颜一缘起，万语一笑逢。"
		document.getElementById("item1").innerHTML="☍ <b>点睛墨龙·贰</b>: 当切换为“折扇”状态时，对自己周围的最多5个第二造成800点瞬间法术伤害；然后在自己的周围召唤三条攻击造成法术伤害的墨龙；每条墨龙拥有540点攻击力，折扇80%的攻击速度和150%的攻击范围，两条并优先攻击自己指向的目标，一条优先攻击离自己最近的目标。</p>"	
		document.getElementById("item2").innerHTML="▸ <b>言灵·惊</b>: 在“折扇”状态下可以使用。眩晕选中的目标8秒，每秒造成480点法术伤害；眩晕结束后对目标施加“破甲”状态，使其受到的物理增加40%。</p>"	
		document.getElementById("descript").innerHTML="一把绘有言灵墨龙的绝美折扇，将它打开时墨龙会伴随着金色的粉尘在现世现身，成为自己的矛和盾。它在强大的信念之下幻化而成的利刃虽然没有实体，但依然能够劈风斩浪、断铁削金。"
	
		document.getElementById("item3").style.display="block"
		document.getElementById("item4").style.display="block"
	}
}


