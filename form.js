function formValidation()
{
var stdname = document.registration.studentname;
var stdgender = document.registration.studentgender;
var birthInput = document.registration.birthday;
var stdic = document.registration.studentic;
var stdrace = document.registration.studentrace;
var stdphone = document.registration.mobilephone;
var stdaddress= document.registration.address;
var stdemail = document.registration.email;
var stdcer = document.registration.certificate;if(allLetter(stdname))
{
if(validgender(stdmgender,stdfgender))
{
if(allnumeric(birthInput))
{
if(allnumeric(stdic))
{ 
if(validrace(stdc,stdm,stdi))
{
if(mobilephone.value.match(phone))
{
if(alphanumeric(add))
{
if(ValidateEmail(email))
{
if(certificateselect(certificate))
}
} 
}
} 
}
}
}
}
return false;
}function allLetter(stdname)
{ 
var letters = /^[A-Za-z]+$/;
if(stdname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
stdname.focus();
return false;
}
}function validgender(stdmgender,stdfgender)
{
x=0;

if(stdmgender.checked) 
{
x++;
} if(stdfgender.checked)
{
x++; 
}
if(x==0)
{
alert('Select Male/Female');
stdmgender.focus();
return false;
}
}function allnumeric(birthInput){
  var numbers = /^[0-9]+$/;
  if(birthInput.value.match(numbers)){
    return true;
  }else{
    alert('Birthday must have numeric characters only!');
    birthInput.focus();
    return false;

  }
}function allnumeric(ic)
{ 
var numbers = /^[0-9]+$/;
if(stdic.value.match(numbers))
{
return true;
}
else
{
alert('Student IC.No must have ic.no characters only');
stdic.focus();
return false;
}
} function validrace(stdc,stdm,stdi)
{
x=0;

if(stdc.checked) 
{
x++;
} if(stdm.checked)
{
x++; 
}if(stdi.checked)
{
x++;
}
if(x==0)
{
alert('Select Chinese/Malay/Indian');
stdrace.focus();
return false;
}
}function mobilephone(phone)
{
  var phone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if((mobilephone.value.match(phone))
        {
      return true;
        }
      else
        {
        alert("message");
        return false;
        }
}function alphanumeric(add)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(add.value.match(letters))
{
return true;
}
else
{
alert('Student address must have alphanumeric characters only');
stdadd.focus();
return false;
}
}function ValidateEmail(email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
email.focus();
return false;
}else
{
alert('Form Succesfully Submitted');
window.location.reload()
return true;
}

