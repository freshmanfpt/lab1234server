const userName = document.getElementById('userName');
const userPassword = document.getElementById('userPassword');
const userFirstName = document.getElementById('userFirstName');
const userAvatar = document.getElementById('userAvatar');
const userBirthday = document.getElementById('userBirthday');
const userGender = document.getElementById('userGender');
const userDescription = document.getElementById('userDescription');
const userSexual = document.getElementById('userSexual');
const addBtn = document.getElementById('userAdd');

addBtn.addEventListener('click', () => {
    preventDefault();
    axios({
        method: 'POST',
        url: '/save',
        data:{
            userName: userName.nodeValue,
            userPassword: userPassword.nodeValue,
            userFirstName: userFirstName.nodeValue,
            userAvatar: userAvatar.nodeValue,
            userBirthday: userBirthday.nodeValue,
            userGender: userGender.nodeValue,
            userDescription: userDescription.nodeValue,
            userSexual: userSexual.nodeValue,
        }
    })
})