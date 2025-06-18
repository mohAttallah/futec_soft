const baseUrl = 'https://retailapi.futec-soft.com/';

const routes = {
    auth: {
        login: 'Profile/v1.0/Login',
    },
    users: {
        getUser: 'Users/v1.0/GetAll',
        usersGroup:"UsersGroup/v1.0/GetAll",
        branches:"Branches/v1.0/GetAll"
    }
    
};

export { baseUrl, routes };
