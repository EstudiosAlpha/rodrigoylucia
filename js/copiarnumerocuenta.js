function triggerExample() {
    const element = document.querySelector('#example');
    element.select();
    element.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert("Número de cuenta copiado correctamente");
}