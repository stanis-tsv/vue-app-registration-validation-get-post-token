DEMO LINK - https://stanis-tsv.github.io/vue-app-registration-validation-get-post-token/

What is done:
- using Vuex, Axios, Vuelidate, Sass
- adaptive layout
- fetching data from database, using Axios GET request
- data processing in the form of user cards
- clicking the 'show more' button loading next page of users from database, the button will be disabled when all users are loaded from the database
- registration form with full validation of all fields using 'Vuelidate'
- custom 'file' and 'select' input fields
- while registration, a TOKEN valid for 40 minutes is GETing, which is sent with a POST request for registration
- new user with all data entered in the registration form will dynamically appear first in the list
- after correct validation and registration, a confirmation picture of successful registration is displayed for some time
- also new user GETing by ID and displaying email in the header
