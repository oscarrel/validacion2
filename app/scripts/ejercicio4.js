        $('#formulario').validate({
            onkeyup: false,
            onfocusout: false,
            onclick: false,
            rules: {
                nombre: {
                    required: true,
                    minlength: 2,
                    remote:'php/users.php'
                },
                email: {
                    required:true,
                    remote:'php/emails.php'
                },
                cuentaiban: {
                    required: true,
                    iban: true
                },
                cuenta2: {
                    required: true,
                    cuentabanco: true
                },
                comentarios: 'required'
            }
        });