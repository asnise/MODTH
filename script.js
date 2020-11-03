function cansel_win(idtag ,name,content,img_1,download)
{
	var win_alert = document.getElementById(idtag);
	if (win_alert.style.display === "block")
	{
		win_alert.style.display = "none";
	}
	else
	{
		win_alert.style.display = "block";
	}
		document.getElementById("img_1").src = img_1;
		document.getElementById("title_name").innerHTML = name;
		document.getElementById("content_mod").innerHTML = content;
		document.getElementById("download_bt").href = download;
};



