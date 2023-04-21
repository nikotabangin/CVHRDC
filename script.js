document.getElementById('upload-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var fileList = document.getElementById('file-input').files;
  var fileListContainer = document.getElementById('file-list');
  fileListContainer.innerHTML = '';

  for (var i = 0; i < fileList.length; i++) {
    var listItem = document.createElement('li');
    listItem.className = 'file-item';
    listItem.textContent = fileList[i].name;
    fileListContainer.appendChild(listItem);
  }

  // You can add logic here to send the files to a server for processing
  // using XMLHttpRequest or Fetch API.
});
