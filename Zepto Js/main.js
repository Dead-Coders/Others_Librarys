Zepto(function($){
    alert('Ready to Zepto!')
  })

  const aa = $.camelCase('hello-there')
  console.log(aa)

  $('h1').after('<p>A note below the label</p>')