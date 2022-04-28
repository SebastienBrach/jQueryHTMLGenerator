<!-- create basic html file -->
<!DOCTYPE html>
<html>

<head>
    <title>HTML Generator</title>
</head>

<body>
    <div id="testHTML">

    </div>
</body>

</html>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="HTMLGenerator.js"></script>
<script>
    let div = new HTMLGenerator();
    div.addTag('div');
    div.addID('affichageEDocument');
    div.addText('ceci est un test');
    div.addCSS('color', 'red');
    div.addCSS('display', 'flex');
    div.addEvent('click', function() {
        alert('clic');
    });
    div.appendTo('#testHTML');
    console.log(div)
</script>