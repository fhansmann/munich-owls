import { InfoWindow } from '@react-google-maps/api';
import { formatRelative, parseISO } from 'date-fns';

export default function AlertWindow({ selected, close }) {
  return (
    <InfoWindow
      position={{ lat: selected.latitude, lng: selected.longitude }}
      onCloseClick={() => close()}
    >
      <div>
        <h2>Owl Alert</h2>
        <p>
          Spotted {formatRelative(parseISO(selected.createdAt), new Date())}
        </p>
        <p>Details: {selected.description}</p>
      </div>
    </InfoWindow>
  );
}
