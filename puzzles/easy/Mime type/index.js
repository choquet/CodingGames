// Number of elements which make up the association table.
const N = +readline(); 

// Number Q of file names to be analyzed.
const Q = +readline(); 

// Default value
const DEFAULT = 'UNKNOWN';

// Return value
var result = "";

// Association table
var mime = {};

var extension, mimeType, file, fileExtension;

for (var i = 0; i < N; i++) {
    [extension, mimeType] = readline().split(' ');
    mime[extension.toLowerCase()] = mimeType;
}

for (var i = 0; i < Q; i++) {

    // One file name per line.
    file = readline().toLowerCase().split('.');

    fileExtension = file[file.length-1]; 
    
    if(file.length > 1 && mime[fileExtension]){
        result += mime[fileExtension] + "\n";
    } else {
        result += DEFAULT+"\n";
    }   
}

// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
print(result);