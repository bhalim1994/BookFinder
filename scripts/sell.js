//Upload the file fo preview
$(function () {
    $(document).on("change", ".uploadFile", function () {
        var uploadFile = $(this);
        var files = !!this.files ? this.files : [];
        //Makes sure a file is selected and that it's valid
        if (!files.length || !window.FileReader) return;

        // Allows only image files
        if (/^image/.test(files[0].type)) {
            //FileReader instance
            var reader = new FileReader();
            //Reads local file
            reader.readAsDataURL(files[0]);
            //Sets the image as the background
            reader.onloadend = function () {
                uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url(" + this.result + ")");
            }
        }

    });
});