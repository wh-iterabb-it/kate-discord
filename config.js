require('dotenv').config();

const config = {
	"app": {
		"name": "Kate",
		"custom": {
			"name": "Kate Bot",
			"website": "https://katelibby.chat"
		}
	},
	"clientId": process.env.KATE_CLIENT_ID,
	"guildList": process.env.KATE_LIST.split(",").map((x) => x.trim()),
	"token": process.env.KATE_TOKEN
};

modules.export.default = config;