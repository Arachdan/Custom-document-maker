const document_type_selector = document.getElementsByClassName('select_document_type')[0];

const canvas = document.getElementsByClassName('canvas')[0];

function showCanvas() {
    switch(document_type_selector.value) {
        case 'cv':
            canvas.classList.replace('inactive_canvas', 'active_canvas');

            break;
        case 'none':
            canvas.classList.replace('active_canvas', 'inactive_canvas');
    }
}