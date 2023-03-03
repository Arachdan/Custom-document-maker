const document_type_selector = document.getElementsByClassName('select_document_type')[0];

const canvas = document.getElementsByClassName('canvas')[0];
const ctx = canvas.getContext("2d");

const cv_settings = document.getElementsByClassName('cv_settings')[0];

function showCanvas() {
    switch(document_type_selector.value) {
        case 'cv':
            activateCanvas();
            activateCVSettings();

            break;
        case 'none':
            deactivateCanvas();
            deactivateCVSettings();

            break;
        default:
            document.body.innerText = '';
            setTimeout(
                () => alert('Some error occurred.'),
                100
            );
            break;
    }
}