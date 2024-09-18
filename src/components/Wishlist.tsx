import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { IonCard, IonCardHeader, IonCardTitle, IonList, IonItem, IonContent, IonGrid, IonRow, IonCol, IonButton, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import { useHistory } from 'react-router';

const Wishlist: React.FC = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist);
  const history = useHistory();
  if (wishlist.length === 0) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Lista de Deseados</IonTitle>
            <IonButton
            slot="end"
            shape="round"
            color="primary"
            fill="outline"
            onClick={() => history.push('/home')}
          >
            Productos
          </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent className="wishlist-content">
          <p>No tienes productos en la lista de deseados.</p>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista de Deseados</IonTitle>
          <IonButton
            slot="end"
            shape="round"
            color="primary"
            fill="outline"
            onClick={() => history.push('/home')}
          >
            Productos
          </IonButton>
          <IonButton
            slot="end"
            shape="round"
            color="secondary"
            fill="outline"
            onClick={() => history.push('/lista-deseados')}
          >
            Lista de Deseados
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent className="wishlist-content">
        <IonGrid>
          <IonRow>
            <IonCol size='12'>
              <IonList>
                {wishlist.map((product: { id: number; title: string }) => (
                  <IonItem key={product.id}>
                        <IonCardTitle>{product.title}</IonCardTitle>
                  </IonItem>
                ))}
              </IonList>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
    
  );
};

export default Wishlist;