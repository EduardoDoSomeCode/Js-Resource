interface Strategy {
    login(user: string, password: string): boolean;

}

class LoginContext {

    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;

    }

    setStrategy(strategy: Strategy) {

        this.strategy = strategy;
    }

    login(user: string, password: string): boolean {
        return this.strategy.login(user, password);
    }
}


class LoginDBStrategy implements Strategy {

    login(user: string, password: string): boolean {

        console.log("Creando registro")
        if (user === "admin" && password === "entra") {
            return true
        }
        return false;
    }

}


class LoginService implements Strategy {

    login(user: string, password: string): boolean {

        console.log("Se dirige a un servicio de autenticacion")
        if (user === "admin" && password === "entra") {
            return true
        }
        return false;
    }

}

class LoginWithhGoogle implements Strategy {

    login(user: string, password: string): boolean {

        console.log("Se dirige a un servicio de autenticacion de parte de Google")
        if (user === "admin" && password === "entra") {
            return true
        }
        return false;
    }

}


const auth = new LoginContext(new LoginDBStrategy());
const rest = auth.login("Pedro", "123");
const restSucees = auth.login("admin", "entra");
console.log(rest);
console.log(restSucees);
auth.setStrategy(new LoginService());
auth.login("admin", "entra");
auth.setStrategy(new LoginWithhGoogle());
auth.login("admin", "entra");
