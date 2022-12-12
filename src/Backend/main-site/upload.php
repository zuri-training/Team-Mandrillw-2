<?php


// $targetPath = "uploads/" . basename($_FILES["inpFile"]["name"]);
// move_uploaded_file($_FILES["inpFile"]["tmp-name"], $targetPath);

// Moves uploaded file to a nice directory


$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["inpFile"]["name"]);

if (move_uploaded_file($_FILES["inpFile"]["tmp_name"], $target_file)) {
    echo "The file ". basename( $_FILES["inpFile"]["name"]). " has been uploaded.";
} else {
    echo "Sorry, there was an error uploading your file.";
}