//import data from files
const notes=require('./notes.js');
const chalk=require('chalk');
const yargs=require('yargs');

//Usage: node app.js add --title="Shopping List"
//Pakages Used
/*
npm i chalk
npm i yargs
npm i 
 */



//Create Add Commands
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,//Needs to Provide Arguments
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        console.log(chalk.greenBright.bold('Title\t: '),argv.title);
        console.log(chalk.greenBright.bold('Body\t: '),argv.body);
        notes.addNote(argv.title,argv.body);
    }
})

//Create Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        console.log(chalk.redBright.inverse('Removing a new Note...'));
        notes.removeNote(argv.title);
    }
})

//Create Read Command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        console.log(chalk.blueBright.bold.inverse('\tReading a Note'));
        notes.readNote(argv.title);
    }
})

//Create List Command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler(){
        console.log('Listing all Note');
        notes.listNote();
    }
})





//Provide Output without using console.log(yargs.argv)
yargs.parse()
