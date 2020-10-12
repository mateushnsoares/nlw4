import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../assets/map-marker.svg';

import './styles.css';

const OrphanagesMap: React.FC = () => (
  <div id="page-map">
    <aside>
      <header>
        <img src={mapMarkerImg} alt="Happy" />
        <h2>Escolha um orfanato no mapa</h2>
        <p>Muitas crianças estão esperando a sua visita :)</p>
      </header>

      <footer>
        <strong>Belo Horizonte</strong>
        <span>Minas Gerais</span>
      </footer>
    </aside>

    <Map
      center={[-20.0548906, -43.9874777]}
      zoom={15}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        url={
          `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
        }
      />
    </Map>

    <Link to="/app" className="create-orphanage">
      <FiPlus size={32} color="#fff" />
    </Link>
  </div>
);

export default OrphanagesMap;
