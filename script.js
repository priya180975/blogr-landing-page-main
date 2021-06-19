let moblieview=document.querySelector('#mobilemenu')
let btn=document.querySelectorAll('.drop-btn');
btn.forEach(a=>a.addEventListener('click',navmenu))


function navmenu(e)
{
    if(e.currentTarget.id==e.target.id)
    {
        if(e.currentTarget.getAttribute('data-open')=="false")
        {
            btn.forEach(a=>{
                if((a.getAttribute('data-open'))=="true")
                {
                    a.setAttribute('data-open','false');
                    let old=a.getAttribute('id');
                    opc(old)
                }
            })
            e.currentTarget.setAttribute('data-open','true')
            opc(e.target.id)
        }
        else
        {   
            e.currentTarget.setAttribute('data-open','false')
            opc(e.target.id)
        }

        function opc(tar)
        {
            let nnc=document.getElementById(tar+"img")
            nnc.classList.toggle('clicked')
            let items=document.getElementById(tar+"item")
            items.classList.toggle("drop-display")
        }
    }
}

if(window.innerWidth<800)  
{
    let content1img=document.querySelector('#content1-img');
    content1img.setAttribute('src',"images/illustration-editor-mobile.svg")

    let content3img=document.querySelector('#content3-img');
    content3img.setAttribute('src',"images/illustration-laptop-mobile.svg") 

    let headmain=document.querySelector('#head-main')
    let menubar=document.createElement('button');
    menubar.setAttribute("id","menubar");
    menubar.innerHTML=`<img id="menubtn" src="images/icon-hamburger.svg">`;
    headmain.appendChild(menubar);

    menubtn.addEventListener('click',cancel);
    
    function cancel(e)
    {
        let imgopen="images/icon-hamburger.svg";
        let imgclose="images/icon-close.svg";


        if(menubtn.src.includes('icon-hamburger.svg'))
        {
            moblieview.style.display="flex"
        }
        else{
            moblieview.style.display="none"
        }

        menubtn.setAttribute('src',(menubtn.src.includes('icon-hamburger.svg'))?imgclose:imgopen);
    }
}
