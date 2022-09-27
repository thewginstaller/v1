const FS = require( "fs" );


exports.ReadFile = function( DirName , FileName ) {
    let DirADR = __dirname + "/" + DirName + "/" ;
    let FileObj = FS.readFileSync( DirADR + FileName );
    return FileObj
}

exports.ListDir = function( DirName ) {
    let DirADR = __dirname + "/" + DirName + "/" ;
    let DirList = FS.readdirSync( DirADR );
    return DirList
}




