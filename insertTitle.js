const createTitle = (name, className) => {
      var iDiv = document.createElement('span');
      iDiv.className = className;
      iDiv.innerHTML = name;
      document.querySelector('div').appendChild(iDiv);
}
