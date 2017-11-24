function save()
{
	StorageManager.save("id", "0000-00-00");
	read();
}

function remove()
{
	StorageManager.remove("id");
	read();
}

function read()
{
	var item = StorageManager.read("id");
	document.getElementById("id").innerHTML = item;
};

read();