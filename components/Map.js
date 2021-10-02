import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { useState } from "react";
import getCenter from 'geolib/es/getCenter';

function Map({ searchResults }) {
     const [selectedLocation, setSelectedLocation] = useState({});
    
    const coordinates = searchResults.map((result) => ({
        latitude: result.lat,
        longitude: result.long,
    }));
    
    const center = getCenter(coordinates);
    
    const [viewport, setViewport] =  useState({
        width: '100%',
        height: '100%',
        latitude: (center.latitude - .15),
        longitude: (center.longitude),
        zoom: 11
    });

    return (
        <ReactMapGL
            mapStyle='mapbox://styles/swynne/cku6c1h7o3fql17r7h4lz2s4n'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            { searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                        latitude={result.lat}
                        longitude={result.long}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p
                            role="img"
                            onClick={() => setSelectedLocation(result)}
                            className='cursor-pointer text-2xl animate-bounce'
                            aria-label="push-pin"
                        >📌</p>
                    </Marker>
                    {selectedLocation.long === result.long ? (
                        <Popup
                            className="max-w-md"
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}>
                            <h3 className= "font-bold">{result.title}</h3>
                            {result.description}
                        </Popup>
                    ) : (false) }
                </div>
            )) }

        </ReactMapGL>
    );
}

export default Map
