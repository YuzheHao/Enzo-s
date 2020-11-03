function get_list()
{
	var arr = new Array(0)
	var usernameEle = document.getElementById("present");
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

function test()
{
	console.log(data.Jia_W)
}

function level_code_parser(code)
{
	if (code==0) {return "level_0"}
	if (code==1) {return "level_en"}
	if (code==2) {return "level_max"}
}



function show(level)
{
	var frame_list = get_list()
	for(var i = 0; i <= frame_list.length - 1; i++) 
	{
		// console.log(frame_list[i])
		// console.log(read(data,frame_list,i))

		read_data = eval('gallery.Jia_W.'+level_code_parser(level)+'.'+frame_list[i])
		document.getElementById(frame_list[i]).innerHTML = read_data.text
		document.getElementById(frame_list[i]).style.display = read_data.display
		document.getElementById(frame_list[i]).style.color = read_data.color
		document.getElementById(frame_list[i]).className = read_data.special

		// console.log(document.getElementById(frame_list[i]))
	}

}