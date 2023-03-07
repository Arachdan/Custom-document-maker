const document_type_selector = document.getElementsByClassName('select_document_type')[0];

const cv_settings = document.getElementsByClassName('cv_settings')[0];

function showCanvas() {
    switch(document_type_selector.value) {
        case 'cv':
            activateCanvas();
            activateCVSettings();
            canvas_obj.loadCVContent.all();

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