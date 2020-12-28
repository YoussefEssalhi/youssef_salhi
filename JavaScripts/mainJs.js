document.documentElement.setAttribute('data-theme',localStorage.getItem("typeOftheme"));
var checkbox = document.querySelector('input[name=theme]');
    checkbox.addEventListener('change', function()
    {
        if(this.checked)
        {
            trans();
            document.documentElement.setAttribute('data-theme','light');
            localStorage.setItem("typeOftheme","light");
        }
        else
        {
            trans();
            document.documentElement.setAttribute('data-theme','dark');
            localStorage.setItem("typeOftheme","dark");
        }
    });
    let trans = () => 
    {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => 
        {
            document.documentElement.classList.remove('transition');
        }, 1000)
    };