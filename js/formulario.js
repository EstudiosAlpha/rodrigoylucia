const scriptURL = 'https://script.google.com/macros/s/AKfycbzGWO3ws8GpAqy6hNfDEBmn_12-g6R5shhggw4bV97fcEzsyQofkCa--IF-PeLZnpOY/exec';
                const form = document.forms['formName'];
            
                form.addEventListener('submit', e => {
                    e.preventDefault();
            
                    // Primera solicitud fetch
                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                        .then(response => {
                            alert("Datos enviados :)");
                        })
                        .catch(error => console.error('Error!', error.message));
            
                    // Segunda solicitud fetch
                    fetch('https://ntfy.sh/bodapatriciayjesus', {
                        method: 'POST',
                        body: 'Nueva confirmacion en la boda 😀'
                    })
                        .then(response => {
                            // Puedes manejar la respuesta de la segunda solicitud aquí si es necesario
                        })
                        .catch(error => console.error('Error en la segunda solicitud fetch!', error.message));
                });