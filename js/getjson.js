let dropdown = document.getElementById('inputProvincia');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = '';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'https://cdn.rawgit.com/dariosus/jsonProvincias/502bf817/provincias.json';
//el json que fue proveido para el ejercicio (https://raw.githubusercontent.com/dariosus/jsonProvincias/-master/provincias.json) estaba descontinuado, tuve que googlear a dariosus, vi su repo que tenía las provincias y use RawGit para obtener el json :)

fetch(url)
    .then(
        function (response) {
            if (response.status !== 200) {
                console.warn('problema código: ' +
                    response.status);
                return;
            }
 
            response.json().then(function (data) {
                let option;

                for (let i = 0; i < data.length; i++) {
                    option = document.createElement('option');
                    option.text = data[i].state;
                    option.value = data[i].country;
                    dropdown.add(option);
                }
            });
        }
    )
    .catch(function (err) {
        console.error('Error -', err);
    });