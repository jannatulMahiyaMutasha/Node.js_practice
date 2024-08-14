const fs = require('fs'); // ES5



// File Read
async function readFile(){
    try {
        const data= await fs.readFileSync('todo.txt','utf8');
        console.log(data);
    }catch (e) {
        console.log(e);
    }
}


// File Create - Whole Content Change
async function createNewFile(){
    try {
        const data= await fs.writeFileSync('todo2.txt','Hello File Next ');
        console.log("Successfully created!");
    } catch (e) {
        console.log(e);
    }

}


// File  Content Append
async function AppendNewFileContent(){
    try {
        const data= await fs.appendFileSync('todo2.text',"\n Hello File Next ");
        console.log("Successfully created!");
    } catch (e) {
        console.log(e);
    }

}



// File  Delete
async function DeleteFile(){
    try {
        await fs.unlinkSync('todo.txt');
        console.log("Delete Complete!");
    } catch (e) {
        console.log(e);
    }

}


// File Rename
async function RenameFile(){
    try {
        let result= await fs.renameSync('todo2.text','new.text');
        console.log("Successfully renamed!");
    }catch (e) {
        console.log(e)
    }
}



// Create File Directory
async function CreateFileDirectory (){
    try {
        let result= await fs.mkdirSync('new_folder');
        console.log("Successfully Create!");
    }catch (e) {
        console.log(e)
    }
}


// Rename File Directory
async function RenameFileDirectory (){
    try {
        let result= await fs.renameSync('new_folder','new_folder22');
        console.log("Successfully rename!");
    }catch (e) {
        console.log(e)
    }
}




// Delete File Directory
async function DeleteFileDirectory (){
    try {
        let result= await fs.rmdirSync('new_folder22');
        console.log("Successfully Delete!");
    }catch (e) {
        console.log(e)
    }
}




// Check File Exist or Not
async function CheckExist (){
    try {
        let result= await fs.existsSync('todo34534.text');
        console.log(result);
    }catch (e) {
        console.log(e)
    }
}


/*
// File Read
function readFile2(){
    fs.readFile('todo.text',function (err,data) {
        if(err){
            console.log(err)
        }
        else {
            console.log(data)
        }
    });
}

*/


// IIF Function
(async ()=>{

   // await readFile();
    // await createNewFile();
    // await  AppendNewFileContent();
   //  await DeleteFile()
     // await RenameFile()
   // await  CreateFileDirectory ();
   //  await  RenameFileDirectory();
    //  await DeleteFileDirectory ();
    // await CheckExist ()
})()


