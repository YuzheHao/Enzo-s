function get_list(name)
{
	var arr = new Array(0)
	var usernameEle = document.getElementById(name);
	var childs = usernameEle.childNodes;    
	for(var i = 0; i <= childs.length - 1; i++) 
	{
		if(childs[i].id != undefined)
		{
	 		arr.push(childs[i].id);
		}
	}  
	// console.log(arr)
	return arr
}


function level_code_parser(code)
{
	if (code==0) {return "level_0"}
	if (code==1) {return "level_en"}
	if (code==2) {return "level_max"}
}

function show_button(target)
{
	document.getElementById("status_list").style.display="block"
	document.getElementById('button_0').disabled=''
	document.getElementById('button_1').disabled='true'
	document.getElementById('button_2').disabled='true'
	document.getElementById("present").style.display='none'
	return target
}

function show(target,level)
{
	document.getElementById("present").style.display='block'
	if(level==0){document.getElementById('button_1').disabled=''}
	if(level==1){document.getElementById('button_2').disabled=''}

	var frame_list = get_list("present")
	for(var i = 0; i <= frame_list.length - 1; i++) 
	{
		// console.log(frame_list[i])
		// console.log(read(data,frame_list,i))
		read_data = eval('gallery.'+target+'.'+level_code_parser(level)+'.'+frame_list[i])
		if(read_data==undefined){
			document.getElementById(frame_list[i]).style.display = "none"
		}
		else{
			if(read_data.text!=undefined){document.getElementById(frame_list[i]).innerHTML = read_data.text}
			if(read_data.display!=undefined){document.getElementById(frame_list[i]).style.display = read_data.display}
			if(read_data.color!=undefined){document.getElementById(frame_list[i]).style.color = read_data.color}
			if(read_data.special!=undefined){document.getElementById(frame_list[i]).className = read_data.special}
		}
		// console.log(document.getElementById(frame_list[i]))
	}

}