const range=document.querySelector(".range__slider-body"),inputMin=document.querySelector(".range__input--min"),inputMax=document.querySelector(".range__input--max"),inputs=[inputMin,inputMax],rangeSliderInit=()=>{noUiSlider.create(range,{start:[0,900],connect:!0,range:{min:0,max:970},step:1}),range.noUiSlider.on("update",((n,e)=>{inputs[e].value=parseInt(n[e],10)})),inputMin.addEventListener("change",(function(){range.noUiSlider.set([this.value,null])})),inputMax.addEventListener("change",(function(){range.noUiSlider.set([null,this.value])}))};export{rangeSliderInit};