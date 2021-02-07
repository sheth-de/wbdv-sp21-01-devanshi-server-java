function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;

    this.url = 'https://wbdv-generic-server.herokuapp.com/api/001098769/users';

    var self = this;
    function createUser(user) {
        return fetch(self.url, {
            method: 'POST',
                headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(function (response) {
            return response.json()
        })
    }
    function findAllUsers() {
        // console.log(self.url)
        return fetch(self.url)
        // console.log(promise)
            .then(function (response) {
                // console.log(response)
                return response.json()
            })
    }
    function findUserById(userId) {

    }
    function updateUser(userId, user) {

    }
    function deleteUser(userId) {
        return fetch(`${self.url}/${userId}`,
            {method: 'DELETE'})
    }
}
