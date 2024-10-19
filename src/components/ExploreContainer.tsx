import React, { useEffect, useState } from 'react';
import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonImg, IonCol, IonRow, IonContent, IonGrid, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../redux/store';
import { RootState } from '../redux/store';
import { fetchProducts } from '../services/api';
import placeholderImage from '../assets/fondo.jpg';
import './ExploreContainer.css';
import { useHistory } from 'react-router';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    name: string;
  };
}

const ExploreContainer: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const wishlist = useSelector((state: RootState) => state.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError('Error al obtener los productos');
      }
    };
    getProducts();
  }, []);

  const toggleWishlist = (product: Product) => {
    if (wishlist.some((item: { id: number }) => item.id === product.id)) {
      dispatch(removeFromWishlist(product));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const getImageUrl = (imageString: string) => {
    try {
      return imageString && imageString.trim() !== '' ? imageString : placeholderImage;
    } catch (e) {
      console.error('Error al obtener la imagen:', e);
      return placeholderImage;
    }
  };

  if (error) {
    return <p>{error}</p>;
  }
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Productos</IonTitle>
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
          {products.map(product => (
            <IonCol key={product.id} size='12' sizeMd='6' sizeLg='3'>
              <IonCard>
                {/* <IonImg src={placeholderImage} alt={product.title} className="product-image" /> */}
                <IonImg src={getImageUrl(product.images[0])} alt={product.title} className="product-image" />
                <IonCardHeader>
                  <IonCardSubtitle>{product.category.name}</IonCardSubtitle>
                  <IonCardTitle>{product.title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p><strong>Precio:</strong> ${product.price / 100}</p>
                  <p>{product.description}</p>
                </IonCardContent>
                <IonButton
                  expand="block"
                  onClick={() => toggleWishlist(product)}
                  color={wishlist.some((item: { id: number }) => item.id === product.id) ? 'danger' : 'primary'}
                >
                  {wishlist.some((item: { id: number }) => item.id === product.id)
                    ? 'Eliminar de deseados'
                    : 'Agregar a deseados'}
                </IonButton>
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </IonContent>
    </IonPage>
  );
};

export default ExploreContainer;
