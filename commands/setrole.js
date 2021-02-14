module.exports = {
	name: 'set-role',
	description: 'Ustawia ci wybraną rolę związaną z tym botem, by użyć: {prefix}set-role {role-name}',
	execute(msg, args, serverRoles) {
        if (!args.length) {
            return msg.channel.send(`Nie podałeś argumentów!`);
        }

		if(serverRoles[args]){
            msg.member.roles.add([serverRoles[args]]);

        } else{
            return msg.channel.send(`Taka rola nie istnieje, bądź nie jest dostępna!`);
        }
	},
};