import React, { useState, } from "react";
import { 
    IonPage, IonHeader, IonToolbar, IonTitle, 
    IonContent, IonInput, IonGrid, IonRow, IonCol, 
    IonLabel, IonItem, IonButton, IonAlert,
    } from '@ionic/react';

const Login: React.FC = () => {

const [userName, setUserName] =useState<string>('');
const [password, setPassword] =useState<string>('');
const [ error, setError ] = useState<string>();



        return (
        <React.Fragment>   
            <IonAlert 
            isOpen={!!error}
            message={error} 
            buttons={[{ text: 'Okay', handler: clearError }]} 
            />
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Username</IonLabel>
                                <IonInput onIonChange={(e: any) => setUserName(e.target.value)}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Password</IonLabel>
                                <IonInput type="password" onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton routerLink="/Home" onClick={handleLogin}>Login</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
        </React.Fragment>
        );
    };
};

export default Login;