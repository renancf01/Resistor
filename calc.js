window.onload = () => {

       function getSelectedValue(){
       let select = document.getElementById('resist1');      
       let selectedElementValue = select.options[select.selectedIndex].value;   
       let selectedElementText = select.options[select.selectedIndex].text;
      
       let select2 = document.getElementById('resist2');
       let selectedElement2Value = select2.options[select2.selectedIndex].value; 
       let selectedElementText2 = select2.options[select2.selectedIndex].text;

       let selectMulti = document.getElementById('multi');
       let selectedElementMultiValue = selectMulti.options[selectMulti.selectedIndex].value; 
       let selectedElementTextMulti = selectMulti.options[selectMulti.selectedIndex].text;

       const object = {
            selectedElementValue,
            selectedElement2Value,
            selectedElementText,
            selectedElementText2,
            selectedElementMultiValue,
            selectedElementTextMulti,
            };       

       result(object);
       
         }

    function result(object){
        const selectedObjects = object;
        let saporra = ((10 * object.selectedElementValue) + parseFloat(object.selectedElement2Value))* object.selectedElementMultiValue;
        document.getElementById('results').innerHTML = saporra;
    

        
        
       
    }

   
document.getElementById('calc').addEventListener('click', getSelectedValue)



























}