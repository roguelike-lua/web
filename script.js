function main() {
    let versionList = document.getElementById('version-list');
    for ( let i = 0; i <=20; i++ ) {
        if ( i % 5 === 0 ) {
            versionList.innerHTML += `<li> Minor Patch : 0.${i}.${i}</li>`
        } else {
            versionList.innerHTML += `<li> Bug Fix : 0.0.${i}</li>`
        }
    }
}

main();