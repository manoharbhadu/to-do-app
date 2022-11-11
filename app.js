function addtodo () {
  var m = document.querySelector('textarea').value
  if (m == '') {
    document.querySelector('#empty').innerHTML = ''
  } else {
    document.querySelector('.todoitem').innerHTML +=
      '<p id = "pera">' +
      m +
      '<span onclick="deleteitem(this)"><i class="fa-solid fa-xmark remove"></i></span> <span onclick="done(this)"><i class="fa-duotone fa-check remove2"></i></span> </p>'
    document.querySelector('textarea').value = ''
  }
  document.querySelector('textarea').focus()
}

function deleteitem (deletefunc) {
  deletefunc.parentElement.remove()
  document.querySelector('textarea').focus()
}

function done (delle) {
  delle.parentElement.style.textDecoration = 'line-through'
  delle.parentElement.style.background = '#29bf12'
  document.querySelector('textarea').focus()
}

// enter click on add
document.getElementById('txt').addEventListener('keyup', function (event) {
  if (event.key == 'Enter') {
    addtodo()
  }
})
