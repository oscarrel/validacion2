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
                cuenta_iban: {
                    required: true,
                    iban: true
                },
                comentarios: 'required'
            }
        });