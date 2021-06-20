<?php
    header("Access-Control-Allow-Origin: *");
    $rest_json = file_get_contents("php://input");

    $data = $_POST;

    $curl = curl_init("http://to.ttk.elte.hu/test.php");

    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    
    $response = curl_exec($curl);
    curl_close($curl);

    $fp = fopen('results.txt', 'w');
    fwrite($fp, print_r($response, TRUE));
    fclose($fp);
    
?>