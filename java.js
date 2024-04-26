    var users = [
        { username: 'Operator1', password: '200810' }
      ];

      function login() {
        var username = document.getElementById('loginUsername').value;
        var password = document.getElementById('loginPassword').value;

        
        for (var i = 0; i < users.length; i++) {
          if (username === users[i].username && password === users[i].password) {
            
            window.location.href = "https://dash.infinityfree.com/accounts/if0_35953368"; 
            return;
          }
        }

        alert('Username atau password salah.');
      }
