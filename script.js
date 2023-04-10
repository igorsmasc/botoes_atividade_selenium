$(document).ready(function() {
    // Ao clicar no Botão 1
    $("#button1").click(function() {
      alert("O botão 1 foi selecionado.");
    });
  
    // Ao clicar no Botão 2
    $("#button2").click(function() {
      alert("O botão 2 foi selecionado.");
    });
  
    // Ao clicar no Botão 3
    $("#button3").click(function() {
      alert("O botão 3 foi selecionado.");
    });
  
    // Ao clicar no Botão 4
    $("#button4").click(function() {
      alert("O botão 4 foi selecionado.");
    });
  
    // Ao clicar no switch para habilitar/desabilitar o Botão 4
    $("#button4-switch").change(function() {
      if ($(this).is(":checked")) {
        $("#button4").prop("disabled", false);
      } else {
        $("#button4").prop("disabled", true);
      }
    });
  });
  