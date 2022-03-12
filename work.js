const Mentorship = require('../../storage/mentorship.json'); 
const fs = require('fs');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'modify',
    description: "Mentorship questions command.",
    async run(client, message, args, Discord){

        // Create a constant variable that represents the ID of the guild where the message was sent in.
        // Constant name: sentIn
        // Line 13
        const sentIn = message.guild.id

        // Create an 'if' conditional statement which stops the command from running if the guild id isn't equal to 'x'.
        // Line 17
        if(sentIN != '') return;

        // Create two separate constant variables that will check whether the user has the role id or not.
        // Constant names: Mentor, Shadow
        // Lines 22-23
        const Shadow = message.members.role.chache.has("")
        const Mentor = message.members.role.chache.has("")

        // Create a constant variable that represents the command's syntax.
        // Constant name: syntax
        // Line 28
        const syntax = "/modify [Category] [SessionNumber] [QuestionNumber]"

        // Create three separate constant variables that will represent the user arguments input. These must be in the following order, with the respective names:
        // category, SN, QN
        // Lines 33-35
        const category = args[0]
        const SN = args[1]
        const QN = args[2]

        // Create an 'if' conditional statement that will stop the command from running if the 'category' isn't equal to "questions" & "answers".
        // Send a message in the channel stating "x".
        // Line 40
        if(category !== QN && SN) message.channel.send("x");
        // Create an 'if' conditional statement that will stop the command from running if the user did not input an argument for "SN".
        //Send a message in the channel stating "x". Delete the message the bot sends after 10 seconds, and delete the message the user sent as well. Lines 43 - 44
        if(!args[1]) message.channel.send("x")
        message.delete(10000)

        //Repeat what you did above 1 but for QN
        // Lines 49-50
        if(!args[2]) message.channel.send("x")
        message.delete(10000)


        // Create a constant variable that will represent the route for the 'mentorship.json' file, along with the "SN" value the user inputted.
        // Constant name: session
        // Line 59
        const { s1, s2, s3, s4} = require('../../storage/mentorship.json'); 



        // Create an 'if' conditional statement that will stop the command from running if the "SN" the user inputted is not found within the .json storage.
        // Send a message in the channel stating "x".
        // Delete the message the bot sends after 10 seconds, and delete the message the user sent as well.
        // Lines 61-62
        if(SN == undefined) message.channel.send("x")


        // Create a constant variable that will represent the user's input after the first 3 arguments.
        // This constant variable will need to provide the entire input after the first 3 arguments made previously, instead of the first value only.
        // Constant name: newValue
        // Line 72
        const newValue = 

        // Create a constant variable that will represent the route we are choosing within the 'mentorship.json' file.
        // Example: Mentorship.s1.questions.1 - You must replace these values with the proper constant variables you created previously.
        // You will be using 3 constant variables within the route specification.
        // Constant name: previous
        // Line 79


        // Create a new constant variable using the exact same fields you used in line 75.
        // You must set the question/answer we specified to equal (=) "newValue".
        // Contant name: update
        // NOTE: Constant variables do not run automatically, they need to be triggered by a call. Which is why you will use 'await' menthod to toggle the action you are calling.
        // Line 86


        // Create a new constant variable that will use the json 'stringify' menthod on our 'mentorship.json' file.
        // Constant name = updatedInfo
        // Line 91


        // Create an 'fs' writefile function to modify our 'mentorship.json' file and implement the "updatedInfo".
        // The file directory is the following: './storage/mentorship.json'
        // You may refer to this post for more information regarding variable placements within 'fs':
        // https://stackoverflow.com/questions/65046895/typeerror-err-invalid-callback-callback-must-be-a-function-received-undefine
        // Line 98



        // Implement the proper constant variables in the fields.
        // Lines 107-111
        const confirmation = new MessageEmbed()
        .setTitle('Field Modification')
        .setDescription('A value has been changed witin the mentorship folder.')
        .addFields(
            {name: 'Session', value: `${SN}`, inline: true},
            {name: 'Content Number', value: `${a}`, inline: true},
            {name: 'Category', value: `${category}`, inline: true},
            {name: 'Previous Value', value: `${a}`},
            {name: 'New Value', value: `${a}`}
        )
        .setFooter(`Value modified by ${message.author.tag}`)

        // Create a constant variable that will fetch the cache of a guild channel by its name.
        // Line 117


        // Create an 'if' conditional statement that will let the command run if the user has either the 'Mentor' or 'Shadow' role.
        // Delete the user's message.
        // Send the 'confirmation' embed to the channel you have created in line 113.
        // Lines 119-122
    }
}
