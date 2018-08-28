$(document).ready(function()
{
  $.validator.addMethod("special",function(value,char)
    {
      return this.optional(char)||/^[a-z0-9\_]+$/i.test(value)},""),
  $.validator.addMethod("lower",function(value,char)
    {
      return this.optional(char)||/[a-z]+/.test(value)},""),
  $.validator.addMethod("uper",function(value,char)
    {
      return this.optional(char)||/[A-Z]+/.test(value)},""), 
  $("#login_form").validate(
    {
      rules:{
        email:{
          required:(!0)
        },
        password:{
          required:(!0),minlength:(8), special:(!0),lower:(!0),uper:(!0)          
        }
        },
        messages:{
          password:{
            required:"Must contain at least one number , one uppercase and lowercase letter ,no special char, and at least 8 or more characters", minlength:"Length greater than 8", special:"No special char",lower:"One Lower case alphabet", uper:"One Upper case Alphabet"
            }
          },
          highlight: function (char) {
            $(char).parent().addClass('error')
        },
        unhighlight: function (char) {
            $(char).parent().removeClass('error')
        }
        }
        ) 
});  