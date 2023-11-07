<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Some content.
    <?php
        echo 2+2;   // <- I prefer this :)
        echo(2+2);
        print 2+2;
        print(2+2);

        $x = 5;
        if ($x === 4){
            echo "x is 4";
        } else {
            echo "<h1>x is not 4</h1>";
        }

        for($i = 0; $i <= 9; $i++){
            echo $i;
        }

        $t = [5, 3, 2, 7, 4, 6, 3, 8, 0];
        for ($i = 0; $i < count($t); $i++)
            echo $t[$i]." ";

        foreach($t as $i){
            echo $i." ";
        }

        $zero = 0;
        function isEven($n){
            // return $n % 2 === $zero; <- this cannot see $zero
            return $n % 2 === 0;
        }

        echo "<h1>isEven</h1>";
        echo isEven(5) ? 'true' : 'false';

        $u = [   // associative array
            'a' => 3,
            'b' => 4
        ];
        echo "<br>";
        foreach($u as $k => $j){
            echo $k . " = " . $j."<br>";
        }

        // TASKS: array of numbers
        // 1. generate a new array that only contains the even numbers
        // - for, foreach, array functions
        // 2. generate a new array that contains the square of all the numbers
        // 3. generate a list (ul, li)

        $filtered = [];
        foreach($t as $x){
            if ($x % 2 === 0) {
                //array_push($filtered, $x);
                $filtered[] = $x;
            }
        }
        var_dump($filtered);
        echo "<br>";
        var_dump(
            array_filter($t, function($x) {
                return $x % 2 === 0;
            })
        );

        echo "<br>";
        var_dump(
            array_map(function($x) {
                return $x * $x;
            }, $t)
        );

        echo "<ul>";
        foreach($t as $x){
            echo "<li>". $x . "</li>";
        }
        echo "</ul>";
    ?>
</body>
</html>