import { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  CircleMarker,
  useMapEvents,
} from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  coordinates: any;
  // onClose: () => void;
}

const MapModal = ({ open, setOpen, coordinates }: Props) => {
  //   const [state, setstate] = useState(open);
  const [position, setPosition] = useState<any>(null);
  // console.log(coordinates);

  // console.log(open);
  // const LocationMarker = () => {
  //   // const [position, setPosition] = useState<any>();
  //   console.log(position, "hello");
  //   const map = useMapEvents({
  //     click() {
  //       map.locate();
  //     },
  //     locationfound(e) {
  //       setPosition(e.latlng);
  //       map.flyTo(e.latlng, map.getZoom());
  //     },
  //   });

  console.log(position);

  //   return <h1>notting to see</h1>;

  //   // return position === null
  //   //   ? null
  //   //   : (console.log(position),
  //   //     (
  //   //       <Marker
  //   //         position={position}
  //   //         icon={
  //   //           new Icon({
  //   //             iconUrl: markerIconPng,
  //   //             iconSize: [25, 41],
  //   //             iconAnchor: [10, 41],
  //   //             popupAnchor: [2, -40],
  //   //           })
  //   //         }
  //   //       >
  //   //         <Popup>You are here</Popup>
  //   //       </Marker>
  //   //     ));
  // };

  const HandleClickMap = () => {
    const map = useMapEvents({
      click(e) {
        // console.log(e, "hello");

        setPosition(e.latlng);
        map.locate();
      },
      locationfound(e) {
        map.flyTo(e.latlng, map.getZoom());
        console.log(position, "lead");
      },
    });
    return null;
  };

  return (
    <>
      <div className="map">
        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          sx={{
            background: "rgba(255,255,255,0.2)",
            opacity: 0.6,
          }}
        >
          <Box
            sx={{
              width: "60vw",
              height: "60vh",
              background: "white",
              margin: "auto",
              marginTop: "20vh",
            }}
          >
            <div>
              <Box>
                {position === null ? null : (
                  <>
                    <h4>{position.lat}</h4>
                    <h4>{position.lng}</h4>
                  </>
                )}
                <MapContainer
                  style={{ height: "60vh", width: "60vw" }}
                  center={[coordinates.lat, coordinates.lng]}
                  zoom={13}
                  scrollWheelZoom={false}
                  dragging={true}
                >
                  <TileLayer
                    // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {/* <CircleMarker
                 
                    pathOptions={{ color: "red" }}
                    radius={50}
                  /> */}
                  <HandleClickMap />
                  {position === null ? null : (
                    <Marker
                      position={[position.lat, position.lng]}
                      icon={
                        new Icon({
                          iconUrl: markerIconPng,
                          iconSize: [25, 41],
                          iconAnchor: [10, 41],
                          popupAnchor: [2, -40],
                        })
                      }
                      draggable={true}
                    >
                      <Popup>
                        {coordinates.shopName} <br /> location.
                      </Popup>
                    </Marker>
                  )}
                </MapContainer>
              </Box>
            </div>
            <Button
              onClick={() => {
                setOpen(false);
              }}
            >
              Close
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default MapModal;
