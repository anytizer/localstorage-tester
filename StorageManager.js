var StorageManager = {
	"save": function(item, value)
	{
		localStorage.setItem(item, value);
	},

	"read": function(item)
	{
		return localStorage.getItem(item);
	},

	"remove": function(item)
	{
		localStorage.removeItem(item);
	},
};
