//import
const fs=require('fs');
const chalk=require('chalk');

const fileName="notes.json";


//Load JSON Data
const loadNotes=function(){
    try{
        const data =fs.readFileSync(fileName,'utf8');
        const dataJSON=data;
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
}

//Save Notes
const saveNotes=function(notes){
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync(fileName,dataJSON);
}

//Add Notes
const addNote=function(title,body){
    const notes=loadNotes();
    const duplicateNotes=notes.filter((note)=>{
        return note.title===title;
    });

    if(duplicateNotes.length===0){//If No Duplicate Data
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
        console.log(chalk.greenBright.inverse('Notes Saved'));
    }else{
        console.log(chalk.red.bold('Duplicate Data Found, Please Use Another Title'));
    }

    //console.log(notes);
}

//RemoveNote
const removeNote=function(title){
    const notes=loadNotes();
    const isNoteExist=notes.filter((note)=>{
        return note.title===title;
    });
    if(isNoteExist.length>0){
        notes.pop({
            title:title
        })
        saveNotes(notes);
        console.log(chalk.redBright.inverse('Removed Note Successfully.'));
    }else{
        console.log(chalk.red("Sorry, No Title Exists !"));
    }
}

//ListNote
const listNote=function(){
    const data=loadNotes();
    console.log('--------------');

    var i=1;
    data.filter((note)=>{
        console.log(chalk.greenBright.bold('ID\t: '),i);
        console.log(chalk.greenBright.bold('Title\t: '),note.title);
        console.log(chalk.greenBright.bold('Body\t: '),note.body);
        console.log('--------------\n');
        i++;
    })

    /*for(i=0;i<data.length;i++){
        console.log(chalk.greenBright.bold('ID\t: '),i+1);
        console.log(chalk.greenBright.bold('Title\t: '),data[i].title);
        console.log(chalk.greenBright.bold('Body\t: '),data[i].body);
        console.log('--------------\n');
    }*/
}

//Read Note
const readNote=function(title){
    const data=loadNotes();
    isDataFound=true;
    data.filter((note)=>{
        if(title===note.title){
            console.log(chalk.greenBright.bold('Title\t: '),note.title);
            console.log(chalk.greenBright.bold('Body\t: '),note.body);
            isDataFound=true;
        }else{
            isDataFound=false;
        }
    })

    if(isDataFound!==true){
        console.log(chalk.redBright.inverse("Sorry No Data Found"));
    }

    console.log('---*---Note Read Succefully---*---');
}


module.exports={
    addNote:addNote,
    removeNote:removeNote,
    readNote:readNote,
    listNote:listNote
}