import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';


const Home: React.FC = () => {
    return (
    <IonPage>
        <IonHeader>
            <IonToolbar color='tertiary'>
                <IonTitle>Home</IonTitle>
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

export default Home;