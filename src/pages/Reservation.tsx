import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, } from '@ionic/react';

const Reservation: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color='tertiary'>
                    <IonTitle>Office Space Reservation</IonTitle>
                        <IonButton routerLink='/Login'>Logout</IonButton>
                        <IonButton routerLink='/Home'>Home</IonButton>
                        <IonButton routerLink='/Reservation'>Reservation</IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                        
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
        );
};

export default Reservation;