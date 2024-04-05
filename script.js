document.getElementById('downloadLink').addEventListener('click', function() {
    // Specify the path to your PDF file
    var filePath = "images/resume.pdf";

    // Create a link element and set its href attribute to the path of the PDF file
    var link = document.createElement('a');
    link.href = filePath;

    // Set the download attribute of the link to specify the filename
    link.download = 'resume.pdf';

    // Simulate a click on the link to trigger the download
    link.click();
});












