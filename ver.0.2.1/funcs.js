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


function show(level)
{
	var frame_list = get_list()
	for(var i = 0; i <= frame_list.length - 1; i++) 
	{
		// console.log(frame_list[i])
		// console.log(read(data,frame_list,i))

		read_data = eval('data['+String(level)+'].'+frame_list[i])
		document.getElementById(frame_list[i]).innerHTML = read_data.text
		document.getElementById(frame_list[i]).style.display = read_data.display
		document.getElementById(frame_list[i]).style.color = read_data.color
		document.getElementById(frame_list[i]).className = read_data.special

		// console.log(document.getElementById(frame_list[i]))
	}

}