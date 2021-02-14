const Discord = require('discord.js');
const config = require('../config.json')
module.exports = {
	name: 'help',
	description: 'wyświetla wszystkie komendy',
	execute(msg) {
        const exampleEmbed = new Discord.MessageEmbed()
        	.setColor('#0099ff')
        	.setTitle('Pomoc')
        	.setDescription('Oto twoja pomoc')
        	.addFields(
        		{ name: 'set-role', value: 'Ustawia ci wybraną rolę związaną z tym botem, by użyć: {prefix}set-role {role-name}' },
                { name: 'remove-role', value: 'Usuwa ci wybraną rolę związaną z tym botem (nie usuwa roli typu admin, mod itd.), by użyć: {prefix}remove-role {role-name}' },
                { name: 'add-role', value: 'Dodaje role do pliku roles.json (tylko dla admina/moderatora), by użyć: {prefix}add-role {role-name} {role-id}' },
                { name: 'clear-roles', value: 'Usuwa ci wszystkie role związane z tym botem (nie usuwa roli typu admin, mod itd.), by użyć: {prefix}clear-roles' },
                { name: 'help', value: 'wyświetla wszystkie komendy' },
                { name: 'prefix', value: `aktualnie ustawiony prefix to ${config.prefix}` },
        	)
        msg.author.send(exampleEmbed);
    }
};