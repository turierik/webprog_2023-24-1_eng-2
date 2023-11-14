<?php
    $errors = [];
    $fullname = $_POST['fullname'] ?? '';
    $email = $_POST['email'] ?? '';
    $age = $_POST['age'] ?? '';
    $accept = $_POST['accept'] ?? '';

    if ($_POST){
        if (count(explode(' ', $fullname)) < 2){
            $errors['fullname'] = 'Full name must have at least 2 words';
        }
    
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $errors['email'] = 'Email format wrong';
        }
    
        if (filter_var($age, FILTER_VALIDATE_INT) === false){
            $errors['age'] = 'Age must be an integer';
        }
    
        if (!filter_var($accept, FILTER_VALIDATE_BOOL)){
            $errors['accept'] = 'Checkbox must be checked';
        }
    }
 
    // Tasks:
    // 1. full name must have at least 2 words
    // 2. email must look correct
    // 3. age must be an integer (watch out for 0!!!)
    // 4. checkbox must be checked
    // ---> list the errors
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
    <?php
        foreach($errors as $e)
            echo "<li>$e</li>";
    ?>    
</ul>
    <form action="2.php" method="POST">
        Full name: <input type="text" name="fullname" value="<?= $fullname ?>">
        <?= $errors['fullname'] ?? '' ?>
        <br>
        E-mail: <input type="text" name="email" value="<?= $email ?>">
        <?= $errors['email'] ?? '' ?><br>
        Age (int): <input type="text" name="age" value="<?= $age ?>">
        <?= $errors['age'] ?? '' ?><br>
        Accept the terms <input type="checkbox" name="accept"
            <?= $accept ? 'checked' : '' ?>
        >
        <?= $errors['accept'] ?? '' ?><br>
        <button>Send</button>
    </form>

    <?php if ($_POST && count($errors) === 0): ?>
    <h1>Congratulations, you did it! :)</h1>
    <?php endif; ?>
</body>
</html>