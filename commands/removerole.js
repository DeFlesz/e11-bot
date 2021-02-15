module.exports = {
	name: 'remove-role',
	description: 'Usuwa ci wybraną rolę związaną z tym botem (nie usuwa roli typu admin, mod itd.), by użyć: {prefix}remove-role {role-name}',
	execute(msg, args, serverRoles) {
        if (!args.length) {
            return msg.channel.send(`Nie podałeś argumentów!`);
        }

		if(serverRoles[args]){
            msg.member.roles.remove([serverRoles[args]]);
            return msg.channel.send(`Usunąłeś sobie rolę "${args[0]}"!`)

        } else{
            return msg.channel.send(`Taka rola nie istnieje, bądź nie jest dostępna!`);
        }
	},
};