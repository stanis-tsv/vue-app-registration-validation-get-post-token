DEMO LINK - https://stanis-tsv.github.io/vue-app-registration-validation-get-post-token/

Що зроблено:
- використано Vuex, Axios, Vuelidate, Sass
- адаптивна верстка
- отримання даних із бази даних за допомогою запиту Axios GET
- обробка даних у вигляді карток користувачів
- кнопка «показати більше» завантажує наступну сторінку користувачів з бази даних, кнопка буде вимкнена, коли всі користувачі будуть завантажені з бази даних
- реєстраційна форма з валідацією всіх полів за допомогою «Vuelidate»
- кастомні input поля «file» і «select»
- під час реєстрації отримується токен, дійсний протягом 40 хвилин, який надсилається разом із POST запитом для реєстрації
- новий користувач з усіма даними, введеними в реєстраційну форму, динамічно з'явиться першим у списку
- після успішної валідації та реєстрації деякий час відображається зображення підтвердження успішної реєстрації
- також отримується по id створений користувач і відображається його емейл в хедері

-----

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
