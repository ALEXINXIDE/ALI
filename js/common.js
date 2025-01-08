function initializeOverlay(){const selectors={overlayContent:"#country-picker-overlay",overlayToggle:'[data-toggle="overlay"]',overlayClose:".overlay__close",bodyOverlayOpen:"body"},overlayToggle=document.querySelectorAll(selectors.overlayToggle),overlayContent=document.querySelector(selectors.overlayContent),overlayClose=document.querySelector(selectors.overlayClose),bodyOverlayOpen=document.querySelector(selectors.bodyOverlayOpen);function hideOverlay(){overlayContent.classList.remove("is-visible"),bodyOverlayOpen.classList.remove("body-overlay-open")}overlayToggle.forEach(function(toggle){toggle.addEventListener("click",function(e){overlayContent.classList.toggle("is-visible"),bodyOverlayOpen.classList.add("body-overlay-open")})}),overlayClose.addEventListener("click",function(e){e.preventDefault(),hideOverlay()}),document.addEventListener("keydown",function(e){e.key==="Escape"&&hideOverlay()})}document.addEventListener("DOMContentLoaded",initializeOverlay),document.addEventListener("DOMContentLoaded",function(){toggleComponents()}),document.addEventListener("section:cart:load",function(){toggleComponents()});function toggleComponents(){document.querySelectorAll(".toggle-components").forEach(function(toggle){toggle.addEventListener("click",function(){const targetId=this.getAttribute("data-target"),componentList=document.getElementById(targetId);componentList.classList.toggle("hidden");const toggleIcon=this.querySelector(".toggle-icon");toggleIcon.textContent=componentList.classList.contains("hidden")?"\u25BC":"\u25B2"})})}
//# sourceMappingURL=/cdn/shop/t/748/assets/common.js.map?v=164495927868797856621735264036
