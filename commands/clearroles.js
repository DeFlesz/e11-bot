module.exports = {
	name: 'clear-roles',
	description: 'Usuwa ci wszystkie role związane z tym botem (nie usuwa roli typu admin, mod itd.), by użyć: {prefix}clear-roles',
	execute(msg, serverRoles) {
		for (var key in serverRoles){
            console.log(serverRoles[key])
            msg.member.roles.remove([serverRoles[key]]);
        }
        return msg.channel.send(`Wyczyściłeś sobie wszystkie role związane z grami.`)
	},
};