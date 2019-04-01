#!/usr/bin/env node
let fs = require('fs');



let path = "./output";
let copyFolder = path + "/StructureDefinition"

let files = getFilesInFolder(path,'StructureDefinition-')

//console.log(files)

if (!fs.existsSync(copyFolder)){
    fs.mkdirSync(copyFolder);
}

files.forEach(function(fileName){
    let fullName = path + "/"+ fileName;
    let contents = fs.readFileSync(fullName,{encoding:'utf8'}).toString();
    //console.log(contents)

    let ar = fileName.split('-');
    ar.shift()
    let newName = ar.join('-')


    let copyName = copyFolder + "/" + newName;
    fs.writeFileSync(copyName,contents)
    console.log(copyName)
})



function getFilesInFolder(path,filter) {
    var ar = []
    fs.readdirSync(path).forEach(function(file) {

        if (filter) {
            if (file.indexOf(filter) >-1) {

                ar.push(file)
            }
        } else {
            ar.push(file)
        }

    })
    return ar;
}
