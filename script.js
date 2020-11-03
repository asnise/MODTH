function cansel_win(idtag ,download)
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
};