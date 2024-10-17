// Load PDF.js
pdfjsLib.getDocument('path/to/your/resume.pdf').then(function(pdf) {
    // Get the first page
    pdf.getPage(1).then(function(page) {
        // Create a canvas element
        var canvas = document.createElement('canvas');

        // Set the canvas dimensions
        var viewport = page.getViewport({ scale: 1.5 }); // Adjust the scale as needed
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // Render the page to the canvas
        var context = canvas.getContext('2d');
        page.render({ viewport: viewport }).then(function() {
            // Create a new window for printing
            var printWindow = window.open("", "_blank");

            // Set the content of the new window to the canvas
            printWindow.document.body.appendChild(canvas);

            // Trigger the printing in the new window
            printWindow.print();

            // Close the print window after printing
            printWindow.close();
        });
    });
});