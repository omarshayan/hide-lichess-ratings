var user_link_elements = document.getElementsByClassName("user-link");

for(i = 0; i < 2; i++){
    let user_link_string = user_link_elements[i].innerText;
    let user_string = user_link_string.substring(0, user_link_string.indexOf("(") - 1);
    user_link_elements[i].innerText = user_string;
}