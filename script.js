(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }else{
          var name = document.getElementById('name')
          var email = document.getElementById('email')
          var phone = document.getElementById('phone')
          var subject = document.getElementById('subject')
          var message = document.getElementById('message')
          alert(`Message sent successfully \n \n name: ${name.value} \n email: ${email.value} \n phone: ${phone.value} \n subject: ${subject.value} \n message: ${message.value}`)
        form.reset()
      }
      form.classList.add('was-validated')
      event.preventDefault()
    }, false)
  })
})()
