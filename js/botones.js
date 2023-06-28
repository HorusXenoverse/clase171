AFRAME.registerComponent("button",{
    init: function(){
        var button1 = document.createElement("button")
        button1.innerHTML = "Ordenar"
        button1.setAttribute("id", "order-button")
        button1.setAttribute("class", "btn btn-warning")

        var button2 = document.createElement("button")
        button2.innerHTML = "Calificar"
        button2.setAttribute("id", "raiting-button")
        button2.setAttribute("class", "btn btn-warning")

        var divButtons = document.getElementById("buttons")
        divButtons.appendChild(button1)
        divButtons.appendChild(button2)
    }
})