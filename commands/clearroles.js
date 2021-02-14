module.exports = {
	name: 'clear-roles',
	description: 'Usuwa ci wszystkie role związane z tym botem (nie usuwa roli typu admin, mod itd.), by użyć: {prefix}clear-roles',
	execute(msg, serverRoles) {
        serverRoles.forEach(key => {
            msg.member.roles.remove([serverRoles[key]]);
            console.log(serverRoles[ket]);
        });
        return msg.channel.send(`Wyczyściłeś sobie wszystkie role związane z grami.`);
	},
};