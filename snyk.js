const fs = require('fs');

{
    const exist = fs.existsSync('.snyk');

    if (!exist) {
        throw new Error('No .snyk file found');
    }
}

try {
    fs.renameSync('.snyk', './node_modules/angular/.snyk');
} catch (error) {
    console.error('Error moving .snyk file', error);
}

{
    const exist = fs.existsSync('./node_modules/angular/.snyk');
    if (!exist) {
        throw new Error('No .snyk file found in node_modules/angular');
    }
}


