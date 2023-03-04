export class AuthService{
  loggedin=false;
  isAuthenticated(){
    const promise=new Promise((resolve, reject) =>{
      setTimeout(() =>{
        resolve(this.loggedin);
      },800);
    }
    );
    return promise;
  }
  login(){
    this.loggedin=true;
  }
  logout(){
    this.loggedin=false;
  }
}
