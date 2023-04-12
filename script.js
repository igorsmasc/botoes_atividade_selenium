$(document).ready(function () {
  // Ao clicar no Botão 1
  $("#button1").click(function () {
    alert("O botão 1 foi selecionado.");
  });

  // Ao clicar no Botão 2
  $("#button2").click(function () {
    alert("O botão 2 foi selecionado.");
  });

  // Ao clicar no Botão 3
  $("#button3").click(function () {
    alert("O botão 3 foi selecionado.");
  });

  // Ao clicar no Botão 4
  $("#button4").click(function () {
    alert("O botão 4 foi selecionado.");
  });

  // Ao clicar no Botão 5
  $("#button5").click(function () {
    alert("O botão 5 foi selecionado.");
  });

  $("#button6").click(function () {
    alert("O botão 6 foi selecionado.");
  });

  // Ao clicar no switch para habilitar/desabilitar o Botão 6
  $("#button6-switch").change(function () {
    if ($(this).is(":checked")) {
      $("#button6").prop("disabled", false);
    } else {
      $("#button6").prop("disabled", true);
    }
  });

  $("#link1").click(function () {
    alert("O link 1 foi selecionado.");
  });

  $("#link2").click(function () {
    alert("O link 2 foi selecionado.");
  });

  $("#link3").click(function () {
    alert("O link 3 foi selecionado.");
  });
});

$(document).on('click', 'a', function(event) {
  event.preventDefault();
});
