from flask import Flask, request

app = Flask(__name__)

# Modelo de usuário
class User:
    def __init__(self, username, password):
        self.username = username
        self.password = password

# Dados de usuários cadastrados (exemplo)
users = [
    User("user1", "password1"),
    User("user2", "password2"),
    User("user3", "password3")
]

# Rota de login
@app.route("/login", methods=["POST"])
def login():
    username = request.form.get("username")
    password = request.form.get("password")

    # Busca no modelo de usuário de acordo com as credenciais recebidas
    for user in users:
        if user.username == username and user.password == password:
            return "true"

    return "false"

if __name__ == "__main__":
    app.run()
