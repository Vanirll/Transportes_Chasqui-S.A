// Archivo de datos de destinos y horarios para Transportes Chasqui S.A.
// Puedes agregar más destinos y horarios según sea necesario.
const destinosData = [
    {
        nombre: "Lima",
        descripcion: "La capital de Perú, conocida por su historia, gastronomía y cultura. Disfruta de sus museos, plazas y la mejor comida del país.",
        horarios: [
            "06:00 AM",
            "10:00 AM",
            "03:00 PM",
            "08:00 PM",
        ],
        precio: "S/. 50.00"
    },
    {
        nombre: "Chiclayo",
        descripcion: "La ciudad de la amistad, reconocida por su historia precolombina, museos y deliciosa comida norteña.",
        horarios: [
            "07:30 AM",
            "12:00 PM",
            "06:00 PM"
        ],
        precio: "S/. 60.00"
    },
    {
        nombre: "Chimbote",
        descripcion: "El principal puerto pesquero del país, conocido por su bahía, islas y deliciosa comida marina.",
        horarios: [
            "05:00 AM",
            "11:00 AM",
            "04:30 PM"
        ],
        precio: "S/. 45.00"
    },
    {
        nombre: "Piura",
        descripcion: "La ciudad del eterno sol, reconocida por sus playas, artesanía y la calidez de su gente.",
        horarios: [
            "08:00 AM",
            "02:00 PM",
            "09:00 PM"
        ],
        precio: "S/. 70.00"
    },
    {
        nombre: "Trujillo",
        descripcion: "La ciudad de la eterna primavera, reconocida por su historia, cultura y la marinera norteña.",
        horarios: [
            "06:30 AM",
            "01:00 PM",
            "07:30 PM"
        ],
        precio: "S/. 40.00"
    },
];

function mostrarInfoDestino(nombreDestino, mostrarDirecto = false) {
    const destino = destinosData.find(d => d.nombre === nombreDestino);
    if (!destino) return;
    let horarios = destino.horarios.map(h => `<li>${h}</li>`).join("");
    const html = `
        <h3>${destino.nombre}</h3>
        <p>${destino.descripcion}</p>
        <p><strong>Precio:</strong> ${destino.precio}</p>
        <p><strong>Horarios disponibles:</strong></p>
        <ul>${horarios}</ul>
    `;
    if (mostrarDirecto && document.getElementById('info-destino')) {
        document.getElementById('info-destino').innerHTML = html;
    } else if (!mostrarDirecto) {
        mostrarModal(html);
    }
}

function mostrarModal(contenido) {
    let modal = document.getElementById('modal-destino-info');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal-destino-info';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        modal.style.background = 'rgba(0,0,0,0.5)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '9999';
        modal.innerHTML = `<div id='modal-content-destino' style='background:#fff;padding:30px 40px;border-radius:10px;max-width:400px;position:relative;'>
            <button id='cerrar-modal-destino' style='position:absolute;top:10px;right:10px;font-size:1.2rem;background:none;border:none;cursor:pointer;'>&times;</button>
            <div id='modal-destino-body'></div>
        </div>`;
        document.body.appendChild(modal);
        document.getElementById('cerrar-modal-destino').onclick = function() {
            modal.remove();
        };
    }
    document.getElementById('modal-destino-body').innerHTML = contenido;
    modal.style.display = 'flex';
}
