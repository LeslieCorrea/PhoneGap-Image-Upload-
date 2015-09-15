<?php
print_r($_FILES);
$new_image_name = "namethisimage.jpg";
move_uploaded_file($_FILES["file"]["tmp_name"], "D:/AndroidStudioProjects/images/".$new_image_name);
?>