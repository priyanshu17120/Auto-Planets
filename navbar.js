function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var navbar = rawFile.responseText;
                document.write(`
${navbar}
`)
            }
        }
    }
    rawFile.send(null);
}
readTextFile('navbar.html')

