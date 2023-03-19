const download_cv_button = document.getElementsByClassName('download_cv_button')[0];

download_cv_button.addEventListener('click', downloadCV);

function downloadCV() {
    const pdf_file = {
        doc: new jsPDF({
            orientation: 'p',
            unit: 'px',
            format: 'a4',
        }),

        start_x: 0,
        start_y: 0,

        width: 445,
        height: 626
    }

    const d = new Date();

    let day = d.getDate();
    if(day < 10) day = `0${day}`;

    let month = d.getMonth() + 1;
    if(month < 10) month = `0${month}`;

    const year = d.getFullYear();

    pdf_file.doc.addImage(
        canvas_obj.canvas.toDataURL('image/png'), 'PNG',
        pdf_file.start_x, pdf_file.start_y,
        pdf_file.width, pdf_file.height
    );
    pdf_file.doc.save(`cv_${day}_${month}_${year}`);
}