document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let trabajo = document.getElementById('trabajo').value;
    let telefono = document.getElementById('telefono').value;
    let acercaDe = document.getElementById('acercaDe').value;

    if (nombre && correo && trabajo && telefono && acercaDe) {
        let nuevoUsuario = new Usuario(nombre, correo, trabajo, telefono, acercaDe);

        document.getElementById('name').innerHTML = nuevoUsuario.nombre;
        document.getElementById('email').innerHTML = nuevoUsuario.correo;
        document.getElementById('work').innerHTML = nuevoUsuario.trabajo;
        document.getElementById('phone').innerHTML = nuevoUsuario.telefono;
        document.getElementById('aboutMe').innerHTML = nuevoUsuario.acercaDe;

        document.getElementById('nombre').value = '';
        document.getElementById('correo').value = '';
        document.getElementById('trabajo').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('acercaDe').value = '';

        document.querySelector('.card').style.display = 'flex';
    }
});

function Usuario(nombre, correo, trabajo, telefono, acercaDe){
    this.nombre = nombre;
    this.trabajo = trabajo;
    this.correo = correo;
    this.telefono = telefono;
    this.acercaDe = acercaDe;
}
