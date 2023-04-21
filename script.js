document.getElementById('uploadButton').addEventListener('click', function() {
    var fileInput = document.getElementById('fileInput');
    var fileList = document.getElementById('fileList');

    var file = fileInput.files[0];
    var fileName = file.name;

    var fileReader = new FileReader();
    fileReader.onload = function() {
        var fileData = fileReader.result;

        var fileLink = document.createElement('a');
        fileLink.href = fileData;
        fileLink.textContent = fileName;
        fileLink.target = '_blank';

        var fileItem = document.createElement('div');
        fileItem.appendChild(fileLink);

        fileList.appendChild(fileItem);
    };
    fileReader.readAsDataURL(file);
});
