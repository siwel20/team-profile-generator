const generateBody = function (cards) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/3df7dca2b8.js" crossorigin="anonymous"></script>
</head>

<body>
    <div class="jumbotron text-center text-white bg-danger"><h1>My Team</h1></div>
    <div class="container">
        <div class="row">
            ${cards}
        </div>
    </div>
</body>

</html>`
}

module.exports = generateBody;