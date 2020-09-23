let list_data_toogles = document.querySelectorAll('[data-toggle]');

list_data_toogles.forEach(elem=>{
     elem.addEventListener("click",function(e){
        let values = elem.dataset['toggle'].split(',').map(function(x){return x.trim()});
        let target = elem.dataset['toggle_attribute'] ? elem.dataset['toggle_attribute'] : 'class';
        let target_toggle_element = elem.dataset['toggle_element'] ? elem.dataset['toggle_element'] : false;
        let toggle_closest = elem.dataset['toggle_closest'];
        let elem_change = elem;
        if(typeof(toggle_closest) != 'undefined'){
            elem_change = elem.closest(toggle_closest);
        }
        if(target_toggle_element){
                document.querySelectorAll(target_toggle_element).forEach(elem_change=>{
                    let b_values = values
                    let array_2 = elem_change.getAttribute(target).split(' ').map(function(x){return x.trim()});
                    let  toggle_tmp = get_val_toggle_attributes(b_values,array_2);
                    let tmp_val = get_value(b_values,toggle_tmp);
                    change_values(target,toggle_tmp,b_values,tmp_val,elem,elem_change);
                });
        }else{
            let array_2 = elem.getAttribute(target).split(' ').map(function(x){return x.trim()});
            let  toggle_tmp = get_val_toggle_attributes(values,array_2);
            let tmp_val = get_value(values,toggle_tmp);
            if(change_values(target,toggle_tmp,values,tmp_val,elem,elem_change))
                return
        }
    });//end click
});//end for


function get_val_toggle_attributes(values,array_2){
    //console.log("First Array ",values)
    //console.log("Segundo Array ",array_2)
    var array_first = values;
    var array_second = array_2;
    
    var array_intersection = array_first.filter(function(x) {
    	// checking second array contains the element "x"
    	if(array_second.indexOf(x) != -1)
    		return true;
    	else
    		return false;
    });
    let retorno = (array_intersection.length ) ? array_intersection[0] : '';
    //console.log("retorno ",retorno)
    //console.log("Intercept ",array_intersection);
    return retorno
        
    
    
}

function change_values(target,toggle_tmp,values,tmp_val,elem,elem_change){
    //console.log("elem_change",elem_change)
    //console.log("toggle_tmp --- ",toggle_tmp)
    if(target=='class' && toggle_tmp!=''){
      //  console.log("toggle_tmp")
            elem_change.classList.remove(toggle_tmp)
            if(values.length==1){
                //elem.dataset['toggle_tmp'] = '';
                return true
            }
        }
        if(target=='class' ){
        //    console.log("Target ",target)
            //&& tmp_val!=''
            if(tmp_val!='')
                elem_change.classList.add(tmp_val)
        }else{
           // elem.dataset[target] = tmp_val;    
         //  domEditor({ target : elem, method : 'setAttribute','property':target ,'value': tmp_val })
         elem_change.setAttribute(target, tmp_val);
        }
        return false
}

function get_value(values,val){
    let my_val = values[0];
    if(values.length>1 && val != ''){
        let tmp = values.indexOf(val);
        if((tmp+1)<values.length)
            my_val = values[tmp+1];
    }
    return my_val;
}