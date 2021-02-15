const fs = require('fs')
module.exports = {
	name: 'clear-roles',
	description: 'Usuwa ci wszystkie role związane z tym botem (nie usuwa roli typu admin, mod itd.), by użyć: {prefix}clear-roles',
	execute(msg) {
        //extremly hacky its the only way cause there seems to be bug which causes empty arrays if i try to assign values with serverRoles
        var data = fs.readFileSync(`./roles.json`);
        var iterator = JSON.parse(data);
        var newIterator = Object.values(iterator);

        //i feel pain 0_0
        for (const key of newIterator){
            //console.log(key);
            if (msg.member.roles.cache.get(key)){
                msg.member.roles.remove(key);
            }
        }
        
        return msg.channel.send(`Wyczyściłeś sobie wszystkie role związane z grami.`);

	},
};