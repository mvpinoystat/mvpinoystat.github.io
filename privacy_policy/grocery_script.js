
const application_name = "The Shopping List";
const developer_name = "BrightDayApps";
// get the elements with the name "app-name"
//

const elements_app_name = document.getElementsByName("app-name");
const elements_developer_name = document.getElementsByName("developer-name");

// Loop and change everythin:

for (let  i = 0; i < elements_app_name.length; i++) {
    elements_app_name[i].textContent = application_name;
}

for (let  i = 0; i < elements_developer_name.length; i++) {
    elements_developer_name[i].textContent = developer_name;
}
