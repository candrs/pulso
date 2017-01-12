var $form = $('#formulario'),
    $titulo = $('#titulo'),
    $ulr = $('#url'),
    $button = $('#mostrar-form'),
    $list = $('#contenido'),
    $post = $('.item').first();


function mostrarFormulario() {
  $form.slideToggle();
  return false;
}

function agregarPost() {
  var url = $url.val();
  return false;
}
// Eventos
$button.click( mostrarFormulario );
$form.on('submit',agregarPost);
