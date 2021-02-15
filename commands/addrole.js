var fs = require('fs'); 
module.exports = {
	name: 'add-role',
	description: 'Dodaje role do pliku roles.json (tylko dla admina/moderatora), by użyć: {prefix}add-role {role-name} {role-id}',
	execute(msg, args, serverRoles) {
		if (args.length < 2) {
	    	return msg.channel.send(`Nie podałeś wystarczająco argumentów!`);
        } else if (!args.length) {
            return msg.channel.send(`Nie podałeś argumentów!`);
        }
        if(serverRoles[args[0]]){
            return msg.channel.send(`Rola o nazwie "${args[0]}" już istnieje!`);
        }

        const role_name = args[0];
        const role_id = args[1];
        
        serverRoles[role_name] = role_id;

        var dictString = JSON.stringify(serverRoles, null, 2);
        fs.writeFile("roles.json", dictString, function(err, result) {
            if(err) console.log('error', err);
        });

        console.log(serverRoles);
        
        return msg.channel.send(`Rola ${args[0]} została dodana do puli ról`)
	},
};