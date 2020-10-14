const verifystatus=document.querySelector('.verifystatus');
const staffname=document.querySelector('.staffcard h4');
const staffrole=document.querySelector('.staffrole');
const staffbio=document.querySelector('.staffbio');
const staffimg=document.querySelector('.staffcard img');
let verifystring=window.location.href.split('=')[1].toUpperCase();

async function getdata() {
    const res = await fetch("/staff.json").catch(error => {
            console.log("Looks like there was a problem: \n", error)
        });
        const data= await res.json();
        data.forEach(element => {
            if(element.id===verifystring){
                document.querySelector('.staffcard').style.display="flex";
                verifystatus.innerHTML="Verified"
                verifystatus.style.color="#0de22a";
                staffname.innerHTML=element.name;
                staffrole.innerHTML=element.role;
                staffbio.innerHTML=element.bio;
                staffimg.setAttribute("src",element.image);
            }
            else{
              
            }
            
        });
        console.log(verifystring);
}

getdata();
