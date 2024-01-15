const milestonsData = JSON.parse(data).data;

//load course milestone data

function loadmilestons(){
    const milestones = document.querySelector('.milestones');
   /*  milestones.innerHTML = milestonsData.;  */
    milestones.innerHTML = `${milestonsData.map(function(milestone){
        return `<div class="milestone border-b">
        <div class="flex">
          <div class="checkbox"><input type="checkbox" /></div>
          <div>
            <p>
              ${milestone.name}
              <span><i class="fas fa-chevron-down"></i></span>
            </p>
          </div>
        </div>
        <div class="hidden_panel">
         ${milestone.modules.map(function(module){
          return `<div class="module border-b">
          <p>${module.name}</p>
        </div>`
         })}
        </div>
      </div>`
    }).join("")}`; 
}
 
loadmilestons();


/* 

 
*/