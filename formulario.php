<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $avaliacao = $_POST['avaliacao'];
  $comentario = $_POST['comentario'];

  $texto = "Avaliação: " . $avaliacao . "\nComentário: " . $comentario;
  $arquivo = fopen('formulario.txt', 'a');
  fwrite($arquivo, $texto);
  fclose($arquivo);
}
?>
