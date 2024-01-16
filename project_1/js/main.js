const milestonesData = JSON.parse(data).data;

// load course milestone data

function loadMilestones() {
    const milestones = document.querySelector('.milestones');
    milestones.innerHTML = `${milestonesData.map(function(milestone) {
        return `<div class="milestone border-b">
            <div class="flex">
                <div class="checkbox"><input type="checkbox" /></div>
                <div onclick="openMilestone(this, ${milestone._id})">
                    <p>
                        ${milestone.name}
                        <span><i class="fas fa-chevron-down"></i></span>
                    </p>
                </div>
            </div>
            <div class="hidden_panel">
                ${milestone.modules.map(function(module) {
                    return `<div class="module border-b">
                        <p>${module.name}</p>
                    </div>`;
                }).join("")}
            </div>
        </div>`;
    }).join("")}`;
}

function openMilestone(milestoneElement, id) {
    const currentPanel = milestoneElement.parentNode.nextElementSibling;
    const shownPanel = document.querySelector(".show");
    const active = document.querySelector(".active");
    if (!currentPanel.classList.contains("show") && shownPanel) {
        shownPanel.classList.remove("show");
    }
    if (!milestoneElement.classList.contains("active") && active) {
        active.classList.remove("active");
    }
    milestoneElement.classList.toggle('active');
    currentPanel.classList.toggle('show');

    showMilestone(id);
}

function showMilestone(id) {
    const milestoneImage = document.querySelector('.milestoneImage');
    const milestoneTitle = document.querySelector('.title');
    const milestoneDetails = document.querySelector('.details');

    milestoneImage.style.opacity = "0";
    milestoneImage.src = milestonesData[id].image;
    milestoneTitle.innerText = milestonesData[id].name;
    milestoneDetails.innerText = milestonesData[id].description;
}
const milestoneImage = document.querySelector('.milestoneImage');
milestoneImage.onload = function() {
  this.style.opacity = "1";
} 

loadMilestones();
