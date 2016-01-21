<?php 
$host = "localhost";
$db_name = "p9247_rashadclub";
$login = "p9247_kiri";
$pswd = "613672";

$connect = mysql_connect("$host", "$login", "$pswd");
mysql_selectdb("$db_name", $connect);
mysql_query("SET NAMES 'utf-8'");
?>