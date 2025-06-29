 import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

export  function initializeKeycloak(keycloak: KeycloakService): () => Promise<any> {
    return () =>
        keycloak.init({
            config: {
             // url: 'http://localhost:8180/auth',
                
              // url:'http://10.14.14.232:8180/auth/',
                url:'http://10.6.4.62:8180/auth/',
              
              realm: 'Digital-Poste',
              clientId:'ipm-fronte',
            //realm: 'IPM-Front',
             //clientId: 'front-end',
  
            } ,
            initOptions : {
                onLoad:"check-sso",
                checkLoginIframe:false //Verifie l'etat qui a connecté
               // onLoad:"login-required",
            },
          //  enableBearerInterceptor: true,

        }) 
    
}
