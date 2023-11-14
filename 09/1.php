<?php
    var_dump($_POST);
    $a = intval($_POST['a'] ?? 0);
    $b = intval($_POST['b'] ?? 0);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="1.php" method="POST">
    a = <input type="number" name="a" value="<?= $a ?>"><br>
    b = <input type="number" name="b" value="<?= $b ?>"><br>
    <button>Send</button>
    </form>
    <?= $a + $b ?>
</body>
</html>