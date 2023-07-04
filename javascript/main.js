  
let projectsArray = [];
  

const titleH1 = document.querySelector("div.title h1");
const titleH3 = document.querySelector("div.title h3");

const comDate = document.querySelector("div.complition-date p");
const comDateSpan = document.querySelector("div.complition-date span");

const imageProject = document.getElementsByClassName("main-pict")[0];


const mainDescP1 = document.querySelector("div.project-description p:nth-child(1)");
const mainDescP2 = document.querySelector("div.project-description p:nth-child(2)");

const linkSelector = document.querySelectorAll("div.project a");

fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
    .then(response => response.json())
    .then(data => {
        projectsArray = data;

        processData(projectsArray);



        console.log(projectsArray);
    })
    .catch(error => {
        // Handle any errors that occur during the fetch
        console.error('Error:', error);
    });

   
    function processData(data){
        
        data.forEach(element => {
        

            titleH1.textContent = element.name; 
            titleH3.textContent = element.description; 
            comDateSpan.textContent = element.completed_on; 
            
            const newImage = new Image();
            newImage.addEventListener('load', () => {
                // After the image has loaded, set the src attribute
                imageProject.src = newImage.src;
                
            });
            newImage.src = element.image;
            mainDescP1.textContent = element.content;
            mainDescP2.textContent = "";

            
        });
    }


    linkSelector.forEach((linkElement) => {
        linkElement.addEventListener("click", function(event) {
          event.preventDefault();
      
          const projectName = linkElement.parentNode.querySelector("h3").textContent;
          const selectedProject = projectsArray.find(project => project.name === projectName);
      
          if (selectedProject) {
            titleH1.textContent = selectedProject.name;
            titleH3.textContent = selectedProject.description;
            comDateSpan.textContent = selectedProject.completed_on;
            imageProject.src = selectedProject.image;
            mainDescP1.textContent = selectedProject.content;
            mainDescP2.textContent = "";
      
            console.log(selectedProject.name);
          }
        });
      });

/*
   linkSelector.forEach((linkElement, index) => {
        linkElement.addEventListener("click", function(event) {
          event.preventDefault();
      
          const selectedProject = projectsArray[index];
          const projectTitles = document.querySelectorAll("div.project h3");
      
          projectTitles.forEach(titleElement => {
            if (titleElement.innerHTML === selectedProject.name) {
              processData([selectedProject]);
              
              console.log(selectedProject.name);
              console.log(titleElement.textContent);
            }
          });
        });
      });
      
    */
      