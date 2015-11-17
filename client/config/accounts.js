Accounts.ui.config({
    forceEmailLowercase: true,
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'name',
        fieldLabel: 'Nome completo',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Por favor, insira seu nome!");
            return false;
        } else {
            return true;
        }
    }
}, {
    fieldName: 'gender',
        showFieldLabel: false,      // If true, fieldLabel will be shown before radio group
        fieldLabel: 'Gênero',
        inputType: 'radio',
        radioLayout: 'inline',    // It can be 'inline' or 'vertical'
        data: [{                    // Array of radio options, all properties are required
            id: 1,                  // id suffix of the radio element
            label: 'Masculino',          // label for the radio element
            value: 'm',              // value of the radio element, this will be saved.
            checked: 'checked'
        }, {
            id: 2,
            label: 'Feminino',
            value: 'f'
        }],
        visible: true
    }, {
        fieldName: 'terms',
        fieldLabel: 'Eu aceito os termos de uso.',
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function(value, errorFunction) {
            if (value) {
                return true;
            } else {
                errorFunction('Você não aceitou os termos de uso.');
                return false;
            }
        }
    }],
    requestPermissions: {
        facebook: [ 'user_about_me', 'user_birthday', 'user_friends']
    }

});

accountsUIBootstrap3.setLanguage('pt-BR'); // for Portuguese (Brazil)