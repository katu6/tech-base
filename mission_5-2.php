<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>mission_5-1</title>
</head>
<body>
    <?php
        $dsn = '*****';
        $user = '*****';
        $password = '*****';
        
        $pdo = new PDO($dsn, $user, $password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING));
        $sql = "CREATE TABLE IF NOT EXISTS bbs"
        ." ("
        . "id INT AUTO_INCREMENT PRIMARY KEY,"
        . "name CHAR(32),"
        . "comment TEXT,"
        . "pass TEXT,"
        . "date DATETIME"
        .");";
        $stmt = $pdo->query($sql);
        // データベース設定
        
        $message = "";
        $success1 = "書き込みに成功しました。";
        $success2 = "コメントの編集に成功しました。";
        $success3 = "コメントの削除に成功しました。";
        $success4 = "コメントを編集してください。";
        $error1 = "コメント内容を入力してください。";
        $error2 = "レス番号もしくはパスワードが間違っています。";
        
        $master = "*****";
        // 管理者パスワード
        
        $editname = "";
        $editcomment = "";
        $postpass = "password";
        $editpass = "hidden";
        $postnum = "number";
        $editnum = "hidden";
        $postsubmit = "submit";
        $number = "";
        $pass = "";
        $delete = "false";
        
        if (isset($_POST["submit"])) {
            // 書き込み実行時の処理
            if (!empty($_POST["comment"])){
                if (!empty($_POST["name"])){
                    $name = $_POST["name"];
                }else{
                    $name = "名無しさん";
                }
                // 名前欄になにも入力がない場合に自動で割り当て
                $comment = $_POST["comment"];
                $date = date("Y/m/d H:i:s");
                if (empty($_POST["editnum"])){
                    // 新規投稿時（＝「レス番号を指定」フォームに何も送信されていない時）の処理
                    $pass = $_POST["pass"];
                    $sql = "INSERT INTO bbs (name, comment, date, pass) VALUES (:name, :comment, :date, :pass)";
                    $stmt = $pdo->prepare($sql);
                    $stmt->bindParam(':name', $name, PDO::PARAM_STR);
                    $stmt->bindParam(':comment', $comment, PDO::PARAM_STR);
                    $stmt->bindParam(':date', $date, PDO::PARAM_STR);
                    $stmt->bindParam(':pass', $pass, PDO::PARAM_STR);
                    $stmt->execute();
                    // データベースに書き込み内容を保存
                }else{
                    // 編集時の処理
                    $number = $_POST["editnum"];
                    $pass = $_POST["editpass"];
                    $comment = $comment." (edited)";
                    // 編集済みコメントであることを示す文の追加
                    $id = $number;
                    $sql = 'UPDATE bbs SET name=:name,comment=:comment,date=:date WHERE id=:id';
                    $stmt = $pdo->prepare($sql);
                    $stmt->bindParam(':name', $name, PDO::PARAM_STR);
                    $stmt->bindParam(':comment', $comment, PDO::PARAM_STR);
                    $stmt->bindParam(':date', $date, PDO::PARAM_STR);
                    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
                    $stmt->execute();
                    
                    $number = "";
                    $pass = "";
                    $postpass = "password";
                    $editpass = "hidden";
                    $postnum = "number";
                    $editnum = "hidden";
                    $postsubmit = "submit";
                    $message = $success2;
                }
            }else{
                $message = $error1;
                // コメント欄に何も入力されていなかった場合のエラー文
            }
        }else if(isset($_POST["edit"])){
            // 編集実行時の処理
            $number = $_POST["num"];
            $pass = $_POST["pass"];
            $sql = 'SELECT * FROM bbs';
            $stmt = $pdo->query($sql);
            $results = $stmt->fetchAll();
            
            foreach($results as $row){
                if(!empty($pass) && !empty($row['pass']) && $pass == $row['pass']){
                    // パスワードが一致しているかの判定
                    if($row['id'] == $number){
                        // 指定したレス番号が存在するかの判定
                        $editname = $row['name'];
                        $editcomment = $row['comment'];
                        $postpass = "hidden";
                        $editpass = "password";
                        $postnum = "hidden";
                        $editnum = "number";
                        $postsubmit = "hidden";
                    }
                }
            }
            if($editnum == "number"){
                // レス番号が正しかった（＝変数に指定したレス番号が定義された）かどうかの判定
                $message = $success4;
            }else{
                $message = $error2;
                $number = "";
                $pass = "";
            }
        }else if(isset($_POST["delete"])){
            // 削除実行時の処理
            $number = $_POST["num"];
            $pass = $_POST["pass"];
            $sql = 'SELECT * FROM bbs';
            $stmt = $pdo->query($sql);
            $results = $stmt->fetchAll();
            
            foreach($results as $row){
                if((!empty($pass) && !empty($row['pass']) && $pass == $row['pass']) || $pass == $master){
                    // パスワードが一致しているか（もしくは管理者パスワードが入力されたか）の判定
                    if($row['id'] == $number){
                        // 指定したレス番号が存在するかの判定
                        $id = $number;
                        $sql = 'delete from bbs where id=:id';
                        $stmt = $pdo->prepare($sql);
                        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
                        $stmt->execute();
                        
                        $delete = "true";
                        // 削除が成功したかどうかの判定
                    }
                }
            }
            if($delete == "true"){
                $message = $success3;
            }else{
                $message = $error2;
            }
            $delete = "false";
            $number = "";
            $pass = "";
        }
        
        $sql = 'SELECT * FROM bbs';
        $stmt = $pdo->query($sql);
        $results = $stmt->fetchAll();
        foreach ($results as $row){
            echo $row['id']." ";
            echo $row['name']." ";
            echo date("Y/m/d h:m:s", strtotime($row['date']))." ";
            if(empty($row['pass'])){
                echo " ●";
            }
            echo "<br>";
            echo $row['comment']."<br><br>";
        }
    ?>
    <form method='POST' action=''>
        <input type='text' name='name' value="<?php echo $editname; ?>" placeholder='名無しさん'><br>
        <input type='text' name='comment' value="<?php echo $editcomment; ?>" placeholder='コメントを入力'><br>
        <input type='submit' name='submit' value='書き込み'>
        <input type="<?php echo $postpass; ?>" name='pass' placeholder='パスワードを入力'>
        <input type="<?php echo $editpass; ?>" name='editpass' value="<?php echo $pass; ?>" readonly><br>
        <input type="<?php echo $postnum; ?>" name='num' placeholder='レス番号を指定'>
        <input type="<?php echo $editnum; ?>" name='editnum' value="<?php echo $number; ?>" readonly>
        <input type="<?php echo $postsubmit; ?>"  name='edit' value='編集'>
        <input type="<?php echo $postsubmit; ?>"  name='delete' value='削除'>
    </form>
    <p><?=$message?></p>
</body>